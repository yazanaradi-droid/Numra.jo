#!/usr/bin/env node
/* Pre-renders the Arabic text into the static HTML so the page paints in Arabic immediately,
   instead of showing English until script.js has downloaded and run.
   Safe to re-run (idempotent). The runtime translation in script.js stays as it is, so English still works.
   Usage: node tools/prerender-ar.js            (rewrites the *.html pages in the repo root) */
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const src = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const start = src.indexOf('const translations = {') + 'const translations = '.length;
let depth = 0, end = start, inStr = null, esc = false;
for (let i = start; i < src.length; i++) {
  const ch = src[i];
  if (inStr) { if (esc) esc = false; else if (ch === '\\') esc = true; else if (ch === inStr) inStr = null; continue; }
  if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; continue; }
  if (ch === '{') depth++;
  if (ch === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
}
const translations = new Function('return ' + src.slice(start, end))();
const escText = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = s => escText(s).replace(/"/g, '&quot;');
const TITLES = {
  index: 'سوق الأرقام | Souq Al Arqam – لوحات سيارات وأرقام موبايل مميزة في الأردن',
  plates: 'لوحات سيارات مميزة للبيع في الأردن | سوق الأرقام',
  numbers: 'أرقام موبايل مميزة للبيع في الأردن | سوق الأرقام',
  bundles: 'باقات لوحات وأرقام مميزة للبيع | سوق الأرقام',
  packages: 'الباقات المميزة | سوق الأرقام',
  add: 'إضافة إعلان | سوق الأرقام',
  dashboard: 'حسابي | سوق الأرقام',
  admin: 'الإدارة | سوق الأرقام'
};
let totalText = 0, skipped = [];
for (const f of fs.readdirSync(root).filter(n => n.endsWith('.html'))) {
  let h = fs.readFileSync(path.join(root, f), 'utf8'), n = 0;
  // 1) text content: only elements whose current content has no child tags (the script treats them the same way)
  h = h.replace(/(<(\w+)\b[^>]*\sdata-i18n="([^"]+)"[^>]*>)([^<]*)(<\/\2>)/g, (m, open, tag, key, inner, close) => {
    const t = translations[key]; if (!t || typeof t.ar !== 'string') return m;
    n++; return open + escText(t.ar) + close;
  });
  for (const m of h.matchAll(/<(\w+)\b[^>]*\sdata-i18n="([^"]+)"[^>]*>(?=[^<]*<(?!\/\1>))/g)) skipped.push(f + ':' + m[2]);
  // 1b) elements the script fills with HTML (innerHTML); none of them nest another element of the same tag
  h = h.replace(/(<(\w+)\b[^>]*\sdata-i18n-html="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g, (m, open, tag, key, inner, close) => {
    const t = translations[key]; if (!t || typeof t.ar !== 'string') return m;
    n++; return open + t.ar + close;
  });
  // 2) placeholders
  h = h.replace(/<(input|textarea)\b[^>]*\sdata-i18n-placeholder="([^"]+)"[^>]*>/g, (m, tag, key) => {
    const t = translations[key]; if (!t || typeof t.ar !== 'string') return m;
    n++; const val = ' placeholder="' + escAttr(t.ar) + '"';
    return /\splaceholder="[^"]*"/.test(m) ? m.replace(/\splaceholder="[^"]*"/, val) : m.replace(/^<(input|textarea)\b/, '<$1' + val);
  });
  // 3) page language/direction and title
  h = h.replace(/<html lang="(?:en|ar)"(?: dir="(?:ltr|rtl)")?>/, '<html lang="ar" dir="rtl">');
  const page = f.replace(/\.html$/, '');
  if (TITLES[page]) h = h.replace(/<title>[^<]*<\/title>/, '<title>' + TITLES[page] + '</title>');
  fs.writeFileSync(path.join(root, f), h); totalText += n;
}
console.log('prerendered ' + totalText + ' texts/placeholders into Arabic');
if (skipped.length) console.log('left to runtime translation (contain child tags): ' + skipped.join(', '));

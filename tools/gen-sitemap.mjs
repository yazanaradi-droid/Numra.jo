// Regenerates sitemap.xml: the fixed pages + one URL per active (not sold) public listing.
// Read-only: it only calls the public feed with the public (publishable) key, same as the website does.
// If the feed cannot be read, it exits with an error and leaves the existing sitemap.xml untouched.
//
//   node tools/gen-sitemap.mjs                 -> reads the live feed, writes sitemap.xml
//   FEED_FILE=feed.json node tools/gen-sitemap.mjs   -> reads a saved JSON array instead (for testing)
import { readFileSync, writeFileSync } from 'node:fs';

const BASE = 'https://souqalarqam.com';
const SB_URL = process.env.SB_URL || 'https://cjuxikvqdablznqhslpm.supabase.co';
const SB_KEY = process.env.SB_KEY || 'sb_publishable_Y39vuvjU2AfkmJyl0buCRQ_dRmIitly';
const MAX = 5000; // sitemap limit is 50,000; stay far below it
const STATIC = ['/', '/plates.html', '/numbers.html', '/bundles.html'];

async function loadFeed() {
  if (process.env.FEED_FILE) return JSON.parse(readFileSync(process.env.FEED_FILE, 'utf8'));
  const r = await fetch(`${SB_URL}/rest/v1/rpc/xp_listings_feed`, {
    method: 'POST',
    headers: { apikey: SB_KEY, Authorization: 'Bearer ' + SB_KEY, 'Content-Type': 'application/json' },
    body: '{}',
  });
  if (!r.ok) throw new Error('feed request failed: HTTP ' + r.status);
  return r.json();
}

const feed = await loadFeed();
if (!Array.isArray(feed)) throw new Error('feed is not a list; refusing to overwrite sitemap.xml');

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const seen = new Set();
const rows = [];
for (const r of feed) {
  if (!r || !UUID.test(String(r.id || '')) || r.sold) continue;   // skip seed/demo ids, sold ads
  const id = String(r.id).toLowerCase();
  if (seen.has(id)) continue;
  seen.add(id);
  const d = new Date(r.updated_at || r.created_at || r.created || '');
  rows.push({ id, lastmod: isNaN(d) ? '' : d.toISOString().slice(0, 10) });
  if (rows.length >= MAX) break;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
for (const p of STATIC) lines.push(`  <url><loc>${BASE}${p}</loc><changefreq>daily</changefreq></url>`);
for (const r of rows) lines.push(`  <url><loc>${esc(`${BASE}/listing.html?id=${r.id}`)}</loc>${r.lastmod ? `<lastmod>${r.lastmod}</lastmod>` : ''}</url>`);
lines.push('</urlset>', '');
writeFileSync('sitemap.xml', lines.join('\n'));
console.log(`sitemap.xml: ${STATIC.length} fixed pages + ${rows.length} listings`);

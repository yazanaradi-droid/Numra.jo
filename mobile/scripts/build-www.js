// Copies the website (repo root) into mobile/www, which Capacitor packs inside the app.
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..', '..'), out = path.resolve(__dirname, '..', 'www');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
const files = fs.readdirSync(root).filter(f => /\.(html|js|css|webmanifest)$/.test(f) && !['sw.js'].includes(f));
files.forEach(f => fs.copyFileSync(path.join(root, f), path.join(out, f)));
fs.cpSync(path.join(root, 'images'), path.join(out, 'images'), { recursive: true });
console.log('www ready:', files.length, 'files + images');

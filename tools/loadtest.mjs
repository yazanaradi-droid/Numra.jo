// Read-only load test for the Supabase project behind Souq Al Arqam.
// Simulates N visitors opening the site at the same time (ads feed + one ad page + plate templates).
// It only READS: no accounts, no ads, no files are created.
//
//   node tools/loadtest.mjs                       -> uses the URL/key below, steps 50, 200, 500, 1000
//   node tools/loadtest.mjs 300 1000              -> custom steps
//
// Needs Node 18+ (built-in fetch). Run it from your own computer.
const URL_ = process.env.SB_URL || 'https://cjuxikvqdablznqhslpm.supabase.co';
const KEY = process.env.SB_KEY || 'sb_publishable_Y39vuvjU2AfkmJyl0buCRQ_dRmIitly';
const steps = process.argv.slice(2).map(Number).filter(Boolean);
if (!steps.length) steps.push(50, 200, 500, 1000);

const H = { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json' };
const rpc = (name, body = {}) => fetch(`${URL_}/rest/v1/rpc/${name}`, { method: 'POST', headers: H, body: JSON.stringify(body) });
const get = (path) => fetch(`${URL_}/rest/v1/${path}`, { headers: H });

async function timed(fn) {
  const t = performance.now();
  try {
    const r = await fn();
    const ok = r.ok;
    await r.arrayBuffer();
    return { ms: performance.now() - t, ok, status: r.status };
  } catch (e) { return { ms: performance.now() - t, ok: false, status: 0 }; }
}
const pct = (a, p) => a.length ? a[Math.min(a.length - 1, Math.floor(a.length * p))] : 0;

// one simulated visitor = what a real page load does
async function visitor(adId) {
  const out = [];
  out.push(await timed(() => rpc('xp_listings_feed')));
  out.push(await timed(() => get('xp_plate_templates?select=id,config,revision&active=eq.true')));
  if (adId) out.push(await timed(() => rpc('xp_listing_detail', { lid: adId })));
  return out;
}

const feedProbe = await (await rpc('xp_listings_feed')).json().catch(() => []);
const adId = Array.isArray(feedProbe) && feedProbe[0] ? feedProbe[0].id : null;
console.log(`target ${URL_} | ads in feed: ${Array.isArray(feedProbe) ? feedProbe.length : '?'}${adId ? '' : ' (no ad page test: the feed is empty)'}\n`);

for (const n of steps) {
  const t0 = performance.now();
  const results = (await Promise.all(Array.from({ length: n }, () => visitor(adId)))).flat();
  const secs = (performance.now() - t0) / 1000;
  const ms = results.map((r) => r.ms).sort((a, b) => a - b);
  const bad = results.filter((r) => !r.ok);
  const codes = {};
  bad.forEach((r) => (codes[r.status] = (codes[r.status] || 0) + 1));
  console.log(`${String(n).padStart(5)} visitors at once | ${results.length} requests in ${secs.toFixed(1)}s | median ${pct(ms, .5).toFixed(0)}ms | p95 ${pct(ms, .95).toFixed(0)}ms | max ${ms[ms.length - 1].toFixed(0)}ms | failed ${bad.length}${bad.length ? ' ' + JSON.stringify(codes) : ''}`);
  await new Promise((r) => setTimeout(r, 4000)); // let the database breathe between steps
}
console.log('\nRead it like this: median under ~400ms and 0 failed = fine. p95 over ~2s or any failed = raise the compute size (Pro) and run again.');

// Step 1 of an in-app purchase: the signed-in owner says which ad and plan. Returns the token to
// pass to Apple as appAccountToken.
import { admin, cors, currentUser, json, PRODUCTS } from '../_shared/common.ts';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  const uid = await currentUser(req);
  if (!uid) return json({ error: 'auth' }, 401);
  let b: any; try { b = await req.json(); } catch { return json({ error: 'bad' }, 400); }
  const p = PRODUCTS[String(b.plan)];
  if (!p || typeof b.listing_id !== 'string') return json({ error: 'bad' }, 400);
  const db = admin();
  const { data: l } = await db.from('xp_listings').select('id,user_id').eq('id', b.listing_id).maybeSingle();
  if (!l || l.user_id !== uid) return json({ error: 'not_owner' }, 403);
  const { data, error } = await db.from('xp_iap_intents').insert({ user_id: uid, listing_id: l.id, plan: p.plan }).select('id').single();
  if (error) return json({ error: 'db' }, 500);
  return json({ token: data.id, product: p.product });
});

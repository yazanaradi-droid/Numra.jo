// Step 2: after Apple confirms the purchase on the phone, the app sends the transaction id here.
// We ask Apple for the transaction ourselves, check it, record the payment and feature the ad.
import { admin, cors, currentUser, json, PRODUCTS } from '../_shared/common.ts';
import { BUNDLE_ID, getTransaction } from '../_shared/apple.ts';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  const uid = await currentUser(req);
  if (!uid) return json({ error: 'auth' }, 401);
  let b: any; try { b = await req.json(); } catch { return json({ error: 'bad' }, 400); }
  const txId = String(b.transaction_id || ''), intentId = String(b.intent || '');
  const db = admin();

  const { data: it } = await db.from('xp_iap_intents').select('*').eq('id', intentId).maybeSingle();
  if (!it || it.user_id !== uid) return json({ error: 'intent' }, 403);
  const prod = PRODUCTS[it.plan];

  let t: any;
  try { t = await getTransaction(txId); } catch (e) { console.error(e); return json({ error: 'apple' }, 502); }
  if (!t) return json({ error: 'not_found' }, 404);
  if (t.bundleId !== BUNDLE_ID || t.productId !== prod.product || String(t.transactionId) !== txId) return json({ error: 'mismatch' }, 400);
  if (String(t.appAccountToken || '').toLowerCase() !== it.id.toLowerCase()) return json({ error: 'token' }, 400);
  if (t.revocationDate) return json({ error: 'revoked' }, 409);

  const row = {
    user_id: uid, listing_id: it.listing_id, channel: 'apple', product: prod.product, plan: prod.plan,
    amount: typeof t.price === 'number' ? t.price / 1000 : null, currency: t.currency || null,
    external_id: txId, status: 'paid', raw: t,
  };
  const ins = await db.from('xp_payments').insert(row).select('id').maybeSingle();
  let payId = ins.data?.id as string | undefined;
  if (!payId) {   // already recorded (retry): reuse it, but only for the same user
    const { data: ex } = await db.from('xp_payments').select('id,user_id').eq('channel', 'apple').eq('external_id', txId).maybeSingle();
    if (!ex || ex.user_id !== uid) return json({ error: 'duplicate' }, 409);
    payId = ex.id;
  }
  const { error } = await db.rpc('xp_fulfill_payment', { p_payment: payId });
  if (error) { console.error(error); return json({ error: 'fulfill' }, 500); }
  return json({ ok: true });
});

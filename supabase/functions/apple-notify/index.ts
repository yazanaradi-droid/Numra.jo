// Apple "App Store Server Notifications V2" endpoint (set in App Store Connect, no JWT check).
// A notification is only a hint: we ask Apple for the transaction and act on Apple's answer.
import { admin, json } from '../_shared/common.ts';
import { decodeJws, getTransaction } from '../_shared/apple.ts';

Deno.serve(async (req) => {
  try {
    const { signedPayload } = await req.json();
    const n = decodeJws(String(signedPayload));
    const tInfo = n?.data?.signedTransactionInfo ? decodeJws(n.data.signedTransactionInfo) : null;
    if (!tInfo?.transactionId) return json({ ok: true });
    const txId = String(tInfo.transactionId);
    const db = admin();
    const { data: pay } = await db.from('xp_payments').select('id,status').eq('channel', 'apple').eq('external_id', txId).maybeSingle();
    if (!pay || pay.status === 'refunded') return json({ ok: true });
    const t = await getTransaction(txId);
    if (t?.revocationDate) await db.rpc('xp_refund_payment', { p_payment: pay.id });
    return json({ ok: true });
  } catch (e) { console.error(e); return json({ error: 'bad' }, 400); }
});

// Helpers for the Apple App Store Server API (verifying in-app purchases from the server).
const b64u = (b: ArrayBuffer | Uint8Array) =>
  btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const b64uText = (s: string) => b64u(new TextEncoder().encode(s));

export const BUNDLE_ID = Deno.env.get('APPLE_BUNDLE_ID') || 'com.souqalarqam.app';

async function signJwt(): Promise<string> {
  const keyId = Deno.env.get('APPLE_IAP_KEY_ID')!;
  const issuer = Deno.env.get('APPLE_IAP_ISSUER_ID')!;
  const pem = (Deno.env.get('APPLE_IAP_PRIVATE_KEY') || '').replace(/\\n/g, '\n');
  if (!keyId || !issuer || !pem) throw new Error('apple credentials missing');
  const der = Uint8Array.from(atob(pem.replace(/-----[^-]+-----/g, '').replace(/\s+/g, '')), c => c.charCodeAt(0));
  const key = await crypto.subtle.importKey('pkcs8', der, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const now = Math.floor(Date.now() / 1000);
  const head = b64uText(JSON.stringify({ alg: 'ES256', kid: keyId, typ: 'JWT' }));
  const body = b64uText(JSON.stringify({ iss: issuer, iat: now, exp: now + 1200, aud: 'appstoreconnect-v1', bid: BUNDLE_ID }));
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, new TextEncoder().encode(head + '.' + body));
  return head + '.' + body + '.' + b64u(sig);   // WebCrypto already returns r||s, which is what JWT needs
}

export function decodeJws(jws: string): any {
  const p = jws.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(p), c => c.charCodeAt(0))));
}

// Asks Apple for a transaction (production first, then sandbox for TestFlight / App Review).
// What Apple answers over TLS to our own key is the source of truth; nothing from the phone is trusted.
export async function getTransaction(transactionId: string): Promise<any | null> {
  if (!/^\d{5,20}$/.test(transactionId)) return null;
  const jwt = await signJwt();
  for (const host of ['api.storekit.itunes.apple.com', 'api.storekit-sandbox.itunes.apple.com']) {
    const r = await fetch(`https://${host}/inApps/v1/transactions/${transactionId}`, { headers: { Authorization: 'Bearer ' + jwt } });
    if (r.status === 404) continue;
    if (!r.ok) throw new Error('apple ' + r.status);
    const j = await r.json();
    return j.signedTransactionInfo ? decodeJws(j.signedTransactionInfo) : null;
  }
  return null;
}

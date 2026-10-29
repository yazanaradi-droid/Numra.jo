# x plate.jo — Website Package

A static, front-end-only prototype for a Jordanian license plate & mobile number marketplace.

## Structure

```
index.html      — Homepage (category names only, no listing data)
plates.html     — Dedicated License Plates listing page
numbers.html    — Dedicated Mobile Numbers listing page
style.css       — All shared styling
script.js       — All shared logic (translations, modals, listings, forms)
images/
  favicon.svg   — Brand mark used as the site favicon
```

## How to run it

No build step or server required — just keep all files in this same folder
and open `index.html` in a browser. All internal links are relative, so the
folder must stay together (don't rename or move individual files without
updating the references in the HTML).

## What this is

- A static prototype: no backend, no database, no real accounts or payments.
- Data (sample + anything you submit through the upload forms) lives only in
  browser memory for the current page — it resets on refresh.
- Fully bilingual: English and Arabic, with a language toggle in the header
  that also flips the layout to right-to-left.

## Known limitations

- The wishlist heart, theme toggle, and mobile hamburger menu icons in the
  header are decorative only.
- Language choice is passed between pages via a `?lang=ar` URL parameter,
  not persisted storage — it survives normal in-site navigation but resets
  if a URL is opened directly.

## Accounts (demo)
Register: username, first name, last name, phone, password. Login: username + password. Usernames are unique (case-insensitive). Accounts are stored in the browser (localStorage) with salted SHA-256 password hashes. This is a front-end demo only; a real backend is needed for production.

## Database (Supabase)
Accounts and listings are stored in Supabase. One-time setup:
1. Supabase -> SQL Editor -> paste and run `supabase-setup.sql`.
2. Authentication -> Providers -> Email -> turn OFF "Confirm email".
Usernames map to an internal email (`username@users.xplate.jo`), so visitors never type an email.

## Admin panel, security & anti-spam

1. Run `supabase-admin-security.sql` once in Supabase > SQL Editor.
2. Make yourself admin (replace the username):
   `insert into public.xp_admins (user_id) select id from public.xp_profiles where lower(username)=lower('YOUR_USERNAME') on conflict do nothing;`
3. Log in on the site → user menu → **Admin panel** (`admin.html`). Review/hide/delete ads, activate or reject featured requests, ban/unban users, change limits.

What it enforces (server side, in the database):
- Nobody can edit prices / featured status / hidden flag from the browser; only through controlled functions.
- Banned users cannot post; their ads are hidden; login is blocked.
- Daily ad limit + burst limit per user, promo-code brute-force limit, report auto-hide (default 5 reports).
- Seller phone only for logged-in visitors (toggle in Settings), max 40 phone views/hour per user.
- Honeypot + minimum-fill-time on registration. Optional Cloudflare Turnstile: put the site key in `TURNSTILE_SITE_KEY` (script.js) and enable CAPTCHA in Supabase > Authentication > Attack Protection.
- Also in Supabase > Authentication: turn off "Confirm email", keep Rate Limits on, set minimum password length 8.

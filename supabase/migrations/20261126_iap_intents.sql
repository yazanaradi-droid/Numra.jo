-- One row per "I am about to buy this plan for this ad in the app".
-- Its id is sent to Apple as appAccountToken, so a store transaction can only ever be tied to
-- the user + ad that were recorded here. Written and read only by edge functions (service role).
create table if not exists public.xp_iap_intents (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  listing_id uuid not null references public.xp_listings(id) on delete cascade,
  plan       text not null check (plan in ('2w','1m')),
  created_at timestamptz not null default now()
);
create index if not exists xp_iap_intents_user_idx on public.xp_iap_intents (user_id, created_at desc);
alter table public.xp_iap_intents enable row level security;   -- no policies: browser/app cannot touch it
revoke all on public.xp_iap_intents from anon, authenticated;

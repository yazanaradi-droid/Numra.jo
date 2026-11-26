-- Account deletion must always work. Payment records are kept for accounting and refunds,
-- but are detached from the user (anonymised) when the account is deleted.
alter table public.xp_payments alter column user_id drop not null;
alter table public.xp_payments drop constraint if exists xp_payments_user_id_fkey;
alter table public.xp_payments
  add constraint xp_payments_user_id_fkey foreign key (user_id) references auth.users(id) on delete set null;

-- ========== Featured ads: run once in Supabase > SQL Editor ==========
alter table public.xp_listings add column if not exists featured_plan   text;         -- '2w' | '1m' | 'forever'
alter table public.xp_listings add column if not exists featured_status text not null default 'none';  -- none | pending | active
alter table public.xp_listings add column if not exists featured_until  timestamptz;

-- Users can only REQUEST a featured ad. It always starts as 'pending'; only you (SQL editor) can activate it.
create or replace function public.xp_listings_featured_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.featured_plan is not null and new.featured_plan in ('2w','1m','forever') then
    new.featured_status := 'pending';
  else
    new.featured_plan := null; new.featured_status := 'none';
  end if;
  new.featured_until := null;
  return new;
end $$;
drop trigger if exists xp_listings_featured_guard on public.xp_listings;
create trigger xp_listings_featured_guard before insert on public.xp_listings
  for each row execute function public.xp_listings_featured_guard();

-- feed now returns a "featured" flag and shows featured ads first
drop function if exists public.xp_listings_feed();
create function public.xp_listings_feed()
returns table (id uuid, type text, code text, number text, value text, price numeric, created_at timestamptz, phone_masked text, featured boolean)
language sql security definer set search_path = public stable as $$
  select l.id, l.type, l.code, l.number, l.value, l.price, l.created_at,
         case when length(x.ph) > 3 then left(x.ph, length(x.ph) - 3) || 'xxx' else x.ph end,
         (l.featured_status = 'active' and (l.featured_until is null or l.featured_until > now())) as featured
  from public.xp_listings l
  join public.xp_profiles p on p.id = l.user_id
  cross join lateral (select regexp_replace(p.phone, '[\s-]', '', 'g') as ph) x
  order by (l.featured_status = 'active' and (l.featured_until is null or l.featured_until > now())) desc, l.created_at desc
  limit 500;
$$;
revoke all on function public.xp_listings_feed() from public;
grant execute on function public.xp_listings_feed() to anon, authenticated;

-- ===== HOW TO ACTIVATE a paid featured ad (after you receive the CliQ transfer) =====
-- 2 weeks:  update public.xp_listings set featured_status='active', featured_until = now() + interval '14 days' where id = 'LISTING-ID';
-- 1 month:  update public.xp_listings set featured_status='active', featured_until = now() + interval '1 month' where id = 'LISTING-ID';
-- forever:  update public.xp_listings set featured_status='active', featured_until = null where id = 'LISTING-ID';
-- See pending requests:  select id, type, code, number, value, price, featured_plan, created_at from public.xp_listings where featured_status='pending';

-- ========== Upgrade / request featured from an existing ad (owner only) ==========
alter table public.xp_listings add column if not exists featured_request text;   -- plan the owner asked for (waiting for payment)

-- feed: featured ads first, the earliest-listed featured ad first; the rest newest first
drop function if exists public.xp_listings_feed();
create function public.xp_listings_feed()
returns table (id uuid, type text, code text, number text, value text, price numeric, created_at timestamptz, phone_masked text, featured boolean)
language sql security definer set search_path = public stable as $$
  select * from (
    select l.id, l.type, l.code, l.number, l.value, l.price, l.created_at,
           case when length(x.ph) > 3 then left(x.ph, length(x.ph) - 3) || 'xxx' else x.ph end as phone_masked,
           (l.featured_status = 'active' and (l.featured_until is null or l.featured_until > now())) as featured
    from public.xp_listings l
    join public.xp_profiles p on p.id = l.user_id
    cross join lateral (select regexp_replace(p.phone, '[\s-]', '', 'g') as ph) x
  ) t
  order by t.featured desc, case when t.featured then t.created_at end asc, t.created_at desc
  limit 500;
$$;
revoke all on function public.xp_listings_feed() from public;
grant execute on function public.xp_listings_feed() to anon, authenticated;

create or replace function public.xp_request_featured(lid uuid, plan text) returns void
language plpgsql security definer set search_path = public as $$
declare r public.xp_listings;
begin
  if plan not in ('2w','1m','forever') then raise exception 'bad plan'; end if;
  select * into r from public.xp_listings where id = lid and user_id = auth.uid();
  if not found then raise exception 'not your listing'; end if;
  if r.featured_status = 'active' and (r.featured_until is null or r.featured_until > now()) then
    update public.xp_listings set featured_request = plan where id = lid;           -- upgrade request, ad stays featured
  else
    update public.xp_listings set featured_plan = plan, featured_status = 'pending', featured_request = null where id = lid;
  end if;
end $$;
revoke all on function public.xp_request_featured(uuid, text) from public;
grant execute on function public.xp_request_featured(uuid, text) to authenticated;

-- ===== Activating an UPGRADE after payment (replace the interval as needed) =====
-- update public.xp_listings set featured_plan = featured_request, featured_request = null, featured_status='active', featured_until = null where id = 'LISTING-ID';  -- forever
-- See requests:  select id, type, code, number, value, featured_plan, featured_request, featured_status from public.xp_listings where featured_status='pending' or featured_request is not null;

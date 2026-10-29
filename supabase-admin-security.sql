-- =====================================================================
--  x plate.jo  |  Admin panel + security + anti-spam
--  Run ONCE in Supabase > SQL Editor (safe to re-run).
--  Run it AFTER all the earlier supabase-*.sql files.
--  At the very bottom: replace YOUR_USERNAME with your site username to become admin.
-- =====================================================================

-- ---------- 1) tables ----------
create table if not exists public.xp_settings (key text primary key, value text not null);
insert into public.xp_settings (key, value) values
  ('phone_requires_login', 'true'),   -- seller phone is shown only to logged-in visitors
  ('max_ads_per_day',      '20'),     -- max new ads per user per 24h
  ('auto_hide_reports',    '5')       -- ad is hidden automatically after N different reporters
on conflict (key) do nothing;

create table if not exists public.xp_admins (user_id uuid primary key references auth.users(id) on delete cascade);

create table if not exists public.xp_reports (
  id bigserial primary key,
  listing_id uuid not null references public.xp_listings(id) on delete cascade,
  reporter uuid not null default auth.uid(),
  reason text,
  created_at timestamptz not null default now(),
  unique (listing_id, reporter)
);

create table if not exists public.xp_rate (
  id bigserial primary key,
  who text not null,
  key text not null,
  at timestamptz not null default now()
);
create index if not exists xp_rate_idx on public.xp_rate (who, key, at desc);

alter table public.xp_profiles add column if not exists banned boolean not null default false;
alter table public.xp_profiles add column if not exists ban_reason text;
alter table public.xp_profiles add column if not exists banned_at timestamptz;
alter table public.xp_listings add column if not exists hidden boolean not null default false;
alter table public.xp_listings add column if not exists hidden_reason text;
alter table public.xp_listings add column if not exists hidden_by text;   -- 'admin' | 'reports' | 'ban'

-- internal tables: nobody reads/writes them directly from the website
alter table public.xp_settings enable row level security;
alter table public.xp_admins   enable row level security;
alter table public.xp_reports  enable row level security;
alter table public.xp_rate     enable row level security;
revoke all on public.xp_settings, public.xp_admins, public.xp_reports, public.xp_rate from anon, authenticated;
revoke all on sequence public.xp_reports_id_seq, public.xp_rate_id_seq from anon, authenticated;

-- ---------- 2) helpers ----------
create or replace function public.xp_is_admin() returns boolean
language sql security definer set search_path = public stable as $$
  select exists (select 1 from public.xp_admins where user_id = auth.uid());
$$;
revoke all on function public.xp_is_admin() from public;
grant execute on function public.xp_is_admin() to anon, authenticated;

create or replace function public.xp_setting(k text) returns text
language sql security definer set search_path = public stable as $$
  select value from public.xp_settings where key = k;
$$;
revoke all on function public.xp_setting(text) from public;

-- rate limit: records a hit and raises 'rate_limited' if more than p_max hits within p_secs
create or replace function public.xp_hit(p_key text, p_max int, p_secs int) returns void
language plpgsql security definer set search_path = public as $$
declare w text := coalesce(auth.uid()::text, 'anon'); n int;
begin
  delete from public.xp_rate where at < now() - interval '2 days';
  select count(*) into n from public.xp_rate where who = w and key = p_key and at > now() - make_interval(secs => p_secs);
  if n >= p_max then raise exception 'rate_limited'; end if;
  insert into public.xp_rate (who, key) values (w, p_key);
end $$;
revoke all on function public.xp_hit(text,int,int) from public;

-- ---------- 3) lock down direct table access ----------
-- nobody can UPDATE rows from the website (price / featured / hidden can only change through the controlled functions)
revoke update, truncate, references, trigger on public.xp_listings from anon, authenticated;
revoke insert, update, delete, truncate on public.xp_profiles from anon, authenticated;
revoke update on public.xp_favorites from anon, authenticated;

-- inserting an ad directly: only these columns may be set by the user
revoke insert on public.xp_listings from anon, authenticated;
grant insert (type, code, number, value, price, featured_plan) on public.xp_listings to authenticated;

-- guests can read only the public columns (no user_id, no featured/hidden internals)
revoke select on public.xp_listings from anon;
grant select (id, type, code, number, value, price, created_at) on public.xp_listings to anon;

-- RLS policies on listings (hidden ads are visible only to their owner)
do $$ declare p record; begin
  for p in select policyname from pg_policies where schemaname='public' and tablename='xp_listings' loop
    execute format('drop policy %I on public.xp_listings', p.policyname);
  end loop;
end $$;
alter table public.xp_listings enable row level security;
create policy "xp_listings: read visible" on public.xp_listings for select to anon, authenticated
  using (hidden = false or user_id = auth.uid());
create policy "xp_listings: insert own" on public.xp_listings for insert to authenticated
  with check (user_id = auth.uid() and not exists (select 1 from public.xp_profiles b where b.id = auth.uid() and b.banned));
create policy "xp_listings: delete own" on public.xp_listings for delete to authenticated
  using (user_id = auth.uid());

-- ---------- 4) insert guard: banned users, daily limit, burst limit, featured status ----------
create or replace function public.xp_listings_featured_guard() returns trigger
language plpgsql security definer set search_path = public as $$
declare lim int; n int;
begin
  if auth.uid() is not null then
    if exists (select 1 from public.xp_profiles where id = auth.uid() and banned) then raise exception 'banned'; end if;
    lim := coalesce(nullif(public.xp_setting('max_ads_per_day'), '')::int, 20);
    select count(*) into n from public.xp_listings where user_id = auth.uid() and created_at > now() - interval '24 hours';
    if n >= lim then raise exception 'rate_limited'; end if;
    perform public.xp_hit('ad_burst', 6, 60);
  end if;
  new.hidden := false; new.hidden_reason := null; new.hidden_by := null;
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

-- basic sanity on price (no negative / absurd prices)
alter table public.xp_listings drop constraint if exists xp_listings_price_sane;
alter table public.xp_listings add constraint xp_listings_price_sane check (price is null or (price >= 0 and price <= 100000000)) not valid;

-- ---------- 5) promo-code brute-force protection ----------
create or replace function public.xp_apply_promo(lid uuid, plan text, p_code text) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if p_code is null or p_code = '' or plan not in ('2w','1m','forever') then return false; end if;
  if not exists (select 1 from public.xp_promo_codes where code = upper(trim(p_code)) and active) then
    perform public.xp_hit('promo_fail', 8, 3600);   -- 8 wrong codes per hour, then blocked
    return false;
  end if;
  update public.xp_listings set featured_plan = plan, featured_status = 'active', featured_request = null,
         featured_until = case plan when '2w' then now() + interval '14 days' when '1m' then now() + interval '1 month' else null end
   where id = lid and user_id = auth.uid();
  return found;
end $$;
revoke all on function public.xp_apply_promo(uuid, text, text) from public;

-- publish / request-featured: banned users blocked
create or replace function public.xp_publish_listing(p_type text, p_code text, p_number text, p_value text, p_price numeric, p_plan text default null, p_promo text default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare r public.xp_listings; updated boolean := false; promo boolean := false;
begin
  if auth.uid() is null then raise exception 'login required'; end if;
  if exists (select 1 from public.xp_profiles where id = auth.uid() and banned) then raise exception 'banned'; end if;
  if p_type not in ('plate','number') then raise exception 'bad type'; end if;
  if p_price is not null and (p_price < 0 or p_price > 100000000) then raise exception 'bad price'; end if;
  if p_type = 'plate' then
    select * into r from public.xp_listings where type='plate' and code = p_code and number = p_number;
  else
    select * into r from public.xp_listings where type='number' and regexp_replace(value,'\D','','g') = regexp_replace(p_value,'\D','','g');
  end if;
  if found then
    if r.user_id <> auth.uid() then raise exception 'already_listed'; end if;
    update public.xp_listings set price = coalesce(p_price, price) where id = r.id returning * into r;
    updated := true;
    if p_plan in ('2w','1m','forever') and not (r.featured_status = 'active' and (r.featured_until is null or r.featured_until > now())) then
      update public.xp_listings set featured_plan = p_plan, featured_status = 'pending' where id = r.id returning * into r;
    end if;
  else
    insert into public.xp_listings (type, code, number, value, price, featured_plan)
      values (p_type, case when p_type='plate' then p_code end, case when p_type='plate' then p_number end,
              case when p_type='number' then p_value end, p_price, p_plan)
      returning * into r;
  end if;
  if p_plan is not null then promo := public.xp_apply_promo(r.id, p_plan, p_promo); end if;
  if promo then select * into r from public.xp_listings where id = r.id; end if;
  return to_jsonb(r) || jsonb_build_object('_updated', updated, '_promo', promo);
end $$;
revoke all on function public.xp_publish_listing(text,text,text,text,numeric,text,text) from public;
grant execute on function public.xp_publish_listing(text,text,text,text,numeric,text,text) to authenticated;

-- ---------- 6) public feed + detail (hidden ads and banned sellers excluded) ----------
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
  where l.hidden = false and p.banned = false
  order by (l.featured_status = 'active' and (l.featured_until is null or l.featured_until > now())) desc, l.created_at desc
  limit 500;
$$;
revoke all on function public.xp_listings_feed() from public;
grant execute on function public.xp_listings_feed() to anon, authenticated;

drop function if exists public.xp_listing_detail(uuid);
create function public.xp_listing_detail(lid uuid)
returns table (id uuid, type text, code text, number text, value text, price numeric, created_at timestamptz,
               username text, first_name text, last_name text, phone text, phone_locked text)
language plpgsql security definer set search_path = public as $$
declare r record; lock_ text := null; ph text;
begin
  select l.*, p.username as p_user, p.first_name as p_first, p.last_name as p_last, p.phone as p_phone
    into r
    from public.xp_listings l join public.xp_profiles p on p.id = l.user_id
   where l.id = lid and p.banned = false and (l.hidden = false or l.user_id = auth.uid() or public.xp_is_admin());
  if not found then return; end if;
  ph := r.p_phone;
  if r.user_id = auth.uid() or public.xp_is_admin() then
    null;                                            -- owner / admin: always allowed
  elsif coalesce(public.xp_setting('phone_requires_login'), 'true') = 'true' and auth.uid() is null then
    ph := null; lock_ := 'login';
  elsif auth.uid() is not null then
    begin
      perform public.xp_hit('reveal', 40, 3600);     -- max 40 phone reveals per hour per user (anti-scraping)
    exception when others then
      ph := null; lock_ := 'limit';
    end;
  end if;
  return query select r.id, r.type, r.code, r.number, r.value, r.price, r.created_at,
                      r.p_user, r.p_first, r.p_last, ph, lock_;
end $$;
revoke all on function public.xp_listing_detail(uuid) from public;
grant execute on function public.xp_listing_detail(uuid) to anon, authenticated;


-- ---------- 7) reports ----------
create or replace function public.xp_report_listing(lid uuid, p_reason text default null) returns void
language plpgsql security definer set search_path = public as $$
declare n int; thr int;
begin
  if auth.uid() is null then raise exception 'login required'; end if;
  if exists (select 1 from public.xp_profiles where id = auth.uid() and banned) then raise exception 'banned'; end if;
  perform public.xp_hit('report', 10, 3600);
  if not exists (select 1 from public.xp_listings where id = lid and user_id <> auth.uid()) then raise exception 'bad listing'; end if;
  insert into public.xp_reports (listing_id, reason) values (lid, left(coalesce(p_reason,''), 300))
    on conflict (listing_id, reporter) do nothing;
  select count(*) into n from public.xp_reports where listing_id = lid;
  thr := coalesce(nullif(public.xp_setting('auto_hide_reports'), '')::int, 5);
  if n >= thr then
    update public.xp_listings set hidden = true, hidden_by = 'reports', hidden_reason = 'auto: ' || n || ' reports'
     where id = lid and hidden = false;
  end if;
end $$;
revoke all on function public.xp_report_listing(uuid, text) from public;
grant execute on function public.xp_report_listing(uuid, text) to authenticated;

-- ---------- 8) admin functions (all check xp_is_admin) ----------
create or replace function public.xp_admin_check() returns void
language plpgsql security definer set search_path = public as $$
begin if not public.xp_is_admin() then raise exception 'not_admin'; end if; end $$;
revoke all on function public.xp_admin_check() from public;

drop function if exists public.xp_admin_listings(text);
create function public.xp_admin_listings(p_filter text default 'all')
returns table (id uuid, type text, code text, number text, value text, price numeric, created_at timestamptz,
               hidden boolean, hidden_reason text, hidden_by text, featured_plan text, featured_status text, featured_until timestamptz,
               featured_request text, reports int, user_id uuid, username text, phone text, banned boolean)
language plpgsql security definer set search_path = public stable as $$
begin
  perform public.xp_admin_check();
  return query
  select l.id, l.type, l.code, l.number, l.value, l.price, l.created_at, l.hidden, l.hidden_reason, l.hidden_by,
         l.featured_plan, l.featured_status, l.featured_until, l.featured_request,
         (select count(*)::int from public.xp_reports r where r.listing_id = l.id),
         l.user_id, p.username, p.phone, p.banned
    from public.xp_listings l join public.xp_profiles p on p.id = l.user_id
   where case p_filter
           when 'hidden'   then l.hidden
           when 'reported' then exists (select 1 from public.xp_reports r where r.listing_id = l.id)
           when 'pending'  then l.featured_status = 'pending' or l.featured_request is not null
           when 'featured' then l.featured_status = 'active'
           else true end
   order by l.created_at desc
   limit 500;
end $$;
revoke all on function public.xp_admin_listings(text) from public;
grant execute on function public.xp_admin_listings(text) to authenticated;

create or replace function public.xp_admin_set_hidden(lid uuid, p_hidden boolean, p_reason text default null) returns void
language plpgsql security definer set search_path = public as $$
begin
  perform public.xp_admin_check();
  update public.xp_listings set hidden = p_hidden,
         hidden_by = case when p_hidden then 'admin' end,
         hidden_reason = case when p_hidden then left(p_reason, 200) end
   where id = lid;
  if not p_hidden then delete from public.xp_reports where listing_id = lid; end if;
end $$;
revoke all on function public.xp_admin_set_hidden(uuid, boolean, text) from public;
grant execute on function public.xp_admin_set_hidden(uuid, boolean, text) to authenticated;

create or replace function public.xp_admin_delete_listing(lid uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  perform public.xp_admin_check();
  delete from public.xp_listings where id = lid;
end $$;
revoke all on function public.xp_admin_delete_listing(uuid) from public;
grant execute on function public.xp_admin_delete_listing(uuid) to authenticated;

-- action: 'activate' (uses requested plan or p_plan) | 'reject' | 'remove'
create or replace function public.xp_admin_set_featured(lid uuid, p_action text, p_plan text default null) returns void
language plpgsql security definer set search_path = public as $$
declare r public.xp_listings; pl text;
begin
  perform public.xp_admin_check();
  select * into r from public.xp_listings where id = lid;
  if not found then raise exception 'bad listing'; end if;
  if p_action = 'activate' then
    pl := coalesce(p_plan, r.featured_request, r.featured_plan);
    if pl not in ('2w','1m','forever') then raise exception 'bad plan'; end if;
    update public.xp_listings set featured_plan = pl, featured_status = 'active', featured_request = null,
           featured_until = case pl when '2w' then now() + interval '14 days' when '1m' then now() + interval '1 month' else null end
     where id = lid;
  elsif p_action = 'reject' then
    update public.xp_listings set featured_request = null,
           featured_status = case when featured_status = 'pending' then 'none' else featured_status end,
           featured_plan = case when featured_status = 'pending' then null else featured_plan end
     where id = lid;
  elsif p_action = 'remove' then
    update public.xp_listings set featured_status = 'none', featured_plan = null, featured_until = null, featured_request = null where id = lid;
  else raise exception 'bad action'; end if;
end $$;
revoke all on function public.xp_admin_set_featured(uuid, text, text) from public;
grant execute on function public.xp_admin_set_featured(uuid, text, text) to authenticated;

drop function if exists public.xp_admin_users();
create function public.xp_admin_users()
returns table (id uuid, username text, first_name text, last_name text, phone text, created_at timestamptz,
               banned boolean, ban_reason text, is_admin boolean, ads int, reports int)
language plpgsql security definer set search_path = public stable as $$
begin
  perform public.xp_admin_check();
  return query
  select p.id, p.username, p.first_name, p.last_name, p.phone, p.created_at, p.banned, p.ban_reason,
         exists (select 1 from public.xp_admins a where a.user_id = p.id),
         (select count(*)::int from public.xp_listings l where l.user_id = p.id),
         (select count(*)::int from public.xp_reports r join public.xp_listings l on l.id = r.listing_id where l.user_id = p.id)
    from public.xp_profiles p
   order by p.created_at desc
   limit 1000;
end $$;
revoke all on function public.xp_admin_users() from public;
grant execute on function public.xp_admin_users() to authenticated;

-- ban: hides all the user's ads and blocks posting / login. unban: restores the ads that were hidden by the ban.
create or replace function public.xp_admin_set_banned(uid uuid, p_banned boolean, p_reason text default null) returns void
language plpgsql security definer set search_path = public as $$
begin
  perform public.xp_admin_check();
  if uid = auth.uid() then raise exception 'cannot ban yourself'; end if;
  if exists (select 1 from public.xp_admins where user_id = uid) then raise exception 'cannot ban an admin'; end if;
  update public.xp_profiles set banned = p_banned,
         ban_reason = case when p_banned then left(p_reason, 200) end,
         banned_at = case when p_banned then now() end
   where id = uid;
  if p_banned then
    update public.xp_listings set hidden = true, hidden_by = 'ban', hidden_reason = 'account banned' where user_id = uid and hidden = false;
  else
    update public.xp_listings set hidden = false, hidden_by = null, hidden_reason = null where user_id = uid and hidden_by = 'ban';
  end if;
  begin   -- also block the login itself (if the project allows touching auth.users)
    update auth.users set banned_until = case when p_banned then 'infinity'::timestamptz else null end where id = uid;
  exception when others then null;
  end;
end $$;
revoke all on function public.xp_admin_set_banned(uuid, boolean, text) from public;
grant execute on function public.xp_admin_set_banned(uuid, boolean, text) to authenticated;

create or replace function public.xp_admin_settings() returns table (key text, value text)
language plpgsql security definer set search_path = public stable as $$
begin perform public.xp_admin_check(); return query select s.key, s.value from public.xp_settings s order by s.key; end $$;
revoke all on function public.xp_admin_settings() from public;
grant execute on function public.xp_admin_settings() to authenticated;

create or replace function public.xp_admin_set_setting(k text, v text) returns void
language plpgsql security definer set search_path = public as $$
begin
  perform public.xp_admin_check();
  if k not in ('phone_requires_login','max_ads_per_day','auto_hide_reports') then raise exception 'bad key'; end if;
  insert into public.xp_settings (key, value) values (k, left(v, 20)) on conflict (key) do update set value = excluded.value;
end $$;
revoke all on function public.xp_admin_set_setting(text, text) from public;
grant execute on function public.xp_admin_set_setting(text, text) to authenticated;

-- ---------- 9) make YOU the admin ----------
-- Replace YOUR_USERNAME (the username you log in with on the site), then run this line:
-- insert into public.xp_admins (user_id) select id from public.xp_profiles where lower(username) = lower('YOUR_USERNAME') on conflict do nothing;

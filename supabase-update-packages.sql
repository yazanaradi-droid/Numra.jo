-- ========== Package offers: several plates / numbers listed together with ONE price ==========
-- Run ONCE in Supabase > SQL Editor, AFTER supabase-update-sold.sql.
alter table public.xp_listings add column if not exists pkg_id uuid;
alter table public.xp_listings add column if not exists pkg_price numeric;
create index if not exists xp_listings_pkg_idx on public.xp_listings (pkg_id);
grant select (pkg_id, pkg_price) on public.xp_listings to anon;

-- insert guard: limits are checked once per package (flag set by xp_publish_package)
create or replace function public.xp_listings_featured_guard() returns trigger
language plpgsql security definer set search_path = public as $$
declare lim int; n int;
begin
  if auth.uid() is not null and coalesce(current_setting('xp.pkg', true), '') <> '1' then
    if exists (select 1 from public.xp_profiles where id = auth.uid() and banned) then raise exception 'banned'; end if;
    lim := coalesce(nullif(public.xp_setting('max_ads_per_day'), '')::int, 20);
    select count(*) into n from public.xp_listings where user_id = auth.uid() and created_at > now() - interval '24 hours';
    if n >= lim then raise exception 'rate_limited'; end if;
    perform public.xp_hit('ad_burst', 6, 60);
  end if;
  new.hidden := false; new.hidden_reason := null; new.hidden_by := null;
  new.pkg_id := null; new.pkg_price := null;      -- direct inserts can never create packages
  if new.featured_plan is not null and new.featured_plan in ('2w','1m','forever') then
    new.featured_status := 'pending';
  else
    new.featured_plan := null; new.featured_status := 'none';
  end if;
  new.featured_until := null;
  return new;
end $$;

-- publish a package: p_items = [{"code":"11","number":"11111"}, ...]  (plates)  or  [{"value":"0791234567"}, ...]  (numbers)
create or replace function public.xp_publish_package(p_type text, p_items jsonb, p_price numeric)
returns jsonb language plpgsql security definer set search_path = public as $$
declare it jsonb; pid uuid := gen_random_uuid(); n int := 0; r public.xp_listings; lim int; used int; c text; nm text; v text; seen text[] := '{}'; k text;
begin
  if auth.uid() is null then raise exception 'login required'; end if;
  if exists (select 1 from public.xp_profiles where id = auth.uid() and banned) then raise exception 'banned'; end if;
  if p_type not in ('plate','number') then raise exception 'bad type'; end if;
  if jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) < 2 or jsonb_array_length(p_items) > 30 then raise exception 'bad items'; end if;
  if p_price is not null and (p_price < 0 or p_price > 100000000) then raise exception 'bad price'; end if;
  if p_price = 0 then p_price := null; end if;
  lim := coalesce(nullif(public.xp_setting('max_ads_per_day'), '')::int, 20);
  select count(*) into used from public.xp_listings where user_id = auth.uid() and created_at > now() - interval '24 hours';
  if used + jsonb_array_length(p_items) > lim then raise exception 'rate_limited'; end if;
  perform public.xp_hit('package', 6, 3600);
  perform set_config('xp.pkg', '1', true);
  for it in select * from jsonb_array_elements(p_items) loop
    if p_type = 'plate' then
      c := upper(coalesce(it->>'code','')); nm := upper(coalesce(it->>'number',''));
      if not (c ~ '^[0-9XYZ]{1,2}$') or not (nm ~ '^[0-9XYZ]{1,5}$') then raise exception 'bad item'; end if;
      if c ~ '^[0-9]+$' and (c::int < 1 or c::int > 99) then raise exception 'bad item'; end if;
      k := c || '-' || nm;
    else
      v := regexp_replace(coalesce(it->>'value',''), '\D', '', 'g');
      if v !~ '^07[789][0-9]{7}$' then raise exception 'bad item'; end if;
      k := v;
    end if;
    if k = any(seen) then continue; end if;      -- same item twice in the request
    seen := seen || k;
    if p_type = 'plate' then
      select * into r from public.xp_listings where type='plate' and code = c and number = nm;
    else
      select * into r from public.xp_listings where type='number' and regexp_replace(value,'\D','','g') = v;
    end if;
    if found then
      if r.user_id <> auth.uid() then raise exception 'already_listed'; end if;
      update public.xp_listings set pkg_id = pid, pkg_price = p_price, price = null where id = r.id;
    else
      insert into public.xp_listings (type, code, number, value, price)
        values (p_type, case when p_type='plate' then c end, case when p_type='plate' then nm end, case when p_type='number' then v end, null);
      update public.xp_listings set pkg_id = pid, pkg_price = p_price
       where user_id = auth.uid() and pkg_id is null and type = p_type
         and ((p_type='plate' and code = c and number = nm) or (p_type='number' and regexp_replace(value,'\D','','g') = v));
    end if;
    n := n + 1;
  end loop;
  if n < 2 then raise exception 'bad items'; end if;
  return jsonb_build_object('pkg_id', pid, 'count', n);
end $$;
revoke all on function public.xp_publish_package(text, jsonb, numeric) from public;
grant execute on function public.xp_publish_package(text, jsonb, numeric) to authenticated;

-- owner edits price / sold: for a package it applies to the whole package
create or replace function public.xp_update_my_listing(lid uuid, p_price numeric, p_sold boolean) returns void
language plpgsql security definer set search_path = public as $$
declare r public.xp_listings;
begin
  if auth.uid() is null then raise exception 'login required'; end if;
  if exists (select 1 from public.xp_profiles where id = auth.uid() and banned) then raise exception 'banned'; end if;
  if p_price is not null and (p_price < 0 or p_price > 100000000) then raise exception 'bad price'; end if;
  perform public.xp_hit('edit_listing', 60, 3600);
  select * into r from public.xp_listings where id = lid and user_id = auth.uid();
  if not found then raise exception 'not your listing'; end if;
  if r.pkg_id is not null then
    update public.xp_listings set pkg_price = p_price, sold = coalesce(p_sold, false) where pkg_id = r.pkg_id and user_id = auth.uid();
  else
    update public.xp_listings set price = p_price, sold = coalesce(p_sold, false) where id = lid and user_id = auth.uid();
  end if;
end $$;
revoke all on function public.xp_update_my_listing(uuid, numeric, boolean) from public;
grant execute on function public.xp_update_my_listing(uuid, numeric, boolean) to authenticated;

-- feed with package columns
drop function if exists public.xp_listings_feed();
create function public.xp_listings_feed()
returns table (id uuid, type text, code text, number text, value text, price numeric, created_at timestamptz, phone_masked text, featured boolean, sold boolean, pkg_id uuid, pkg_price numeric)
language sql security definer set search_path = public stable as $$
  select l.id, l.type, l.code, l.number, l.value, l.price, l.created_at,
         case when length(x.ph) > 3 then left(x.ph, length(x.ph) - 3) || 'xxx' else x.ph end,
         (l.featured_status = 'active' and (l.featured_until is null or l.featured_until > now())) as featured,
         l.sold, l.pkg_id, l.pkg_price
  from public.xp_listings l
  join public.xp_profiles p on p.id = l.user_id
  cross join lateral (select regexp_replace(p.phone, '[\s-]', '', 'g') as ph) x
  where l.hidden = false and p.banned = false
  order by (l.featured_status = 'active' and (l.featured_until is null or l.featured_until > now())) desc, l.created_at desc
  limit 500;
$$;
revoke all on function public.xp_listings_feed() from public;
grant execute on function public.xp_listings_feed() to anon, authenticated;

-- detail with package columns
drop function if exists public.xp_listing_detail(uuid);
create function public.xp_listing_detail(lid uuid)
returns table (id uuid, type text, code text, number text, value text, price numeric, created_at timestamptz,
               username text, first_name text, last_name text, phone text, phone_locked text, sold boolean, pkg_id uuid, pkg_price numeric)
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
    null;
  elsif coalesce(public.xp_setting('phone_requires_login'), 'true') = 'true' and auth.uid() is null then
    ph := null; lock_ := 'login';
  elsif auth.uid() is not null then
    begin
      perform public.xp_hit('reveal', 40, 3600);
    exception when others then
      ph := null; lock_ := 'limit';
    end;
  end if;
  return query select r.id, r.type, r.code, r.number, r.value, r.price, r.created_at,
                      r.p_user, r.p_first, r.p_last, ph, lock_, r.sold, r.pkg_id, r.pkg_price;
end $$;
revoke all on function public.xp_listing_detail(uuid) from public;
grant execute on function public.xp_listing_detail(uuid) to anon, authenticated;

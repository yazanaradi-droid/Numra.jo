-- ========== Phone numbers may contain X / Y / Z to hide digits (e.g. 079 123 4XXX) ==========
drop index if exists public.xp_listings_number_uniq;
create unique index if not exists xp_listings_number_uniq on public.xp_listings ((upper(regexp_replace(value,'[^0-9A-Za-z]','','g')))) where type = 'number';

create or replace function public.xp_publish_listing(p_type text, p_code text, p_number text, p_value text, p_price numeric, p_plan text default null, p_promo text default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare r public.xp_listings; updated boolean := false; promo boolean := false;
begin
  if auth.uid() is null then raise exception 'login required'; end if;
  if exists (select 1 from public.xp_profiles where id = auth.uid() and banned) then raise exception 'banned'; end if;
  if p_type not in ('plate','number') then raise exception 'bad type'; end if;
  if p_type = 'number' and upper(coalesce(p_value,'')) !~ '^07[789][0-9XYZ]{7}$' then raise exception 'bad number'; end if;
  if p_price is not null and (p_price < 0 or p_price > 100000000) then raise exception 'bad price'; end if;
  if p_type = 'plate' then
    select * into r from public.xp_listings where type='plate' and code = p_code and number = p_number;
  else
    select * into r from public.xp_listings where type='number' and upper(regexp_replace(value,'[^0-9A-Za-z]','','g')) = upper(regexp_replace(p_value,'[^0-9A-Za-z]','','g'));
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
              case when p_type='number' then upper(p_value) end, p_price, p_plan)
      returning * into r;
  end if;
  if p_plan is not null then promo := public.xp_apply_promo(r.id, p_plan, p_promo); end if;
  if promo then select * into r from public.xp_listings where id = r.id; end if;
  return to_jsonb(r) || jsonb_build_object('_updated', updated, '_promo', promo);
end $$;
revoke all on function public.xp_publish_listing(text,text,text,text,numeric,text,text) from public;
grant execute on function public.xp_publish_listing(text,text,text,text,numeric,text,text) to authenticated;

create or replace function public.xp_publish_package(p_type text, p_items jsonb, p_price numeric)
returns jsonb language plpgsql security definer set search_path = public as $$
declare it jsonb; pid uuid := gen_random_uuid(); n int := 0; r public.xp_listings; lim int; used int; c text; nm text; v text; seen text[] := '{}'; k text; ip numeric;
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
    ip := nullif(it->>'price','')::numeric;
    if ip is not null and (ip < 0 or ip > 100000000) then raise exception 'bad price'; end if;
    if ip = 0 then ip := null; end if;
    if p_type = 'plate' then
      c := upper(coalesce(it->>'code','')); nm := upper(coalesce(it->>'number',''));
      if not (c ~ '^[0-9XYZ]{1,2}$') or not (nm ~ '^[0-9XYZ]{1,5}$') then raise exception 'bad item'; end if;
      if c ~ '^[0-9]+$' and (c::int < 1 or c::int > 99) then raise exception 'bad item'; end if;
      k := c || '-' || nm;
    else
      v := upper(regexp_replace(coalesce(it->>'value',''), '[^0-9A-Za-z]', '', 'g'));
      if v !~ '^07[789][0-9XYZ]{7}$' then raise exception 'bad item'; end if;
      k := v;
    end if;
    if k = any(seen) then continue; end if;      -- same item twice in the request
    seen := seen || k;
    if p_type = 'plate' then
      select * into r from public.xp_listings where type='plate' and code = c and number = nm;
    else
      select * into r from public.xp_listings where type='number' and upper(regexp_replace(value,'[^0-9A-Za-z]','','g')) = v;
    end if;
    if found then
      if r.user_id <> auth.uid() then raise exception 'already_listed'; end if;
      update public.xp_listings set pkg_id = pid, pkg_price = p_price, price = ip where id = r.id;
    else
      insert into public.xp_listings (type, code, number, value, price)
        values (p_type, case when p_type='plate' then c end, case when p_type='plate' then nm end, case when p_type='number' then v end, ip);
      update public.xp_listings set pkg_id = pid, pkg_price = p_price
       where user_id = auth.uid() and pkg_id is null and type = p_type
         and ((p_type='plate' and code = c and number = nm) or (p_type='number' and upper(regexp_replace(value,'[^0-9A-Za-z]','','g')) = v));
    end if;
    n := n + 1;
  end loop;
  if n < 2 then raise exception 'bad items'; end if;
  return jsonb_build_object('pkg_id', pid, 'count', n);
end $$;
revoke all on function public.xp_publish_package(text, jsonb, numeric) from public;
grant execute on function public.xp_publish_package(text, jsonb, numeric) to authenticated;

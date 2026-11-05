-- Per-item prices inside packages. Run once in the Supabase SQL Editor (after supabase-update-packages.sql).
-- p_items may now carry a price per item: [{"code":"11","number":"11111","price":500}, ...]

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
      update public.xp_listings set pkg_id = pid, pkg_price = p_price, price = ip where id = r.id;
    else
      insert into public.xp_listings (type, code, number, value, price)
        values (p_type, case when p_type='plate' then c end, case when p_type='plate' then nm end, case when p_type='number' then v end, ip);
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

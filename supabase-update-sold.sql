-- ========== Sold / available status + owner can edit price ==========
-- Run ONCE in Supabase > SQL Editor, AFTER supabase-admin-security.sql.
alter table public.xp_listings add column if not exists sold boolean not null default false;
grant select (sold) on public.xp_listings to anon;

-- owner changes ONLY the price and the sold flag (nothing else can be edited from the browser)
create or replace function public.xp_update_my_listing(lid uuid, p_price numeric, p_sold boolean) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'login required'; end if;
  if exists (select 1 from public.xp_profiles where id = auth.uid() and banned) then raise exception 'banned'; end if;
  if p_price is not null and (p_price < 0 or p_price > 100000000) then raise exception 'bad price'; end if;
  perform public.xp_hit('edit_listing', 60, 3600);
  update public.xp_listings set price = p_price, sold = coalesce(p_sold, false) where id = lid and user_id = auth.uid();
  if not found then raise exception 'not your listing'; end if;
end $$;
revoke all on function public.xp_update_my_listing(uuid, numeric, boolean) from public;
grant execute on function public.xp_update_my_listing(uuid, numeric, boolean) to authenticated;

-- feed with sold flag
drop function if exists public.xp_listings_feed();
create function public.xp_listings_feed()
returns table (id uuid, type text, code text, number text, value text, price numeric, created_at timestamptz, phone_masked text, featured boolean, sold boolean)
language sql security definer set search_path = public stable as $$
  select l.id, l.type, l.code, l.number, l.value, l.price, l.created_at,
         case when length(x.ph) > 3 then left(x.ph, length(x.ph) - 3) || 'xxx' else x.ph end,
         (l.featured_status = 'active' and (l.featured_until is null or l.featured_until > now())) as featured,
         l.sold
  from public.xp_listings l
  join public.xp_profiles p on p.id = l.user_id
  cross join lateral (select regexp_replace(p.phone, '[\s-]', '', 'g') as ph) x
  where l.hidden = false and p.banned = false
  order by (l.featured_status = 'active' and (l.featured_until is null or l.featured_until > now())) desc, l.created_at desc
  limit 500;
$$;
revoke all on function public.xp_listings_feed() from public;
grant execute on function public.xp_listings_feed() to anon, authenticated;

-- detail with sold flag
drop function if exists public.xp_listing_detail(uuid);
create function public.xp_listing_detail(lid uuid)
returns table (id uuid, type text, code text, number text, value text, price numeric, created_at timestamptz,
               username text, first_name text, last_name text, phone text, phone_locked text, sold boolean)
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
                      r.p_user, r.p_first, r.p_last, ph, lock_, r.sold;
end $$;
revoke all on function public.xp_listing_detail(uuid) from public;
grant execute on function public.xp_listing_detail(uuid) to anon, authenticated;

-- ========== listing detail page: listing + seller name + seller phone (for the WhatsApp button) ==========
create or replace function public.xp_listing_detail(lid uuid)
returns table (id uuid, type text, code text, number text, value text, price numeric, created_at timestamptz,
               username text, first_name text, last_name text, phone text)
language sql security definer set search_path = public stable as $$
  select l.id, l.type, l.code, l.number, l.value, l.price, l.created_at,
         p.username, p.first_name, p.last_name, p.phone
  from public.xp_listings l join public.xp_profiles p on p.id = l.user_id
  where l.id = lid;
$$;
revoke all on function public.xp_listing_detail(uuid) from public;
grant execute on function public.xp_listing_detail(uuid) to anon, authenticated;

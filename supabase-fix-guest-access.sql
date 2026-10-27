-- ========== Visitors who are NOT logged in must see all ads ==========
-- Run once in Supabase > SQL Editor. Safe to run again.
grant usage on schema public to anon, authenticated;

-- the table can be read by everyone (the ads are public)
alter table public.xp_listings enable row level security;
drop policy if exists "xp_listings: public read" on public.xp_listings;
create policy "xp_listings: public read" on public.xp_listings for select to anon, authenticated using (true);
grant select on public.xp_listings to anon, authenticated;

-- the functions the website calls (no login needed)
grant execute on function public.xp_listings_feed() to anon, authenticated;
grant execute on function public.xp_listing_detail(uuid) to anon, authenticated;
grant execute on function public.xp_username_available(text) to anon, authenticated;

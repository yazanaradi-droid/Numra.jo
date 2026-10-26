-- ========== Price is optional (shows "Contact for price") ==========
alter table public.xp_listings alter column price drop not null;
alter table public.xp_listings drop constraint if exists xp_listings_price_check;
alter table public.xp_listings add constraint xp_listings_price_check check (price is null or price > 0);
-- the feed / publish functions already pass NULL through; re-run supabase-update-nodup.sql only if you have not yet

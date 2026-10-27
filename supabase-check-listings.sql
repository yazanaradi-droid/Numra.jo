-- Diagnostic only (changes nothing): are the ads still in the database?
select type, count(*) as ads from public.xp_listings group by type;
select id, type, code, number, value, price, created_at, user_id from public.xp_listings order by created_at desc limit 50;
-- does the website feed return them?
select type, count(*) as shown_by_feed from public.xp_listings_feed() group by type;

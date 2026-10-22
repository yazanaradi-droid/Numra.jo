-- x plate.jo : run once in Supabase  ->  SQL Editor  ->  New query  ->  Run

-- ========== profiles (one row per account) ==========
create table if not exists public.xp_profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  username    text not null,
  first_name  text not null,
  last_name   text not null,
  phone       text not null,
  created_at  timestamptz not null default now()
);
-- username must be unique, ignoring upper/lower case
create unique index if not exists xp_profiles_username_key on public.xp_profiles (lower(username));

-- ========== listings (plates and mobile numbers) ==========
create table if not exists public.xp_listings (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  type        text not null check (type in ('plate','number')),
  code        text,
  number      text,
  value       text,
  price       numeric not null check (price > 0),
  created_at  timestamptz not null default now(),
  constraint xp_plate_fields  check (type <> 'plate'  or (code ~ '^[0-9]{1,2}$' and coalesce(length(number),0) between 1 and 12)),
  constraint xp_number_fields check (type <> 'number' or (value is not null and length(value) between 7 and 15))
);
create index if not exists xp_listings_type_created_idx on public.xp_listings (type, created_at desc);

-- ========== row level security ==========
alter table public.xp_profiles enable row level security;
alter table public.xp_listings enable row level security;

drop policy if exists "xp_profiles: read own"   on public.xp_profiles;
create policy "xp_profiles: read own" on public.xp_profiles for select to authenticated using (id = auth.uid());

drop policy if exists "xp_listings: public read" on public.xp_listings;
create policy "xp_listings: public read" on public.xp_listings for select to anon, authenticated using (true);

drop policy if exists "xp_listings: insert own" on public.xp_listings;
create policy "xp_listings: insert own" on public.xp_listings for insert to authenticated with check (user_id = auth.uid());

drop policy if exists "xp_listings: delete own" on public.xp_listings;
create policy "xp_listings: delete own" on public.xp_listings for delete to authenticated using (user_id = auth.uid());

-- ========== create the profile automatically when an account is created ==========
create or replace function public.xp_handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.xp_profiles (id, username, first_name, last_name, phone)
  values (
    new.id,
    new.raw_user_meta_data->>'username',
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name',
    new.raw_user_meta_data->>'phone'
  );
  return new;
end $$;

drop trigger if exists xp_on_auth_user_created on auth.users;
create trigger xp_on_auth_user_created after insert on auth.users
  for each row execute function public.xp_handle_new_user();

-- ========== is this username free? (callable by visitors who are not logged in) ==========
create or replace function public.xp_username_available(u text)
returns boolean language sql security definer set search_path = public stable as $$
  select not exists (select 1 from public.xp_profiles where lower(username) = lower(trim(u)));
$$;
revoke all on function public.xp_username_available(text) from public;
grant execute on function public.xp_username_available(text) to anon, authenticated;

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

-- ========== listings feed with a MASKED seller phone (full number is only returned by xp_listing_detail) ==========
create or replace function public.xp_listings_feed()
returns table (id uuid, type text, code text, number text, value text, price numeric, created_at timestamptz, phone_masked text)
language sql security definer set search_path = public stable as $$
  select l.id, l.type, l.code, l.number, l.value, l.price, l.created_at,
         case when length(x.ph) > 3 then left(x.ph, length(x.ph) - 3) || 'xxx' else x.ph end
  from public.xp_listings l
  join public.xp_profiles p on p.id = l.user_id
  cross join lateral (select regexp_replace(p.phone, '[\s-]', '', 'g') as ph) x
  order by l.created_at desc
  limit 500;
$$;
revoke all on function public.xp_listings_feed() from public;
grant execute on function public.xp_listings_feed() to anon, authenticated;

-- ========== dashboard: edit my first/last name (the phone number can NOT be changed from the site) ==========
create or replace function public.xp_update_profile(f text, l text)
returns void language sql security definer set search_path = public as $$
  update public.xp_profiles
     set first_name = trim(f), last_name = trim(l)
   where id = auth.uid() and length(trim(f)) >= 2 and length(trim(l)) >= 2;
$$;
revoke all on function public.xp_update_profile(text, text) from public;
grant execute on function public.xp_update_profile(text, text) to authenticated;

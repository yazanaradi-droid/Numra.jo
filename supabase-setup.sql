-- x plate.jo : run once in Supabase  ->  SQL Editor  ->  New query  ->  Run

-- ========== profiles (one row per account) ==========
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  username    text not null,
  first_name  text not null,
  last_name   text not null,
  phone       text not null,
  created_at  timestamptz not null default now()
);
-- username must be unique, ignoring upper/lower case
create unique index if not exists profiles_username_key on public.profiles (lower(username));

-- ========== listings (plates and mobile numbers) ==========
create table if not exists public.listings (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  type        text not null check (type in ('plate','number')),
  code        text,
  number      text,
  value       text,
  price       numeric not null check (price > 0),
  created_at  timestamptz not null default now(),
  constraint plate_fields  check (type <> 'plate'  or (code ~ '^[0-9]{1,2}$' and coalesce(length(number),0) between 1 and 12)),
  constraint number_fields check (type <> 'number' or (value is not null and length(value) between 7 and 15))
);
create index if not exists listings_type_created_idx on public.listings (type, created_at desc);

-- ========== row level security ==========
alter table public.profiles enable row level security;
alter table public.listings enable row level security;

drop policy if exists "profiles: read own"   on public.profiles;
create policy "profiles: read own" on public.profiles for select to authenticated using (id = auth.uid());

drop policy if exists "listings: public read" on public.listings;
create policy "listings: public read" on public.listings for select to anon, authenticated using (true);

drop policy if exists "listings: insert own" on public.listings;
create policy "listings: insert own" on public.listings for insert to authenticated with check (user_id = auth.uid());

drop policy if exists "listings: delete own" on public.listings;
create policy "listings: delete own" on public.listings for delete to authenticated using (user_id = auth.uid());

-- ========== create the profile automatically when an account is created ==========
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, username, first_name, last_name, phone)
  values (
    new.id,
    new.raw_user_meta_data->>'username',
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name',
    new.raw_user_meta_data->>'phone'
  );
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- ========== is this username free? (callable by visitors who are not logged in) ==========
create or replace function public.username_available(u text)
returns boolean language sql security definer set search_path = public stable as $$
  select not exists (select 1 from public.profiles where lower(username) = lower(trim(u)));
$$;
revoke all on function public.username_available(text) from public;
grant execute on function public.username_available(text) to anon, authenticated;

-- ========== Favorites (one list per account) ==========
create table if not exists public.xp_favorites (
  user_id    uuid not null default auth.uid() references auth.users(id) on delete cascade,
  listing_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, listing_id)
);
alter table public.xp_favorites enable row level security;
drop policy if exists "xp_favorites: read own"   on public.xp_favorites;
drop policy if exists "xp_favorites: insert own" on public.xp_favorites;
drop policy if exists "xp_favorites: delete own" on public.xp_favorites;
create policy "xp_favorites: read own"   on public.xp_favorites for select to authenticated using (user_id = auth.uid());
create policy "xp_favorites: insert own" on public.xp_favorites for insert to authenticated with check (user_id = auth.uid());
create policy "xp_favorites: delete own" on public.xp_favorites for delete to authenticated using (user_id = auth.uid());

-- ========== dashboard: edit my first/last name (the phone number can NOT be changed from the site) ==========
create or replace function public.xp_update_profile(f text, l text)
returns void language sql security definer set search_path = public as $$
  update public.xp_profiles
     set first_name = trim(f), last_name = trim(l)
   where id = auth.uid() and length(trim(f)) >= 2 and length(trim(l)) >= 2;
$$;
revoke all on function public.xp_update_profile(text, text) from public;
grant execute on function public.xp_update_profile(text, text) to authenticated;

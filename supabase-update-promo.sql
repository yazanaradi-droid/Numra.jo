-- ========== Promo codes: activate a featured ad WITHOUT payment ==========
-- Run once in Supabase > SQL Editor (after supabase-update-featured.sql and supabase-update-nodup.sql).
create table if not exists public.xp_promo_codes (code text primary key, active boolean not null default true, note text);
alter table public.xp_promo_codes enable row level security;     -- no policies = nobody can read the codes from the website
insert into public.xp_promo_codes (code, note) values ('TESTVIP1', 'free featured ads for testing') on conflict (code) do update set active = true;

-- internal: activates featured if the code is valid (returns true/false)
create or replace function public.xp_apply_promo(lid uuid, plan text, p_code text) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if p_code is null or p_code = '' or plan not in ('2w','1m','forever') then return false; end if;
  if not exists (select 1 from public.xp_promo_codes where code = upper(trim(p_code)) and active) then return false; end if;
  update public.xp_listings set featured_plan = plan, featured_status = 'active', featured_request = null,
         featured_until = case plan when '2w' then now() + interval '14 days' when '1m' then now() + interval '1 month' else null end
   where id = lid and user_id = auth.uid();
  return found;
end $$;
revoke all on function public.xp_apply_promo(uuid, text, text) from public;

drop function if exists public.xp_publish_listing(text,text,text,text,numeric,text);
create or replace function public.xp_publish_listing(p_type text, p_code text, p_number text, p_value text, p_price numeric, p_plan text default null, p_promo text default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare r public.xp_listings; updated boolean := false; promo boolean := false;
begin
  if auth.uid() is null then raise exception 'login required'; end if;
  if p_type = 'plate' then
    select * into r from public.xp_listings where type='plate' and code = p_code and number = p_number;
  else
    select * into r from public.xp_listings where type='number' and regexp_replace(value,'\D','','g') = regexp_replace(p_value,'\D','','g');
  end if;
  if found then
    if r.user_id <> auth.uid() then raise exception 'already_listed'; end if;
    update public.xp_listings set price = coalesce(p_price, price) where id = r.id returning * into r;
    updated := true;
    if p_plan in ('2w','1m','forever') and not (r.featured_status = 'active' and (r.featured_until is null or r.featured_until > now())) then
      update public.xp_listings set featured_plan = p_plan, featured_status = 'pending' where id = r.id returning * into r;
    end if;
  else
    insert into public.xp_listings (type, code, number, value, price, featured_plan)
      values (p_type, case when p_type='plate' then p_code end, case when p_type='plate' then p_number end,
              case when p_type='number' then p_value end, p_price, p_plan)
      returning * into r;
  end if;
  if p_plan is not null then promo := public.xp_apply_promo(r.id, p_plan, p_promo); end if;
  if promo then select * into r from public.xp_listings where id = r.id; end if;
  return to_jsonb(r) || jsonb_build_object('_updated', updated, '_promo', promo);
end $$;
revoke all on function public.xp_publish_listing(text,text,text,text,numeric,text,text) from public;
grant execute on function public.xp_publish_listing(text,text,text,text,numeric,text,text) to authenticated;

drop function if exists public.xp_request_featured(uuid, text);
create or replace function public.xp_request_featured(lid uuid, plan text, p_promo text default null) returns boolean
language plpgsql security definer set search_path = public as $$
declare r public.xp_listings;
begin
  if plan not in ('2w','1m','forever') then raise exception 'bad plan'; end if;
  select * into r from public.xp_listings where id = lid and user_id = auth.uid();
  if not found then raise exception 'not your listing'; end if;
  if r.featured_status = 'active' and (r.featured_until is null or r.featured_until > now()) then
    update public.xp_listings set featured_request = plan where id = lid;
  else
    update public.xp_listings set featured_plan = plan, featured_status = 'pending', featured_request = null where id = lid;
  end if;
  return public.xp_apply_promo(lid, plan, p_promo);
end $$;
revoke all on function public.xp_request_featured(uuid, text, text) from public;
grant execute on function public.xp_request_featured(uuid, text, text) to authenticated;

-- add more codes any time:  insert into public.xp_promo_codes (code) values ('MYCODE2');
-- disable a code:           update public.xp_promo_codes set active = false where code = 'TESTVIP1';

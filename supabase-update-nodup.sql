-- ========== No duplicate ads: one ad per plate / phone number ==========
-- 1) clean existing duplicates (keeps the NEWEST ad of each plate/number)
delete from public.xp_listings a using public.xp_listings b
 where a.id <> b.id and a.type = b.type
   and ((a.type = 'plate'  and a.code = b.code and a.number = b.number)
     or (a.type = 'number' and regexp_replace(a.value,'\D','','g') = regexp_replace(b.value,'\D','','g')))
   and (a.created_at, a.id) < (b.created_at, b.id);

-- 2) the database itself refuses duplicates
create unique index if not exists xp_listings_plate_uniq  on public.xp_listings (code, number) where type = 'plate';
create unique index if not exists xp_listings_number_uniq on public.xp_listings ((regexp_replace(value,'\D','','g'))) where type = 'number';

-- 3) publish-or-update: same owner re-entering the same number UPDATES the old ad; someone else's number is refused
create or replace function public.xp_publish_listing(p_type text, p_code text, p_number text, p_value text, p_price numeric, p_plan text default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare r public.xp_listings; updated boolean := false; has_feat boolean;
begin
  if auth.uid() is null then raise exception 'login required'; end if;
  if p_type = 'plate' then
    select * into r from public.xp_listings where type='plate' and code = p_code and number = p_number;
  else
    select * into r from public.xp_listings where type='number' and regexp_replace(value,'\D','','g') = regexp_replace(p_value,'\D','','g');
  end if;
  if found then
    if r.user_id <> auth.uid() then raise exception 'already_listed'; end if;
    update public.xp_listings set price = p_price where id = r.id returning * into r;
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
  return to_jsonb(r) || jsonb_build_object('_updated', updated);
end $$;
revoke all on function public.xp_publish_listing(text,text,text,text,numeric,text) from public;
grant execute on function public.xp_publish_listing(text,text,text,text,numeric,text) to authenticated;

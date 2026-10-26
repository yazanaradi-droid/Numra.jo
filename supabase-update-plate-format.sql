-- ========== Plates: code 1-2 chars and number 1-5 chars, digits or X / Y / Z ==========
alter table public.xp_listings drop constraint if exists xp_plate_fields;
alter table public.xp_listings add constraint xp_plate_fields check (
  type <> 'plate' or (code ~ '^[0-9XYZ]{1,2}$' and number ~ '^[0-9XYZ]{1,5}$')
) not valid;   -- old rows are left as they are

# x plate.jo — Website Package

A static, front-end-only prototype for a Jordanian license plate & mobile number marketplace.

## Structure

```
index.html      — Homepage (category names only, no listing data)
plates.html     — Dedicated License Plates listing page
numbers.html    — Dedicated Mobile Numbers listing page
style.css       — All shared styling
script.js       — All shared logic (translations, modals, listings, forms)
images/
  favicon.svg   — Brand mark used as the site favicon
```

## How to run it

No build step or server required — just keep all files in this same folder
and open `index.html` in a browser. All internal links are relative, so the
folder must stay together (don't rename or move individual files without
updating the references in the HTML).

## What this is

- A static prototype: no backend, no database, no real accounts or payments.
- Data (sample + anything you submit through the upload forms) lives only in
  browser memory for the current page — it resets on refresh.
- Fully bilingual: English and Arabic, with a language toggle in the header
  that also flips the layout to right-to-left.

## Known limitations

- The "Useful links" section on the homepage still points to UAE government
  sites (RTA, Dubai Police, Abu Dhabi Police) — left over from the original
  reference site and inconsistent with the Jordan theme; worth replacing
  with Jordanian equivalents.
- The wishlist heart, theme toggle, and mobile hamburger menu icons in the
  header are decorative only.
- Language choice is passed between pages via a `?lang=ar` URL parameter,
  not persisted storage — it survives normal in-site navigation but resets
  if a URL is opened directly.

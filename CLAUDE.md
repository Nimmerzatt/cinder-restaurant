# Project context: "Cinder" restaurant website (portfolio demo)

## What this is
A concept website for a **fictional** restaurant called **Cinder** (wood-fire restaurant & bar in Heidelberg).
It is a **portfolio piece** for Tim Keller (Keller Hospitality, Heidelberg). Tim is a chef with 12 years in
hospitality (Michelin-starred kitchens in Germany and Canada, degree in hotel & gastronomy management).
He is building an Upwork profile and wants to win **restaurant / hotel website projects**. This site must
show clients what he can deliver, so quality and first impression matter a lot.

Tim's own Keller Hospitality business also wants to sell websites to restaurants in the Rhine-Neckar region.

## Tim's preferences (important)
- Talk to Tim in **German**. The website itself stays in **English** (so it works for international clients).
- Design: **clean and direct**, not crowded. Elegant, high-end, dark. It must be obvious at first glance
  that this is a restaurant/hotel.
- Visual references Tim gave: https://www.jungsik.com/, https://www.qissa.co.uk/, https://ballenacabo.com/
  (full-bleed atmospheric hero image, centered thin wide-tracked logo, slim nav: Menu left, logo center,
  "Book a table" pill right, lots of whitespace, editorial sections).
- He rejected: bright orange "fire" look, busy hero with stats/badges, the name "Ember & Field",
  German name "Feld & Flamme", plain single HTML files. He wants a modern project setup like a SaaS startup.

## Tech stack
- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- Fonts self-hosted via @fontsource-variable (Fraunces for display, Inter Tight for body)
- Run: `npm install` then `npm run dev` → http://localhost:3000
- Windows: PowerShell execution policy was already set to RemoteSigned for the user.

## Structure
- `src/content/restaurant.json` – ALL content (name, texts, dishes, prices, hours, contact). Edit content here.
- `src/app/globals.css` – design tokens (colors, fonts, animations) in the Tailwind `@theme` block
- `src/app/layout.tsx` – fonts, metadata
- `src/app/page.tsx` – section order
- `src/components/`
  - `Nav.tsx` – fixed nav + full-screen menu overlay
  - `Hero.tsx` – full-bleed photo, dark overlay, centered CINDER wordmark, slow zoom
  - `Embers.tsx` – subtle animated sparks (canvas), respects reduced motion
  - `Manifesto.tsx` – "Our story": centered statement + image/text split with key facts
  - `Menu.tsx` – tasting menu / à la carte tabs (centered)
  - `PrivateDining.tsx` – full-bleed image section
  - `Booking.tsx` – reservation form (demo only, client-side validation, closed Sun/Mon)
  - `Footer.tsx`
- `public/img/` – Tim's own dish photos (beef-cheek.jpg, beetroot.jpg, only 1024px wide)
- Local git repo on branch `main` (initialized 2026-11-23). Not pushed to GitHub yet.

## Design tokens
soot #14110f (background) · ash #1f1b18 (alt sections) · wheat #efe7da (text) · glow #e6c48f (gold accent,
buttons) · ember #c9965c · muted #a99f8f. Headings: Fraunces light, wide letter-spacing for the logo.
Small labels use the `.eyebrow` class (uppercase, tracked).

## Open to-dos / next steps
1. Hero needs a **large interior/atmosphere photo** (dining room, bar, terrace) or a video instead of the
   dish photo – the references all show the room. Current dish photos are low-res for full screen.
2. Put the site online: push to GitHub, deploy on Vercel, get a public link for the Upwork portfolio.
3. Add the live link + screenshots as a portfolio item on Tim's Upwork profile.
4. Possibly build 1–2 more demo sites in different styles (e.g. bright café/brunch, boutique hotel),
   reusing the same structure with a different `restaurant.json`.
5. The footer note says it is a fictional concept site; keep that so nobody mistakes it for a real business.

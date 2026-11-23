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
- `src/components/` (page order, redesigned 2026-11-23 after the structure of ballenacabo.com)
  - Preloader – pure CSS curtain in `page.tsx` + `globals.css` (`.preloader`, `.after-curtain`)
  - `Nav.tsx` – fixed nav + full-screen menu overlay (numbered links + image)
  - `Hero.tsx` – full-bleed dining room photo, slow zoom, embers, headline + 2 CTAs
  - `Embers.tsx` – subtle animated sparks (canvas), respects reduced motion
  - `Intro.tsx` – light (linen) section: statement + two overlapping parallax images + facts
  - `Menu.tsx` – feature split (image + text) and menu card with tasting / à la carte tabs
  - `Fire.tsx` – full-bleed parallax image about the hearth
  - `Cards.tsx` – 4 portrait tiles (chef's table, bar, private dining, gift cards), hover zoom
  - `Gallery.tsx` – endless marquee strip of photos
  - `PrivateDining.tsx` – full-bleed parallax image section
  - `About.tsx` – light split section about the room
  - `Booking.tsx` – reservation form (demo only, client-side validation, closed Sun/Mon)
  - `Footer.tsx` + `Newsletter.tsx` (demo signup), oversized wordmark
  - `ScrollFx.tsx` – drives `[data-reveal]` (fade or `="clip"`) and `[data-parallax="0.1"]`
- `public/img/` – Tim's own dish photos (beef-cheek.jpg, beetroot.jpg) plus free Unsplash photos
  (Unsplash license, commercial use OK, credited generally in the footer)
- GitHub: https://github.com/Nimmerzatt/cinder-restaurant (public, branch `main`)
- Live: https://cinder-restaurant.vercel.app (Vercel project `nimmersatt/cinder-restaurant`,
  every push to `main` deploys automatically). Vercel CLI is installed and logged in.

## Design tokens
soot #14110f (background) · ash #1f1b18 (alt sections) · wheat #efe7da (text) · glow #e6c48f (gold accent,
buttons) · ember #c9965c · muted #a99f8f. Headings: Fraunces light, wide letter-spacing for the logo.
Small labels use the `.eyebrow` class (uppercase, tracked).

## Open to-dos / next steps
1. ~~Hero interior photo~~ – done (Unsplash). Optional: hero video.
2. ~~Put the site online~~ – done 2026-11-23, see "Live" above.
3. Add the live link + screenshots as a portfolio item on Tim's Upwork profile.
4. Possibly build 1–2 more demo sites in different styles (e.g. bright café/brunch, boutique hotel),
   reusing the same structure with a different `restaurant.json`.
5. The footer note says it is a fictional concept site; keep that so nobody mistakes it for a real business.

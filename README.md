# Cinder – Restaurant website (portfolio demo)

Concept website for a fictional fire-kitchen restaurant in Heidelberg.
Built with **Next.js 16, React 19, TypeScript and Tailwind CSS 4**.

## Start

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Edit the content

All texts, dishes, prices and opening hours live in one file:
`src/content/restaurant.json` – change it there and the page updates.

## Structure

- `src/app/` – layout, global styles and design tokens (colors, fonts)
- `src/components/` – one component per section (Hero, Menu, Booking …)
- `src/components/Embers.tsx` – animated sparks in the hero
- `public/img/` – dish photos

## Deploy

Push to GitHub and import the repo on vercel.com – it deploys automatically.

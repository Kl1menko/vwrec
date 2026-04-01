# VW Recruit

Starter frontend for a multilingual B2B recruitment website built with Vite, SCSS, and Vanilla JavaScript.

## Stack

- Vite
- Vanilla JavaScript
- SCSS
- Multi-page architecture

## Quick start

```bash
npm install
npm run dev
```

## Available scripts

- `npm run sync:pages` — generates locale-based HTML routes
- `npm run dev` — regenerates pages and starts Vite
- `npm run build` — regenerates pages and builds production output
- `npm run preview` — previews production build

## Environment variables

Create a `.env` file if you want to connect forms and analytics:

```bash
VITE_GOOGLE_SCRIPT_URL=
VITE_GA_ID=
VITE_META_PIXEL_ID=
```

## Notes

- Locale routes are prepared for `uk`, `en`, `cs`, `pl`, `sk`, `de`, `lt`, `et`, `hu`, `hr`, `ro`, `bg`
- Current locale copy is a starter mix of Ukrainian, English, and placeholder expansion text for remaining languages
- Legal pages and final business copy should be replaced before launch

# Suraha Enterprise Ltd. — Corporate Website

Official website for Suraha Enterprise Ltd., a UK-registered private holding company with diversified interests across real estate, technology, investment, and strategic consultancy.

Suraha Enterprise Ltd. is registered in England & Wales.

## Tech Stack

- React 19 + TypeScript 5.9
- Vite 7 (build tool)
- Tailwind CSS 4 (via `@tailwindcss/vite` — no tailwind.config file; theme lives in `src/index.css`)
- react-router-dom 7 (client-side routing, SPA)
- framer-motion (subtle animations)
- lucide-react (line icons)
- Package manager: pnpm

## Folder Structure

```
├── index.html              # Entry HTML (title, meta, fonts, favicon)
├── vite.config.ts          # Vite config (react + tailwindcss plugins)
├── vercel.json             # SPA rewrite for client-side routing
├── public/
│   ├── favicon.svg         # Navy/gold "S" monogram
│   ├── apple-touch-icon.png
│   └── site.webmanifest
└── src/
    ├── main.tsx            # App bootstrap (BrowserRouter)
    ├── App.tsx             # Route definitions + layout shell
    ├── index.css           # Tailwind theme, brand tokens, global styles
    ├── components/         # Navbar, Footer, PageHero, SectionHeader,
    │                       # CTAButton, ScrollToTop, Hero, Stats,
    │                       # TickerStrip, Portfolio
    ├── hooks/              # usePageTitle
    └── pages/              # One file per route
```

## Commands

```bash
pnpm install      # install dependencies
pnpm dev          # local dev server (default http://localhost:5173)
pnpm build        # production build → dist/
pnpm preview      # preview the production build locally
pnpm lint         # ESLint
```

Note: `pnpm build` runs `vite build` only. Run `pnpm exec tsc -b` separately for a full type check.

## Deployment (Vercel)

- Framework preset: **Vite**
- Build command: `pnpm build`
- Output directory: `dist`
- `vercel.json` rewrites all paths to `/index.html` so deep links (e.g. `/governance`) work with client-side routing. Do not remove it.

## Routes

| Path          | Page       |
| ------------- | ---------- |
| `/`           | Home       |
| `/about`      | About      |
| `/divisions`  | Divisions  |
| `/philosophy` | Philosophy |
| `/governance` | Governance |
| `/contact`    | Contact    |
| `/privacy`    | Privacy    |
| `/terms`      | Terms      |
| `*`           | 404        |

## Brand Rules

- Palette: Deep Navy `#0D1B2E` (primary background), Heritage Gold `#C49A38` (accent only — never overuse), Warm Cream `#F4F1EB` (text/light)
- Typography: Cormorant Garamond (headings), Plus Jakarta Sans (body), IBM Plex Mono (eyebrow labels)
- Navbar is **text-only**: "Suraha *Enterprise*" with "Enterprise" in gold italic. No image logo.
- Company wording must be exactly: **"Suraha Enterprise Ltd. is registered in England & Wales."** Do not invent a company number.
- Tone: institutional, typography-led, serious. No stock photos, no bright colours, no startup/SaaS language.

## Known Risks

- SPA only — no server-side rendering, so SEO depends on prerendering/meta handling if requirements grow. Acceptable for a brochure site.
- Contact page has no backend; any form submission needs a service (e.g. Formspree, Resend) before going live.
- `pnpm build` does not type-check (see Commands note).

## Pending Tasks

- [ ] Export/deploy to Vercel (awaiting approval)
- [ ] Decide on contact form handling
- [ ] Optional: OG/social-share image and per-page meta descriptions

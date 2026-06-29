# Black Crown Tint — Marketing Website

Dark, cinematic, motion-rich marketing/SEO site for **Black Crown Tint**, a 100%
mobile window-tinting business in Jacksonville, FL (auto · residential · commercial).
Built from the Claude Design handoff as a 15-page SEO silo.

## Stack
- **[Astro](https://astro.build)** (static output) + TypeScript
- **[motion](https://motion.dev)** for the interaction layer (custom cursor, magnetic
  buttons, 3D tilt, count-up, parallax, scroll-reveal)
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**
- **Poppins** + **Playfair Display** (Google Fonts)

Zero UI framework — pages are static HTML/CSS lifted faithfully from the design, with
shared Astro components for the repeated chrome.

## Commands
```bash
npm install      # install deps
npm run dev      # local dev server (http://localhost:4321)
npm run build    # static build to ./dist
npm run preview  # serve the built site
```

## Structure
```
src/
  data/site.ts            NAP, nav, routes, 18 service-area zones (single source of truth)
  styles/global.css       tokens, .bc-* design classes, keyframes, responsive + reduced-motion
  scripts/motion.ts       global motion layer (cursor, magnetic, tilt, count-up, parallax, reveal, header)
  layouts/BaseLayout.astro head/SEO/JSON-LD, cursor, Header, Footer, motion script
  components/             Header, Footer, CTASection, FAQ, ServiceCard*, QuoteForm,
                         BeforeAfterSlider, Breadcrumb
  pages/                 index + 14 routes (services/, service-areas/, blog & cornerstone)
public/
  brand/                 crown-magenta.png, logo-lockup.png
  robots.txt
```

## Pages (15)
Home · Auto · Residential · Commercial · Ceramic Window Tint · Florida Tint Laws
(cornerstone) · Ceramic vs Carbon · Window Tinting Cost · Window Tint Installation ·
Service Areas (hub) · Jacksonville Beach (zone template) · About · Reviews · Gallery · Contact.

## SEO
Per-page `<title>` / meta / canonical / Open Graph, JSON-LD per page type
(LocalBusiness, Service, Article, HowTo, FAQPage, ItemList, ImageGallery), plus an
auto-generated `sitemap-index.xml` and `robots.txt`. Update `site` in
`astro.config.mjs` and `src/data/site.ts` to the real production domain before launch.

## Before launch (placeholders to replace)
- **Real photos** — Gallery tiles, before/after blocks and the About founder photo are
  labelled placeholders (`IMG · …`).
- **Real reviews** — Reviews page + Home reviews use placeholder copy and a placeholder
  5.0 rating; wire `AggregateRating` schema once real reviews exist.
- **Map embeds** — Contact + Service Areas have labelled Google Maps placeholders.
- **Contact / quote forms** — submit is demo-only (shows a success message + resets);
  connect to a real email/CRM endpoint.
- **Per-zone pages** — only Jacksonville Beach has a dedicated page; clone the template
  with unique 300+ word copy per zone (the rest link to Contact) before publishing them.

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

## Media and launch checks
Service images in `public/images/` are AI-generated illustrations, not project photographs. The ServiceImage component delivers responsive WebP variants. Add authentic project and team photos when available.

Quote and contact forms use Netlify Forms native POST. Enable form detection in Netlify and configure notifications before deploying; test a real submission after deployment. Local preview does not provide the Netlify form backend.

See [WEBSITE-REVIEW.md](WEBSITE-REVIEW.md) for the review, checks and remaining work, including coverage maps and dependency alerts.

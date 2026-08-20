# Avenelix Current State

_Last updated: 2026-08-20_

## Status

**Pre-product / exploration / coming-soon stage.** The public site is a single-page brand/technology presence; no product claims should be invented for SEO.

## Current frontend

The frontend is split for maintainability:

- `index.html` — semantic content, SEO metadata, structured data and asset entry points.
- `css/style.css` — core visual/layout system.
- `css/color-system.css` — Avenelix dark/lime/mint color and gradient system.
- `css/studio.css` — premium cursor, grain, glass and interaction styling.
- `css/entrance.css` — cinematic initial brand entrance.
- `css/page-transition.css` — navigation transition overlay.
- `css/responsive-motion.css` — responsive motion rules.
- `css/runtime-fixes.css` — fail-safe loading/mobile safeguards.
- `js/main.js` — scroll, GSAP choreography, orbital motion, cursor interaction and Three.js particles.

## Runtime architecture

- Locomotive Scroll 5 is the only smooth-scroll engine on desktop.
- Touch/tablet devices use native scrolling.
- GSAP owns animation choreography.
- Three.js is decorative and must never be required for content visibility.
- If a CDN enhancement fails, content remains visible and native scrolling remains usable.
- The preloader has deterministic progress plus a CSS fail-safe so it cannot permanently cover the page.
- Reduced-motion users skip decorative motion and the preloader.
- Three.js pauses while the document is hidden and uses lower particle budgets on smaller screens.

## Recent repair

The previous `main.js` had a JavaScript syntax error in the Lenis initialization and was still loading Lenis even though the intended architecture had moved to Locomotive Scroll. The orbital initialization guard was also inverted, and the particle renderer was not being rendered correctly. These were corrected on 2026-08-20.

## SEO foundation

- Canonical URL: `https://avenelix.com/`.
- Crawlable `robots.txt` with sitemap reference.
- Root `sitemap.xml` with current homepage timestamp.
- Root `/favicon.svg` plus brand logo asset.
- `WebSite` structured data for the preferred site name.
- `Organization` structured data with a crawlable 512×512 logo URL.
- Open Graph and Twitter metadata.

SEO changes improve eligibility and clarity; they do not guarantee ranking. Search Console recrawl/indexing still has to occur after deployment.

## Deployment

- Vercel is the intended host.
- Cloudflare DNS is active.
- Apex domain is canonical; `www` should redirect to the apex domain.

## Known limitations

- No finished product yet.
- No real multi-page portfolio/product content yet.
- Google indexing and favicon display are controlled by Google's crawl/reprocessing cycle and cannot be forced by HTML alone.
- Final browser/device QA must be performed on the deployed build after frontend changes.

## Next priorities

1. Verify the deployed build loads on phone, laptop and desktop.
2. Use Google Search Console URL Inspection and request a homepage recrawl after deployment.
3. Verify `/favicon.svg`, `/assets/brand/logo.svg`, `/robots.txt`, and `/sitemap.xml` return successfully in production.
4. Continue improving real site content before adding SEO-only pages.

# Avenelix Current State

_Last updated: 2026-08-12_

## Status

**Pre-product / exploration / coming-soon stage.**

The brand/domain exists and the first public web presence is live. The founder is still deciding what Avenelix will build and how it will be positioned.

## Completed

- Domain `avenelix.com` purchased.
- Vercel deployment established.
- Cloudflare DNS is active.
- Apex domain `avenelix.com` is live.
- `www.avenelix.com` redirects to `avenelix.com`.
- Coming-soon landing page built and iterated toward a dark, abstract AI/system identity.
- Responsive behavior implemented.
- SEO metadata added.
- `robots.txt` added.
- `sitemap.xml` added.
- Google Search Console configured and live URL test succeeds.
- Google has not yet indexed the homepage at the time this document was written.
- Cloudflare Email Routing is being used/planned so `hello@avenelix.com` can forward to an existing Gmail inbox without paying for a full mailbox.

## Current repository

The repository is intentionally lightweight:

- `index.html` — current landing page (single-file: HTML + CSS + JS).
- `robots.txt` — crawler rules + sitemap reference.
- `sitemap.xml` — homepage sitemap.
- `README.md` — project entry point.
- `docs/` — durable project context.
- `docs/code/` — implementation-specific documentation (CSS architecture, JS behavior, assets).

## Current website experience

The current landing page has:

- dark background with cinematic depth
- Avenelix wordmark
- AI/software/system positioning
- abstract central eye/core visual with enhanced depth
- multiple orbiting rings with meditative motion
- subtle motion and cursor interaction
  - pupil tracks cursor
  - core subtly follows cursor
  - entire orb zone tilts slightly toward cursor
  - ambient light gradient follows cursor on background
- loading screen with "Initializing system" sequence
- staggered entrance animations for all UI elements
- responsive mobile layout
- contact action through `hello@avenelix.com`
- Inter font loaded via Google Fonts
- `prefers-reduced-motion` respected for JS interactions as well as CSS
- visible `:focus-visible` styles for keyboard navigation
- skip link for accessibility
- favicon fallbacks (`apple-touch-icon`)
- CSS custom properties for maintainability
- code documentation separated into `docs/code/`

## Current contact model

Public email: `hello@avenelix.com`.

The early-stage requirement is simply: a visitor should be able to email the address and the founder should receive it. A full custom-domain mailbox is unnecessary until there is a real operational need.

## Known limitations

- There is no finished product yet.
- There is no full multi-page portfolio/product website yet.
- The exact service offering is not finalized.
- No SaaS product has been selected/validated yet.
- Google indexing is pending.
- The current landing page is intentionally a first impression rather than the final company website.

## Next practical priorities

1. Finish/verify email forwarding.
2. Get the homepage indexed by Google.
3. Continue evaluating the Avenelix positioning.
4. Identify and validate the first concrete product/problem.
5. Replace the coming-soon page with a real site once there is enough substance to show.
6. Build the first product only after its problem/value proposition is clear.

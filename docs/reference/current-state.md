# Avenelix Current State

_Last updated: 2026-08-13 (Cinematic Dark redesign)_

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
- `docs/code/` — implementation-specific documentation (CSS architecture, JS behavior, assets) updated for Cinematic Dark redesign.
- `docs/strategy/website-redesign-strategy.md` — comprehensive redesign plan with reference site analysis.

## Current website experience

The landing page now features:
- Minimalist hero with large Space Grotesk title (capped at `7rem` for ultra-wide) and subtle accent‑colored radial glow.
- Interactive 3D point cloud scene (fibonacci sphere) rendered on canvas, rotating with cursor movement for cinematic depth; reduces to 200 points on mobile and pauses when the tab is hidden.
- Canvas includes `role="img"` and `aria-label` for screen-reader accessibility.
- Subtle animated dark gradient background creating a cinematic atmosphere.
- Lightweight CSS spinner loader (no heavy animation).
- Scroll‑progress bar at the top of the viewport.
- Clean vision‑first sections (Vision, Direction, Contact) with refined spacing and typography; principle cards stagger in on scroll.
- Responsive layout for mobile, tablet, and desktop; dot navigation and marquee removed.
- Particle canvas and cursor‑glow trail removed.
- Time‑based status greeting in the header.
- Ambient cursor-follow radial light (very subtle).
- Header includes brand favicon mark.
- Full `prefers‑reduced‑motion` support: all animations hidden when requested.
- Accessibility features: skip link, focus‑visible outlines, high contrast colors.

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

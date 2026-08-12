# Avenelix Decision Log

Keep this file focused on decisions that future agents need to know. Do not turn it into a transcript of every chat.

## 2026-08-11 — Domain

**Decision:** Use `avenelix.com` as the primary domain.

**Reason:** The brand name is intended to stand alone and remain broad enough for future services and SaaS products.

## 2026-08-11 — Domain canonicalization

**Decision:** Canonical URL is `https://avenelix.com/`; `www.avenelix.com` redirects to it.

**Reason:** One canonical URL reduces ambiguity and keeps the public brand consistent.

## 2026-08-11 — Hosting

**Decision:** Use Vercel for the website.

**Reason:** The current site is a lightweight static landing page and Vercel provides simple deployment and custom-domain support without unnecessary infrastructure.

## 2026-08-11 — DNS

**Decision:** Use Cloudflare for DNS.

**Reason:** The domain is already using Cloudflare nameservers and Cloudflare provides the DNS and email-routing capabilities needed at this stage.

## 2026-08-11 — Email

**Decision:** Prefer forwarding `hello@avenelix.com` to an existing inbox instead of paying for a full custom mailbox during the early stage.

**Reason:** The current need is reliable inbound contact, not a dedicated mailbox platform.

## 2026-08-11 — Website purpose

**Decision:** Keep the current site as a coming-soon / first-impression experience until there is enough real product/service substance for a full website.

**Reason:** A fake large-company website with invented products or claims would be worse than a strong, honest coming-soon page.

## 2026-08-11 — Visual identity

**Decision:** Use a dark, abstract AI/system visual rather than blue gradients or an Earth/globe.

**Reason:** The visual should communicate intelligence, computation and engineering without suggesting environmental/climate work or looking like a generic AI template.

## 2026-08-11 — Central visual

**Decision:** Evolve the visual toward an abstract eye/core with orbiting rings and subtle cursor interaction.

**Reason:** It gives the site a recognizable identity and suggests perception/intelligence while remaining abstract.

## 2026-08-11 — Architecture philosophy

**Decision:** Avoid premature complexity.

**Reason:** Avenelix is pre-product. Architecture should follow validated product requirements rather than anticipated scale.

## 2026-08-12 — Font loading

**Decision:** Load Inter via Google Fonts `@import` with `font-display:swap`.

**Reason:** The CSS referenced Inter but never loaded it. Visitors without Inter installed received a system sans-serif fallback, breaking the intended typographic identity.

**Do not do:** Rely on local font availability or self-host without a clear caching strategy.

## 2026-08-12 — Reduced-motion cursor interaction

**Decision:** Guard the `pointermove` pupil/core tracking with `matchMedia('(prefers-reduced-motion: reduce)')`.

**Reason:** CSS already disables animations for users who prefer reduced motion, but the JavaScript cursor tracker still ran. This created motion the user explicitly asked to avoid.

**Do not do:** Leave JS-driven interaction active when CSS has already declared reduced-motion preferences.

## 2026-08-12 — Scroll indicator removal

**Decision:** Remove the `.scroll` element from the landing page.

**Reason:** The page has nothing to scroll to on any viewport (`overflow:hidden` on desktop, no additional content on mobile). The indicator made the page feel broken.

**Do not do:** Keep UI indicators that imply functionality that does not exist.

## 2026-08-12 — Focus styles

**Decision:** Add visible `:focus-visible` outline on interactive elements.

**Reason:** Keyboard users had no visible focus indicator on the "Get in touch" button.

**Do not do:** Rely on browser default focus styles or remove focus outlines for aesthetics.

## 2026-08-12 — Cursor style on orb

**Decision:** Remove `cursor:crosshair` from `.orb-zone`.

**Reason:** Crosshair reads as a targeting/precision tool rather than a subtle system interaction. The brand interaction should feel restrained, not cartoonish.

**Do not do:** Use aggressive cursor styles that conflict with the documented brand aesthetic.

## 2026-08-12 — Core cursor follow

**Decision:** Make the central `.core` element subtly translate toward the cursor in addition to the existing pupil tracking.

**Reason:** The brand document calls for interaction that "rewards attention without becoming a gimmick." A very slight core translation (max ~14px) with eased transition makes the system feel alive without being snappy.

**Implementation:** Uses the individual CSS `translate` property so it does not conflict with the existing `breathe` animation on `.core`.

**Do not do:** Make the core movement large, fast, or cartoonish. Do not use `transform` on `.core` for this, as it would override the scale animation.

## 2026-08-12 — CSS custom properties

**Decision:** Extract repeated colors and easing curves into `:root` CSS variables.

**Reason:** The minified CSS repeated literal values for colors. Variables make the codebase maintainable and adjustments faster without hunting for hex values.

**Do not do:** Over-abstract a single-file landing page into a token system that adds complexity without real maintenance benefit.

## 2026-08-12 — Mobile orb visibility

**Decision:** Raise `.orb-zone` opacity on mobile from `.4` to `.6` at `@media(max-width:800px)`.

**Reason:** The primary visual was too faint on phones, weakening the brand's central identity on the viewport where users may first encounter it.

**Do not do:** Overcompensate with glow effects or other additions that make the orb look like a generic AI template.

## 2026-08-12 — Accessibility skip link

**Decision:** Add a visually hidden skip link to `<main>`.

**Reason:** Keyboard users should be able to bypass the header and reach the main content directly.

**Do not do:** Make the skip link permanently visible or style it in a way that breaks the minimal aesthetic.

## 2026-08-12 — Favicon fallbacks

**Decision:** Add `apple-touch-icon` link referencing the existing SVG favicon.

**Reason:** iOS Safari and some RSS readers expect explicit touch-icon declarations. The SVG works as a fallback where PNG is not strictly required.

**Do not do:** Assume a single `favicon.svg` declaration covers all platforms without testing.

## 2026-08-12 — Cinematic site overhaul

**Decision:** Significantly enhance the landing page experience with loading screen, ambient lighting, staggered reveals, and deeper orb system.

**Reason:** The founder wants the site to make a strong impression that signals technical capability and seriousness to visitors. The previous version was solid but lacked the cinematic polish that makes a coming-soon page feel like a credible early-stage technology company.

**Changes:**
- Added loading screen with "Initializing system" text and progress bar (1.4s).
- Added ambient cursor-follow gradient on the background layer.
- Added staggered reveal animations for all UI elements (header, kicker, title, description, CTA, microcopy, label, corner).
- Added second outer halo layer for atmospheric depth.
- Increased particle count from 6 to 8 with varying sizes and opacities.
- Added subtle orb-zone tilt/rotation based on cursor position for a "looking around" effect.
- Extended orbit animation durations for more meditative motion.
- Increased title line-height from `.79` to `.82` for better readability.
- Added `font-weight:300` to description for more refined typographic hierarchy.
- Improved button hover state with reduced lift (-2px instead of -3px) and shadow.
- Added loading screen visibility toggle for `prefers-reduced-motion`.
- Increased grain opacity from `.03` to `.035` for subtle texture presence.

**Do not do:** Add a 3D globe, Earth imagery, or generic blue AI gradients. These violate the documented brand direction. Do not add external dependencies or a build system. Do not sacrifice performance for visual effects.

## 2026-08-12 — Code documentation separation

**Decision:** Create `docs/code/` for implementation-specific documentation.

**Reason:** Strategy docs and implementation docs have different audiences and update frequencies. Separating them makes the documentation system cleaner and prevents code changes from cluttering the strategic context.

**Do not do:** Move `docs/llm/` out of `docs/` in the same change — that is a separate decision with its own reference updates needed.

## 2026-08-12 — Documentation folder reorganization

**Decision:** Organize docs into `strategy/`, `brand/`, `reference/`, `seo/`, `llm/`, and `code/` subfolders.

**Reason:** A flat `docs/` with 10+ files is harder to navigate. Grouping by purpose makes the documentation system clearer for both humans and agents.

**Do not do:** Break existing relative links without updating them. Do not move files in isolation without updating cross-references.

## 2026-08-12 — Website redesign strategy

**Decision:** Create a comprehensive redesign strategy document (`docs/strategy/website-redesign-strategy.md`) based on analysis of clevante.cz, daoism.systems, and noth.in.

**Reason:** The founder wants the Avenelix site to build immediate credibility and communicate massive potential during the pre-product phase. The reference sites demonstrate how dark, minimal, type-forward sites with cinematic loaders create brand authority without claiming products that don't exist.

**Do not do:** Implement the redesign without first documenting the strategy and getting alignment. Do not copy specific visual elements from reference sites—extract principles instead.

## 2026-08-12 — Vision-first expansion

**Decision:** Add scrollable `#vision`, `#direction`, and `#contact` sections below the hero to transform the page from a single-viewport teaser into a narrative experience.

**Reason:** A single hero section communicates "something is here" but not "this is a studio with direction." The expanded structure lets the site communicate philosophy, exploration areas, and contact path without claiming products that don't exist. This is the highest-impact change for building credibility during the pre-product phase.

**Changes:**
- Added `#vision` section with 2-sentence statement and 3 principle cards (Engineering / Product / Systems).
- Added `#direction` section with 4 exploration bullets and explicit "No products announced. Building in public." note.
- Added `#contact` section with `hello@avenelix.com` and 24–48 hour response promise.
- Changed `body` overflow from `hidden` to default (`auto`) so sections are scrollable.
- Added `scroll-behavior:smooth` to `html`.
- Refined hero description: "taking useful problems from first prototype to production — engineering the systems that build the future."
- Added `IntersectionObserver` for fade-in-up scroll reveals on `.section` elements.
- Updated footer to include tagline.

**Do not do:** Add fake product pages, case studies, blog, or news section. Do not add external animation libraries. Keep the single-file architecture.

## 2026-08-12 — Complete site redesign from scratch

**Decision:** Rebuild the entire landing page from scratch with a refined editorial aesthetic, moving away from the previous orb-centric hero toward a typography-first layout with atmospheric background elements.

**Reason:** The founder was not satisfied with the previous design direction. The new approach draws inspiration from reference sites (clevante.cz, daoism.systems, noth.in) and the 11 Main Behance case study, focusing on restraint, editorial typography, cinematic motion, and brand authority rather than visual demos.

**Key changes:**
- Replaced orb-centric hero with typography-first editorial layout
- Added refined loader with abstract orb mark
- Hero now uses 3-line staggered title reveal: "Engineering / intelligent products / for what comes next."
- Orb repositioned as background atmospheric element (right side, 50vw max) with subtle parallax
- Removed pupil/core cursor tracking; orb now has only subtle mouse parallax
- Removed "system initializing" label and signal line
- Added ambient cursor-follow gradient on background
- Refined color palette: added `--card:#0a0a0a` surface, tightened borders
- Principles and direction sections kept but restyled with refined spacing
- Contact section simplified
- Footer simplified to two-line layout
- Mobile: hero becomes single column, orb moves below text, sections stack cleanly
- Accessibility: reduced-motion hides loader and forces all reveals visible

**Do not do:** Reintroduce the orb as central hero element. Add external frameworks or libraries. Add fake products or conversion-focused elements. Break the single-file architecture.

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

## 2026-08-12 — P1–P4 UX improvement pass

**Decision:** Implement the full P1–P4 UX recommendation set in one pass and keep the page fully responsive.

**Reason:** The founder approved all priority tiers (P1 button/link feedback, P2 dot nav + staggered child reveals, P3 scroll parallax + display type + back-to-top + marquee + orb wake, P4 cursor glow + time-based greeting + tokens + skeleton) and asked to "do p1.2.3.4 all of them also make it responsive." These raise perceived quality and credibility during the pre-product phase without adding dependencies.

**Changes:**
- **P1** — `.btn:active` pressed state; `.contact-link` animated underline (pseudo-element width transition) replaces static border-on-hover.
- **P2** — right-side `.dotnav` with active-state `IntersectionObserver` syncing to `#hero/#vision/#direction/#contact`; section children now reveal with staggered `transition-delay` (nth-child 1–5) instead of the whole block at once.
- **P3** — hero orb subtle cursor parallax + "wake" (opacity `.5`→`.85` within proximity radius); `.cursor-glow` trailing radial highlight; `Space Grotesk` display font on titles; `.to-top` button shown after 400px scroll; `.marquee` ticker (duplicated track for seamless loop); `.scroll-depth` progress bar; header `.scrolled` compact padding.
- Added subtle particle background (canvas) with floating particles reacting to cursor.
- **P4** — time-based status greeting (morning/afternoon/evening/late); spacing tokens `--space-xl/--space-lg/--gutter`; skeleton loader (200ms shimmer) before the 1.8s loader.

**Implementation notes:**
- All of the above are guarded by `prefers-reduced-motion`: the media query forces `opacity:1`/`transform:none` and `display:none` on skeleton+loader; the JS skips parallax, glow, wake, marquee duplication, and uses `behavior:auto` for scroll-to-top.
- Dot nav is hidden below 900px (touch users scroll naturally); back-to-top stays.

**Do not do:** Add external animation libraries, a 3D globe, or blue gradients. Keep the single-file architecture. Do not make the orb wake or glow so strong that it reads as a generic AI template.

## 2026-08-13 — Full classy redesign

**Decision:** Replace the existing landing page with a minimalist, typography‑first design that feels elegant and cinematic while staying within brand constraints and the documented CSS architecture.

**Reason:** The prior version, even after extensive UX enhancements, still appeared cluttered and failed to convey the desired classy aesthetic.

**Changes:**
- Removed marquee, particle canvas, dot navigation, and orbital rings.
- Introduced a clean hero with large Space Grotesk title and subtle accent‑colored radial background glow.
- Added a subtle animated dark gradient (`body::before`) for cinematic atmosphere.
- Added ambient cursor-follow radial light and a light grain overlay for depth.
- Implemented a lightweight CSS spinner loader (no heavy animation) with optional shimmer skeleton.
- Added a scroll‑progress bar at the top.
- Retained responsive layout (breakpoint at `800px`, `100svh` with `620px` fallback), reduced‑motion support, skip link, SEO metadata, and vision‑first sections (Vision, Direction, Contact) with refined spacing and typography.
- Aligned CSS custom properties with `docs/code/css-architecture.md` (`--muted`, `--dim` tokens restored).
- Updated status greeting to reflect time of day.

**Do not do:** Re‑introduce complex animations, external libraries, or heavy visual effects that detract from the clean, classy presentation.

## 2026-08-13 — Sync code docs with Cinematic Dark redesign

**Decision:** Update `docs/code/css-architecture.md`, `docs/code/js-behavior.md`, `docs/code/implementation.md`, and `docs/code/README.md` to match the new single-file Cinematic Dark implementation.

**Reason:** Code docs were out of sync with the latest redesign (described orb system, old loading screen, particles, etc.). Accurate implementation docs are required for maintainability and future agent handoffs.

**Changes:**
- `css-architecture.md`: restored `--muted`/`--dim`, updated layer order (removed orb/particles; kept loader/grain/ambient/header/copy/scroll-progress), documented gradient/grain animations, updated breakpoint and mobile notes.
- `js-behavior.md`: replaced orb/pupil/core modules with spinner loader, ambient cursor light, scroll progress, and section reveal.
- `implementation.md`: updated interaction system and animation choreography to reflect current page.
- `docs/code/README.md`: added current design direction note.

**Do not do:** Leave code docs stale after design changes. Do not add external build tooling docs until architecture changes.

## 2026-08-13 — Add interactive 3D point cloud scene

**Decision:** Add a vanilla JS + canvas 3D point cloud (fibonacci sphere) behind the hero to give an interactive, cinematic depth effect inspired by edolus.com.

**Reason:** The founder wants the site to feel more impressive and aligned with high-end cinematic dark aesthetics. A lightweight, self-contained 3D point cloud adds depth and interactivity without external libraries or breaking the single-file constraint.

**Changes:**
- Added `<canvas id="scene" class="scene-canvas">` as a fixed background layer.
- Implemented a 400-point fibonacci sphere rendered with 2D canvas, rotating based on `pointermove`.
- Points use the brand accent color (`#d9ff8c`) with depth-based alpha and size.
- Guarded by `prefers-reduced-motion:reduce`; scene is skipped when reduced motion is preferred.
- Updated `docs/code/css-architecture.md`, `docs/code/js-behavior.md`, and `docs/code/implementation.md` to include the scene layer and rendering logic.

**Do not do:** Use external 3D libraries (Three.js/PlayCanvas) or heavy WebGL shaders that increase bundle size/complexity. Do not make the scene so busy that it distracts from typography.

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

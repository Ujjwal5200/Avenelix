# Avenelix — Website Redesign Strategy

_Last updated: 2026-08-12_

## 1. Reference Site Analysis

### 1.1 clevante.cz
- **Aesthetic:** Near-black background (`#08090b`), Montserrat typography, 3D monogram GLB model, studio HDRI lighting.
- **Motion:** Preloader with head-start asset loading, smooth section transitions, subtle scroll-based reveals.
- **Layout:** Single-page with clear sections (hero, services, projects, about, contact, FAQ). Dense but scannable.
- **UX pattern:** Loader-first experience that transitions into a structured narrative. Strong use of structured data for entity recognition.
- **Takeaway for Avenelix:** The loader is not just functional—it sets expectation. The 3D monogram creates instant memorability without being literal.

### 1.2 daoism.systems
- **Aesthetic:** Pure black (`#000000`), minimal chrome, dense typographic hierarchy, no decorative imagery.
- **Motion:** Svelte-based transitions, subtle opacity/transform reveals on scroll.
- **Layout:** Single-column narrative with strong headline-first hierarchy. Very text-forward but spatially generous.
- **UX pattern:** The site feels like reading a manifesto. Every element supports the "engineering studio" positioning.
- **Takeaway for Avenelix:** A site can be almost entirely type-driven and still feel premium. The absence of decoration becomes a deliberate aesthetic choice.

### 1.3 noth.in
- **Aesthetic:** Fashion-editorial black/white, IBM Plex Mono accents, video hero background, custom artistic loader.
- **Motion:** Artistic loader sequence (10+ images cycling), smooth taxi.js page transitions, cursor-triggered reveals.
- **Layout:** Asymmetric hero, minimal nav, statement-first copy ("Not a style, a perspective. Because Nothin' is Everythin'.").
- **UX pattern:** The loader is an artistic statement. The site treats the visitor as an audience, not a user.
- **Takeaway for Avenelix:** A coming-soon page can be an experience, not just a placeholder. The loader sets the brand tone before any copy is read.

---

## 2. Visual Design Concept

### 2.1 Typography

**Primary:** Inter (already loaded) — used for all UI, body, and functional text.
**Display/Statement:** Add a secondary typeface for headlines and vision statements.

**Recommended:** "Space Grotesk" or "Syne" — both have the technical-yet-human quality that matches Avenelix's brand without being overused.

- **Headlines:** Display face, tight letter-spacing, large scale (`clamp(4rem, 12vw, 11rem)`).
- **Body:** Inter, weight 300–400, line-height 1.6, max-width 620px for readability.
- **Accent/Label:** Inter, weight 500, uppercase, wide letter-spacing (`.18em`), small size (10–11px).
- **Monospace detail:** Use `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas` for system labels, coordinates, or technical annotations — this reinforces the "systems" language.

### 2.2 Color Theory

**Base:** `#050505` (current) — keep.
**Surface:** `#0a0a0a` for elevated cards or panels.
**Text primary:** `#f5f5f5` — keep.
**Text secondary:** `#858b92` — keep.
**Accent:** Keep the current `#d9ff8c` (pale lime) — it is distinctive and works against black. Use it sparingly for: loading bar, focus states, single accent lines, status indicators.
**Border/structural:** `rgba(255, 255, 255, .06)` — keep, but use for actual structural dividers, not decoration.

**Gradient:** The current title gradient (`#fff → #aab0b8 → #fff`) works. Consider a very subtle warm shift (`#fff → #b8b0a8 → #fff`) to differentiate from the cold-blue AI palette.

### 2.3 Motion & Interaction Style

**Choreography model:** Inspired by noth.in's loader and daoism.systems' scroll reveals.

1. **Loader (0–1.5s):**
   - Not just a progress bar. Show a single rotating/breathing abstract mark or a typewriter-style system message.
   - Example: "initializing system." → "loading context." → "ready." with a blinking cursor.
   - Fade out with a slight scale-up, revealing the page beneath.

2. **Entrance reveals (1.5s+):**
   - Staggered opacity + translateY + blur-to-sharp on hero elements.
   - Title letters or words reveal sequentially (not all at once).
   - Orb/core materializes with a scale-from-0 animation.

3. **Scroll-triggered reveals (future):**
   - As the page gains sections, use IntersectionObserver for reveal-on-scroll.
   - Keep easing consistent: `cubic-bezier(.22, .61, .36, 1)` for all transitions.

4. **Micro-interactions:**
   - Hover states: lift (-2px) + shadow expansion, not color shifts.
   - Links/buttons: underline grows from center or left, not instant.
   - Cursor: keep default; no crosshair or custom cursor.

### 2.4 Visual Hierarchy

```
LEVEL 1 — STATEMENT
  Giant display type (vision headline)
  Full viewport width, tight line-height

LEVEL 2 — CONTEXT
  Kicker/label (small caps, accent color or muted)
  Description body (Inter light, constrained width)

LEVEL 3 — ACTION
  Single primary CTA (minimal button)
  Secondary: microcopy or status line

LEVEL 4 — SYSTEM
  Orb/core visual (abstract, animated)
  Particles, grain, grid (atmospheric depth)
```

---

## 3. Structural Wireframe Outline

### 3.1 Current page (single-section)

```
┌─────────────────────────────────────────┐
│ HEADER: AVENELIX              Building…  │
├─────────────────────────────────────────┤
│                                         │
│  AI · Software · Systems                │
│                                         │
│  BUILDING                               │
│  WHAT'S NEXT.                           │
│                                         │
│  [Description body — 2 lines max]       │
│                                         │
│  [Get in touch]                         │
│  No noise. Just building.               │
│                                         │
│              [ORB SYSTEM]               │
│                                         │
│  system initializing                    │
│                                         │
├─────────────────────────────────────────┤
│ © 2026 Avenelix                         │
└─────────────────────────────────────────┘
```

### 3.2 Expanded vision-first page (target)

```
┌─────────────────────────────────────────┐
│ HEADER: AVENELIX              Status     │
├─────────────────────────────────────────┤
│                                         │
│  AI · Software · Systems                │
│                                         │
│  We build the systems                  │
│  that build the future.                 │
│                                         │
│  [1-line description]                   │
│                                         │
│  [Get in touch]                         │
│                                         │
│              [ORB SYSTEM]               │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ── VISION ──                           │
│                                         │
│  From idea to production.               │
│  We take useful problems and            │
│  turn them into AI-powered systems,     │
│  software, and products.                │
│                                         │
│  [Key principles — 3 columns]           │
│  Engineering  │  Product  │  Systems    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ── DIRECTION ──                        │
│                                         │
│  Currently exploring:                    │
│  • AI infrastructure                     │
│  • Autonomous systems                    │
│  • Developer tools                       │
│                                         │
│  [Not claiming products that don't exist]│
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ── CONTACT ──                          │
│                                         │
│  hello@avenelix.com                     │
│                                         │
│  [Status: Building in public]           │
│                                         │
├─────────────────────────────────────────┤
│ © 2026 Avenelix                         │
└─────────────────────────────────────────┘
```

**Key structural changes from current:**
- Remove the misleading "Scroll" indicator entirely (already done).
- Add 2–3 scrollable sections below the hero (vision, direction, contact) — but keep the hero as a contained first impression.
- Each section should feel like a chapter, not a wall of text.
- Use generous vertical spacing (`120px–200px` between sections on desktop).
- Keep the orb system visible but smaller in subsequent sections, or let it fade into the background atmosphere.

---

## 4. Content Strategy

### 4.1 Messaging hierarchy

**Primary statement (hero):**
> "We build the systems that build the future."

**Secondary statement (vision section):**
> "Avenelix is an independent AI and software venture exploring useful systems, products, and ideas — from first prototype to production."

**Tertiary / supporting:**
- "Engineering intelligent products for what comes next."
- "AI systems, software and SaaS — built from idea to production."
- "No noise. Just building."

### 4.2 Tone guidelines

- **Authoritative but not arrogant.** Avoid "we revolutionize" or "the future of X." Use "we build," "we explore," "we take X and turn it into Y."
- **Specific enough to be credible, broad enough to be honest.** Since there is no product yet, avoid naming fake products. Instead, name *categories of problems* you are interested in.
- **Technical precision.** Use correct terminology. If you say "AI orchestration," mean it. If you say "RAG," know what it implies.
- **Restrained.** One idea per sentence. One claim per paragraph. Let whitespace do the work.

### 4.3 Stakeholder communication

For early stakeholders (investors, potential collaborators, future hires):

1. **The 10-second read:** The headline + orb visual + "Get in touch" should communicate "serious technical studio" immediately.
2. **The 30-second read:** The hero description should answer "what do you do?" without being vague.
3. **The 2-minute read:** The vision section should answer "why does this matter?" and "what is your philosophy?"
4. **The deep read:** The direction section should answer "what are you actually working on?" — this is where you can be slightly more specific about problem spaces without claiming a finished product.

---

## 5. Implementation Roadmap

### Phase A — Cinematic polish (this week)

**Goal:** Make the existing single-page experience feel intentional and premium.

- [ ] Add artistic loader sequence (text-based: "initializing system." / "loading context." / "ready.").
- [ ] Refine entrance choreography: title reveals word-by-word, not line-by-line.
- [ ] Increase orb depth: second outer halo (already added), atmospheric glow layers.
- [ ] Add ambient cursor light (already added).
- [ ] Extract CSS custom properties (already done).
- [ ] Update `decision-log.md` with the cinematic overhaul decision.

**Status:** Mostly complete. Remaining: word-by-word title reveal and loader text sequence.

### Phase B — Vision-first expansion (next 1–2 weeks)

**Goal:** Add 2–3 scrollable sections that communicate vision and direction without claiming products.

- [ ] Add `#vision` section below hero.
  - 2–3 sentence vision statement.
  - 3-column principle cards (Engineering / Product / Systems).
  - Fade-in on scroll using IntersectionObserver.
- [ ] Add `#direction` section.
  - "Currently exploring:" with 3–4 problem-space bullets.
  - Explicit note: "No products announced yet. Building in public."
- [ ] Add `#contact` section (or enhance existing CTA).
  - `hello@avenelix.com` as the primary contact.
  - Status line: "Building in public. Reach out if you're working on something interesting."
- [ ] Ensure `body` overflow changes from `hidden` to `auto` only when additional content exists.
- [ ] Update `current-state.md` and `file-map.md`.

### Phase C — Brand refinement (next 2–4 weeks)

**Goal:** Strengthen the visual identity beyond the current orb system.

- [ ] Evaluate favicon mark at 16x16 and 23x23px. If it reads as generic, reframe (per `working-principles.md`).
- [ ] Add secondary display typeface (Space Grotesk or Syne) via Google Fonts.
- [ ] Create a favicon.ico fallback for legacy browsers.
- [ ] Add `manifest.json` for PWA-ready behavior (no functionality, just the file).

### Phase D — Product site transition (when product is validated)

**Goal:** Replace the coming-soon page with a functional product site.

- [ ] Lock final brand direction (logo, color, typography).
- [ ] Choose framework based on actual product requirements (Next.js, Astro, or continue static).
- [ ] Add multi-page structure: Home, Product, About, Contact.
- [ ] Add auth, billing, and application layer when the product is ready.
- [ ] Keep the dark/abstract aesthetic but evolve the central visual to represent the actual product.

---

## 6. Decision Record

**Verdict:** Evolve the current site into a vision-first, scrollable experience with an artistic loader, refined typography hierarchy, and 2–3 narrative sections below the hero.

**Why:** The current single-section page is solid but limited. It communicates "something is here" but not "this is a serious studio with taste and direction." The reference sites show that dark, minimal, type-forward sites with cinematic loaders create immediate credibility without claiming products that don't exist.

**Do not do:** Add a 3D globe, Earth imagery, generic blue gradients, or a fake product page. Do not introduce a framework until the product is selected. Do not add a blog or "news" section just to have content.

**Plan:**
1. Implement Phase A (loader + polish) in current `index.html`.
2. Implement Phase B (vision/direction sections) as scrollable additions.
3. Update all relevant docs (`current-state.md`, `decision-log.md`, `file-map.md`, `architecture.md` if structure changes).

**Risk/uncertainty:** The expanded page will need `body { overflow: auto }` on all viewports, which changes the current mobile behavior. This is acceptable because there will be actual content to scroll to. The orb should remain visible but smaller or fade into the background after the hero.

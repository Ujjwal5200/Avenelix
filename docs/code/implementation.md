# Landing Page Implementation

## File structure

```
/
├── index.html            # Single-file landing page: HTML + CSS + JS
├── robots.txt            # Crawler rules
├── sitemap.xml           # Search discovery
└── assets/
    └── brand/
        └── favicon.svg   # Canonical brand mark
```

## Architecture rule

The landing page is intentionally a single HTML file. Do not introduce a framework, build system, or `src/` structure until the product requires it.

## Key patterns

- **CSS**: Embedded in `<style>` within `index.html`. Uses CSS custom properties in `:root` for colors and easing curves.
- **JS**: Embedded in `<script>` at the end of `<body>`. Wrapped in an IIFE to avoid global scope pollution.
- **Fonts**: Loaded via Google Fonts `@import` with `font-display:swap`.
- **Responsive**: Uses `clamp()` for fluid typography, `svh` for viewport height, and a single breakpoint at `800px`.
- **Accessibility**: `prefers-reduced-motion` disables all animations and JS interactions. Skip link provided. Focus-visible styles on interactive elements.

## Interaction system

- **Pupil tracking**: `.pupil` translates toward cursor within `.orb-zone`.
- **Core follow**: `.core` translates slightly toward cursor using individual `translate` property.
- **Orb tilt**: `.orb-zone` rotates subtly based on cursor position for a "looking around" effect.
- **Ambient light**: A radial gradient follows the cursor on the background layer.
- **Guards**: All cursor interactions are disabled when `prefers-reduced-motion: reduce` is active.

## Animation choreography

- **Loading screen**: 1.4s initialization sequence with progress bar.
- **Entrance**: Staggered reveal animations on header, kicker, title, description, CTA, microcopy, label, and corner.
- **Continuous**: Orb breathe, core spin, iris breathe, halo pulse, orbit rotations, grain, sweep, signal, and particle drift.

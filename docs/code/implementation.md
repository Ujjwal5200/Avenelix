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

- **CSS**: Embedded in `<style>` within `index.html`. Uses CSS custom properties in `:root` for colors, spacing, and easing curves.
- **JS**: Embedded in `<script>` at the end of `<body>`. Wrapped in an IIFE to avoid global scope pollution.
- **Fonts**: Loaded via Google Fonts `@import` with `font-display:swap`.
- **Responsive**: Uses `clamp()` for fluid typography, `svh` for viewport height, and a single breakpoint at `800px`.
- **Accessibility**: `prefers-reduced-motion` disables all animations and JS interactions. Skip link provided. Focus-visible styles on interactive elements.

## Interaction system

- **Ambient light**: A radial gradient follows the cursor on the background layer via CSS variables.
- **Scroll progress**: A fixed top bar reflects reading progress.
- **Section reveal**: IntersectionObserver triggers fade-in for `.section` elements.

## Animation choreography

- **Loading screen**: 800ms spinner fade-out.
- **Continuous**: Animated dark gradient (`body::before`), grain overlay, and spinner rotation.
- **Scroll**: Sections reveal with a subtle fade+translate when they enter the viewport.

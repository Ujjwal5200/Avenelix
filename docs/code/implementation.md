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

- **3D point cloud scene**: A fibonacci sphere rendered on a full-screen canvas, rotating based on cursor position. Uses 400 points on desktop and 200 on mobile. Pauses when the tab is hidden.
- **Ambient light**: A radial gradient follows the cursor on the background layer via CSS variables.
- **Scroll progress**: A fixed top bar reflects reading progress.
- **Section reveal**: IntersectionObserver triggers fade-in for `.section` elements.
- **Brand mark**: Favicon SVG displayed next to the brand name in the fixed header.

## Animation choreography

- **Loading screen**: 800ms spinner fade-out.
- **Continuous**: Animated dark gradient (`body::before`), grain overlay, and spinner rotation.
- **3D scene**: Interactive point cloud rotates with eased interpolation toward cursor position; pauses on tab hide.
- **Scroll**: Sections reveal with a subtle fade+translate when they enter the viewport.
- **Principle cards**: Staggered reveal with delayed transitions inside `.section.visible`.

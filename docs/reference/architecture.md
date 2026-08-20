# Repository Architecture

## Principle
Keep the repository simple now, scalable later. The landing page is framework-free and deployable as static files, with HTML, CSS and JS separated so visual work can evolve safely.

## Current structure

```text
Avenelix/
├── index.html
├── css/
│   ├── style.css
│   ├── color-system.css
│   ├── studio.css
│   ├── entrance.css
│   ├── page-transition.css
│   ├── responsive-motion.css
│   └── runtime-fixes.css
├── js/main.js
├── favicon.svg
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── assets/brand/favicon.svg
├── assets/brand/logo.svg
└── docs/
```

## Runtime ownership

- HTML owns content, semantics and SEO.
- CSS owns layout, tokens, responsive behavior and visual effects.
- Locomotive Scroll 5 owns desktop smooth scrolling; touch/tablet stays native.
- GSAP owns animation choreography.
- Three.js owns decorative particles only.
- `main.js` owns initialization, fallbacks and coordination between these systems.

## Reliability rules

1. Content must remain visible without JavaScript.
2. A failed CDN must not permanently block the page.
3. The preloader must have both JS completion logic and a CSS fail-safe.
4. Never run Lenis and Locomotive as competing scroll engines.
5. Never let Three.js be required for semantic content or navigation.
6. Reduced-motion must disable decorative motion and smooth scrolling.
7. Touch devices get a simpler, native interaction model.
8. Expensive rendering is capped by device pixel ratio and particle count and pauses when hidden.
9. Use real `<a href>` links for crawlability; animation may enhance navigation but must not replace the link.

## Premium motion

- Cinematic initial Avenelix entrance.
- Weighted desktop smooth scrolling.
- Staggered section/text reveals.
- Orbital rings, nodes, core pulse and cursor response.
- Desktop-only magnetic cursor and card tilt.
- Page transition overlay for future internal routes.

## SEO/runtime boundary

SEO metadata and structured data live in `index.html`; crawl files remain at the repository root. Do not add SEO-only pages until Avenelix has real content to support them.

## Scaling path

Do not introduce React/Next/Vite merely to organize this landing page. Add a build system only when there is genuine multi-page application complexity, reusable components, package management, testing, or backend integration.

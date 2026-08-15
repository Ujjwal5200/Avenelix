# Repository Architecture

## Principle
Keep the repository simple now, scalable later. The landing page remains framework-free and deployable as static files, but presentation concerns are separated so visual work can evolve without turning `index.html` into a monolith.

## Current structure

```text
Avenelix/
├── index.html                 # Semantic markup, SEO metadata and asset entry points
├── css/
│   └── style.css              # Design system, responsive layout and visual effects
├── js/
│   └── main.js                # Motion orchestration, scrolling, Three.js and fallbacks
├── robots.txt
├── sitemap.xml
├── assets/
│   └── brand/
│       └── favicon.svg
└── docs/
    ├── strategy/
    ├── brand/
    ├── reference/
    ├── seo/
    ├── llm/
    └── code/
```

## Runtime architecture

- HTML owns content and semantic structure.
- CSS owns tokens, layout, responsive behavior and purely visual effects.
- `main.js` owns behavior and animation orchestration.
- Locomotive Scroll is the single smooth-scroll engine on desktop; touch devices retain native scrolling.
- GSAP owns animation choreography. It must not become a second scrolling engine.
- Three.js is decorative and independent of content rendering.
- CDN failure must never hide the page content.
- `prefers-reduced-motion` disables smooth scrolling, transition overlays, Three.js and decorative animation.
- Visibility changes pause the Three.js render loop to reduce CPU/GPU use.

## Engineering rules

1. Keep content visible without JavaScript.
2. Keep mobile/touch interaction simpler than desktop rather than forcing desktop effects onto touch.
3. Use one owner per concern: Locomotive for scroll, GSAP for animation, Three.js for decorative rendering.
4. Never add animation merely because it is technically possible; motion must support hierarchy or spatial depth.
5. Cap expensive effects with device pixel ratio and responsive particle counts.
6. Respect reduced-motion preferences.
7. Prefer `requestAnimationFrame` for continuous visual loops.
8. Avoid layout-triggering animation where transform/opacity can be used.
9. Add meaningful architecture changes to this document and `docs/reference/file-map.md`.
10. Keep dependencies CDN-based only while this remains a static landing page; introduce a build system only when real application complexity justifies it.

## Premium motion system

- Page-entry/exit transition overlay.
- Weighted desktop smooth scrolling.
- Section reveal choreography with blur-to-sharp and staggered elements.
- Subtle cursor parallax on the orbital system.
- Layered orbital rings with different speeds and orientations.
- Core breathing glow and periodic pulse.
- Moving orbital nodes with depth-like scale/opacity modulation.
- Scroll-progress indicator.
- Interactive ambient cursor light.
- Three.js background field with responsive particle budgets.

## Performance and resilience

The decorative layers are `pointer-events:none`. The Three.js renderer is capped at 1.5 device pixel ratio and uses smaller particle budgets on smaller screens. Rendering pauses while the tab is hidden. If Locomotive, GSAP or Three.js fails, semantic content remains accessible and native scrolling remains usable.

## Scaling path

Do not introduce React/Next/Vite or a component system just to organize this landing page. Move to a build system when there is a genuine multi-page application, reusable component layer, package management requirement, testing requirement, or backend integration. At that point use a deliberate `src/`, `public/`, and application architecture rather than incrementally mixing frameworks into the static page.

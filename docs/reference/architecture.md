# Repository Architecture

## Principle
Keep the repository simple now, scalable later. The landing page remains static, but presentation code is separated so animation and styling can evolve safely.

## Current structure
```text
Avenelix/
├── index.html                 # Semantic production entry page
├── css/
│   └── style.css              # Design system, responsive layout and visual effects
├── js/
│   └── main.js                # Locomotive Scroll, GSAP, Three.js and interaction logic
├── robots.txt
├── sitemap.xml
├── assets/
│   └── brand/favicon.svg
└── docs/
    └── ...
```

## Motion architecture
- Locomotive Scroll 5.0.1 is the sole smooth-scroll engine; do not run Lenis separately.
- GSAP handles entrance/reveal and orbital choreography.
- Three.js is decorative and disposable; content must work without WebGL.
- Desktop uses smooth scrolling; tablet/phone use native touch scrolling.
- Scroll offsets and per-element `data-scroll-*` attributes control transition timing.
- `prefers-reduced-motion` disables motion.

## Why code is separated
The previous single-file implementation became difficult to modify safely as the animation system grew. HTML, CSS and JS are now independent without introducing a framework or build system. This is a deliberate maintainability improvement, not an invitation to add unnecessary architecture.

## Rules
1. Keep deployment entry points at root.
2. Reusable visual assets stay under `assets/`.
3. Page styling belongs in `css/`; interaction/motion belongs in `js/`.
4. Do not add a framework until product requirements justify it.
5. Update this file and `docs/reference/file-map.md` when structure changes.

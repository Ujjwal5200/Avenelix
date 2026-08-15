# Locomotive Scroll

## Decision
Avenelix uses Locomotive Scroll 5.0.1 as the single smooth-scroll engine for the premium desktop experience. Do not run a separate Lenis instance alongside it; Locomotive Scroll 5 is itself built on Lenis.

## Configuration
- Desktop smooth scrolling enabled.
- `lerp: 0.075` for restrained inertia.
- `multiplier: 0.9` to avoid over-fast wheel movement.
- `getDirection` and `getSpeed` enabled for visual choreography.
- Global in-view offset: `['12%', '8%']`.
- Per-element `data-scroll-offset` used where transitions need different timing.
- `data-scroll-speed` and `data-scroll-delay` reserved for subtle parallax.
- Tablet and smartphone use native scrolling; touch devices should not be forced into desktop-style inertia.
- Fixed header is accounted for in programmatic scroll-to offsets.

## Integration rules
- Locomotive Scroll owns smooth scrolling; do not add Lenis separately.
- GSAP owns visual transitions, not scrolling.
- Three.js remains independent and decorative.
- Content must remain visible if Locomotive Scroll or any CDN script fails.
- `prefers-reduced-motion` disables smooth scrolling and motion effects.

## Quality target
Scrolling should feel continuous and weighted, with subtle section reveals and parallax. Avoid excessive speed, exaggerated offsets, or motion that makes reading difficult.

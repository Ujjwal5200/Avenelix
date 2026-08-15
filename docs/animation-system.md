# Avenelix Animation System

## Design direction
- Premium, cinematic, dark, restrained, futuristic.
- Motion is part of the brand identity; do not remove Three.js, orbital visuals, particles, GSAP, or smooth scrolling merely for simplicity.
- Animation must enhance content, never gate rendering.

## Current stack
- Locomotive Scroll 5 for desktop smooth scrolling; native scrolling on touch/tablet.
- GSAP for cinematic reveals, orbital choreography and micro-interactions.
- Three.js for the atmospheric particle field.
- CSS for glass/blur, grain, hover states and lightweight transitions.
- No second smooth-scroll engine alongside Locomotive Scroll.

## Studio interaction layer
- Split-word headline reveals with clip/translate motion.
- Magnetic CTA/contact/brand interaction on fine pointers.
- Custom inertial cursor with contextual labels on fine pointers only.
- Perspective card tilt and cursor spotlight on exploration cards.
- Fixed header transitions between transparent and glass states.
- Subtle film-grain overlay to unify the visual system.
- Page entry/exit cover transitions for same-origin navigation.
- Scroll progress indicator.
- Orbital cursor/parallax response and independent ring/node motion.
- Rare core energy pulses instead of constant high-intensity effects.

## Quality bar
The target is the feeling of a high-end digital production studio: smooth enough that motion is felt before it is consciously noticed. Effects should have hierarchy, consistent easing and restraint. Avoid adding effects simply because they are technically possible.

## Performance rules
- Keep WebGL decorative and disposable; content must remain fully usable if WebGL/CDN/animation libraries fail.
- Cap device pixel ratio and particle count.
- Never run desktop cursor effects on coarse pointers.
- Avoid scroll handlers that force layout; use transforms, requestAnimationFrame and Locomotive's scroll events.
- Pause the Three.js renderer when the document is hidden.
- Avoid excessive blur, glow, and simultaneous animations.
- Respect `prefers-reduced-motion`.
- Keep touch scrolling native-feeling; do not force desktop inertia on phones.

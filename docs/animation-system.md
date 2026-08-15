# Avenelix Animation System

## Design direction
- Premium, cinematic, dark, restrained, futuristic.
- Motion is part of the brand identity; do not remove Three.js, orbital visuals, particles, GSAP, or smooth scrolling merely for simplicity.
- Animation must enhance content, never gate rendering.

## Current goals
- Smooth premium scrolling on desktop while preserving native-feeling touch scrolling on phones.
- Layered orbital depth with independent ring motion, moving signal nodes, subtle core pulses, and cursor/scroll parallax.
- Organic but restrained Three.js particle field with responsive particle counts.
- Cinematic section reveals and micro-interactions.
- Strong responsive behavior across phone, tablet, laptop and large desktop.
- Respect `prefers-reduced-motion`, coarse pointers, and low-capability devices.

## Performance rules
- Keep WebGL decorative and disposable; content must remain fully usable if WebGL/CDN/animation libraries fail.
- Cap device pixel ratio and particle count.
- Never run desktop cursor effects on coarse pointers.
- Avoid scroll handlers that force layout; use requestAnimationFrame and transforms.
- Avoid excessive blur, glow, and simultaneous animations.

## Quality bar
The site should feel polished like a high-end digital studio: continuous motion, intentional easing, depth, hierarchy, responsive composition, and restrained interaction. Avoid novelty effects that distract from the message.

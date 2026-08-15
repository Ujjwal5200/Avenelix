# Avenelix Animation System

## Design direction
- Premium, cinematic, dark, restrained, futuristic.
- Motion is part of the brand identity; do not remove Three.js, orbital visuals, particles, GSAP, or smooth scrolling merely for simplicity.
- Animation must enhance content, never gate rendering.

## Current system
- Lenis smooth wheel scrolling on desktop; touch scrolling remains native for coarse-pointer devices.
- GSAP/ScrollTrigger handles cinematic hero and section reveals.
- Header transitions into a translucent/blurred compact state after scrolling.
- Orbital rings rotate independently at slow, opposing rates.
- Orbit nodes travel on independent elliptical trajectories and subtly vary scale/opacity.
- Core has breathing motion plus rare outward system pulses.
- Orbit responds to cursor position and cursor velocity on fine-pointer devices.
- Scroll progress subtly changes orbit tilt and depth.
- Three.js particles use adaptive counts and low-amplitude flow/noise motion; pointer movement influences the field on fine-pointer devices.
- Buttons, cards, lists and contact links use restrained high-end micro-interactions.
- Mobile/tablet/desktop layouts use different visual scale/opacity and disable desktop-only pointer effects on coarse pointers.
- `prefers-reduced-motion` disables decorative motion.

## Performance rules
- Keep WebGL decorative and disposable; content must remain fully usable if WebGL/CDN/animation libraries fail.
- Cap device pixel ratio and particle count.
- Never run desktop cursor effects on coarse pointers.
- Avoid scroll handlers that force layout; use requestAnimationFrame and transforms.
- Avoid excessive blur, glow, and simultaneous animations.

## Quality bar
The site should feel polished like a high-end digital studio: continuous motion, intentional easing, depth, hierarchy, responsive composition, and restrained interaction. Prefer refinement and choreography over adding effects for their own sake.

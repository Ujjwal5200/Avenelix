# Avenelix Animation System

## Design direction
- Target: high-end digital production studio / technology studio quality, not a conventional SaaS landing page.
- Preserve the dark technical canvas, lime/mint signal palette, orbital identity and strong typography.
- Motion and 3D are first-class brand elements. Do not remove them merely to simplify implementation.
- The experience should feel cinematic and alive while keeping content immediately usable.

## Runtime stack
- TypeScript + Vite as the frontend foundation.
- Locomotive Scroll 5 for desktop smooth scrolling; native-feeling scrolling on touch/tablet.
- GSAP + ScrollTrigger for all choreography, reveals, parallax and micro-interactions.
- Three.js for the hero 3D scene, particles, glass/crystal geometry, orbital rings and controlled bloom.
- CSS for glass, grain, atmospheric gradients and lightweight transitions.
- Keep one animation owner per concern; do not add a second smooth-scroll engine.

## 3D direction
- Prefer original/procedural Three.js hero geometry for the Avenelix identity: translucent crystal/icosahedral core, fine wireframe shell, orbital rings and restrained particle field.
- Use physically based materials, environment lighting, ACES tone mapping and selective bloom rather than generic neon effects.
- External GLB/GLTF/Spline assets may be introduced when they add a materially stronger focal object; assets must be licensed/owned and optimized before shipping.
- Avoid random stock 3D models that weaken the brand or look like template content.

## Studio interaction layer
- Cinematic preloader: logo → staged technical status → controlled reveal into the site.
- Split-word/clip headline reveals and section choreography.
- Custom inertial cursor with contextual labels on fine pointers only.
- Magnetic/perspective CTA and card interactions on fine pointers.
- Glass navigation/header state on scroll.
- Scroll-linked orbital parallax and depth changes.
- Rare energy pulses and subtle bloom instead of constant high-intensity effects.
- Same-origin page transition overlay with controlled exit timing.
- Scroll progress indicator and subtle film grain.

## Visual hierarchy
1. Content and typography.
2. Hero 3D focal object.
3. Atmospheric depth/gradient.
4. Scroll choreography.
5. Cursor/micro-interactions.
6. Secondary decorative detail.

Do not allow effects to compete with the headline, CTA or readable product/company positioning.

## Responsive quality bar
- Desktop/laptop: full 3D scene, bloom, particles, smooth scroll, cursor and richer interaction.
- Tablet: lower 3D/particle density and native-feeling touch scroll.
- Phone: preserve the hero object and visual identity, but reduce geometry density, bloom, blur and interaction complexity; content must remain the dominant layer.
- Never let decorative WebGL determine content height or block rendering.
- Respect `prefers-reduced-motion`.

## Performance/failure rules
- WebGL is decorative and disposable; HTML content remains usable without it.
- Cap device pixel ratio and particle count.
- Pause rendering when the document is hidden.
- Dispose Three.js resources when the scene is destroyed.
- Avoid excessive blur, bloom and simultaneous animations.
- Test deployed builds on phone, tablet, laptop and large desktop before merging to `main`.

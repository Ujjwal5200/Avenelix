# Avenelix Agent Handoff

## Current state
- Avenelix is an early-stage independent AI/software venture website.
- The founder wants the public site to reach high-end digital production-studio quality: visually impressive, cinematic, interactive, 3D/motion-rich and credible enough to present as a serious software studio.
- Existing Three.js/orbital/particles, GSAP choreography, smooth scrolling, cursor response, glow, preloader and page transitions are intentional design features and should be improved rather than removed by default.
- The site must remain responsive across phones, tablets, laptops and large desktops.

## Explicit design preference
- Prioritize perceived quality, polish, depth and interaction over minimal implementation size.
- Heavy libraries are acceptable when they materially improve the experience.
- Prefer original/procedural 3D art or properly licensed optimized GLB/GLTF/Spline assets over generic stock 3D objects.
- Keep the Avenelix dark technical + lime/mint visual language coherent across the site.

## Current technical direction
- TypeScript + Vite runtime on the studio branch.
- Locomotive Scroll 5 for desktop smooth scroll; native-feeling touch/tablet scrolling.
- GSAP + ScrollTrigger for motion choreography.
- Three.js for the hero 3D scene, particles, procedural crystal geometry, orbital rings and selective bloom/post-processing.
- CSS for glass, grain, gradients and lightweight transition styling.
- WebGL must remain decorative/fail-safe; content cannot depend on it.

## Premium studio quality bar
- Hero should have a strong 3D focal object rather than a flat decorative background.
- Use physically based materials, environment lighting, restrained bloom and layered depth rather than generic neon effects.
- Motion hierarchy: typography first, hero 3D second, atmosphere third, interactions last.
- Use deliberate timing, easing and pauses; avoid effects firing everywhere simultaneously.
- Preloader should feel intentional and deterministic, then transition smoothly into the hero.
- Desktop gets the richest interaction; mobile preserves the identity while reducing density and interaction complexity.

## Positioning constraint
The site should communicate deliberately early/private rather than unclear/unformed. Do not invent products or customer claims. The public content should still make Avenelix's AI/software/system direction understandable.

## Safety/rollback rule
- Keep the TypeScript studio work isolated from `main` until the Vercel build and real device QA pass.
- Treat the latest successful `main` deployment as the production rollback baseline.
- Never merge a visually ambitious change without a successful production build.

## Next priorities
1. Get the TypeScript studio branch building successfully on Vercel.
2. Validate the new Three.js/WebGL focal scene and responsive fallbacks.
3. Refine gradients, glass, typography and section composition without turning the site into generic Web3/neon design.
4. Test 360/390/430px phone, tablet, 1280/1440px laptop and 1920px desktop.
5. Only merge to `main` after build + visual/device QA.

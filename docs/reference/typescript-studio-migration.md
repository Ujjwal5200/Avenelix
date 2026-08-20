# TypeScript Studio Migration

## Decision
Avenelix is moving from CDN-loaded browser JavaScript to a Vite + TypeScript frontend. The migration lives on `feat/typescript-studio-motion` until production browser QA passes.

## Runtime
- Vite builds and serves the static site.
- TypeScript owns application orchestration and runtime lifecycle.
- GSAP owns DOM motion and choreography.
- Locomotive Scroll owns desktop smooth scrolling.
- Three.js owns the orbital/particle visual layer.
- CSS owns visual styling and responsive layout.

## Motion contract
There is one scroll state feeding visual choreography. Do not add a second smooth-scroll engine. Touch devices keep native scrolling while retaining lightweight GSAP reveal motion; desktop uses Locomotive inertia.

## Reliability
- Content must render if GSAP, Locomotive, or WebGL fails.
- Reduced-motion users bypass cinematic motion.
- WebGL particle work is capped by viewport size and paused when the tab is hidden.
- Avoid adding libraries unless they solve a concrete interaction or rendering requirement.

## Structure
```text
src/
  main.ts
  types/vendor.d.ts
package.json
tsconfig.json
vite.config.ts
```

## Migration rule
Do not delete the existing static implementation until the TypeScript build and deployed visual QA are verified on phone, tablet, laptop, and large desktop. The current `main` branch remains the rollback reference during migration.

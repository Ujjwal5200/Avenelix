# Avenelix Color System

## Direction
Avenelix should not use generic multi-color gradients. The visual identity is a near-black technical canvas with a restrained green spectrum that reinforces the orbital/AI-system concept.

## Palette
- Canvas: `#040505` / `#070907` / `#0a0d0a`
- Primary text: `#f4f7f1`
- Secondary text: `#a0a89f`
- Muted text: `#626a61`
- Brand lime: `#d9ff8c`
- Secondary mint: `#a9f6a0`
- Deep signal green: `#69d6ad`
- Highlight: `#e8ffb8`

## Gradient strategy
- Keep one continuous brand world across the page; do not give each section an unrelated color theme.
- Use large, low-opacity radial atmospheres rather than obvious linear gradient bands.
- Hero: lime-forward glow.
- Focus: lime + mint, slightly cooler.
- Direction: softer mint/green atmosphere.
- Contact: pale signal highlight, still on the same dark canvas.
- Gradients should support hierarchy and depth, not compete with typography or the orbital visual.
- Use OKLCH interpolation where supported, with RGBA fallbacks.

## Glass
Use glass only for navigation and selected interactive surfaces. Keep transparency low, borders subtle, and blur restrained. Avoid making every section/card look like glass.

## Engineering constraints
- Preserve contrast and readability.
- Avoid saturated neon backgrounds.
- Keep gradients low-cost CSS; reserve shader/post-processing gradients for the WebGL layer when they provide a measurable visual benefit.
- Test color appearance on OLED/mobile and standard LCD displays.
- Respect reduced-motion; color atmosphere may remain static but should not animate aggressively.

## Rationale
The direction follows the broader production-studio principle of a coherent art direction rather than effect accumulation. Awwwards' current directories explicitly categorize WebGL, GSAP, scrolling, transitions, responsive design and typography as distinct craft dimensions; premium work benefits from a consistent visual system rather than unrelated effects. Three.js supports custom post-processing/shader passes when a future visual layer needs them.

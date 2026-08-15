# Avenelix Color System

## Direction
Avenelix uses a near-black technical canvas with a restrained lime/mint signal spectrum. It should feel like a production technology studio, not a generic neon/Web3 gradient site.

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
- Gradients support hierarchy and depth; they must not compete with typography or the orbital visual.
- Use OKLCH interpolation where supported, with RGBA fallbacks.

## Glass
Use glass only for navigation and selected interactive surfaces. Keep transparency low, borders subtle, and blur restrained. Avoid making every section/card look like glass.

## Responsive quality bar
- Desktop/laptop: full orbital depth, particles, magnetic/cursor interactions and smooth scrolling where pointer input supports them.
- Tablet: reduce visual density and use native-feeling touch scrolling.
- Phone: preserve the orbital identity and hierarchy while reducing particle count, blur, gradient intensity and interaction complexity.
- Never let decorative effects obscure readable content.
- Respect `prefers-reduced-motion`.

## Entrance behavior
The preloader uses deterministic staged progress so fast page loads do not jump from an early number directly to the exit. Status phases are `CALIBRATING` → `CONNECTING` → `RENDERING` → `READY`. It has a hard fallback and never blocks the site indefinitely.

## Engineering constraints
- Preserve contrast and readability.
- Avoid saturated neon backgrounds.
- Keep gradients low-cost CSS; reserve shader/post-processing gradients for WebGL when they provide a real visual benefit.
- Test color appearance on OLED/mobile and standard LCD displays.
- Do not use animation as a prerequisite for content visibility.

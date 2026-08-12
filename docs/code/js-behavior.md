# JavaScript Behavior

## Scope

All JS is wrapped in an IIFE to avoid polluting the global scope.

## Modules

### 1. Loading screen

- Shows for ~1.4 seconds with a pulsing "Initializing system" label and animated progress bar.
- Adds `.done` class to fade out.
- Hidden entirely when `prefers-reduced-motion:reduce` is active.

### 2. Ambient cursor light

- A full-screen radial gradient (`.ambient`) follows the cursor via CSS custom properties `--mx` and `--my`.
- Uses `pointermove` on `document` for smooth tracking.
- No reduced-motion guard needed since it is purely decorative and subtle.

### 3. Orb interaction

Guarded by `matchMedia('(prefers-reduced-motion: reduce)').matches`.

- **Pupil tracking**: `.pupil` translates up to 9px horizontal, 7px vertical toward cursor.
- **Core follow**: `.core` translates up to 14px horizontal, 10px vertical using individual `translate` property (does not conflict with `scale` animation).
- **Orb tilt**: `.orb-zone` rotates up to 6deg Y and 4deg X for subtle perspective shift.
- **Reset**: On `pointerleave`, all transforms return to neutral position.

## Accessibility

- All interactive behavior is disabled for users who prefer reduced motion.
- Focus-visible styles are defined in CSS.
- Skip link allows keyboard users to bypass the header.

## Future additions

When adding new JS behavior:
1. Wrap in the existing IIFE or add a new module function inside it.
2. Respect `prefers-reduced-motion`.
3. Use `requestAnimationFrame` for performance-sensitive animations.
4. Keep under 200 lines total to maintain the single-file philosophy.

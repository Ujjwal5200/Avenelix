# JavaScript Behavior

## Scope

All JS is wrapped in an IIFE to avoid polluting the global scope.

## Modules

### 1. Loading screen

- Shows a lightweight CSS spinner with "Initializing" label for ~800ms.
- Adds `.done` class to fade out.
- Hidden entirely when `prefers-reduced-motion:reduce` is active.

### 2. Ambient cursor light

- A full-screen radial gradient (`.ambient`) follows the cursor via CSS custom properties `--mx` and `--my`.
- Uses `pointermove` on `document` for smooth tracking.
- Guarded by `matchMedia('(prefers-reduced-motion: reduce)').matches`; disabled when user prefers reduced motion.

### 3. 3D point cloud scene

- Renders a fibonacci sphere on a fixed full-screen canvas (`#scene`).
- Uses 400 points on desktop and 200 on mobile (`<800px`).
- Points are projected with simple 3D rotation math and drawn as accent-colored circles with depth-based alpha.
- Rotates smoothly toward the cursor position using eased interpolation.
- Includes subtle scroll-based parallax (points shift with page scroll) using eased interpolation.
- Pauses rendering on `visibilitychange` when the tab is hidden to save CPU/battery.
- Skipped when `prefers-reduced-motion:reduce` is active.

### 4. Scroll progress

- Updates `.scroll-progress` width based on scroll position.
- Passive scroll listener for performance.

### 5. Hero scroll parallax

- After the loader fades, hero text elements (`.kicker`, `.title`, `.desc`, `.btn`, `.micro`) receive a subtle translate on scroll while they're in the viewport.
- Stops when scroll passes `window.innerHeight`, restoring transform to the CSS animation's settled state.
- Guarded by `prefers-reduced-motion` — skipped entirely for reduced-motion users.

### 6. Section reveal

- Uses `IntersectionObserver` to add `.visible` to `.section` elements when they enter the viewport.
- Falls back to immediately showing all sections if the API is unavailable.
- Skipped when `prefers-reduced-motion:reduce` is active.

### 7. Scroll position persistence

- Saves `window.scrollY` to `sessionStorage` on `beforeunload`.
- Restores scroll position after load using `history.scrollRestoration = 'manual'` with a short timeout to avoid layout jumps.
- Ensures the user returns to the same position after refresh.

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

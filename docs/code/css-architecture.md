# CSS Architecture

## Custom properties

All design tokens are defined in `:root` at the top of the stylesheet:

```css
:root{
  --bg:#050505;
  --fg:#f5f5f5;
  --muted:#858b92;
  --dim:#555a57;
  --accent:#d9ff8c;
  --card:#0a0a0a;
  --border:rgba(255,255,255,.06);
  --ease:cubic-bezier(.22,.61,.36,1);
  --ease-out:cubic-bezier(.16,1,.3,1);
  --space-xl:140px;
  --gutter:5vw;
}
```

Add new tokens here when a value is repeated more than twice.

## Layer order (z-index)

| Layer | Z-index | Purpose |
|-------|---------|---------|
| Scene canvas | 0 | Interactive 3D point cloud background |
| Scene canvas | 0 | Interactive 3D point cloud background |
| Loader | 2000 | Initialization screen |
| Grain | 20 | Film grain texture |
| Ambient | -1 | Cursor-follow radial light |
| Header | 100 | Top navigation |
| Copy | 1 | Text content |
| Scroll progress | 900 | Top progress bar |

## Responsive strategy

- **Fluid typography**: `clamp()` for all text sizes.
- **Viewport height**: `100svh` with `min-height:620px` fallback.
- **Breakpoint**: Single breakpoint at `800px` for mobile layout switch. 3D scene reduces point count on mobile.
- **Mobile adjustments**: Center-align hero text, stack principles grid to single column, reduce glow intensity.

## Animation system

- **Entrance**: `.loader` spinner fades out after 800ms. Sections fade in via IntersectionObserver. Principle cards stagger with delayed transitions.
- **Continuous**: Keyframe animations for gradient background shift, grain noise, and loader spin.
- **Interaction**: Ambient cursor-follow radial light updates `--mx`/`--my` CSS variables on `pointermove`. 3D point cloud scene rotates based on cursor position and includes subtle scroll-based parallax. Header gains blurred background on scroll.
- **Micro-interactions**: Principle cards lift and reveal accent border on hover. Direction list items shift and brighten. Contact link shows arrow on hover. Primary button glows on hover. Footer brightens on hover. Scroll progress bar glows.
- **Reduced motion**: `prefers-reduced-motion:reduce` disables all animations and transitions, hides loader and ambient layers, and skips the 3D scene.

## Performance considerations

- `pointer-events:none` on decorative layers (grain, ambient).
- `will-change:transform` on loader spinner.
- Grain overlay uses `inset:-50%` — acceptable on modern GPUs but may cause jank on low-end devices.
- No external dependencies beyond Google Fonts.

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
  --card:#14171a;
  --border:rgba(255,255,255,.10);
  --ease:cubic-bezier(.22,.61,.36,1);
  --ease-out:cubic-bezier(.16,1,.3,1);
}
```

Add new tokens here when a value is repeated more than twice.

## Layer order (z-index)

| Layer | Z-index | Purpose |
|-------|---------|---------|
| Loader | 200 | Initialization screen |
| Grain | 20 | Film grain texture |
| Ambient | 1 | Cursor-follow gradient |
| Grid | - | Background grid |
| Back | - | Radial gradients |
| Header | 10 | Top navigation |
| Copy | 8 | Text content |
| Orb | 4-5 | Central visual |
| Particles | 2 | Background particles |

## Responsive strategy

- **Fluid typography**: `clamp()` for all text sizes.
- **Viewport height**: `100svh` with `min-height:620px` fallback.
- **Breakpoint**: Single breakpoint at `800px` for mobile layout switch.
- **Mobile adjustments**: Stack copy above orb, center-align text, reduce orb opacity to `.6`, hide non-essential elements (scroll indicator, signal, corner).

## Animation system

- **Entrance**: `.loader` fades out, then staggered `.reveal` animations bring in UI elements.
- **Continuous**: Keyframe animations for orb components, particles, grain, and sweep.
- **Interaction**: JS-driven `translate` on `.core` and `.pupil`, `transform` on `.orb-zone` for tilt.
- **Reduced motion**: `prefers-reduced-motion:reduce` disables all animations and transitions.

## Performance considerations

- `will-change:transform` on animated elements.
- `pointer-events:none` on decorative layers.
- Grain overlay uses `inset:-50%` — acceptable on modern GPUs but may cause jank on low-end devices.
- No external dependencies beyond Google Fonts.

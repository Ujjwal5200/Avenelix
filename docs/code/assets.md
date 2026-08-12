# Assets

## Current files

- `brand/favicon.svg` — Canonical Avenelix brand mark. Used as favicon, apple-touch-icon, and site header mark.

## Favicon strategy

- Primary: SVG favicon for modern browsers.
- Fallback: `apple-touch-icon` link points to the same SVG.
- No `favicon.ico` currently — add one if legacy browser support becomes necessary.

## Brand mark notes

The current SVG favicon is an abstract mark with curved strokes and a small dot. It works at small sizes but may benefit from future refinement for distinctiveness at 16x16 and 23x23px.

## Rules

- Keep all static visual assets in `assets/`.
- Group by purpose (`brand/`, `images/`, `icons/`) as the site grows.
- Prefer SVG for logos, icons, and geometric graphics.
- Do not add build output to this folder.
- When replacing a brand asset, update `docs/brand/brand-and-ux.md` and `docs/reference/decision-log.md`.

# File Map

This is the quick navigation index. Read this before opening individual files.

| Path | Purpose | Change when |
|---|---|---|
| `index.html` | Current production coming-soon page: semantic HTML, SEO metadata, inline CSS, cinematic dark animated gradient, grain overlay, ambient cursor light, spinner loader, interactive 3D point cloud scene (canvas, mobile-adaptive, pause on tab hide), scroll-progress bar, typography-first hero (Space Grotesk + Inter) with brand mark, vision-first sections with staggered principle cards, time-based status greeting | Page UI, SEO metadata, animation, interaction, content, or structure changes |
| `robots.txt` | Controls crawler access | Search crawling policy changes |
| `sitemap.xml` | Declares canonical URLs for search discovery | Public URL/page structure changes |
| `assets/README.md` | Rules for static assets | Asset architecture changes |
| `assets/brand/favicon.svg` | Canonical Avenelix favicon/brand mark | Brand mark changes |
| `README.md` | Fast repository orientation for humans and agents | Stack, entry points, or major workflow changes |
| `LICENSE` | Legal license for the repository | Only when licensing changes |
| `docs/agent-handoff.md` | Compact context for a new chat/agent | Current goals, state, or working assumptions change |
| `docs/strategy/vision.md` | What Avenelix is intended to become | Vision or strategic direction changes |
| `docs/reference/current-state.md` | What exists right now and what is already configured | Infrastructure, deployment, or product stage changes |
| `docs/strategy/technical-approach.md` | Current technical approach and constraints | Architecture or technology decisions change |
| `docs/brand/brand-and-ux.md` | Visual identity, interaction philosophy, and design constraints | Brand/UI direction changes |
| `docs/strategy/roadmap.md` | Near-term and longer-term sequence | Priorities or milestones change |
| `docs/strategy/website-redesign-strategy.md` | Comprehensive redesign strategy and wireframe plan | Design direction or site structure changes |
| `docs/reference/decision-log.md` | Important decisions and why they were made | A meaningful decision is made or reversed |
| `docs/seo/seo-strategy.md` | SEO/indexing/search strategy | Search strategy or SEO implementation changes |
| `docs/reference/architecture.md` | Repository structure and scaling rules | Folder structure or scaling strategy changes |
| `docs/code/` | Implementation-specific docs (CSS architecture, JS behavior, assets) | Implementation details change |
| `docs/reference/file-map.md` | This navigation index | Any important file is added, removed, renamed, or repurposed |

## Agent rule

If you are a new agent/thread, start with this order:

1. `README.md`
2. `docs/agent-handoff.md`
3. `docs/reference/current-state.md`
4. `docs/strategy/vision.md`
5. `docs/reference/architecture.md`
6. Open the specific implementation file only after understanding the above.

After a strategic or architectural change, update the relevant docs in the same work session. Do not let implementation drift away from documented intent.

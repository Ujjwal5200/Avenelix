# Avenelix

Avenelix is an independent technology studio being built around **AI engineering, software and SaaS**.

The current repository contains the coming-soon landing page for `avenelix.com`. The site is intentionally simple in architecture but deliberate in identity: it should communicate that Avenelix is a serious engineering/product venture, not merely an experiment.

## Start here

Before changing the product, brand, architecture or direction, read:

- [`docs/agent-handoff.md`](docs/agent-handoff.md) — compact context for a new agent/thread.
- [`docs/current-state.md`](docs/current-state.md) — current stage and infrastructure.
- [`docs/vision.md`](docs/vision.md) — what Avenelix is intended to become.
- [`docs/architecture.md`](docs/architecture.md) — repository structure and scaling rules.
- [`docs/file-map.md`](docs/file-map.md) — quick purpose of important files.
- [`docs/technical-approach.md`](docs/technical-approach.md) — current technical direction.
- [`docs/brand-and-ux.md`](docs/brand-and-ux.md) — visual/brand decisions and constraints.
- [`docs/roadmap.md`](docs/roadmap.md) — near-term and later plans.
- [`docs/decision-log.md`](docs/decision-log.md) — important decisions and why they were made.
- [`docs/seo-strategy.md`](docs/seo-strategy.md) — SEO/search strategy.

## Repository structure

```text
/
├── index.html          # Production landing page
├── robots.txt          # Crawler rules
├── sitemap.xml         # Search discovery
├── assets/             # Static brand/visual assets
│   ├── README.md
│   └── brand/
└── docs/               # Long-term project memory and architecture
    ├── README.md
    ├── architecture.md
    └── ...
```

The root intentionally remains small. Do not introduce a framework or large `src/` structure until the product requires it. See `docs/architecture.md` before restructuring.

## Current stack

- Frontend: single-page HTML/CSS/JS for the current coming-soon experience.
- Source control: GitHub.
- Hosting/deployment: Vercel.
- Domain: `avenelix.com`.
- DNS: Cloudflare.
- Email: Cloudflare Email Routing for forwarding `hello@avenelix.com` to an existing Gmail inbox.
- Search: Google Search Console is configured for indexing/search monitoring.

## Important rule for future agents

Do not redesign Avenelix from scratch merely because a different aesthetic is fashionable. Preserve the intent in `docs/brand-and-ux.md`, preserve the architectural rules in `docs/architecture.md`, and update the relevant docs when a strategic or technical decision changes.

# Avenelix

Avenelix is an independent technology studio being built around **AI engineering, software and SaaS**.

The current repository contains the coming-soon landing page for [avenelix.com](https://avenelix.com/). The site is intentionally simple in architecture but deliberate in identity: it should communicate that Avenelix is a serious engineering/product venture, not merely an experiment.

## Start here

Before changing the product, brand, architecture or direction, read:

- [`docs/agent-handoff.md`](docs/agent-handoff.md) — compact context for a new agent/thread.
- [`docs/vision.md`](docs/vision.md) — what Avenelix is intended to become.
- [`docs/current-state.md`](docs/current-state.md) — current stage and infrastructure.
- [`docs/technical-approach.md`](docs/technical-approach.md) — current technical direction.
- [`docs/brand-and-ux.md`](docs/brand-and-ux.md) — visual/brand decisions and constraints.
- [`docs/roadmap.md`](docs/roadmap.md) — near-term and later plans.
- [`docs/decision-log.md`](docs/decision-log.md) — important decisions and why they were made.

## Current stack

- Frontend: single-page HTML/CSS/JS for the current coming-soon experience.
- Source control: GitHub.
- Hosting/deployment: Vercel.
- Domain: `avenelix.com`.
- DNS: Cloudflare.
- Email: Cloudflare Email Routing is being used/planned for forwarding `hello@avenelix.com` to an existing Gmail inbox.
- Search: Google Search Console is configured; indexing is pending.

## Important rule for future agents

Do not redesign Avenelix from scratch merely because a different aesthetic is fashionable. Preserve the intent in `docs/brand-and-ux.md` and update the docs when a strategic decision changes.

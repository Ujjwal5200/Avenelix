# Avenelix — Agent Handoff

## Read this first

Avenelix is a personal technology venture/studio being built by Ujjwal. The goal is to create a credible umbrella under which AI/software work, client engineering and eventually SaaS products can live.

This file exists so a new agent can understand the project without reconstructing a long conversation.

## What Avenelix is

Avenelix is intended to be a **technology/product studio**, not a personal portfolio and not an environmental company. Its focus is:

- AI engineering
- intelligent software systems
- SaaS products
- automation and production-grade engineering
- potentially client-facing engineering/services while the studio is young

The exact business model is deliberately not locked yet. Do not invent a fake product or pretend the company already has a mature product portfolio.

## Why it exists

The founder wants a real brand/domain that can eventually house products and services. The immediate objective is credibility and experimentation: establish the identity, build the web presence, explore ideas, validate demand, and then turn the strongest ideas into products.

## Current stage

**Stage: very early / pre-product / exploration.**

The domain and coming-soon site are live. The founder is figuring out the exact offering, layout, positioning and future SaaS direction.

Do not describe Avenelix as an established company with customers, revenue, employees or launched SaaS products unless that becomes true and is documented here.

## Current website goal

The current site is a coming-soon / first-impression page. It is intentionally not a full portfolio yet.

A visitor should understand:

1. something technical is being built;
2. it is related to AI/software/systems;
3. the project is serious enough to contact;
4. there is a clear path to email/contact.

The coming-soon page is considered a **brand preview**, not just a placeholder.

## Current visual direction

The page evolved toward a dark, minimal, futuristic engineering aesthetic.

The central visual is an abstract AI-like eye/core with multiple orbiting rings. It must NOT look like a literal Earth/globe or environmental-tech website.

The visual should communicate:

- intelligence
- systems
- computation
- motion
- engineering
- something being built

Avoid:

- generic blue AI gradients
- obvious Earth/globe imagery
- cheesy cyberpunk effects
- excessive neon
- generic startup templates
- a cartoon eye
- an overly literal AI brain

Interaction should be subtle and intentional. Cursor tracking of the pupil/core should feel slightly responsive, not like a cartoon following the mouse.

## Founder preferences for decisions

Be direct and factual. Do not hype weak ideas. If a design or technical decision is poor, say so and explain why.

The founder cares strongly about first impression and wants the site to work for both developers and non-developers.

## Future direction

Potential future Avenelix work includes:

- AI-powered software products
- SaaS products
- automation systems
- custom AI/software engineering
- production AI infrastructure
- potentially multiple products under the Avenelix umbrella

These are directions, not promises. Validate before committing.

## Infrastructure

- Domain: `avenelix.com`
- Canonical URL: `https://avenelix.com/`
- `www.avenelix.com` redirects to the canonical apex domain.
- DNS: Cloudflare nameservers/DNS.
- Hosting: Vercel.
- GitHub: `Ujjwal5200/Avenelix`, default branch `main`.
- Current website is a single HTML file plus root-level SEO files.
- `robots.txt` references `https://avenelix.com/sitemap.xml`.
- `sitemap.xml` currently contains the homepage.

## Email

The desired public contact address is `hello@avenelix.com`.

For the early stage, the goal is **forwarding**, not buying a full mailbox. Cloudflare Email Routing can forward incoming mail to the founder's existing Gmail inbox. Do not recommend paying for a full mailbox unless there is a real need to send/receive as the custom domain or the project starts receiving meaningful business email.

## Search indexing

Google Search Console has been configured.

The live test reports that the homepage is available to Google and can be indexed. Google Index currently reports the page as not indexed / page with redirect, while `www` redirects to the apex domain. This is not currently treated as a DNS failure.

## How to work on this repo

Before changing the site:

1. Read this file.
2. Read `vision.md`, `brand-and-ux.md`, `current-state.md` and `decision-log.md`.
3. Inspect the actual code before proposing a rewrite.
4. Preserve working DNS/hosting/SEO configuration unless there is evidence it is wrong.
5. Make changes incrementally and verify them.
6. Update the docs whenever a meaningful strategic or technical decision changes.

## Context preservation principle

These docs are the durable project memory. A future agent should be able to continue from the repository rather than relying on the chat history.

# Avenelix Decision Log

Keep this file focused on decisions that future agents need to know. Do not turn it into a transcript of every chat.

## 2026-08-11 — Domain

**Decision:** Use `avenelix.com` as the primary domain.

**Reason:** The brand name is intended to stand alone and remain broad enough for future services and SaaS products.

## 2026-08-11 — Domain canonicalization

**Decision:** Canonical URL is `https://avenelix.com/`; `www.avenelix.com` redirects to it.

**Reason:** One canonical URL reduces ambiguity and keeps the public brand consistent.

## 2026-08-11 — Hosting

**Decision:** Use Vercel for the website.

**Reason:** The current site is a lightweight static landing page and Vercel provides simple deployment and custom-domain support without unnecessary infrastructure.

## 2026-08-11 — DNS

**Decision:** Use Cloudflare for DNS.

**Reason:** The domain is already using Cloudflare nameservers and Cloudflare provides the DNS and email-routing capabilities needed at this stage.

## 2026-08-11 — Email

**Decision:** Prefer forwarding `hello@avenelix.com` to an existing inbox instead of paying for a full custom mailbox during the early stage.

**Reason:** The current need is reliable inbound contact, not a dedicated mailbox platform.

## 2026-08-11 — Website purpose

**Decision:** Keep the current site as a coming-soon / first-impression experience until there is enough real product/service substance for a full website.

**Reason:** A fake large-company website with invented products or claims would be worse than a strong, honest coming-soon page.

## 2026-08-11 — Visual identity

**Decision:** Use a dark, abstract AI/system visual rather than blue gradients or an Earth/globe.

**Reason:** The visual should communicate intelligence, computation and engineering without suggesting environmental/climate work or looking like a generic AI template.

## 2026-08-11 — Central visual

**Decision:** Evolve the visual toward an abstract eye/core with orbiting rings and subtle cursor interaction.

**Reason:** It gives the site a recognizable identity and suggests perception/intelligence while remaining abstract.

## 2026-08-11 — Architecture philosophy

**Decision:** Avoid premature complexity.

**Reason:** Avenelix is pre-product. Architecture should follow validated product requirements rather than anticipated scale.

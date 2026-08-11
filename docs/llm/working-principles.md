# Avenelix — Working Principles & Failure Prevention

This file is a compact checklist for agents continuing Avenelix work.

## Current working philosophy

Avenelix should be treated as an early-stage software/AI company being deliberately shaped, not as a personal portfolio or a collection of demos.

The public site should look intentional, restrained, technically credible, and company-like while revealing only what has been deliberately decided.

## Critical lessons

### Brand/design

Do not present a basic first-pass mark as a finished identity. A simple initial-letter logo may technically work as a favicon but can look generic and unfinished. Evaluate distinctiveness, scalability, visual balance, search recognition, and future brand use before settling.

### Public GitHub exposure

The repository is available to the connected agent for development access. It is not automatically a public-facing resource. Do not put repository links on the Avenelix landing page unless explicitly requested and strategically justified.

### SEO

Avenelix needs legitimate discoverability, not SEO theater. Technical SEO should be correct, but rankings require time, useful content, consistent brand/entity signals, legitimate external references, and search-engine processing. Do not promise a specific ranking or repeatedly change metadata without evidence.

### Coming-soon messaging

The current coming-soon page is intentionally broad. It should communicate AI/software/systems and an active building phase without inventing a product proposition that has not been finalized.

### Architecture

Keep live web-standard files at their required locations. Use `docs/` to explain them rather than moving deployment-critical files merely to make the repository look organized.

Example:

```text
robots.txt       # must remain at domain root
sitemap.xml      # must remain at domain root
docs/seo/        # explains their purpose and structure
```

## Agent checklist before a meaningful change

- [ ] What is the actual objective?
- [ ] What exists already?
- [ ] Is the proposed solution actually the best solution?
- [ ] Is there a security/privacy/public-disclosure issue?
- [ ] Is the idea already common or already used elsewhere?
- [ ] Does current web research materially change the decision?
- [ ] Will this scale cleanly for the next 6–12 months?
- [ ] Does this introduce unnecessary complexity?
- [ ] Does documentation need an update?
- [ ] What should explicitly NOT be changed?

## Agent handoff rule

When a meaningful decision changes direction, update the relevant documentation. Do not record trivial conversational noise. The purpose is to preserve the reasoning chain and prevent future agents from repeating rejected approaches.

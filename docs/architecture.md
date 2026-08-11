# Repository Architecture

## Principle

Keep the repository **simple now, scalable later**. Avenelix is currently a static coming-soon site, so do not introduce a framework, build system, component library, or unnecessary folders until the product actually needs them.

## Current structure

```text
Avenelix/
├── index.html                 # Production entry page: HTML + page CSS + small interaction JS
├── robots.txt                 # Search crawler rules
├── sitemap.xml                # Search discovery map
├── README.md                  # Repository-level orientation
├── LICENSE                    # Project license
├── assets/
│   ├── README.md              # Asset directory rules
│   └── brand/
│       └── favicon.svg        # Canonical Avenelix brand mark
└── docs/
    ├── README.md              # Documentation map
    ├── architecture.md        # This file: repository structure and scaling rules
    ├── file-map.md             # What each important file does
    ├── agent-handoff.md        # Context for new agents/threads
    ├── vision.md               # Long-term Avenelix direction
    ├── current-state.md        # Current stage and infrastructure
    ├── technical-approach.md   # Technical direction
    ├── brand-and-ux.md         # Visual and UX constraints
    ├── roadmap.md              # Planned evolution
    ├── decision-log.md         # Important decisions and rationale
    └── seo-strategy.md         # SEO/search strategy
```

## Why `index.html` stays at root

Vercel currently serves this as a simple static site. Keeping `index.html`, `robots.txt`, and `sitemap.xml` at the root is deliberate: they are deployment/search entry points, not general application files.

## Planned scaling path

Do not create these directories until they have real content:

```text
src/                 # only when application code becomes substantial
  components/        # reusable UI
  pages/             # multiple pages/routes
  lib/               # shared utilities/integrations
  styles/            # shared CSS/design tokens
public/              # only if the chosen framework/build setup needs it
api/                 # only when server-side endpoints are introduced
```

When the full product begins, migrate deliberately rather than mixing framework code into the current landing page.

## File placement rules

1. Root = deployment entry points and repository-level documentation only.
2. `assets/` = static visual/brand files.
3. `docs/` = strategy, decisions, architecture, handoff, and planning context.
4. Never create random files in the root for experiments; put experiments in a clearly named temporary branch or documented area.
5. Every new meaningful directory gets a `README.md` explaining its purpose and rules.
6. Every new important file must be added to `docs/file-map.md` with a one-line purpose.
7. Do not split code into many files just for the appearance of architecture. Split when reuse, maintainability, testing, or scale justifies it.
8. Before a structural change, update this document first or in the same change.

## Six-to-seven-month target

The repository should evolve from a **single static landing page** into a clean product codebase without accumulating accidental complexity. The exact framework and backend architecture should be chosen when the actual product requirements are known, not guessed in advance.

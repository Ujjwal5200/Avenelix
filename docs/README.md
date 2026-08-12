# Avenelix Documentation

This folder is the project's long-term memory: strategy, architecture, decisions, current state, and agent handoff context.

## Where to start

- `agent-handoff.md` — fastest context for a new chat/agent.
- `reference/current-state.md` — what is actually implemented now.
- `strategy/vision.md` — what Avenelix is trying to become.
- `reference/architecture.md` — how the repository is organized and how it should scale.
- `reference/file-map.md` — one-line purpose of each important file.

## Documentation structure

```
docs/
├── README.md              # This file: documentation map
├── agent-handoff.md       # Compact context for new agents
├── strategy/              # Business and product strategy
│   ├── README.md
│   ├── vision.md
│   ├── roadmap.md
│   └── technical-approach.md
├── brand/                 # Visual identity and UX direction
│   ├── README.md
│   └── brand-and-ux.md
├── reference/             # Infrastructure, decisions, and status
│   ├── README.md
│   ├── current-state.md
│   ├── architecture.md
│   ├── decision-log.md
│   └── file-map.md
├── seo/                   # Search engine configuration
│   ├── README.md
│   ├── seo-strategy.md
│   ├── robots.md
│   └── sitemap.md
├── llm/                   # LLM/agent operating instructions
│   ├── README.md
│   ├── system-prompt.md
│   ├── working-principles.md
│   ├── MASTER_CONTEXT.md
│   ├── CONTEXT_ROUTER.md
│   └── CONTEXT_PERSISTENCE.md
└── code/                  # Implementation-specific documentation
    ├── README.md
    ├── implementation.md
    ├── css-architecture.md
    ├── js-behavior.md
    └── assets.md
```

## Documentation rule

Keep these documents factual and concise. Record decisions, constraints, and current reality—not every conversation detail. When an idea becomes a real decision, update the relevant document so future agents inherit the decision instead of rediscovering it.

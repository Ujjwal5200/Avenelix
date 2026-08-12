# Avenelix — LLM Context Router

> **MANDATORY: Do NOT load every Markdown file for every task. Read only the smallest relevant context set. Token efficiency is an explicit project constraint.**

## Goal

Avenelix documentation is the persistent project memory, but the LLM must **load context progressively**. The repository should preserve continuity without wasting tokens rereading the whole documentation system on every small task.

## Always load first

For a new LLM/thread or when the project state is unclear:

1. `docs/llm/MASTER_CONTEXT.md`
2. `docs/llm/CONTEXT_PERSISTENCE.md`
3. This file: `docs/llm/CONTEXT_ROUTER.md`

Then stop. Do not automatically load the rest.

For an already-established thread where the current project context is known, **do not reread the full master context every turn**. Load only the relevant specialized context for the current task.

## Context tiers

### Tier 0 — Current task only
Use when the request is a small, isolated implementation or factual check and the project direction is already known.

Load:
- the directly affected source/config file;
- the nearest relevant README/documentation;
- this router only if unsure what else is needed.

Examples:
- change one CSS value;
- fix one typo;
- update a single link;
- inspect one SEO file.

### Tier 1 — Local feature context
Use for a feature, component, folder, or specific technical area.

Load:
- directly affected source files;
- the local folder README;
- one relevant specialized document from `docs/`.

Examples:
- landing-page animation → relevant UI/brand docs + current page source;
- SEO change → `docs/seo/*` + relevant root SEO files;
- repository organization → `docs/reference/architecture.md` + `docs/reference/file-map.md`.

### Tier 2 — Planning / design / strategy
Use when discussing product direction, company positioning, branding, naming, architecture, roadmap, or a meaningful strategic decision.

Load:
- `docs/llm/MASTER_CONTEXT.md`;
- relevant strategy documents only;
- current implementation only when the decision affects it.

Examples:
- new product idea → `docs/strategy/vision.md`, `docs/strategy/roadmap.md`, relevant product/technical docs;
- logo/brand decision → `docs/brand/brand-and-ux.md`, current visual implementation, relevant decision log;
- architecture decision → `docs/reference/architecture.md`, `docs/strategy/technical-approach.md`, current structure.

Do not load unrelated SEO/design/product documents simply because they exist.

### Tier 3 — Major direction change / new LLM onboarding
Use when the project is being handed to a new agent, the direction has materially changed, or the user asks for a full project review.

Load:
- `MASTER_CONTEXT.md`;
- `CONTEXT_PERSISTENCE.md`;
- this router;
- `agent-handoff.md`;
- `../reference/current-state.md`;
- `../strategy/vision.md`;
- `../reference/architecture.md`;
- `../strategy/roadmap.md`;
- only then the specialized docs required by the current topic.

This is the **exception**, not the default for every turn.

## Topic → document routing

| Task | Primary context | Secondary context |
|---|---|---|
| Product idea / validation | `docs/strategy/vision.md`, `docs/strategy/roadmap.md` | `docs/reference/decision-log.md`, relevant technical docs |
| Company positioning | `docs/strategy/vision.md`, `docs/brand/brand-and-ux.md` | `docs/reference/decision-log.md` |
| UI / landing page | `docs/brand/brand-and-ux.md` | current source, `docs/reference/decision-log.md` |
| Logo / favicon | `docs/brand/brand-and-ux.md` | current assets, `docs/reference/decision-log.md` |
| SEO / indexing | `docs/seo/*`, `docs/seo/seo-strategy.md` | root SEO files, current homepage |
| File structure | `docs/reference/architecture.md`, `docs/reference/file-map.md` | local READMEs |
| Technical architecture | `docs/strategy/technical-approach.md`, `docs/reference/architecture.md` | relevant source/config |
| Roadmap / priorities | `docs/strategy/roadmap.md`, `docs/reference/current-state.md` | `docs/strategy/vision.md`, `docs/reference/decision-log.md` |
| Handoff to new LLM | `MASTER_CONTEXT.md`, `CONTEXT_PERSISTENCE.md` | `agent-handoff.md`, `../reference/current-state.md` |
| Small code fix | affected source file | local README only if needed |

## Code-task rule

When the user asks for implementation, **do not spend most of the context budget rereading strategy documents**.

Use:

> relevant source → relevant local docs → implement → critical review → update docs only if the change has durable planning value.

The model should preserve awareness of the high-level company constraints from the master context, but it does not need to repeatedly ingest the full strategy history to change a button, CSS rule, or small component.

## Planning-task rule

When the user is exploring an idea rather than asking for code:

> load strategic context → research/evaluate → challenge assumptions → decide → record durable decision.

Do not load the full source tree unless implementation feasibility is part of the question.

## Research-task rule

When current external information matters:

> load only the project context needed to interpret the question → research external sources → summarize evidence → record only durable findings.

Do not copy long web results into the project docs. Preserve concise conclusions and stable evidence references.

## Documentation update rule

Documentation should be **crisp, cumulative, and non-redundant**.

When adding new information:

1. Update the most specific relevant document first.
2. Update `MASTER_CONTEXT.md` only when the information is genuinely cross-cutting or changes core project direction.
3. Update `docs/reference/decision-log.md` when a meaningful decision or rejection should be historically traceable.
4. Do not copy the same explanation into multiple documents.
5. Prefer changing an existing concise section over adding another long section.

## Context budget rule

**Do not use the existence of documentation as a reason to read documentation. Use relevance as the reason.**

A smaller, targeted context that contains the right evidence is preferred to a large context that contains everything.

If context is insufficient, escalate one tier. Do not jump directly from a small CSS task to loading the entire repository.

## Source-of-truth rule

The Markdown system is the durable project memory, but source code/configuration remains the source of truth for actual implementation.

Never infer implementation state solely from documentation when the current source can be inspected.

## End-of-task checkpoint

At the end of meaningful work:

- Did the implementation actually solve the user's objective?
- Did we create a durable decision, strategy, constraint, or lesson?
- If yes, did we update the **most specific** Markdown document?
- Did we avoid duplicating information across docs?
- Did we avoid unnecessary context loading?

## One-line operating rule

> **Load the minimum context required to make the right decision, then write back only the durable information needed to make the next decision easier.**

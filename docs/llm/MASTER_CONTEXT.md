# AVENELIX — MASTER LLM CONTEXT

**Read this file before doing any work on Avenelix.**

This file exists so the project can move between LLMs, agents, and chat threads without losing strategic context. It is the primary continuity document. Do not require the user to re-explain the project when the answer is already documented here.

---

## 1. What Avenelix is

Avenelix is being developed as an **AI/software venture and future software company**, not as a personal portfolio or a collection of public coding projects.

The exact product direction is still being explored. The company is intentionally in an early building/validation stage. Do not invent a finalized product proposition where one has not been decided.

Current broad territory:

- AI
- software
- systems
- SaaS/products
- taking useful ideas from prototype toward production

The public website is currently a **coming-soon / early company presence**. Its job is to create a credible first impression while revealing as little unfinished product strategy as necessary.

---

## 2. Current public positioning

The current homepage communicates approximately:

> AI · Software · Systems
>
> BUILDING WHAT'S NEXT.
>
> Avenelix is an independent AI & software venture exploring useful systems, products and ideas — from first prototype to production.
>
> Get in touch
>
> No noise. Just building.

The page is intentionally abstract because the product direction is not finalized.

### Brand impression we want

A visitor should think:

**"This is an early-stage technology company/venture building something in AI/software; the product is not being disclosed yet."**

It should NOT feel like:

- a freelancer portfolio;
- a generic developer landing page;
- an open-source project homepage;
- an environmental company because of an abstract globe/Earth visual;
- an overhyped fake startup with no substance.

The site should feel technical, intentional, restrained, experimental, and credible.

---

## 3. Public/private boundary — CRITICAL

Treat unfinished ideas, product concepts, architecture, implementation details, experiments, roadmaps, and internal planning as potentially sensitive business information.

### Never expose the repository by default

**Do not add a public GitHub/repository link to the Avenelix website unless explicitly approved.**

The repository may be accessible to an AI agent for implementation. That is an internal working mechanism, not an instruction to advertise the repository to customers or visitors.

The public landing page should currently provide a professional contact path (`hello@avenelix.com`) rather than exposing implementation.

Before making anything public, ask:

> Does this help Avenelix at its current stage, or does it unnecessarily expose information that should remain private?

If exposure does not create clear value, keep it private.

---

## 4. Current website / design direction

The current coming-soon experience is a dark, minimal, interactive AI/software visual identity.

Important existing concepts:

- dark/black visual base;
- restrained monochrome palette rather than generic bright blue AI styling;
- abstract orb/eye/system visual rather than an Earth-like globe;
- multiple orbital/ring structures;
- subtle cursor-reactive pupil/eye interaction;
- subtle grain, particles, sweep, glow and motion;
- large typography;
- minimal navigation/actions;
- responsive desktop/mobile behavior;
- reduced-motion consideration.

### Design rule

Do not accept a visually basic first attempt simply because it works technically.

A favicon that is merely an "A", a generic logo, a black ball with random rings, or an off-the-shelf AI aesthetic should not automatically be considered finished. If it looks generic, say so and improve/reframe it.

At the same time, do not add effects merely to make the page busy. Every visual element should support the impression of a serious technology venture.

---

## 5. Logo / favicon direction

The current identity is still provisional.

The goal is a distinctive, simple mark that works at favicon size and can eventually evolve into the long-term Avenelix brand identity.

Do not assume the letter "A" alone is sufficient. Evaluate recognizability, distinctiveness, scalability, search appearance, and whether the mark communicates the intended technology identity without becoming a cliché.

Before recommending a new mark/name, check current web usage and obvious conflicts. Never claim originality, availability, or non-infringement without evidence.

---

## 6. SEO objective

Primary near-term SEO goal:

> When someone searches **Avenelix** or **avenelix**, the official Avenelix website should naturally rank at or near the top.

The site is already being indexed. Do not panic if rankings fluctuate after deployments; indexing and ranking are different processes.

Current technical SEO direction:

- canonical URL: `https://avenelix.com/`
- index/follow enabled;
- meaningful title and description;
- Open Graph/Twitter metadata;
- Organization/WebSite structured data;
- root `robots.txt`;
- root `sitemap.xml`;
- Search Console monitoring.

Do not keyword-stuff or add meaningless metadata. For brand ranking, think beyond tags: technical accessibility, consistent brand/entity signals, useful future content, legitimate references, site quality, indexing, and search intent all matter.

Never promise a #1 ranking. It is a goal, not a controllable guarantee.

---

## 7. SEO file architecture

Live deployment files must remain at the domain root:

```text
robots.txt
sitemap.xml
```

They should NOT be moved into `docs/seo/` because their standard public locations are:

```text
https://avenelix.com/robots.txt
https://avenelix.com/sitemap.xml
```

Documentation about them belongs under:

```text
docs/seo/
├── README.md
├── robots.md
└── sitemap.md
```

Documentation explains live configuration; it should not create duplicate sources of truth.

---

## 8. Repository architecture principle

The repository should remain navigable for the next **6–7 months of development and scaling**.

Rules:

- avoid dumping files into the root;
- group related functionality;
- use `docs/` for durable internal project context;
- add small READMEs where they materially improve navigation;
- do not create folders merely for cosmetic organization;
- before creating a file, check whether an existing file already owns that responsibility;
- before creating a folder, ask whether the hierarchy will still make sense months from now;
- keep one authoritative source of truth for live configuration.

---

## 9. Documentation continuity system

The purpose of the documentation system is **continuity across LLMs and chat threads**.

A future agent should be able to understand:

1. what Avenelix is;
2. why it exists;
3. what stage it is in;
4. what the current public positioning is;
5. what is intentionally private;
6. what technical direction is being followed;
7. what decisions have already been made;
8. what was rejected and why;
9. what remains to be done;
10. what mistakes previous agents must not repeat.

Do NOT record every conversational detail. Record durable, decision-relevant information.

Whenever a meaningful decision changes the project, update this master context and/or the appropriate specialized documentation.

If a new decision conflicts with this file, do not silently ignore the conflict: update the file after determining the new source of truth.

---

## 10. How the LLM must work with the user

The user wants an **independent strategic technical partner**, not an agreeable assistant.

### Required behavior

- Think first; answer second.
- Inspect existing implementation before changing it.
- Understand the underlying goal, not merely the literal request.
- Challenge weak assumptions.
- Give direct criticism.
- If the user is wrong, say: **"You are wrong here"** and explain why.
- If a proposed implementation is inferior, say so and recommend the better architecture.
- Do not make the user discover obvious problems through repeated iterations.
- Do not wait for the user to say "improve it" multiple times.
- If the user asks for an idea, develop it independently and critically.
- Search the web when current information, competition, naming, originality, SEO, standards, products, or market context can materially change the answer.
- Distinguish fact from recommendation and speculation.
- Never invent sources, numbers, availability, rankings, trademark claims, or technical facts.
- If information is incomplete, say so.

### Avoid

- "Yeah, that's good" when it is merely acceptable.
- agreeing first and discovering obvious problems later;
- presenting five equal options when one is clearly superior;
- asking the user to make decisions the agent can reasonably make itself;
- repeating work because previous context was not preserved;
- adding complexity just because it looks technically impressive;
- changing working code without inspecting its current state.

---

## 11. Required decision process

For meaningful work, internally follow this sequence:

### Step 1 — Objective
What is the actual outcome the user wants?

### Step 2 — Current state
What already exists? Inspect it before changing it.

### Step 3 — Risks
What could go wrong technically, strategically, visually, commercially, or from a security/privacy perspective?

### Step 4 — Alternatives
Is the user's proposed approach actually the strongest option? If not, replace it.

### Step 5 — Evidence
If current information or external validation matters, research it before deciding.

### Step 6 — Execution
Implement the strongest justified approach without unnecessary iteration.

### Step 7 — Critical review
Ask: Is this genuinely better, or merely different?

### Step 8 — Continuity
If the decision is durable, document it so another LLM does not repeat the same reasoning.

---

## 12. Preferred response format for important decisions

Use:

**Verdict:** what should be done.

**Why:** the key reasoning.

**Do not do:** tempting but inferior alternatives.

**Plan:** concrete steps.

**Risk / uncertainty:** what is not known or cannot be guaranteed.

Keep ordinary answers concise. Be detailed when the decision genuinely requires it.

---

## 13. Definition of done

Do not call something complete just because code was committed.

A task is done when:

- it solves the actual objective;
- obvious avoidable problems have been addressed;
- it fits Avenelix's current stage;
- it is coherent with existing architecture and brand direction;
- it works responsively where relevant;
- accessibility/performance implications have been considered;
- documentation is updated when the decision is durable;
- public/private boundaries are respected;
- the result has been critically reviewed.

---

## 14. Current priorities

Priority order should generally be:

### P0 — Protect and preserve
- Keep unfinished product/technical strategy private.
- Do not publicly expose the repository.
- Preserve project context across LLM/thread changes.
- Maintain clean architecture and documentation.

### P1 — Establish credible brand presence
- Make the coming-soon page feel like a real early-stage software company.
- Refine the logo/favicon into something distinctive rather than generic.
- Keep visual identity restrained and coherent.
- Avoid premature product claims.

### P2 — Build durable search presence
- Maintain correct technical SEO.
- Establish Avenelix as the official brand/entity.
- Improve brand-name search visibility naturally over time.
- Avoid spammy SEO tactics.

### P3 — Product direction
- Explore and validate the actual product/company direction.
- Do not force the public site to claim a product before the direction is sufficiently clear.
- Once the direction is validated, evolve the site from coming-soon positioning into a concrete product/company site.

---

## 15. Known lessons / mistakes to avoid

These are durable lessons from prior iterations:

1. **Do not expose the repository on the public website merely because an agent needs repository access.**
2. **Do not settle for a basic lettermark/favicon when the objective is a company-grade identity.**
3. **Do not repeatedly polish a weak concept. Reframe the concept if the foundation is weak.**
4. **Do not add SEO elements without understanding what they accomplish.**
5. **Do not confuse indexing with ranking.**
6. **Do not move standard web files into documentation folders just for neatness.** Document them; keep live copies in the required deployment location.
7. **Do not expose unfinished company/product ideas for the sake of making a coming-soon page more specific.**
8. **Do not blindly follow the user's proposed implementation if a safer, more maintainable, or strategically better approach exists.**
9. **Do not make the user repeat project history when the information can be recovered from this document or specialized docs.**
10. **Do not confuse activity with progress.** A technically larger change is not automatically a better change.

---

## 16. Future handoff protocol

When starting a new Avenelix thread or using a new LLM:

1. Give it this file first.
2. Tell it to read this file **before taking action**.
3. Then provide only the new task/request.
4. If the task concerns a specific area, have it read the relevant specialized docs under `docs/`.
5. The agent should inspect the current implementation before editing.
6. After meaningful work, update this context with only durable new decisions.

The objective is simple:

> **The project should retain its strategic memory even when the LLM changes.**

A new agent should feel like it is continuing an existing project, not starting from zero.

---

## Final operating rule

**Think independently. Be critical. Protect the company. Research when evidence matters. Make the strongest reasonable decision before asking the user to iterate. Preserve the reasoning so the next LLM does not have to rediscover it.**

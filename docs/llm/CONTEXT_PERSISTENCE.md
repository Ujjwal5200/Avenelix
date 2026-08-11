# AVENELIX — CONTEXT PERSISTENCE PROTOCOL

> **MANDATORY FOR EVERY LLM, AGENT, CODING ASSISTANT, AND NEW CHAT WORKING ON AVENELIX:**
>
> **Avenelix's Markdown documentation is the project memory and source of truth. You MUST preserve meaningful planning continuity across conversations and tools. Do not let decisions, reasoning, strategies, constraints, rejected approaches, or important ideas disappear into chat history.**

## Before doing anything

Read `docs/llm/MASTER_CONTEXT.md` before taking action.

Then inspect the relevant specialized documentation and current implementation.

Do not ask the user to repeat information that is already documented.

## During every discussion

After any meaningful discussion, decision, proposal, implementation, research result, strategic change, design change, architecture change, product idea, constraint, risk, rejection, or discovery, ask yourself:

> **"Is this relevant enough to preserve so another LLM can continue the work without asking the user to reconstruct this conversation?"**

If the answer is yes, **UPDATE THE RELEVANT MARKDOWN DOCUMENT BEFORE CONSIDERING THE WORK COMPLETE.**

This applies even when the conversation has not produced code.

## What should be preserved

Record durable information such as:

- why a product or feature is being considered;
- the problem we believe it should solve;
- the user's reasoning and strategic intent when it affects future decisions;
- important assumptions;
- product hypotheses and validation ideas;
- architecture decisions and why they were chosen;
- design/branding decisions and rejected alternatives;
- SEO/domain/public-positioning decisions;
- security and information-disclosure boundaries;
- technical constraints and trade-offs;
- important research findings that changed the direction;
- decisions explicitly rejected and the reason;
- current status and next logical step;
- mistakes that a future agent must not repeat.

## What should NOT be preserved

Do not turn the repository into a transcript.

Do not store:

- conversational filler;
- repeated explanations with no new information;
- temporary wording experiments unless they represent a real decision;
- irrelevant personal conversation;
- every small implementation detail when it has no future planning value.

The goal is **continuity, not chat-history duplication.**

## Cross-LLM rule

Avenelix may be worked on through ChatGPT, Codex, Claude, Gemini, Cursor, Windsurf, KiloCode, Antigravity, Emergent, or any other agent/tool.

**No matter which LLM or tool is being used, the Markdown files remain the persistent project memory.**

A new LLM should be able to enter the project, read the Markdown, understand what has already been decided, and continue from the current state.

The user should not have to repeatedly explain:

- what Avenelix is;
- why it exists;
- what is being explored;
- what has already been rejected;
- what the current strategy is;
- what must remain private;
- why previous implementation choices were made;
- what the next likely step is.

## After implementation

A code change is not enough.

After meaningful implementation, determine whether the implementation changes the durable project context. If it does:

1. update the relevant Markdown;
2. update the master context when appropriate;
3. record important trade-offs or rejected approaches;
4. make the documentation understandable to a future agent with no access to this chat.

## Continuity checkpoint

Before ending an Avenelix task or chat, perform this mental checkpoint:

**What did we learn?**

**What did we decide?**

**What did we reject?**

**What changed?**

**Why did it change?**

**What does the next LLM need to know?**

**What should the next LLM do next?**

If any answer contains durable information, **STORE IT IN MARKDOWN.**

## Important distinction

This protocol does **not** mean every word of a user's hidden chain-of-thought should be recorded. Preserve the user's explicit planning rationale, strategic intent, decisions, assumptions, and evidence that are necessary for future continuity. Do not attempt to reconstruct private model reasoning.

## Final rule

> **Never let a meaningful Avenelix decision exist only inside a chat thread. If it can affect future work, preserve it in Markdown.**

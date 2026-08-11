# Avenelix Technical Approach

## Current principle

Use the simplest architecture that proves the idea. Avenelix should not accumulate infrastructure just to look like a large company.

## Current web stack

```text
User
  ↓
avenelix.com
  ↓
Cloudflare DNS
  ↓
Vercel
  ↓
Static HTML/CSS/JS landing page
```

`www.avenelix.com` redirects to the apex canonical URL.

## Current SEO stack

```text
avenelix.com
  ├── robots.txt
  │     └── sitemap reference
  └── sitemap.xml
        └── homepage
```

Google Search Console is used for URL inspection and indexing requests.

## Current email approach

```text
Visitor
  ↓
hello@avenelix.com
  ↓
Cloudflare Email Routing
  ↓
existing Gmail inbox
```

This is forwarding, not a full mailbox. The objective is receiving inbound messages cheaply while the business is still exploratory.

## Future product architecture

Do not lock a final architecture before the product is selected.

A likely future baseline for an AI SaaS could include:

```text
Web client
   ↓
API / application layer
   ↓
Domain services
   ├── auth / users
   ├── billing
   ├── product logic
   └── AI orchestration
          ↓
       model/provider layer
          ↓
   data / vector / cache / object storage
```

Exact technologies should be selected based on the actual workload.

## AI engineering principles

Where relevant, favor:

- clear evaluation before optimization
- model/provider abstraction where it reduces lock-in
- RAG only when retrieval materially helps
- structured outputs and validation
- observability for production AI behavior
- cost and latency measurement
- fallbacks for provider/model failures
- security around user data and prompts
- asynchronous processing for long-running jobs
- rate limiting and quotas for public SaaS

## Production principles

When a product gains real users:

- containerize only when it provides value
- use CI/CD
- keep infrastructure reproducible
- separate secrets from source code
- add logging and monitoring
- measure latency, error rate and cost
- establish backups and recovery procedures
- use managed services where they reduce unnecessary operational work

The founder has experience with AWS, Docker, Jenkins/GitHub Actions, FastAPI, LangChain/LangGraph, vector databases and LLM systems. Reuse this knowledge where appropriate, but do not force familiar tools into a product when simpler alternatives are better.

## Architecture decision rule

**Problem first → validation → simplest working system → measurements → scale only when required.**

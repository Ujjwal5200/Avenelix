# Avenelix SEO Strategy

_Last updated: 2026-08-20_

## Goal

For branded searches such as `Avenelix`, `avenelix`, and `Avenelix AI`, the canonical site `https://avenelix.com/` should become the strongest and most obvious result.

A top position cannot be guaranteed by metadata alone. Crawlability, useful content, authority, links, freshness and search-engine systems all matter.

## Current technical SEO implementation

`index.html` contains:

- descriptive title and meta description;
- `robots` allowing indexing;
- canonical URL;
- Open Graph and Twitter metadata;
- `WebSite` structured data naming `Avenelix`;
- `Organization` structured data with the 512×512 brand logo;
- semantic H1/headline content;
- root favicon references;
- web manifest reference.

Root deployment files:

- `/robots.txt` — crawl rules and sitemap reference;
- `/sitemap.xml` — canonical homepage;
- `/favicon.svg` — stable 512×512 square favicon;
- `/assets/brand/logo.svg` — crawlable organization/OG logo.

## Favicon / Google result icon

Google can use a site's favicon in organic search results, but does not guarantee that it will display. The current implementation uses a stable square 512×512 favicon URL and keeps the homepage and icon crawlable. After deployment, use Search Console URL Inspection to request a recrawl. Favicon processing can take days to weeks.

The browser favicon and the Organization `logo` are separate concepts. The favicon is the small site icon; Organization structured data identifies the preferred organizational logo.

## Site name

The homepage uses `WebSite` structured data with:

- `name`: `Avenelix`
- `alternateName`: `Avenelix AI`
- `url`: `https://avenelix.com/`

Google's site-name system is automated; structured data is the preferred way to indicate the desired site name.

## Brand-ranking priorities

1. Keep `Avenelix` consistent across the homepage, title, structured data, social profiles and legitimate public references.
2. Keep `https://avenelix.com/` as the only canonical homepage URL.
3. Keep Google Search Console verified and submit `/sitemap.xml`.
4. Verify the homepage and request recrawling after meaningful deployments.
5. Add a small number of genuine, relevant public references/links to the domain.
6. Add useful product, project, service or writing pages only when there is real substance.
7. Monitor Search Console rather than repeatedly changing metadata without evidence.

Sitemap submission is a discovery hint, not a ranking guarantee.

## Content strategy

The current site is still coming-soon. Do not manufacture SEO pages, keyword-stuffed copy or fake services. When Avenelix has real products/projects, build descriptive pages around those entities and connect them with normal HTML links.

## What not to do

- No `meta keywords`.
- No keyword stuffing.
- No fake product pages.
- No purchased/spam backlinks.
- No duplicate near-identical pages.
- No repeated canonical-domain changes.
- No sacrificing performance or UX for SEO tricks.

## Operational checklist

- [ ] Deploy current `main` to Vercel.
- [ ] Verify `https://avenelix.com/` loads normally.
- [ ] Verify `/favicon.svg`, `/assets/brand/logo.svg`, `/robots.txt`, and `/sitemap.xml` return 200.
- [ ] In Search Console, run URL Inspection on the homepage and request indexing.
- [ ] Submit `/sitemap.xml` in Search Console.
- [ ] Validate JSON-LD with a schema validator.
- [ ] Recheck the Google result after Google recrawls; favicon appearance is not immediate or guaranteed.

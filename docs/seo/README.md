# SEO

This folder documents Avenelix's search-engine configuration and the purpose of each SEO-related file.

## Deployment-critical SEO files

The actual files `robots.txt` and `sitemap.xml` intentionally remain at the repository root.

They should **not** be moved into this folder because search engines expect these files at the domain root:

- `https://avenelix.com/robots.txt`
- `https://avenelix.com/sitemap.xml`

## Structure

```text
root/
├── robots.txt              # Crawl rules + sitemap location
├── sitemap.xml             # URLs Avenelix wants search engines to discover
└── docs/
    └── seo/
        ├── README.md       # SEO folder overview
        ├── robots.md       # robots.txt documentation
        └── sitemap.md      # sitemap.xml documentation
```

## Homepage SEO

The homepage SEO metadata lives with the page itself in `index.html`, including the title, description, canonical URL, robots directive, Open Graph metadata, and structured data.

Keep this folder as documentation rather than duplicating live SEO configuration. This prevents the repository from having multiple conflicting sources of truth.

import type { MetadataRoute } from 'next';

const routes = ['', '/studio', '/work', '/technology', '/approach', '/contact', '/privacy'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({ url: `https://avenelix.com${path}`, lastModified: new Date(), changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : 0.7 }));
}

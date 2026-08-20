import type { MetadataRoute } from 'next';

const routes = ['', '/studio', '/work', '/technology', '/approach', '/contact', '/privacy', '/insights'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `https://avenelix.com${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/work' || path === '/insights' || path === '/studio' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/work' || path === '/contact' || path === '/insights' ? 0.9 : path === '/privacy' ? 0.3 : 0.7
  }));
}

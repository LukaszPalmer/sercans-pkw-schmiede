import type { MetadataRoute } from 'next';
import { servicePath, serviceSlugs } from '@/lib/content/services';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly') => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page('/', 1, 'weekly'),
    ...serviceSlugs.map((slug) => page(servicePath(slug), 0.9)),
    page('/werkstatt', 0.8),
    page('/kontakt', 0.8),
    page('/impressum', 0.2, 'yearly'),
    page('/datenschutz', 0.2, 'yearly'),
  ];
}

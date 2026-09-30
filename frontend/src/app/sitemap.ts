import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/content/blog';
import { serviceSlugs } from '@/lib/content/services';
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
    page('/leistungen', 0.9),
    ...serviceSlugs.map((slug) => page(`/leistungen/${slug}`, 0.9)),
    page('/faq', 0.7),
    page('/blog', 0.7, 'weekly'),
    ...blogPosts.map((p) => ({ ...page(`/blog/${p.slug}`, 0.6), lastModified: new Date(p.publishedAt) })),
    page('/kontakt', 0.8),
    page('/impressum', 0.2, 'yearly'),
    page('/datenschutz', 0.2, 'yearly'),
  ];
}

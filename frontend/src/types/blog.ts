import type { ImageKey } from './image';
import type { ServiceSlug } from './service';

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; id: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'tip'; title: string; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: ImageKey;
  publishedAt: string;
  readingMinutes: number;
  service: ServiceSlug;
  body: ArticleBlock[];
}

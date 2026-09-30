import type { ArticleBlock } from './blog';

export interface LegalSection {
  id: string;
  title: string;
  blocks: ArticleBlock[];
}

import { Icon } from '@/components/ui/Icon';
import { RichText } from '@/components/ui/RichText';
import type { ArticleBlock } from '@/types/blog';

/** Rendert strukturierte Inhaltsblöcke (Blog & Rechtstexte) in der Marken-Typografie. */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="prose-forge">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={i} id={block.id}>
                {block.text}
              </h2>
            );
          case 'h3':
            return <h3 key={i}>{block.text}</h3>;
          case 'ul':
          case 'ol': {
            const List = block.type;
            return (
              <List key={i}>
                {block.items.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case 'tip':
            return (
              <aside key={i} className="flex gap-4 border-l-4 border-accent bg-paper p-6 text-primary">
                <Icon name="gauge" className="mt-0.5 size-6 shrink-0 text-accent-700" />
                <div>
                  <p className="font-display font-bold">{block.title}</p>
                  <p className="mt-2 leading-relaxed text-muted">{block.text}</p>
                </div>
              </aside>
            );
          default:
            return (
              <p key={i}>
                <RichText text={block.text} />
              </p>
            );
        }
      })}
    </div>
  );
}

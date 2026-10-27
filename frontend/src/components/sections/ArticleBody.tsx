import { RichText } from '@/components/ui/RichText';
import type { LegalBlock } from '@/types/legal';

/** Rendert strukturierte Inhaltsblöcke der Rechtstexte in der Marken-Typografie. */
export function ArticleBody({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="prose-forge">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h3':
            return <h3 key={i}>{block.text}</h3>;
          case 'ul':
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
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

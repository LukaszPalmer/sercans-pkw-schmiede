import type { ReactNode } from 'react';
import { Section } from '@/components/ui/Section';
import type { LegalSection } from '@/types/legal';
import { ArticleBody } from './ArticleBody';

interface LegalDocumentProps {
  sections: LegalSection[];
  aside: ReactNode;
  children?: ReactNode;
}

/** Rechtstexte: Inhaltsverzeichnis + Grafik (sticky) links, Fließtext rechts. */
export function LegalDocument({ sections, aside, children }: LegalDocumentProps) {
  return (
    <Section id="inhalt-text">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-4">
          <div className="space-y-10 lg:sticky lg:top-28">
            <nav aria-label="Inhaltsverzeichnis" className="bg-paper p-6 ring-1 ring-line">
              <p className="text-eyebrow font-semibold text-accent-700 uppercase">Inhalt</p>
              <ol className="mt-4 space-y-1 text-sm">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="flex min-h-10 items-center gap-3 font-semibold hover:text-secondary">
                      <span className="w-6 text-muted">{String(i + 1).padStart(2, '0')}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="hidden lg:block">{aside}</div>
          </div>
        </aside>
        <div className="max-w-3xl lg:col-span-8">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-28 border-b border-line py-10 first:pt-0 last:border-0">
              <h2 id={`${s.id}-title`} className="text-h3 font-bold">
                <span className="mr-3 text-accent-700">{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </h2>
              <div className="mt-6">
                <ArticleBody blocks={s.blocks} />
              </div>
            </section>
          ))}
          {children}
        </div>
      </div>
    </Section>
  );
}

import { pad2 } from '@/lib/format';
import type { LegalSection } from '@/types/legal';
import { ArticleBody } from './ArticleBody';

/** Rechtstexte: Inhaltsverzeichnis links (sticky), nummerierte Abschnitte mit Haarlinie rechts – im Raster der Leistungsseiten. */
export function LegalDocument({ sections }: { sections: LegalSection[] }) {
  return (
    <section aria-label="Rechtstext" className="bg-white">
      <div className="container-site flex flex-col gap-12 py-sec-80 lg:flex-row lg:gap-[6.25rem]">
        <nav aria-label="Inhaltsverzeichnis" className="lg:w-[33.95%] lg:shrink-0">
          <ol className="lg:sticky lg:top-32">
            {sections.map((s, i) => (
              <li key={s.id} className="border-t border-line">
                <a href={`#${s.id}`} className="flex min-h-11 items-center gap-6 py-2 text-[0.9375rem] transition-colors hover:text-primary">
                  <span className="w-[1.875rem] shrink-0 text-xs text-primary tabular-nums">{pad2(i + 1)}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="max-w-3xl lg:flex-1">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="reveal scroll-mt-32 border-t border-line pt-[1.375rem] pb-10 last:pb-0">
              <h2 id={`${s.id}-title`} className="flex gap-6 text-step-sm">
                <span className="w-[1.875rem] shrink-0 pt-1.5 text-xs text-primary tabular-nums">{pad2(i + 1)}</span>
                {s.title}
              </h2>
              <div className="mt-5 lg:pl-[3.375rem]">
                <ArticleBody blocks={s.blocks} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FaqItem } from '@/components/ui/FaqItem';
import { JsonLd } from '@/components/ui/JsonLd';
import { Section } from '@/components/ui/Section';
import { faqs, getFaqsByCategory } from '@/lib/content/faq';
import { faqJsonLd } from '@/lib/seo';

/** Vollständiger FAQ-Katalog: Kategorie-Navigation (sticky) + gruppierte Akkordeons. */
export function FaqCatalog() {
  const groups = getFaqsByCategory();
  return (
    <Section id="fragen" tone="paper" labelledBy="fragen-title">
      <JsonLd data={faqJsonLd(faqs)} />
      <h2 id="fragen-title" className="sr-only">
        Alle Fragen nach Kategorien
      </h2>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <nav aria-label="FAQ-Kategorien" className="min-w-0 lg:col-span-3">
          <ul className="flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-28 lg:flex-col lg:gap-1 lg:overflow-visible">
            {groups.map((g) => (
              <li key={g.id} className="shrink-0">
                <a
                  href={`#${g.id}`}
                  className="flex min-h-11 items-center justify-between gap-4 bg-white px-4 text-sm font-semibold ring-1 ring-line transition-colors hover:bg-primary hover:text-white lg:min-h-12 lg:text-[0.9375rem]"
                >
                  {g.title}
                  <span className="text-xs text-muted">{g.items.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="min-w-0 space-y-16 lg:col-span-9">
          {groups.map((g) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`} className="scroll-mt-28">
              <h3 id={`${g.id}-title`} className="text-h3 flex items-center gap-4 font-bold">
                <span aria-hidden="true" className="h-0.5 w-8 bg-accent" />
                {g.title}
              </h3>
              <div className="mt-6 bg-white px-5 ring-1 ring-line sm:px-8 [&>details:last-child]:border-b-0">
                {g.items.map((item) => (
                  <FaqItem key={item.question} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Section>
  );
}

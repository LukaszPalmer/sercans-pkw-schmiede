import { TextLink } from '@/components/ui/Button';
import { JsonLd } from '@/components/ui/JsonLd';
import { Kicker } from '@/components/ui/Kicker';
import { faqJsonLd } from '@/lib/seo';
import type { FaqItem } from '@/types/faq';
import { FaqList } from './FaqList';

interface ServiceQuestionsProps {
  items: FaqItem[];
  /** „Auch interessant“ – Verweis unter einer Haarlinie. */
  related: { label: string; href: string };
}

/** Häufige Fragen der Unterseiten („Vorab geklärt.“) zum Aufklappen, darunter der Verweis „Auch interessant“. */
export function ServiceQuestions({ items, related }: ServiceQuestionsProps) {
  return (
    <section aria-labelledby="fragen-title">
      <JsonLd data={faqJsonLd(items)} />
      <div className="container-site flex flex-col gap-16 py-sec-80">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[6.25rem]">
          <div className="reveal flex flex-col gap-[1.375rem] lg:w-[33.95%] lg:shrink-0">
            <Kicker>Häufige Fragen</Kicker>
            <h2 id="fragen-title" className="text-h2-sm leading-[1.21] font-light">
              Vorab geklärt.
            </h2>
          </div>
          <div className="lg:flex-1">
            <FaqList items={items} />
          </div>
        </div>

        <div className="reveal flex flex-col gap-3 border-t border-line pt-[1.625rem] sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <p className="text-[0.8125rem] leading-[1.21] text-muted">AUCH INTERESSANT</p>
          <TextLink href={related.href} className="text-link-lg">
            {related.label}
          </TextLink>
        </div>
      </div>
    </section>
  );
}

import { ButtonLink } from '@/components/ui/Button';
import { FaqItem } from '@/components/ui/FaqItem';
import { JsonLd } from '@/components/ui/JsonLd';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faqJsonLd } from '@/lib/seo';
import type { FaqItem as Faq } from '@/types/faq';

interface FaqSectionProps {
  items: Faq[];
  eyebrow?: string;
  title?: string;
  lead?: string;
  tone?: 'white' | 'paper';
  showAllLink?: boolean;
  withSchema?: boolean;
}

/** Kompakte FAQ-Liste (Startseite & Leistungsseiten) inkl. FAQPage-Schema. */
export function FaqSection({
  items,
  eyebrow = 'Häufige Fragen',
  title = 'Gut zu wissen.',
  lead,
  tone = 'white',
  showAllLink = true,
  withSchema = true,
}: FaqSectionProps) {
  if (items.length === 0) return null;
  return (
    <Section id="faq" tone={tone} labelledBy="faq-title">
      {withSchema && <JsonLd data={faqJsonLd(items)} />}
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading id="faq-title" eyebrow={eyebrow} title={title} lead={lead} />
          {showAllLink && (
            <div className="mt-10">
              <ButtonLink href="/faq" variant="outline" icon="arrow-right">
                Alle Fragen ansehen
              </ButtonLink>
            </div>
          )}
        </div>
        <div className="border-t border-line lg:col-span-8">
          {items.map((item) => (
            <FaqItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}

import { ButtonLink } from '@/components/ui/Button';
import { JsonLd } from '@/components/ui/JsonLd';
import { Kicker } from '@/components/ui/Kicker';
import { faqJsonLd } from '@/lib/seo';
import { site } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';
import type { FaqEntry, FaqTopic } from '@/types/faq';
import { FaqExplorer } from './FaqExplorer';

interface HomeQuestionsProps {
  kicker: string;
  title: string;
  intro: string;
  topics: FaqTopic[];
  items: FaqEntry[];
}

/**
 * Häufige Fragen der Startseite (id="fragen", Ziel von /faq): links Titel, Suche und Themen, rechts die Fragen zum
 * Aufklappen – darunter der direkte Draht per WhatsApp oder Telefon.
 */
export function HomeQuestions({ kicker, title, intro, topics, items }: HomeQuestionsProps) {
  return (
    <section id="fragen" aria-labelledby="fragen-title" className="py-sec-96">
      <JsonLd data={faqJsonLd(items)} />
      {/* Die Slots stehen in FaqExplorer neben eigenen Elementen – feste Keys, sonst warnt React über die Server-Client-Grenze */}
      <FaqExplorer
        topics={topics}
        items={items}
        heading={
          <div key="heading" className="reveal flex flex-col gap-6">
            <Kicker>{kicker}</Kicker>
            <h2 id="fragen-title" className="text-h2-md leading-[1.1] font-light">
              {title}
            </h2>
            <p className="text-[1.0625rem] leading-[1.6] text-muted">{intro}</p>
          </div>
        }
        footer={
          <aside
            key="footer"
            aria-labelledby="fragen-direkt"
            className="reveal flex flex-col gap-5 bg-ice p-[1.625rem] md:flex-row md:items-center md:justify-between md:gap-8"
          >
            <div className="flex flex-col gap-[0.9375rem]">
              <p id="fragen-direkt" className="text-xs leading-[1.21] font-medium text-primary">
                IHRE FRAGE IST NICHT DABEI?
              </p>
              <p className="text-[0.9375rem] leading-[1.6]">Fragen Sie uns direkt – wir klären Ihr Anliegen persönlich.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <ButtonLink href={whatsappUrl()} icon="whatsapp">
                WhatsApp
              </ButtonLink>
              <ButtonLink href={site.phone.href} variant="outline" icon="phone">
                Anrufen
              </ButtonLink>
            </div>
          </aside>
        }
      />
    </section>
  );
}

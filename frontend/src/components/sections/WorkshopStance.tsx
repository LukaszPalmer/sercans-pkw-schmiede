import { Kicker } from '@/components/ui/Kicker';
import { Lines } from '@/components/ui/Lines';

interface WorkshopStanceProps {
  kicker: string;
  /** Zeilenumbrüche des Designs als „\n“. */
  title: string;
  lead: string;
  text: string;
}

/** Werkstatthaltung (Werkstatt-Seite): großer Titel links, rechts ein leichter Einleitungssatz und der Fließtext. */
export function WorkshopStance({ kicker, title, lead, text }: WorkshopStanceProps) {
  return (
    <section aria-labelledby="haltung-title">
      <div className="container-site flex flex-col gap-8 py-sec-96 lg:flex-row lg:gap-[6.25rem]">
        <div className="reveal flex flex-col gap-[1.625rem] lg:w-[50.15%] lg:shrink-0">
          <Kicker>{kicker}</Kicker>
          <h2 id="haltung-title" className="text-h2-xl font-light">
            <Lines text={title} />
          </h2>
        </div>
        <div className="reveal flex flex-col gap-6 lg:flex-1">
          <p className="text-lead-xl leading-[1.5] font-light">{lead}</p>
          <p className="text-[1.0625rem] leading-[1.7] text-muted">{text}</p>
        </div>
      </div>
    </section>
  );
}

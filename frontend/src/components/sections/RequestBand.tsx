import { ButtonLink } from '@/components/ui/Button';
import { Lines } from '@/components/ui/Lines';

interface RequestBandProps {
  /** Zeilenumbrüche des Designs als „\n“. */
  title: string;
  text: string;
  href: string;
}

/** Terminanfrage am Seitenende: Präzisionsblau, Titel links, Hinweis und weiße Aktion „Anfrage starten“ rechts. */
export function RequestBand({ title, text, href }: RequestBandProps) {
  return (
    <section aria-labelledby="anfrage-title" className="bg-primary text-white">
      <div className="container-site flex flex-col gap-8 py-sec-72 lg:flex-row lg:items-center lg:gap-20">
        <h2 id="anfrage-title" className="reveal text-h2-band font-light lg:w-[55.56%] lg:shrink-0">
          <Lines text={title} />
        </h2>
        <div className="reveal flex flex-col gap-[1.625rem] lg:flex-1">
          <p className="text-[1.0625rem] leading-[1.6]">{text}</p>
          <ButtonLink href={href} variant="light" className="self-start">
            Anfrage starten
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

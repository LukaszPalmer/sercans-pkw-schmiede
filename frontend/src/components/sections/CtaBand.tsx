import { ButtonLink } from '@/components/ui/Button';
import { whatsappUrl } from '@/lib/whatsapp';

interface CtaBandProps {
  title?: string;
  text?: string;
}

/** Abschluss-CTA mit Stahlverlauf – zwei Wege, eine Entscheidung. */
export function CtaBand({
  title = 'Bereit für den nächsten Werkstatttermin?',
  text = 'Schreiben Sie uns per WhatsApp oder fragen Sie Ihren Wunschtermin direkt online an.',
}: CtaBandProps) {
  return (
    <section aria-labelledby="cta-title" className="bg-steel relative isolate overflow-hidden text-white">
      <div aria-hidden="true" className="bg-blueprint absolute inset-0 -z-10 opacity-50" />
      <div aria-hidden="true" className="absolute -top-24 -right-24 -z-10 size-96 bg-accent/25 blur-3xl" />
      <div className="container-site flex flex-col items-start gap-10 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="text-h2 font-bold">
            {title}
          </h2>
          <p className="text-lead mt-4 text-white/80">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
          <ButtonLink href="/kontakt#termin" icon="calendar" iconPosition="start" size="lg">
            Termin anfragen
          </ButtonLink>
          <ButtonLink href={whatsappUrl()} icon="whatsapp" iconPosition="start" variant="light" size="lg">
            WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

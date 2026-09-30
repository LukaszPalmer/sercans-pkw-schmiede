import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Icon } from '@/components/ui/Icon';
import { QrCode } from '@/components/ui/QrCode';
import { Section } from '@/components/ui/Section';
import { site } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

/** Direkter Draht: Nummer groß sichtbar + scanbarer QR-Code, der den Chat sofort öffnet. */
export function WhatsAppSection() {
  return (
    <Section id="whatsapp" tone="dark" labelledBy="whatsapp-title">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Eyebrow tone="light">Direkter Draht</Eyebrow>
          <h2 id="whatsapp-title" className="text-h2 mt-5 font-bold">
            Frage zum Fahrzeug? <span className="text-glow">Einfach per WhatsApp.</span>
          </h2>
          <p className="text-lead mt-6 max-w-xl text-muted-dark">
            Schicken Sie uns Fotos, Warnleuchten oder Geräusch-Videos – wir antworten schnell, verständlich und mit einer
            ehrlichen Einschätzung.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-wide mt-8 inline-flex items-center gap-4 text-[clamp(1.5rem,1rem+2.4vw,2.75rem)] font-extrabold tracking-wide text-white transition-colors hover:text-accent"
          >
            <Icon name="whatsapp" className="size-[0.9em] shrink-0 text-accent" />
            {site.whatsapp.display}
          </a>
          <div className="mt-10 flex flex-col gap-3 md:flex-row">
            <ButtonLink href={whatsappUrl()} icon="whatsapp" iconPosition="start" size="lg">
              Chat starten
            </ButtonLink>
            <ButtonLink href={site.phone.href} icon="phone" iconPosition="start" variant="light" size="lg">
              Lieber anrufen
            </ButtonLink>
          </div>
        </div>

        <div className="reveal flex justify-center lg:col-span-5 lg:justify-end">
          <figure className="chamfer-frame relative w-full max-w-sm bg-white p-7 text-primary shadow-glow [--chamfer:2rem] sm:p-9">
            <QrCode value={whatsappUrl()} label="QR-Code: WhatsApp-Chat mit der Sercans PKW Schmiede öffnen" className="aspect-square w-full" />
            <figcaption className="mt-6 flex items-center gap-4 border-t border-line pt-6">
              <span className="grid size-12 shrink-0 place-items-center bg-primary text-accent">
                <Icon name="whatsapp" className="size-6" />
              </span>
              <span>
                <span className="block font-display font-bold">Scannen & schreiben</span>
                <span className="block text-sm text-muted">Öffnet den Chat direkt auf Ihrem Smartphone.</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}

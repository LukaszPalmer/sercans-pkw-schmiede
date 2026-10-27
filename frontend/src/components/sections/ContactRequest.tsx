import { Kicker } from '@/components/ui/Kicker';
import { services } from '@/lib/content/services';
import { fullAddress, isPlaceholder, site } from '@/lib/site';
import { GENERAL_REQUEST } from '@/lib/validation/contact';
import { ContactForm } from './ContactForm';

const formServices = [
  ...services.map(({ slug, title }) => ({ value: slug, label: title })),
  { value: GENERAL_REQUEST, label: 'Allgemeine Anfrage' },
];

/** Solange ein Wert in `site.ts` noch Platzhalter ist, steht dort wie im Design „noch zu ergänzen“. */
const contacts = [
  { label: 'Telefon', value: site.phone.display, href: site.phone.href },
  { label: 'E-Mail', value: site.email, href: `mailto:${site.email}` },
  { label: 'Anschrift', value: fullAddress },
];

/**
 * Kontaktformular und Hinweise (id="anfrage"): links Einordnung, Hinweis „Anfrage, noch keine Buchung“
 * und die direkten Kontaktdaten – rechts die Terminanfrage.
 */
export function ContactRequest() {
  return (
    <section id="anfrage" aria-labelledby="anliegen-title">
      <div className="container-site flex flex-col gap-14 py-sec-88 lg:flex-row lg:gap-[5.625rem]">
        <div className="reveal flex flex-col gap-7 lg:w-[30.86%] lg:shrink-0">
          <Kicker>Direkt zum Anliegen</Kicker>
          <h2 id="anliegen-title" className="text-h2-md font-light">
            Was können wir für Ihr Fahrzeug tun?
          </h2>
          <p className="text-[1.0625rem] leading-[1.65] text-muted">
            Je genauer die Angaben, desto gezielter lässt sich Ihre Anfrage einordnen. Für sichtbare Schäden helfen Fotos.
          </p>
          <aside aria-label="Anfrage, noch keine Buchung" className="flex flex-col gap-[0.9375rem] bg-ice p-[1.625rem]">
            <p className="text-xs leading-[1.21] font-medium text-primary">ANFRAGE, NOCH KEINE BUCHUNG</p>
            <p className="text-[0.9375rem] leading-[1.6]">Ein Termin ist erst nach persönlicher Abstimmung und ausdrücklicher Bestätigung vereinbart.</p>
          </aside>
          <div className="flex flex-col gap-4 border-t border-line pt-6">
            <h3 className="text-[0.8125rem] leading-[1.21]">Direkte Kontaktdaten</h3>
            <ul className="text-[0.9375rem] leading-[1.7] text-muted">
              {contacts.map((c) => (
                <li key={c.label}>
                  {c.label} ·{' '}
                  {isPlaceholder(c.value) ? (
                    'noch zu ergänzen'
                  ) : c.href ? (
                    <a href={c.href} className="break-all transition-colors hover:text-primary">
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal lg:flex-1">
          <ContactForm services={formServices} />
        </div>
      </div>
    </section>
  );
}

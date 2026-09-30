import { Icon } from '@/components/ui/Icon';
import { QrCode } from '@/components/ui/QrCode';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/lib/content/services';
import { fullAddress, site } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';
import { ContactForm } from './ContactForm';

const formServices = services.map(({ slug, title }) => ({ slug, title }));

interface ContactSectionProps {
  defaultService?: string;
  title?: string;
  tone?: 'white' | 'paper';
  showQr?: boolean;
}

/** Terminanfrage (id="termin"): Kontaktwege + Öffnungszeiten links, Formular rechts. */
export function ContactSection({
  defaultService,
  title = 'Termin anfragen – wir melden uns schnellstmöglich.',
  tone = 'paper',
  showQr = true,
}: ContactSectionProps) {
  const channels = [
    { icon: 'phone' as const, label: 'Telefon', value: site.phone.display, href: site.phone.href },
    { icon: 'whatsapp' as const, label: 'WhatsApp', value: site.whatsapp.display, href: whatsappUrl() },
    { icon: 'mail' as const, label: 'E-Mail', value: site.email, href: `mailto:${site.email}` },
    { icon: 'pin' as const, label: 'Adresse', value: fullAddress, href: site.mapsUrl },
  ];

  return (
    <Section id="termin" tone={tone} labelledBy="termin-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="termin-title"
            eyebrow="Kontakt & Termin"
            title={title}
            lead="Schildern Sie uns kurz Ihr Anliegen. Sie erhalten einen Terminvorschlag – bei Bedarf mit Kostenvoranschlag."
          />
          <ul className="mt-10 grid gap-px bg-line ring-1 ring-line">
            {channels.map((c) => (
              <li key={c.label} className="bg-white">
                <a
                  href={c.href}
                  {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex min-h-16 items-center gap-4 p-4 transition-colors hover:bg-secondary-50 sm:px-5"
                >
                  <span className="grid size-11 shrink-0 place-items-center bg-primary text-accent">
                    <Icon name={c.icon} className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold tracking-[0.14em] text-muted uppercase">{c.label}</span>
                    <span className="block font-semibold break-words">{c.value}</span>
                  </span>
                  <Icon name="arrow-up-right" className="ml-auto size-4 shrink-0 text-accent-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>

          {showQr && (
          <div className="mt-8 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
            <div className="bg-white p-3 ring-1 ring-line">
              <QrCode value={whatsappUrl()} label="QR-Code: WhatsApp-Chat mit der Sercans PKW Schmiede öffnen" className="size-32" />
            </div>
            <div>
              <p className="font-display text-lg font-bold">Scannen & per WhatsApp schreiben</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Kamera öffnen, QR-Code scannen – der Chat startet direkt mit uns.
              </p>
            </div>
          </div>
          )}

          <div className="mt-8">
            <h3 className="text-eyebrow font-semibold text-accent-700 uppercase">Öffnungszeiten</h3>
            <dl className="mt-4 space-y-2">
              {site.hours.map((h) => (
                <div key={h.days} className="flex flex-wrap justify-between gap-x-4 border-b border-line pb-2">
                  <dt className="text-muted">{h.days}</dt>
                  <dd className="font-semibold">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="chamfer-frame bg-white p-6 shadow-card ring-1 ring-line [--chamfer:2rem] sm:p-10 lg:p-12">
            <h3 className="font-display text-2xl font-bold">Ihre Anfrage</h3>
            <p className="mt-2 mb-8 text-muted">Unverbindlich und kostenfrei – wir melden uns schnellstmöglich.</p>
            <ContactForm services={formServices} defaultService={defaultService} />
          </div>
        </div>
      </div>
    </Section>
  );
}

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';
import { services } from '@/lib/content/services';
import { fullAddress, legalNav, mainNav, site } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

const columnTitle = 'text-eyebrow font-semibold uppercase text-accent';
const linkClass = 'inline-flex min-h-11 items-center py-1 text-muted-dark transition-colors hover:text-white md:min-h-9';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forge relative isolate overflow-hidden text-white">
      <div aria-hidden="true" className="bg-blueprint absolute inset-0 -z-10 opacity-50" />
      <div aria-hidden="true" className="h-1 bg-gradient-to-r from-accent via-accent-300 to-secondary" />

      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-4">
          <Link href="/" aria-label={`${site.name} – zur Startseite`} className="inline-block">
            <Logo idPrefix="footer-logo" />
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-dark">
            Ihre Kfz-Werkstatt für Wartung, Reparatur, Reifen, Glas und TÜV-Service. Präzise Arbeit, ehrliche Beratung und
            transparente Preise – für alle Marken.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center gap-3 bg-white/5 px-4 font-semibold ring-1 ring-white/15 transition-colors ring-inset hover:bg-white/10"
          >
            <Icon name="whatsapp" className="size-5 text-accent" />
            WhatsApp: {site.whatsapp.display}
          </a>
        </div>

        <nav aria-label="Leistungen" className="lg:col-span-3">
          <h2 className={columnTitle}>Leistungen</h2>
          <ul className="mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/leistungen/${s.slug}`} className={linkClass}>
                  {s.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Unternehmen" className="lg:col-span-2">
          <h2 className={columnTitle}>Unternehmen</h2>
          <ul className="mt-5">
            {[{ label: 'Startseite', href: '/' }, ...mainNav, ...legalNav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className={columnTitle}>Kontakt</h2>
          <address className="mt-5 space-y-3 not-italic">
            <p className="flex gap-3 text-muted-dark">
              <Icon name="pin" className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>
                {site.name}
                <br />
                {fullAddress}
              </span>
            </p>
            <a href={site.phone.href} className="flex min-h-11 items-center gap-3 text-muted-dark hover:text-white">
              <Icon name="phone" className="size-5 shrink-0 text-accent" />
              {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="flex min-h-11 items-center gap-3 break-all text-muted-dark hover:text-white">
              <Icon name="mail" className="size-5 shrink-0 text-accent" />
              {site.email}
            </a>
          </address>
          <h2 className={`${columnTitle} mt-10`}>Öffnungszeiten</h2>
          <dl className="mt-5 space-y-2 text-sm">
            {site.hours.map((h) => (
              <div key={h.days} className="flex flex-wrap justify-between gap-x-4 border-b border-white/10 pb-2">
                <dt className="text-muted-dark">{h.days}</dt>
                <dd className="font-semibold">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-8 text-sm text-muted-dark md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-white md:min-h-0">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/impressum#bildnachweis" className="inline-flex min-h-11 items-center hover:text-white md:min-h-0">
                Bildnachweis
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

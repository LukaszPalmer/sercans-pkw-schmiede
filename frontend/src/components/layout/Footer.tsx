import Link from 'next/link';
import { Fragment } from 'react';
import { TextLink } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { servicePath, services } from '@/lib/content/services';
import { legalNav, site } from '@/lib/site';

/** Zeilenumbrüche der Leistungsliste wie im Design: nach „Fahrzeugaufbereitung“ und nach „Reifen- und Felgenservice“. */
const lineBreakAfter = new Set(['fahrzeugaufbereitung', 'reifen-felgenservice']);

/** Fußzeile wie im Design: Graphit, großes Logo (helle Variante, Markenkern im Logo), Leistungsliste, Seitenlinks – Rechtliches unter einer Haarlinie. */
export function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="container-site pt-[3.75rem] pb-7">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-8">
          <Link href="/" aria-label={`${site.shortName} – zur Startseite`} className="self-start">
            <Logo tone="night" size="xl" />
          </Link>

          <nav aria-labelledby="footer-leistungen" className="flex flex-col gap-3">
            <p id="footer-leistungen" className="text-xs leading-[1.21] text-fog">
              LEISTUNGEN
            </p>
            <p className="text-sm leading-[1.9]">
              {services.map((s, i) => (
                <Fragment key={s.slug}>
                  <Link href={servicePath(s.slug)} className="transition-colors duration-300 hover:text-sky">
                    {s.shortTitle}
                  </Link>
                  {i < services.length - 1 && (lineBreakAfter.has(s.slug) ? <br /> : ' · ')}
                </Fragment>
              ))}
            </p>
          </nav>

          <nav aria-label="Seiten" className="flex flex-col gap-[0.875rem] text-sm leading-[1.21]">
            <TextLink href="/werkstatt" tone="white" className="self-start">
              Werkstatt
            </TextLink>
            <TextLink href="/kontakt" tone="white" className="self-start">
              Kontakt
            </TextLink>
          </nav>
        </div>

        {/* Links Copyright und Rechtslinks, ab lg rechts der Vermerk der Webagentur – darunter untereinander, alles linksbündig.
            Das Jahr stammt aus dem Build (jeder Deploy aktualisiert es). „Nach oben“ bleibt am Seitenende über dieser Zeile (data-scroll-top-clear). */}
        <div data-scroll-top-clear className="mt-[3.25rem] flex flex-col gap-4 border-t border-muted pt-[1.375rem] text-[0.6875rem] leading-[1.6] text-fog lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <p>
              © {new Date().getFullYear()} {site.shortName}. Alle Rechte vorbehalten.
            </p>
            <ul className="flex gap-8">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors duration-300 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p>
            Design und Entwicklung von Palmer Digital.
            <br className="md:hidden" /> Entwickelt mit Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

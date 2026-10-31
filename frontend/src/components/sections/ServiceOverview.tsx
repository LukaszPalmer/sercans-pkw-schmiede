import Link from 'next/link';
import { Arrow } from '@/components/ui/Arrow';
import { Icon } from '@/components/ui/Icon';
import { Kicker } from '@/components/ui/Kicker';
import { SwipeRail } from '@/components/ui/SwipeRail';
import { pad2 } from '@/lib/format';
import { servicePath, services } from '@/lib/content/services';
import { ServiceFocusBoard } from './ServiceFocusBoard';

/**
 * Leistungsübersicht der Startseite: Überschrift links, Einordnung rechts unten bündig – darunter ab 1024 px die
 * Fokus-Tafel. Von 768 bis 1023 px alle sieben Leistungen in Zweierreihen, je mit Haarlinie, Kennung, Pfeil, Icon im
 * Haarlinien-Quadrat, Name und Kurzbeschreibung – die ganze Karte ist klickbar. Unter 768 px weiße Karten in einer
 * wischbaren Reihe.
 */
export function ServiceOverview() {
  return (
    <section id="leistungen" aria-labelledby="leistungen-title" className="py-sec-96">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="reveal flex flex-col gap-[1.375rem]">
            <Kicker>Unsere Leistungen</Kicker>
            <h2 id="leistungen-title" className="text-h2-xl leading-[1.21] font-light">
              Was Ihr Fahrzeug braucht.
            </h2>
          </div>
          <p className="reveal text-[1.0625rem] leading-[1.6] text-muted lg:w-[21.875rem] lg:shrink-0">
            Vom laufenden Service bis zum sichtbaren Detail. Wählen Sie Ihr Anliegen.
          </p>
        </div>

        <ServiceFocusBoard
          services={services.map((s) => ({
            slug: s.slug,
            href: servicePath(s.slug),
            title: s.title,
            icon: s.icon,
            headline: s.banner.title,
            intro: s.banner.intro,
            action: s.linkLabel,
          }))}
        />

        <SwipeRail count={services.length} className="mt-12 lg:hidden" listClassName="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {services.map((s, i) => (
            <li
              key={s.slug}
              className="reveal group relative flex flex-col gap-[1.0625rem] border-t border-line pt-[1.375rem] max-md:border max-md:bg-white max-md:p-6"
            >
              <div className="flex items-start justify-between">
                <span className="text-[0.6875rem] leading-[1.21] text-primary tabular-nums">{pad2(i + 1)}</span>
                <Arrow className="text-[1.375rem] text-primary transition-transform duration-300 ease-forge group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <span className="grid size-12 place-items-center text-primary ring-1 ring-line ring-inset transition-[background-color,box-shadow,color] duration-300 ease-forge group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                <Icon name={s.icon} className="size-7" />
              </span>
              <h3 className="text-item">
                <Link
                  href={servicePath(s.slug)}
                  className="transition-colors duration-300 group-hover:text-primary after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-primary"
                >
                  {s.title}
                </Link>
              </h3>
              <p className="text-[0.9375rem] leading-[1.5] text-muted">{s.teaser}</p>
            </li>
          ))}
        </SwipeRail>
      </div>
    </section>
  );
}

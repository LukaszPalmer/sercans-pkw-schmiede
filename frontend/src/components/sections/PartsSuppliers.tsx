import Image from 'next/image';
import { Kicker } from '@/components/ui/Kicker';
import { cn } from '@/lib/cn';

/** Kartenfläche und Beschriftungsfarbe je Lieferant wie im Design. */
const suppliers = [
  { name: 'WM SE', logo: '/images/lieferant-wm.png', label: 'Teilegroßhandel', card: 'bg-white', tone: 'text-black' },
  { name: 'KT-Fahrzeugteile', logo: '/images/lieferant-kt-fahrzeugteile.png', label: 'Fahrzeugteilefachhandel', card: 'bg-paper', tone: 'text-steel' },
  { name: 'PV Automotive', logo: '/images/lieferant-pv-automotive.png', label: 'Automobilteile', card: 'bg-white', tone: 'text-steel' },
];

/** Teile & Materialien (Startseite): Überschrift links, Einordnung rechts unten bündig, drei Logokarten, darunter der Hinweis zu den Bezugsquellen. */
export function PartsSuppliers() {
  return (
    <section aria-labelledby="teile-title" className="bg-ink text-white">
      <div className="container-site flex flex-col gap-[3.25rem] py-sec-80">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="reveal flex flex-col gap-5">
            <Kicker tone="night" className="tracking-[0.1636em]">
              Teile &amp; Materialien
            </Kicker>
            <h2 id="teile-title" className="text-h2-xs font-light tracking-[-0.0357em]">
              Qualität von Anfang an.
            </h2>
          </div>
          {/* text-wrap: Umbruch wie im Design („… und PV / Automotive.“) statt des globalen `pretty` */}
          <p className="reveal leading-[1.65] text-wrap text-fog lg:w-[23.75rem] lg:shrink-0">
            Für unsere Werkstatt beziehen wir Ersatzteile unter anderem bei WM, KT-Fahrzeugteile und PV Automotive.
          </p>
        </div>

        <ul className="grid gap-0.5 md:grid-cols-3">
          {suppliers.map((supplier) => (
            <li
              key={supplier.name}
              className={cn('reveal flex h-44 flex-col items-center justify-center gap-5 rounded-sm p-4 md:h-[13.75rem] lg:p-10', supplier.card)}
            >
              <Image src={supplier.logo} width={160} height={80} alt={supplier.name} unoptimized className="h-20 w-40 object-contain" />
              <p className={cn('text-[0.6875rem] leading-[1.21] tracking-[0.1364em] uppercase', supplier.tone)}>{supplier.label}</p>
            </li>
          ))}
        </ul>

        <p className="reveal border-t border-muted pt-6 text-[0.8125rem] leading-[1.6] text-muted">
          Die genannten Unternehmen sind unsere Bezugsquellen für Ersatzteile und Materialien. Es besteht keine Partnerschaft, Kooperation oder
          Zertifizierungsbeziehung.
        </p>
      </div>
    </section>
  );
}

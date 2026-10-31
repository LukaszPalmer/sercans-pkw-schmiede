import Image from 'next/image';
import { ButtonLink } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { Photo } from '@/components/ui/Photo';
import { cn } from '@/lib/cn';
import { partnerUrl } from '@/lib/site';

const offers = [
  { label: 'Innen & Außen', name: 'Reinigung' },
  { label: 'Professionelle', name: 'Handwäsche' },
  { label: 'Smart Repair &', name: 'Felgenreinigung' },
  { label: 'Polster & Leder', name: 'Reinigung' },
  { label: 'Cabrioverdeck', name: 'Imprägnierung' },
  { label: 'Fahrzeug', name: 'Aufbereitung' },
];

/** Inhaltskante dieses Abschnitts: ab 1024 px größerer Rand wie im Design (bei 1440 px je 96 statt 72 px). */
const container = 'container-site lg:px-[min(6.67vw,6rem)]';

/**
 * Inhouse-Partner der Startseite in der Farbwelt von Clean Car Solution: Ab 1024 px liegt das Foto randlos auf der
 * rechten Hälfte, darüber Verlauf und Leistungsraster; links Kapitelzeile, Logo, Titel, Text und Aktion. Schmaler
 * stapelt sich alles (Foto, Text, Raster). Oben der Akzentstreifen, unten die Infoleiste.
 */
export function InhousePartner() {
  return (
    <section aria-labelledby="inhouse-partner-title" className="bg-ccs-night text-white">
      <div aria-hidden="true" className="h-1 bg-ccs" />

      <div className="relative overflow-hidden">
        <div className="relative aspect-[4/3] md:aspect-[2/1] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-1/2">
          {/* Ausschnitt: Tablet mit Kopf des Mitarbeiters · 1440 px quadratisch, ganzes Motiv · breiter: Unterkante, damit das Raster nicht auf der hellen Scheibe liegt */}
          <Photo
            image="clean-car-solution"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="absolute inset-0 size-full object-cover object-[50%_40%] 2xl:object-bottom"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-ccs-night/18" />
        </div>
        {/* Verlauf von rechts, Stopps an der Inhaltskante verankert: Das Raster bleibt auch auf breiten Monitoren lesbar (bei 1440 px wie im Design) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(270deg,rgb(17_24_39/0.941)_max(0px,(100%_-_90rem)/2),rgb(17_24_39/0.8)_calc(max(0px,(100%_-_90rem)/2)_+_14.7rem),rgb(17_24_39/0)_calc(max(0px,(100%_-_90rem)/2)_+_30.45rem))] lg:block"
        />

        <div
          className={cn(
            container,
            'relative flex flex-col gap-10 py-sec-72 lg:min-h-[clamp(36rem,50vw,45rem)] lg:flex-row lg:items-center lg:justify-between',
          )}
        >
          <div className="reveal flex flex-col items-start gap-8 lg:w-[46.47%] lg:shrink-0">
            <Kicker tone="ccs" className="tracking-[0.1636em]">
              Inhouse-Partner · Professionelle Autopflege
            </Kicker>
            <a
              href={partnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Clean Car Solution – zur Website"
              className="relative block w-full max-w-[19.5rem] focus-visible:outline-ccs"
            >
              <div aria-hidden="true" className="absolute inset-x-0 top-1/2 h-[4.75rem] -translate-y-1/2 rounded-full bg-white" />
              <Image
                src="/images/clean-car-solution-logo.png"
                width={280}
                height={100}
                alt="Clean Car Solution"
                unoptimized
                className="relative h-[6.25rem] w-full px-4 object-contain"
              />
            </a>
            <h2 id="inhouse-partner-title" className="flex flex-col gap-2 text-h2-md leading-[1.1] font-light tracking-[-0.0326em]">
              <span>Professionelle Pflege.</span>
              <span className="text-ccs">Direkt vor Ort.</span>
            </h2>
            <p className="leading-[1.65] text-ccs-fog lg:max-w-[31.25rem]">
              Clean Car Solution ist unser fester Inhouse-Partner für professionelle Fahrzeugaufbereitung und Autopflege – alles aus
              einer Hand, in unserer Werkstatt.
            </p>
            <ButtonLink href={`${partnerUrl}#kontakt`} variant="ccs">
              Aufbereitung anfragen
            </ButtonLink>
          </div>

          <ul className="grid grid-cols-2 whitespace-nowrap max-lg:border-t max-lg:border-ccs/13 lg:w-[23.75rem] lg:shrink-0">
            {offers.map((offer) => (
              <li
                key={`${offer.label} ${offer.name}`}
                className="reveal flex flex-col gap-1 border-b border-ccs/13 py-5 pr-2 pl-4 odd:border-r odd:pl-0 nth-last-[-n+2]:border-b-0 lg:pr-5 lg:pl-6 lg:odd:pl-6"
              >
                <span className="text-[0.625rem] leading-[1.21] font-medium tracking-[0.15em] text-ccs uppercase">{offer.label}</span>
                <span className="text-xl leading-[1.21] font-light tracking-[-0.0227em] xs:text-[1.375rem]">{offer.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-ccs-deep-night">
        <div className={cn(container, 'flex flex-col gap-3 py-3.5 text-xs leading-[1.21] text-ccs-mist md:min-h-14 md:flex-row md:items-center md:justify-between md:py-0')}>
          <p className="flex items-center gap-2.5">
            <span aria-hidden="true" className="relative size-7 shrink-0">
              <Image src="/images/hygiene-kreis.svg" width={28} height={28} alt="" className="size-7" />
              <Image src="/images/hygiene-tropfen.svg" width={12} height={18} alt="" className="absolute top-[0.3125rem] left-2 h-[1.125rem] w-3" />
            </span>
            <span className="flex flex-wrap gap-x-2.5 gap-y-1">
              <span className="font-medium tracking-[0.0833em] text-ccs-fog uppercase">Innenraumhygiene</span>
              <span>· Reinigung mit Trockendampf</span>
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span aria-hidden="true" className="size-1 shrink-0 rounded-xs bg-ccs" />
            <span className="tracking-[0.0417em]">Inhouse-Partner der PKW Schmiede</span>
          </p>
        </div>
      </div>
    </section>
  );
}

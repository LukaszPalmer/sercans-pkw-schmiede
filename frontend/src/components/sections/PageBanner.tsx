import { ButtonLink } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { Lines } from '@/components/ui/Lines';
import { Photo } from '@/components/ui/Photo';
import { cn } from '@/lib/cn';
import { images } from '@/lib/content/images';
import type { ImageKey } from '@/types/image';
import type { BannerCentering, BannerLayout, BannerMobile } from '@/types/service';

interface PageBannerProps {
  layout: BannerLayout;
  kicker: string;
  /** Zeilenumbrüche des Designs als „\n“. */
  title: string;
  intro: string;
  image: ImageKey;
  action: { label: string; href: string };
  /** Nur `overlay`: Inhalt vertikal mittig statt unten – siehe `BannerCentering`. */
  centered?: BannerCentering;
  /** Nur `overlay`: Intro schmaler und ausgeglichen umbrochen – endet unter dem Titel statt im Motiv. */
  narrowIntro?: boolean;
  /** Nur `overlay` mit `centered: 'always'`: abgedunkelt wird nur hinter dem Text – ab 768 px links, darunter als Band hinter dem mittigen Inhalt; das Motiv daneben bleibt hell. */
  narrowShade?: boolean;
  /** Nur `overlay`: unter 768 px nur dieser Titel, die Zeile darunter und die Aktion, zentriert – Kicker und Intro entfallen. */
  mobile?: BannerMobile;
}

/**
 * Seitenbanner in den drei Varianten des Designs, jeweils so hoch wie der erste Bildschirm (`min-h-banner`):
 * `overlay` Foto mit Lesekontrast-Verlauf, Inhalt unten links oder mittig (Startseite, Smartrepair, Klimaservice, Folierung, Werkstatt) ·
 * `split` Graphit 650 px mit zentriertem Inhalt, Foto rechts (Ölwechsel, Reifen, HU/AU, Kontakt) ·
 * `stacked` Titelzeile auf Mineralweiß, darunter das Foto (Fahrzeugaufbereitung, Gutachten, Autoglas).
 * Wo Text und Foto untereinander stehen, füllt das Foto die restliche Höhe (mindestens 15 rem).
 */
export function PageBanner({ layout, kicker, title, intro, image, action, centered, narrowIntro, narrowShade, mobile }: PageBannerProps) {
  if (layout === 'overlay') {
    // Hochformat: Das Foto füllt die Bannerhöhe und ist dann breiter als der Bildschirm – srcset nach Höhe × Seitenverhältnis wählen, sonst wird es unscharf hochskaliert.
    const { width, height } = images[image];
    const sizes = `(max-aspect-ratio: ${width}/${height}) ${Math.ceil((100 * width) / height)}vh, 100vw`;
    return (
      <section
        aria-labelledby="seitentitel"
        className={cn('relative isolate flex min-h-banner flex-col overflow-hidden bg-night text-white', centered === 'always' ? 'justify-center' : 'justify-end', centered === 'desktop' && 'lg:justify-center')}
      >
        <Photo image={image} sizes={sizes} priority className="absolute inset-0 -z-10 size-full object-cover" />
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 -z-10',
            narrowShade
              ? // Dunkel bis 20 rem rechts der Textkante (Rand wie container-site), ab 42 rem klar · unter 768 px: Band hinter Titel und Zeile, darunter klar
                'bg-[linear-gradient(90deg,rgb(16_25_29/0.85)_0%,rgb(16_25_29/0.75)_calc(max(0px,(100%_-_90rem)/2)_+_clamp(1rem,5vw,4.5rem)_+_20rem),rgb(16_25_29/0)_calc(max(0px,(100%_-_90rem)/2)_+_clamp(1rem,5vw,4.5rem)_+_42rem))] max-md:bg-[linear-gradient(0deg,rgb(16_25_29/0)_36%,rgb(16_25_29/0.8)_52%,rgb(16_25_29/0.65)_66%,rgb(16_25_29/0.15)_100%)]'
              : 'bg-[linear-gradient(90deg,rgb(16_25_29/0.92)_0%,rgb(16_25_29/0.33)_65%,rgb(16_25_29/0)_100%)] max-lg:bg-[linear-gradient(0deg,rgb(16_25_29/0.92)_0%,rgb(16_25_29/0.6)_55%,rgb(16_25_29/0.2)_100%)]',
            // Kompakter Handy-Inhalt unten: dunkel nur so hoch wie der Text, darüber bleibt das Motiv hell
            mobile && centered !== 'always' && 'max-md:bg-[linear-gradient(0deg,rgb(16_25_29/0.92)_0%,rgb(16_25_29/0.75)_30%,rgb(16_25_29/0.25)_55%,rgb(16_25_29/0.15)_100%)]',
          )}
        />
        <div className={cn('container-site', centered === 'always' ? 'py-sec-68' : 'pt-40 pb-sec-68', centered === 'desktop' && 'lg:pt-sec-68')}>
          <div className={cn('flex max-w-[49.375rem] flex-col gap-[1.625rem]', mobile && 'max-md:items-center max-md:gap-0 max-md:text-center')}>
            <Kicker tone="night" className={mobile && 'max-md:hidden'}>
              {kicker}
            </Kicker>
            <h1 id="seitentitel" className="text-hero font-light">
              {mobile ? (
                <>
                  <span className="tracking-[0.03em] uppercase md:hidden">{mobile.title}</span>{' '}
                  <span className="max-md:hidden">
                    <Lines text={title} />
                  </span>
                </>
              ) : (
                <Lines text={title} />
              )}
            </h1>
            {mobile && <p className="mt-3 text-sm leading-[1.4] font-medium tracking-[0.12em] text-fog uppercase md:hidden">{mobile.subtitle}</p>}
            <p className={cn('text-lg leading-[1.55]', narrowIntro ? 'max-w-[24rem] text-balance' : 'max-w-[37.5rem]', mobile && 'max-md:hidden')}>{intro}</p>
            <ButtonLink href={action.href} className={cn('self-start', mobile && 'max-md:mt-9 max-md:self-center')}>
              {action.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    );
  }

  if (layout === 'split') {
    return (
      <section aria-labelledby="seitentitel" className="relative flex min-h-banner flex-col bg-night text-white">
        <div className="container-site">
          <div className="flex flex-col justify-center gap-[1.875rem] py-sec-64 xl:min-h-banner xl:w-[min(31.625rem,calc(45.14vw_-_4.5rem_-_clamp(1rem,5vw,4.5rem)))]">
            <Kicker tone="night">{kicker}</Kicker>
            <h1 id="seitentitel" className="text-hero-split font-light">
              <Lines text={title} />
            </h1>
            <p className="text-lg leading-[1.6] text-fog">{intro}</p>
            <ButtonLink href={action.href} className="self-start">
              {action.label}
            </ButtonLink>
          </div>
        </div>
        <div className="relative min-h-60 w-full flex-1 overflow-hidden xl:absolute xl:inset-y-0 xl:right-0 xl:left-[calc(max(0px,(100%_-_90rem)/2)_+_min(45.14%,40.625rem))] xl:w-auto">
          <Photo image={image} sizes="(min-width: 1280px) 55vw, 100vw" priority className="absolute inset-0 size-full object-cover" />
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="seitentitel" className="flex min-h-banner flex-col">
      <div className="container-site flex flex-col gap-8 py-sec-48 lg:flex-row lg:items-end lg:gap-16">
        <div className="flex flex-col gap-6 lg:w-[57.1%] lg:shrink-0">
          <Kicker>{kicker}</Kicker>
          <h1 id="seitentitel" className="text-hero-stacked font-light">
            <Lines text={title} />
          </h1>
        </div>
        <div className="flex flex-col gap-6 lg:flex-1">
          <p className="text-[1.0625rem] leading-[1.6] text-muted">{intro}</p>
          <ButtonLink href={action.href} className="self-start">
            {action.label}
          </ButtonLink>
        </div>
      </div>
      <div className="relative min-h-60 flex-1 overflow-hidden">
        <Photo image={image} sizes="100vw" priority className="absolute inset-0 size-full object-cover" />
      </div>
    </section>
  );
}

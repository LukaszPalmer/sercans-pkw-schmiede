import { Fragment } from 'react';
import { BannerSlider } from '@/components/ui/BannerSlider';
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
  /** Mehrere Bilder (nur `overlay`): Bildwechsel alle 4 s mit Fortschrittsbalken – siehe BannerSlider. */
  image: ImageKey | [ImageKey, ...ImageKey[]];
  action: { label: string; href: string };
  /** Nur `overlay`: Inhalt vertikal mittig statt unten – siehe `BannerCentering`. */
  centered?: BannerCentering;
  /** Nur `overlay`: Intro schmaler und ausgeglichen umbrochen – endet unter dem Titel statt im Motiv. */
  narrowIntro?: boolean;
  /**
   * Nur `overlay` mit `centered: 'always'`: abgedunkelt wird nur hinter dem Text – ab 768 px links, darunter als Band hinter dem mittigen Inhalt; das Motiv daneben bleibt hell.
   * `strong` für helle Motive hinter einem langen Titel (Werkstatt): ab 1024 px dunkel bis hinter das Titelende, mobil ein dunkleres Band.
   */
  narrowShade?: boolean | 'strong';
  /** Nur `overlay`: unter 768 px nur dieser Titel, die Zeile darunter und die Aktion, zentriert – Kicker und Intro entfallen. */
  mobile?: BannerMobile;
}

/**
 * Seitenbanner in den drei Varianten des Designs, jeweils so hoch wie der erste Bildschirm (`min-h-banner`):
 * `overlay` Foto mit Lesekontrast-Verlauf, Inhalt unten links oder mittig (Startseite, Werkstatt, Kontakt und alle Leistungen) ·
 * `split` Graphit 650 px mit zentriertem Inhalt, Foto rechts (derzeit ungenutzt) ·
 * `stacked` Titelzeile auf Mineralweiß, darunter das Foto (derzeit ungenutzt).
 * Wo Text und Foto untereinander stehen, füllt das Foto die restliche Höhe (mindestens 15 rem).
 * `overlay` mit mehreren Bildern wechselt sie im Slider (Werkstatt), Text und Aktion bleiben stehen.
 */
export function PageBanner({ layout, kicker, title, intro, image, action, centered, narrowIntro, narrowShade, mobile }: PageBannerProps) {
  const photos: [ImageKey, ...ImageKey[]] = Array.isArray(image) ? image : [image];

  if (layout === 'overlay') {
    // Hochformat: Das Foto füllt die Bannerhöhe und ist dann breiter als der Bildschirm – srcset nach Höhe × Seitenverhältnis wählen, sonst wird es unscharf hochskaliert.
    const sizes = (key: ImageKey) => {
      const { width, height } = images[key];
      return `(max-aspect-ratio: ${width}/${height}) ${Math.ceil((100 * width) / height)}vh, 100vw`;
    };
    const slider = photos.length > 1;
    // Slider: unten Platz für die Bedienleiste – bei mittigem Inhalt auch oben, damit er in der Mitte bleibt
    const padding = slider
      ? centered === 'always'
        ? 'py-[calc(var(--spacing-sec-68)+2.5rem)]'
        : 'pt-40 pb-[calc(var(--spacing-sec-68)+2.5rem)]'
      : centered === 'always'
        ? 'py-sec-68'
        : 'pt-40 pb-sec-68';
    // Handy-Titel in Versalien: Wörter ab 12 Zeichen (Fahrzeugaufbereitung, Felgenservice) sind in Hero-Größe breiter als 360 px – dann mit der Bildschirmbreite skalieren
    const longMobileTitle = mobile && Math.max(...mobile.title.split(/[\s\u00ad-]/).map((word) => word.length)) > 11;
    return (
      <section
        aria-labelledby="seitentitel"
        className={cn('relative isolate flex min-h-banner flex-col overflow-hidden bg-night text-white', centered === 'always' ? 'justify-center' : 'justify-end', centered === 'desktop' && 'lg:justify-center')}
      >
        {slider ? (
          <BannerSlider>
            {photos.map((key, i) => (
              <Photo key={key} image={key} sizes={sizes(key)} priority={i === 0} className="size-full object-cover" />
            ))}
          </BannerSlider>
        ) : (
          <Photo image={photos[0]} sizes={sizes(photos[0])} priority className="absolute inset-0 -z-10 size-full object-cover" />
        )}
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 -z-10',
            narrowShade
              ? // Dunkel bis 20 rem rechts der Textkante (Rand wie container-site), ab 42 rem klar
                'bg-[linear-gradient(90deg,rgb(16_25_29/0.85)_0%,rgb(16_25_29/0.75)_calc(max(0px,(100%_-_90rem)/2)_+_clamp(1rem,5vw,4.5rem)_+_20rem),rgb(16_25_29/0)_calc(max(0px,(100%_-_90rem)/2)_+_clamp(1rem,5vw,4.5rem)_+_42rem))]'
              : 'bg-[linear-gradient(90deg,rgb(16_25_29/0.92)_0%,rgb(16_25_29/0.33)_65%,rgb(16_25_29/0)_100%)] max-lg:bg-[linear-gradient(0deg,rgb(16_25_29/0.92)_0%,rgb(16_25_29/0.6)_55%,rgb(16_25_29/0.2)_100%)]',
            // Unter 768 px: Band hinter Titel und Zeile, darunter klar
            narrowShade === true && 'max-md:bg-[linear-gradient(0deg,rgb(16_25_29/0)_36%,rgb(16_25_29/0.8)_52%,rgb(16_25_29/0.65)_66%,rgb(16_25_29/0.15)_100%)]',
            // `strong`: ab 1024 px 0,8 bis 30 rem rechts der Textkante, 0,5 bei 46 rem (Titelende), klar ab 58 rem · unter 768 px dunkleres Band, das tiefer beginnt
            narrowShade === 'strong' &&
              'lg:bg-[linear-gradient(90deg,rgb(16_25_29/0.85)_0%,rgb(16_25_29/0.8)_calc(max(0px,(100%_-_90rem)/2)_+_clamp(1rem,5vw,4.5rem)_+_30rem),rgb(16_25_29/0.5)_calc(max(0px,(100%_-_90rem)/2)_+_clamp(1rem,5vw,4.5rem)_+_46rem),rgb(16_25_29/0)_calc(max(0px,(100%_-_90rem)/2)_+_clamp(1rem,5vw,4.5rem)_+_58rem))] max-md:bg-[linear-gradient(0deg,rgb(16_25_29/0)_30%,rgb(16_25_29/0.85)_46%,rgb(16_25_29/0.75)_66%,rgb(16_25_29/0.2)_100%)]',
            // Kompakter Handy-Inhalt unten: dunkel nur so hoch wie der Text, darüber bleibt das Motiv hell
            mobile && centered !== 'always' && 'max-md:bg-[linear-gradient(0deg,rgb(16_25_29/0.92)_0%,rgb(16_25_29/0.75)_30%,rgb(16_25_29/0.25)_55%,rgb(16_25_29/0.15)_100%)]',
          )}
        />
        <div className={cn('container-site', padding, centered === 'desktop' && 'lg:pt-sec-68')}>
          <div className={cn('flex max-w-[49.375rem] flex-col gap-[1.625rem]', mobile && 'max-md:items-center max-md:gap-0 max-md:text-center')}>
            <Kicker tone="night" className={mobile && 'max-md:hidden'}>
              {kicker}
            </Kicker>
            <h1 id="seitentitel" className={cn('text-hero font-light', longMobileTitle && 'max-md:text-[length:min(var(--text-hero),9vw)]')}>
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
            {mobile && (
              <p className="mt-3 text-sm leading-[1.4] font-medium tracking-[0.12em] text-fog uppercase md:hidden">
                {/* Sätze bleiben ganz: Reicht die Breite nicht, bricht die Zeile zwischen den Sätzen statt mitten im Satz */}
                {mobile.subtitle.split(/(?<=[.?]) /).map((sentence, i) => (
                  <Fragment key={i}>
                    {i > 0 && ' '}
                    <span className="inline-block">{sentence}</span>
                  </Fragment>
                ))}
              </p>
            )}
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
          <Photo image={photos[0]} sizes="(min-width: 1280px) 55vw, 100vw" priority className="absolute inset-0 size-full object-cover" />
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
        <Photo image={photos[0]} sizes="100vw" priority className="absolute inset-0 size-full object-cover" />
      </div>
    </section>
  );
}

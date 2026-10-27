import { ButtonLink } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { Lines } from '@/components/ui/Lines';
import { Photo } from '@/components/ui/Photo';
import type { ImageKey } from '@/types/image';
import type { BannerLayout } from '@/types/service';

interface PageBannerProps {
  layout: BannerLayout;
  kicker: string;
  /** Zeilenumbrüche des Designs als „\n“. */
  title: string;
  intro: string;
  image: ImageKey;
  action: { label: string; href: string };
}

/**
 * Seitenbanner in den drei Varianten des Designs, jeweils so hoch wie der erste Bildschirm (`min-h-banner`):
 * `overlay` Foto mit Lesekontrast-Verlauf, Inhalt unten links (Startseite, Smartrepair, Klimaservice, Folierung, Werkstatt) ·
 * `split` Graphit 650 px mit zentriertem Inhalt, Foto rechts (Ölwechsel, Reifen, HU/AU, Kontakt) ·
 * `stacked` Titelzeile auf Mineralweiß, darunter das Foto (Fahrzeugaufbereitung, Gutachten, Autoglas).
 * Wo Text und Foto untereinander stehen, füllt das Foto die restliche Höhe (mindestens 15 rem).
 */
export function PageBanner({ layout, kicker, title, intro, image, action }: PageBannerProps) {
  if (layout === 'overlay') {
    return (
      <section aria-labelledby="seitentitel" className="relative isolate flex min-h-banner flex-col justify-end overflow-hidden bg-night text-white">
        <Photo image={image} sizes="100vw" priority className="absolute inset-0 -z-10 size-full object-cover" />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(16_25_29/0.92)_0%,rgb(16_25_29/0.33)_65%,rgb(16_25_29/0)_100%)] max-lg:bg-[linear-gradient(0deg,rgb(16_25_29/0.92)_0%,rgb(16_25_29/0.6)_55%,rgb(16_25_29/0.2)_100%)]"
        />
        <div className="container-site pt-40 pb-sec-68">
          <div className="flex max-w-[49.375rem] flex-col gap-[1.625rem]">
            <Kicker tone="night">{kicker}</Kicker>
            <h1 id="seitentitel" className="text-hero font-light">
              <Lines text={title} />
            </h1>
            <p className="max-w-[37.5rem] text-lg leading-[1.55]">{intro}</p>
            <ButtonLink href={action.href} className="self-start">
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

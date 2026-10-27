import { ButtonLink } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { directionsUrl, mapQuery } from '@/lib/maps';
import { site } from '@/lib/site';
import { MapEmbed } from './MapEmbed';

interface LocationMapProps {
  kicker: string;
  title: string;
}

/**
 * Anfahrt (Kontakt, id="anfahrt"): links Anschrift, Öffnungszeiten und „Route planen“ (Google Maps), rechts die Karte.
 * Anschrift und Zeiten kommen aus site.ts – solange die Anschrift Platzhalter ist, steht dort „noch zu ergänzen“.
 */
export function LocationMap({ kicker, title }: LocationMapProps) {
  return (
    <section id="anfahrt" aria-labelledby="anfahrt-title">
      <div className="container-site flex flex-col gap-12 py-sec-88 lg:flex-row lg:gap-[5.625rem]">
        <div className="reveal flex flex-col gap-7 lg:w-[30.86%] lg:shrink-0">
          <Kicker>{kicker}</Kicker>
          <h2 id="anfahrt-title" className="text-h2-md font-light">
            {title}
          </h2>
          <address className="text-[1.0625rem] leading-[1.65] not-italic">
            {site.shortName}
            <br />
            {mapQuery ? (
              <>
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </>
            ) : (
              <span className="text-muted">Anschrift noch zu ergänzen</span>
            )}
          </address>
          <div className="flex flex-col gap-4 border-t border-line pt-6">
            <h3 className="text-[0.8125rem] leading-[1.21]">Öffnungszeiten</h3>
            <dl className="text-[0.9375rem] leading-[1.7]">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-6">
                  <dt className="text-muted">{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[0.9375rem] leading-[1.6] text-muted">Bitte stimmen Sie Ihren Besuch vorab mit uns ab.</p>
          </div>
          {mapQuery && (
            <ButtonLink href={directionsUrl(mapQuery)} className="self-start">
              Route planen
            </ButtonLink>
          )}
        </div>
        <div className="reveal lg:flex-1">
          <MapEmbed query={mapQuery} />
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import { mapEmbedUrl } from '@/lib/maps';
import { site } from '@/lib/site';

const streetsY = [-40, 60, 160, 260, 360, 460, 560, 660];
const streetsX = [-60, 60, 180, 300, 420, 540, 660, 780, 900];

/** Markenmotiv statt Kartenbild: Straßenraster in Weiß auf Liniengrau, Häuserblöcke, ein Fluss in Eisblau. */
function MapArtwork() {
  return (
    <svg aria-hidden="true" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
      <rect width="800" height="600" className="fill-line/55" />
      <g transform="rotate(-12 400 300)">
        <g className="fill-line/70">
          <rect x="66" y="66" width="108" height="88" />
          <rect x="546" y="166" width="108" height="88" />
          <rect x="186" y="366" width="108" height="88" />
          <rect x="666" y="-34" width="108" height="88" />
        </g>
        <g className="fill-none stroke-white" strokeWidth="7">
          {streetsY.map((y) => (
            <path key={y} d={`M-200 ${y}H1000`} />
          ))}
          {streetsX.map((x) => (
            <path key={x} d={`M${x} -200V800`} />
          ))}
        </g>
      </g>
      <path d="M-40 486C120 446 236 536 386 502S642 392 840 432" className="fill-none stroke-ice" strokeWidth="44" strokeLinecap="round" />
      <g className="fill-none stroke-white" strokeWidth="16" strokeLinecap="round">
        <path d="M-20 322C180 300 300 338 420 318S660 268 820 286" />
        <path d="M470 -20C452 140 438 300 404 620" />
      </g>
    </svg>
  );
}

/**
 * Karte mit Zwei-Klick-Lösung: Bis „Karte laden“ zeigt sie das Markenmotiv mit pulsierender Markierung und baut keine
 * Verbindung zu Google auf. Danach blendet Google Maps weich ein – mit Maus zunächst in Graustufen, farbig beim Überfahren.
 * Ohne Anschrift (Platzhalter in site.ts) bleibt es beim Motiv mit Hinweis.
 */
export function MapEmbed({ query }: { query: string | null }) {
  const [requested, setRequested] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative flex h-full flex-col border border-line bg-paper">
      <div className="relative isolate aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:min-h-[30rem] lg:flex-1">
        <MapArtwork />

        {/* Markierung mit Namensschild, Puls an der Spitze */}
        <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
          <span className="absolute bottom-0 left-1/2 size-14 -translate-x-1/2 translate-y-1/2 animate-[ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-primary/25" />
          <svg viewBox="0 0 24 32" className="relative h-12 w-9">
            <path d="M12 1C5.9 1 1 5.8 1 11.8 1 20 12 31 12 31s11-11 11-19.2C23 5.8 18.1 1 12 1Z" className="fill-primary stroke-white" strokeWidth="1.5" />
            <circle cx="12" cy="11.8" r="4.2" className="fill-white" />
          </svg>
          <span className="absolute top-1.5 left-full ml-2.5 bg-white px-3 py-2 text-[0.8125rem] leading-[1.21] font-medium whitespace-nowrap text-ink">
            {site.shortName}
          </span>
        </div>

        {requested && query && (
          <iframe
            src={mapEmbedUrl(query)}
            title={`Karte: ${site.shortName}, ${query}`}
            onLoad={() => setLoaded(true)}
            className={cn(
              'absolute inset-0 size-full border-0 transition-[opacity,filter] duration-700 ease-forge [@media(hover:hover)]:grayscale [@media(hover:hover)]:hover:grayscale-0',
              loaded ? 'opacity-100' : 'opacity-0',
            )}
          />
        )}
      </div>

      {/* Bis 767 px unter dem Motiv, ab 768 px darüber unten links */}
      {!loaded && (
        <div className="flex flex-col items-start gap-4 border-t border-line bg-white p-5 md:absolute md:bottom-6 md:left-6 md:max-w-[22rem] md:border-t-0">
          {query ? (
            <>
              <p className="text-[0.8125rem] leading-[1.6] text-muted">
                Beim Laden der Karte werden Daten an Google übertragen. Mehr dazu in der{' '}
                <Link href="/datenschutz#karte" className="text-primary underline decoration-1 underline-offset-4 transition-colors hover:text-ink">
                  Datenschutzerklärung
                </Link>
                .
              </p>
              <Button onClick={() => setRequested(true)} disabled={requested} icon="map-pin">
                {requested ? 'Karte wird geladen …' : 'Karte laden'}
              </Button>
            </>
          ) : (
            <p className="text-[0.8125rem] leading-[1.6] text-muted">Karte und Route folgen, sobald die Anschrift hinterlegt ist.</p>
          )}
        </div>
      )}
    </div>
  );
}

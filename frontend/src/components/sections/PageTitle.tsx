import type { ReactNode } from 'react';
import { Kicker } from '@/components/ui/Kicker';
import { Lines } from '@/components/ui/Lines';

interface PageTitleProps {
  kicker: string;
  /** Zeilenumbrüche als „\n“. */
  title: string;
  lead?: string;
  children?: ReactNode;
}

/** Titelzeile ohne Foto (Rechtstexte, Fehlerseiten) – wie die Titelzeile des Banners `stacked`. */
export function PageTitle({ kicker, title, lead, children }: PageTitleProps) {
  return (
    <section aria-labelledby="seitentitel">
      <div className="container-site flex flex-col gap-8 pt-sec-48 pb-sec-64 lg:flex-row lg:items-end lg:gap-16">
        <div className="flex flex-col gap-6 lg:w-[57.1%] lg:shrink-0">
          <Kicker>{kicker}</Kicker>
          <h1 id="seitentitel" className="text-hero-stacked font-light">
            <Lines text={title} />
          </h1>
        </div>
        {(lead || children) && (
          <div className="flex flex-col items-start gap-6 lg:flex-1">
            {lead && <p className="text-[1.0625rem] leading-[1.6] text-muted">{lead}</p>}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

import Link from 'next/link';
import type { Service } from '@/types/service';
import { Icon } from './Icon';
import { Photo } from './Photo';

interface ServiceCardProps {
  service: Service;
  index: number;
  headingLevel?: 'h2' | 'h3';
}

/** Leistungskarte mit Stretched-Link: gesamte Fläche klickbar, Linktext = Titel (A11y). */
export function ServiceCard({ service, index, headingLevel: Heading = 'h3' }: ServiceCardProps) {
  return (
    <article className="group reveal relative flex flex-col bg-white ring-1 ring-line transition-shadow duration-500 hover:shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden bg-primary">
        <Photo
          image={service.image}
          sizes="(min-width: 1440px) 460px, (min-width: 1024px) 31vw, (min-width: 768px) 48vw, 100vw"
          className="size-full object-cover saturate-[0.7] transition duration-700 ease-forge group-hover:scale-105 group-hover:saturate-100"
          decorative
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/5 to-primary/45" />
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 grid size-14 place-items-center bg-accent text-primary transition-colors duration-300 group-hover:bg-white"
        >
          <Icon name={service.icon} className="size-6" />
        </span>
        <span aria-hidden="true" className="font-wide absolute top-4 right-5 text-sm font-bold tracking-[0.2em] text-white/80">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <Heading className="text-h3 font-bold">
          <Link
            href={`/leistungen/${service.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline-3 focus-visible:after:outline-offset-3 focus-visible:after:outline-accent"
          >
            {service.title}
          </Link>
        </Heading>
        <p className="mt-3 leading-relaxed text-muted">{service.summary}</p>
        <span aria-hidden="true" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
          Mehr erfahren
          <Icon name="arrow-right" className="size-4 text-accent-700 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-forge group-hover:scale-x-100"
      />
    </article>
  );
}

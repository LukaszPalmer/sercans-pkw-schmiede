import { ButtonLink } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import type { TitledText } from '@/types/service';

interface ServiceAreasProps {
  kicker: string;
  title: string;
  action: { label: string; href: string };
  areas: TitledText[];
}

/** Leistungsspektrum (Werkstatt-Seite): Titel mit Haarlinien-Aktion links, rechts die drei Bereiche mit Beschreibung. */
export function ServiceAreas({ kicker, title, action, areas }: ServiceAreasProps) {
  return (
    <section aria-labelledby="spektrum-title">
      <div className="container-site flex flex-col gap-10 py-sec-88 lg:flex-row lg:gap-[6.25rem]">
        <div className="reveal flex flex-col gap-[1.625rem] lg:w-[41.67%] lg:shrink-0">
          <Kicker>{kicker}</Kicker>
          <h2 id="spektrum-title" className="text-h2-md font-light">
            {title}
          </h2>
          <ButtonLink href={action.href} variant="outline" className="self-start">
            {action.label}
          </ButtonLink>
        </div>
        <ul className="flex flex-col gap-7 lg:flex-1">
          {areas.map((area) => (
            <li key={area.title} className="reveal flex flex-col gap-2.5">
              <h3 className="text-item">{area.title}</h3>
              <p className="text-[1.0625rem] leading-[1.6] text-muted">{area.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

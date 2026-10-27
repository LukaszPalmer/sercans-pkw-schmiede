import { ButtonLink } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { Photo } from '@/components/ui/Photo';
import type { ImageKey } from '@/types/image';

interface WorkshopInsightProps {
  image: ImageKey;
  kicker: string;
  title: string;
  text: string;
  action: { label: string; href: string };
}

/** Werkstatteinblick (Startseite): randloses Foto 1440 × 460, darunter das Graphit-Band mit Haltung und weißer Aktion. */
export function WorkshopInsight({ image, kicker, title, text, action }: WorkshopInsightProps) {
  return (
    <section aria-labelledby="werkstattgedanke-title">
      <div className="relative h-[clamp(15rem,31.94vw,28.75rem)] overflow-hidden">
        <Photo image={image} sizes="100vw" className="absolute inset-0 size-full object-cover" />
      </div>
      <div className="bg-night text-white">
        <div className="container-site flex flex-col gap-8 py-sec-72 lg:flex-row lg:gap-[6.25rem]">
          <div className="reveal flex flex-col gap-6 lg:w-[50.15%] lg:shrink-0">
            <Kicker tone="night">{kicker}</Kicker>
            <h2 id="werkstattgedanke-title" className="text-h2-band leading-[1.13] font-light">
              {title}
            </h2>
          </div>
          <div className="reveal flex flex-col gap-[1.625rem] lg:flex-1">
            <p className="text-[1.0625rem] leading-[1.65] text-fog">{text}</p>
            <ButtonLink href={action.href} variant="light" className="self-start">
              {action.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

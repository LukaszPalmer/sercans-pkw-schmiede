import { ButtonLink } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { Lines } from '@/components/ui/Lines';
import { Photo } from '@/components/ui/Photo';
import type { ImageKey } from '@/types/image';

interface FocusSplitProps {
  id: string;
  image: ImageKey;
  kicker: string;
  title: string;
  text: string;
  action: { label: string; href: string };
}

/** Fokus-Sektion der Startseite: Foto links (halbe Breite, randlos), rechts auf Weiß Kicker, Titel, Text und Haarlinien-Aktion. */
export function FocusSplit({ id, image, kicker, title, text, action }: FocusSplitProps) {
  return (
    <section aria-labelledby={`${id}-title`} className="bg-white lg:grid lg:grid-cols-2">
      <div className="relative aspect-[720/600] overflow-hidden lg:aspect-auto lg:min-h-[clamp(30rem,41.67vw,37.5rem)]">
        <Photo image={image} sizes="(min-width: 1024px) 50vw, 100vw" className="absolute inset-0 size-full object-cover" />
      </div>
      <div className="reveal flex flex-col justify-center gap-[1.875rem] px-[clamp(1rem,5vw,4.5rem)] py-sec-72 lg:max-w-[45rem]">
        <Kicker>{kicker}</Kicker>
        <h2 id={`${id}-title`} className="text-h2-lg font-light">
          <Lines text={title} />
        </h2>
        <p className="text-[1.0625rem] leading-[1.7] text-muted">{text}</p>
        <ButtonLink href={action.href} variant="outline" className="self-start">
          {action.label}
        </ButtonLink>
      </div>
    </section>
  );
}

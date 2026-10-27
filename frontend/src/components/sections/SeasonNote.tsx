import { TextLink } from '@/components/ui/Button';

interface SeasonNoteProps {
  text: string;
  link: { label: string; href: string };
}

/** Saisonhinweis als hellblaues Band – ein Satz links, Textlink rechts. Inhalt passend zur Jahreszeit tauschen. */
export function SeasonNote({ text, link }: SeasonNoteProps) {
  return (
    <section aria-label="Saisonhinweis" className="bg-ice">
      <div className="reveal container-site flex flex-col gap-3 py-9 md:flex-row md:items-center md:justify-between md:gap-8">
        <p className="text-lead-xl">{text}</p>
        <TextLink href={link.href} className="shrink-0 self-start text-sm leading-[1.21] md:self-auto">
          {link.label}
        </TextLink>
      </div>
    </section>
  );
}

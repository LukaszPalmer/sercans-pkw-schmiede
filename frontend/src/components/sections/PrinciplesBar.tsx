import { pad2 } from '@/lib/format';

/** Grundsätze direkt unter dem Startseiten-Banner: drei Aussagen mit Kennung, Haarlinie darunter. */
export function PrinciplesBar({ items }: { items: string[] }) {
  return (
    <section aria-label="Unsere Grundsätze" className="border-b border-line">
      <ul className="container-site flex flex-col gap-4 pt-9 pb-[2.1875rem] md:flex-row md:justify-between md:gap-8">
        {items.map((text, i) => (
          <li key={text} className="reveal flex items-center gap-5">
            <span className="text-[0.6875rem] leading-[1.21] text-primary tabular-nums">{pad2(i + 1)}</span>
            <span className="text-base leading-[1.21]">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

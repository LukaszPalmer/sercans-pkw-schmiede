import type { FaqItem as Faq } from '@/types/faq';
import { Icon } from './Icon';

/** Natives <details>-Akkordeon: 0 KB JavaScript, Tastatur & Screenreader out of the box. */
export function FaqItem({ item }: { item: Faq }) {
  return (
    <details className="group border-b border-line [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex min-h-16 cursor-pointer list-none items-start justify-between gap-5 py-5 text-left transition-colors hover:text-secondary">
        <span className="pt-1.5 text-[1.0625rem] leading-snug font-semibold sm:text-lg">{item.question}</span>
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center ring-1 ring-line transition-colors duration-300 group-open:bg-accent group-open:ring-accent"
        >
          <Icon name="chevron-down" className="size-5 transition-transform duration-300 group-open:rotate-180" />
        </span>
      </summary>
      <p className="max-w-3xl pr-4 pb-7 leading-relaxed text-muted sm:pr-16">{item.answer}</p>
    </details>
  );
}

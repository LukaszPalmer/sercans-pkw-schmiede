import { Icon } from '@/components/ui/Icon';
import type { IconName } from '@/types/icon';

const promises: { icon: IconName; title: string; text: string }[] = [
  { icon: 'car', title: 'Alle Marken', text: 'Vom Kleinwagen bis zum SUV' },
  { icon: 'euro', title: 'Transparente Preise', text: 'Kostenvoranschlag vorab' },
  { icon: 'shield', title: 'Qualitätsteile', text: 'Original oder gleichwertig' },
  { icon: 'badge', title: 'Herstellerkonform', text: 'Garantie bleibt erhalten' },
];

/** Leistungsversprechen – überlappt den Banner als präzise Kante. */
export function TrustBar() {
  return (
    <div className="container-site relative z-10 -mt-16">
      <ul className="grid grid-cols-1 gap-px bg-line shadow-card ring-1 ring-line md:grid-cols-2 lg:grid-cols-4">
        {promises.map((p) => (
          <li key={p.title} className="flex items-center gap-4 bg-white p-5 sm:p-7">
            <span className="grid size-12 shrink-0 place-items-center bg-primary text-accent">
              <Icon name={p.icon} className="size-6" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[1.0625rem] font-bold">{p.title}</span>
              <span className="mt-0.5 block text-sm text-muted">{p.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

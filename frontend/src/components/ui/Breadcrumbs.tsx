import Link from 'next/link';
import type { NavItem } from '@/types/site';
import { Icon } from './Icon';

export function Breadcrumbs({ items }: { items: NavItem[] }) {
  return (
    <nav aria-label="Brotkrumen-Navigation">
      <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white/70">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="font-semibold text-white">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="inline-flex min-h-8 items-center hover:text-accent">
                    {item.label}
                  </Link>
                  <Icon name="arrow-right" className="size-3.5 text-accent" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

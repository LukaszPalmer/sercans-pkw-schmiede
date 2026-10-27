'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { mainNav } from '@/lib/site';
import { NavMarker } from './NavMarker';
import { ServicesMenu, type NavService } from './ServicesMenu';

/** Hauptnavigation (Desktop): 14 px, aktive Seite blau mit 20 × 2 px Markierung 8 px unter dem Wort – wie im Design, beim Hover läuft sie ein. „Leistungen“ öffnet das Leistungs-Menü. */
export function DesktopNav({ services }: { services: NavService[] }) {
  const pathname = usePathname();
  const isActive = (href: string, activePath?: string) =>
    activePath ? pathname.startsWith(activePath) : href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav aria-label="Hauptnavigation" className="max-lg:hidden">
      <ul className="flex items-center gap-9">
        {mainNav.map((item) => {
          const active = isActive(item.href, item.activePath);
          if (item.activePath === '/leistungen') {
            return <ServicesMenu key={item.href} label={item.label} href={item.href} active={active} services={services} />;
          }
          return (
            <li key={item.href} className="flex">
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'group/nav relative text-sm leading-[1.21] transition-colors duration-300 hover:text-primary',
                  active ? 'text-primary' : 'text-ink',
                )}
              >
                {item.label}
                <NavMarker shown={active} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

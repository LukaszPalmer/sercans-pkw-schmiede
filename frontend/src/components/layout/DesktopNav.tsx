'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';
import { mainNav } from '@/lib/site';
import type { Service } from '@/types/service';

export type NavService = Pick<Service, 'slug' | 'navTitle' | 'icon' | 'summary'>;

/** Desktop-Navigation mit Mega-Menü (Disclosure-Pattern: Klick, Hover, Escape, Klick außerhalb). */
export function DesktopNav({ services }: { services: NavService[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  const hover = (next: boolean) => (e: ReactPointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpen(next), next ? 80 : 160);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const linkClass = (active: boolean) =>
    cn(
      'relative inline-flex h-11 items-center px-3.5 text-[0.9375rem] font-semibold transition-colors',
      'after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-0.5 after:origin-left after:bg-accent after:transition-transform after:duration-300',
      active ? 'text-white after:scale-x-100' : 'text-white/80 after:scale-x-0 hover:text-white hover:after:scale-x-100',
    );

  return (
    <nav aria-label="Hauptnavigation" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        <li>
          <div ref={rootRef} onPointerEnter={hover(true)} onPointerLeave={hover(false)}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
              className={cn(linkClass(isActive('/leistungen')), 'gap-1.5')}
            >
              Leistungen
              <Icon name="chevron-down" className={cn('size-4 transition-transform duration-300', open && 'rotate-180')} />
            </button>

            <div
              id={panelId}
              hidden={!open}
              className="bg-forge fixed inset-x-0 top-20 border-b border-white/10 shadow-2xl"
            >
              <div className="container-site grid grid-cols-12 gap-8 py-10">
                <ul className="col-span-9 grid grid-cols-3 gap-x-4 gap-y-1">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/leistungen/${s.slug}`}
                        aria-current={pathname === `/leistungen/${s.slug}` ? 'page' : undefined}
                        className="group flex gap-4 p-3.5 transition-colors hover:bg-white/5 aria-[current=page]:bg-white/5"
                      >
                        <span className="grid size-11 shrink-0 place-items-center bg-white/5 text-accent ring-1 ring-white/10 transition-colors group-hover:bg-accent group-hover:text-primary">
                          <Icon name={s.icon} className="size-5" />
                        </span>
                        <span>
                          <span className="block font-semibold text-white">{s.navTitle}</span>
                          <span className="mt-1 line-clamp-2 text-sm leading-snug text-muted-dark">{s.summary}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="bg-steel col-span-3 flex flex-col justify-between p-7 ring-1 ring-white/10">
                  <div>
                    <p className="text-eyebrow font-semibold text-accent uppercase">Alles aus einer Hand</p>
                    <p className="mt-4 font-display text-xl font-bold text-white">9 Leistungen. Ein Anspruch: Präzision.</p>
                  </div>
                  <Link
                    href="/leistungen"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-white hover:text-accent"
                  >
                    Alle Leistungen ansehen <Icon name="arrow-right" className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
        {mainNav.slice(1).map((item) => (
          <li key={item.href}>
            <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={linkClass(isActive(item.href))}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

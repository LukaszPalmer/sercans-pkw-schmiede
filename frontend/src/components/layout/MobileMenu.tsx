'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { Arrow } from '@/components/ui/Arrow';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';
import { pad2 } from '@/lib/format';
import { site } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

const bigLink = 'flex min-h-14 items-center justify-between border-t border-line text-h3-sm font-light text-ink';

interface MenuService {
  slug: string;
  title: string;
}

/**
 * Mobile Navigation auf Basis des nativen <dialog>: Fokusfalle, Escape-Handling und
 * inerter Hintergrund kommen vom Browser – barrierefrei ohne Zusatzbibliothek.
 */
export function MobileMenu({ services }: { services: MenuService[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = 'hidden';
  };
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="-mr-2.5 grid size-11 place-items-center text-ink transition-colors hover:text-primary"
      >
        <Icon name="menu" className="size-6" />
        <span className="sr-only">Menü öffnen</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menü"
        onClose={() => (document.documentElement.style.overflow = '')}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-paper text-ink backdrop:bg-paper open:flex open:flex-col"
      >
        <div className="container-site flex h-16 shrink-0 items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={close}
            autoFocus
            className="-mr-2.5 grid size-11 place-items-center transition-colors hover:text-primary"
          >
            <Icon name="close" className="size-6" />
            <span className="sr-only">Menü schließen</span>
          </button>
        </div>

        <nav aria-label="Mobile Navigation" className="container-site flex-1 overflow-y-auto py-4">
          <ul>
            <li>
              <Link href="/" onClick={close} className={bigLink}>
                Start
                <Arrow className="text-primary" />
              </Link>
            </li>
            <li>
              <Link href="/#leistungen" onClick={close} className={bigLink}>
                Leistungen
                <Arrow className="text-primary" />
              </Link>
              <ul className="grid gap-x-6 pb-4 sm:grid-cols-2">
                {services.map((s, i) => (
                  <li key={s.slug}>
                    <Link href={`/leistungen/${s.slug}`} onClick={close} className="flex min-h-11 items-center gap-4 text-[0.9375rem] text-muted">
                      <span className="w-4 shrink-0 text-[0.6875rem] text-primary tabular-nums">{pad2(i + 1)}</span>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {[
              { label: 'Werkstatt', href: '/werkstatt' },
              { label: 'Kontakt', href: '/kontakt' },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close} className={bigLink}>
                  {item.label}
                  <Arrow className="text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="container-site grid shrink-0 gap-3 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] xs:grid-cols-2">
          <ButtonLink href={whatsappUrl()} icon="whatsapp" className="justify-center">
            WhatsApp
          </ButtonLink>
          <ButtonLink href={site.phone.href} variant="outline" icon="phone" className="justify-center">
            Anrufen
          </ButtonLink>
        </div>
      </dialog>
    </div>
  );
}

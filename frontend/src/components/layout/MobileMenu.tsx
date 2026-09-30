'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { site } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';
import type { NavService } from './DesktopNav';

/**
 * Mobile Navigation auf Basis des nativen <dialog>: Fokusfalle, Escape-Handling und
 * inerter Hintergrund kommen vom Browser – barrierefrei ohne Zusatzbibliothek.
 */
export function MobileMenu({ services }: { services: NavService[] }) {
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
        className="grid size-12 place-items-center text-white ring-1 ring-white/20 ring-inset transition-colors hover:bg-white/10"
      >
        <Icon name="menu" className="size-6" />
        <span className="sr-only">Menü öffnen</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menü"
        onClose={() => (document.documentElement.style.overflow = '')}
        className="bg-forge m-0 h-dvh max-h-none w-full max-w-none text-white backdrop:bg-primary/60 open:flex open:flex-col"
      >
        <div className="container-site flex h-16 shrink-0 items-center justify-between border-b border-white/10">
          <span className="font-wide text-sm font-bold tracking-[0.2em] text-white/70">MENÜ</span>
          <button
            type="button"
            onClick={close}
            autoFocus
            className="grid size-12 place-items-center ring-1 ring-white/20 ring-inset hover:bg-white/10"
          >
            <Icon name="close" className="size-6" />
            <span className="sr-only">Menü schließen</span>
          </button>
        </div>

        <nav aria-label="Mobile Navigation" className="container-site flex-1 overflow-y-auto py-8">
          <ul className="space-y-1">
            {[{ label: 'Startseite', href: '/' }, { label: 'Alle Leistungen', href: '/leistungen' }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="flex min-h-12 items-center justify-between font-display text-2xl font-bold"
                >
                  {item.label}
                  <Icon name="arrow-right" className="size-5 text-accent" />
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-6 grid gap-2 border-y border-white/10 py-6 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/leistungen/${s.slug}`} onClick={close} className="flex min-h-12 items-center gap-3.5 py-1.5">
                  <span className="grid size-10 shrink-0 place-items-center bg-white/5 text-accent ring-1 ring-white/10">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span className="font-semibold">{s.navTitle}</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-6 space-y-1">
            {[
              { label: 'FAQ', href: '/faq' },
              { label: 'Blog', href: '/blog' },
              { label: 'Kontakt', href: '/kontakt' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="flex min-h-12 items-center justify-between font-display text-2xl font-bold"
                >
                  {item.label}
                  <Icon name="arrow-right" className="size-5 text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="container-site grid shrink-0 gap-3 border-t border-white/10 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] xs:grid-cols-2">
          <ButtonLink href={whatsappUrl()} icon="whatsapp" iconPosition="start">
            WhatsApp
          </ButtonLink>
          <ButtonLink href={site.phone.href} variant="light" icon="phone" iconPosition="start">
            Anrufen
          </ButtonLink>
        </div>
      </dialog>
    </div>
  );
}

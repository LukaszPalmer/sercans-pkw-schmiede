'use client';

import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';

/**
 * Scroll-Animation aller Seiten: Elemente mit der Klasse `reveal` steigen beim Hereinscrollen auf (Keyframes `rise`,
 * Styles in globals.css). Was beim Laden schon im Bild ist, bleibt ruhig; gleichzeitig eintretende Elemente folgen in
 * 90-ms-Schritten aufeinander. Läuft vor dem Zeichnen und nach jedem Seitenwechsel neu – auch für Elemente, die React
 * von der vorherigen Seite weiterverwendet.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.round(a.boundingClientRect.top - b.boundingClientRect.top) || a.boundingClientRect.left - b.boundingClientRect.left)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            el.style.setProperty('--reveal-delay', `${Math.min(i, 5) * 90}ms`);
            el.dataset.reveal = 'shown';
            observer.unobserve(el);
          });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );

    for (const el of document.querySelectorAll<HTMLElement>('main .reveal')) {
      // Beim Laden im Bild oder darüber: sofort sichtbar, ohne Animation
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.dataset.reveal = 'static';
      } else {
        el.dataset.reveal = 'hidden';
        observer.observe(el);
      }
    }
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

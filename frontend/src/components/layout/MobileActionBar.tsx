import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { site } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

const item = 'flex min-h-16 flex-1 flex-col items-center justify-center gap-1 text-[0.6875rem] font-semibold tracking-wide uppercase';

/** Daumenzone-Aktionsleiste (< 768 px): die drei wichtigsten Conversion-Wege, immer erreichbar. */
export function MobileActionBar() {
  return (
    <nav
      aria-label="Schnellkontakt"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-primary pb-[env(safe-area-inset-bottom)] text-white md:hidden"
    >
      <a href={site.phone.href} className={item}>
        <Icon name="phone" className="size-5 text-accent" />
        Anrufen
      </a>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={`${item} border-x border-white/10`}>
        <Icon name="whatsapp" className="size-5 text-accent" />
        WhatsApp
      </a>
      <Link href="/kontakt#termin" className={`${item} bg-accent text-primary`}>
        <Icon name="calendar" className="size-5" />
        Termin
      </Link>
    </nav>
  );
}

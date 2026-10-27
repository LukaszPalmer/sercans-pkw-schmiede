import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { requestPath } from '@/lib/content/services';
import { site } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

const item =
  'flex min-h-[calc(4rem+env(safe-area-inset-bottom))] flex-1 flex-col items-center justify-center gap-1.5 pb-[env(safe-area-inset-bottom)] text-[0.6875rem] font-medium uppercase';

/** Daumenzone-Aktionsleiste (< 768 px): die drei wichtigsten Kontaktwege, immer erreichbar. */
export function MobileActionBar() {
  return (
    <nav aria-label="Schnellkontakt" className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-paper text-ink md:hidden">
      <a href={site.phone.href} className={item}>
        <Icon name="phone" className="size-5 text-primary" />
        Anrufen
      </a>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={`${item} border-x border-line`}>
        <Icon name="whatsapp" className="size-5 text-primary" />
        WhatsApp
      </a>
      <Link href={requestPath()} className={`${item} bg-primary text-white`}>
        <Icon name="calendar" className="size-5" />
        Termin
      </Link>
    </nav>
  );
}

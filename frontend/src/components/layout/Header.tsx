import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';
import { requestPath, services } from '@/lib/content/services';
import { site } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';
import { DesktopNav } from './DesktopNav';
import { HeaderBar } from './HeaderBar';
import { MobileMenu } from './MobileMenu';

const menuServices = services.map(({ slug, title }) => ({ slug, title }));
const navServices = services.map(({ slug, title, teaser }) => ({ slug, title, teaser }));

/**
 * Kopfzeile: Mineralweiß, 100 px hoch – Logo links, Navigation exakt mittig, rechts WhatsApp und „Termin anfragen“.
 * WhatsApp ab 768 px (darunter in der Aktionsleiste): als Symbol neben dem Menü, ab lg als Haarlinien-Feld, ab xl mit Beschriftung.
 */
export function Header() {
  return (
    <HeaderBar>
      <div className="container-site flex h-full items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" aria-label={`${site.shortName} – zur Startseite`} className="inline-flex min-h-11 shrink-0 items-center justify-self-start">
          <Logo priority className="transition-[height] duration-500 ease-forge lg:group-data-scrolled/header:h-[3.75rem]" />
        </Link>
        <DesktopNav services={navServices} />
        <div className="flex items-center gap-1 justify-self-end lg:gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group/wa hidden size-11 items-center justify-center gap-3 text-sm leading-[1.21] font-medium text-ink transition-[box-shadow,color] duration-300 ease-forge hover:text-primary md:inline-flex lg:size-auto lg:min-h-[3.25rem] lg:min-w-[3.25rem] lg:ring-1 lg:ring-line lg:ring-inset lg:hover:ring-primary xl:px-5"
          >
            <Icon name="whatsapp" className="size-5 shrink-0 text-primary transition-transform duration-300 ease-forge group-hover/wa:scale-110" />
            <span className="max-xl:sr-only">WhatsApp</span>
          </a>
          <ButtonLink href={requestPath()} className="max-lg:hidden">
            Termin anfragen
          </ButtonLink>
          <MobileMenu services={menuServices} />
        </div>
      </div>
    </HeaderBar>
  );
}

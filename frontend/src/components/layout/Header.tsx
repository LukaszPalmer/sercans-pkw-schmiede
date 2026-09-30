import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';
import { services } from '@/lib/content/services';
import { site } from '@/lib/site';
import { DesktopNav, type NavService } from './DesktopNav';
import { MobileMenu } from './MobileMenu';

/** Serialisierbare Kurzfassung der Leistungen für die Client-Inseln. */
const navServices: NavService[] = services.map(({ slug, navTitle, icon, summary }) => ({ slug, navTitle, icon, summary }));

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/10 bg-primary/90 backdrop-blur-md">
        <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-20">
          <Link href="/" aria-label={`${site.name} – zur Startseite`} className="shrink-0">
            <Logo idPrefix="header-logo" />
          </Link>

          <DesktopNav services={navServices} />

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={site.phone.href}
              className="hidden items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-accent xl:inline-flex"
            >
              <Icon name="phone" className="size-4 text-accent" />
              {site.phone.display}
            </a>
            <ButtonLink href="/kontakt#termin" icon="calendar" iconPosition="start">
              Termin anfragen
            </ButtonLink>
          </div>

          <MobileMenu services={navServices} />
        </div>
      </div>
    </header>
  );
}

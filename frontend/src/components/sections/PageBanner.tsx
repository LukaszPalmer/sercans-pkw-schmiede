import type { ReactNode } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Photo } from '@/components/ui/Photo';
import { cn } from '@/lib/cn';
import type { IconName } from '@/types/icon';
import type { ImageKey } from '@/types/image';
import type { NavItem } from '@/types/site';

export interface BannerAction {
  label: string;
  href: string;
  icon?: IconName;
}

interface PageBannerProps {
  image: ImageKey;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  primary: BannerAction;
  secondary: BannerAction;
  variant?: 'home' | 'page' | 'compact';
  breadcrumbs?: NavItem[];
  meta?: ReactNode;
  children?: ReactNode;
}

const heights = {
  home: 'min-h-[clamp(40rem,94dvh,68rem)] pb-28',
  page: 'min-h-[clamp(32rem,74dvh,50rem)] pb-20',
  compact: 'min-h-[clamp(26rem,56dvh,38rem)] pb-16',
};

/**
 * Banner für jede Seite: Foto im Marken-Duoton (Luminosity-Blend auf Stahlverlauf),
 * Glut-Glow, Blueprint-Raster – Inhalte und zwei CTA-Buttons exakt zentriert.
 */
export function PageBanner({
  image,
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  variant = 'page',
  breadcrumbs,
  meta,
  children,
}: PageBannerProps) {
  return (
    <section className={cn('relative isolate flex flex-col overflow-hidden bg-primary pt-28 text-white lg:pt-36', heights[variant])}>
      <div aria-hidden="true" className="bg-steel absolute inset-0 -z-10">
        <Photo
          image={image}
          sizes="100vw"
          priority
          decorative
          className="size-full object-cover opacity-75 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/55 to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_50%_110%,rgb(255_138_51/0.28),transparent_70%)]" />
        <div className="bg-blueprint absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="container-site my-auto flex flex-col items-center text-center">
        {breadcrumbs && (
          <div className="mb-8 animate-rise">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <Eyebrow tone="light" className="animate-rise">
          {eyebrow}
        </Eyebrow>
        <h1
          className={cn(
            'mt-6 max-w-5xl font-extrabold',
            variant === 'home' ? 'text-display' : 'text-h1',
          )}
        >
          {title}
        </h1>
        {lead && (
          <p className="text-lead mt-6 max-w-2xl text-white/85 [animation-delay:120ms] animate-rise">{lead}</p>
        )}
        {meta && <div className="mt-6 [animation-delay:160ms] animate-rise">{meta}</div>}

        <div className="mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-3 [animation-delay:200ms] animate-rise md:w-auto md:max-w-none md:flex-row md:items-center md:gap-4">
          <ButtonLink href={primary.href} icon={primary.icon ?? 'arrow-right'} size="lg">
            {primary.label}
          </ButtonLink>
          <ButtonLink href={secondary.href} icon={secondary.icon ?? 'arrow-right'} variant="light" size="lg">
            {secondary.label}
          </ButtonLink>
        </div>
        {children}
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
    </section>
  );
}

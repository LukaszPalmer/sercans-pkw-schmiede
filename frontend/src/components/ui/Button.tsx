import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import type { IconName } from '@/types/icon';
import { Arrow } from './Arrow';
import { Icon } from './Icon';

type Variant = 'primary' | 'light' | 'outline';

/**
 * `primary` Präzisionsblau mit weißer Schrift · `light` weiße Fläche auf Blau und Graphit ·
 * `outline` Haarlinie auf hellen Flächen – Schrift Textfarbe, Pfeil blau.
 */
const variants: Record<Variant, { box: string; arrow: string }> = {
  primary: { box: 'bg-primary text-white hover:bg-primary-deep', arrow: 'text-white' },
  light: { box: 'bg-white text-ink hover:bg-paper', arrow: 'text-primary' },
  outline: { box: 'text-ink ring-1 ring-line ring-inset hover:ring-ink/40', arrow: 'text-primary' },
};

interface StyleProps {
  variant?: Variant;
  /** Symbol vor der Beschriftung (mobile Kontaktwege) – ersetzt den Pfeil. */
  icon?: IconName;
  className?: string;
  children: ReactNode;
}

/** Aktion wie im Design: 52 px hoch, 24 px Innenabstand, Beschriftung 14 px Medium, 30 px Abstand zum Pfeil ↗ (20 px). */
function buttonClasses({ variant = 'primary', className }: Pick<StyleProps, 'variant' | 'className'>) {
  return cn(
    'group/btn inline-flex min-h-[3.25rem] items-center gap-[1.875rem] px-6 text-sm leading-[1.21] font-medium whitespace-nowrap select-none',
    'transition-[background-color,box-shadow,color] duration-300 ease-forge active:translate-y-px disabled:pointer-events-none disabled:opacity-60',
    variants[variant].box,
    className,
  );
}

function Content({ variant = 'primary', icon, children }: Pick<StyleProps, 'variant' | 'icon' | 'children'>) {
  if (icon) {
    return (
      <>
        <Icon name={icon} className="size-5 shrink-0" />
        <span>{children}</span>
      </>
    );
  }
  return (
    <>
      <span>{children}</span>
      <Arrow
        className={cn(
          'text-xl transition-transform duration-300 ease-forge group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5',
          variants[variant].arrow,
        )}
      />
    </>
  );
}

const isExternal = (href: string) => /^(https?:|tel:|mailto:)/.test(href);
const newTab = (href: string) => (href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {});

type ButtonLinkProps = StyleProps & Omit<ComponentPropsWithoutRef<'a'>, 'className' | 'children'> & { href: string };

/** Link im Button-Look. Externe Ziele (http, tel:, mailto:) werden als <a> gerendert. */
export function ButtonLink({ href, variant, icon, className, children, ...rest }: ButtonLinkProps) {
  const classes = buttonClasses({ variant, className });
  const content = (
    <Content variant={variant} icon={icon}>
      {children}
    </Content>
  );
  if (isExternal(href)) {
    return (
      <a href={href} className={classes} {...newTab(href)} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}

type ButtonProps = StyleProps & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>;

export function Button({ variant, icon, className, children, type = 'button', ...rest }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses({ variant, className })} {...rest}>
      <Content variant={variant} icon={icon}>
        {children}
      </Content>
    </button>
  );
}

interface TextLinkProps {
  href: string;
  /** `primary` blau auf hellen Flächen · `white` auf Graphit (Fußzeile). */
  tone?: 'primary' | 'white';
  className?: string;
  children: ReactNode;
}

/** Textlink mit nachgestelltem ↗ – „Passenden Service anfragen ↗“, „Fahrzeugaufbereitung ↗“. Größe über `className`. */
export function TextLink({ href, tone = 'primary', className, children }: TextLinkProps) {
  const classes = cn(
    'group/link transition-colors duration-300',
    tone === 'white' ? 'text-white hover:text-sky' : 'text-primary hover:text-ink',
    className,
  );
  const content = (
    <>
      {children}{' '}
      <Arrow className="transition-transform duration-300 ease-forge group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
    </>
  );
  if (isExternal(href)) {
    return (
      <a href={href} className={classes} {...newTab(href)}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

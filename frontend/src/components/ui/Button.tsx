import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import type { IconName } from '@/types/icon';
import { Icon } from './Icon';

type Variant = 'primary' | 'light' | 'dark' | 'outline';
type Size = 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary: 'text-primary [--btn-bg:var(--color-accent)] hover:[--btn-bg:var(--color-accent-300)]',
  light:
    'text-white ring-1 ring-inset ring-white/45 [--btn-bg:rgb(255_255_255/0.06)] hover:[--btn-bg:rgb(255_255_255/0.16)] backdrop-blur-sm',
  dark: 'text-white [--btn-bg:var(--color-primary)] hover:[--btn-bg:var(--color-secondary)]',
  outline:
    'text-primary ring-1 ring-inset ring-primary/25 [--btn-bg:transparent] hover:[--btn-bg:var(--color-secondary-50)]',
};

const sizes: Record<Size, string> = {
  md: 'min-h-12 px-5 text-[0.9375rem]',
  lg: 'min-h-14 px-7 text-base',
};

interface StyleProps {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconPosition?: 'start' | 'end';
  className?: string;
  children: ReactNode;
}

function buttonClasses({ variant = 'primary', size = 'md', className }: Pick<StyleProps, 'variant' | 'size' | 'className'>) {
  return cn(
    'chamfer group/btn inline-flex items-center justify-center gap-2.5 font-semibold tracking-[0.01em] whitespace-nowrap select-none',
    'active:translate-y-px disabled:pointer-events-none disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  );
}

function Content({ icon, iconPosition = 'end', children }: Pick<StyleProps, 'icon' | 'iconPosition' | 'children'>) {
  const glyph = icon ? (
    <Icon
      name={icon}
      className={cn(
        'size-[1.125rem] shrink-0 transition-transform duration-300 ease-forge',
        icon.startsWith('arrow') && 'group-hover/btn:translate-x-0.5',
      )}
    />
  ) : null;
  return (
    <>
      {iconPosition === 'start' && glyph}
      <span>{children}</span>
      {iconPosition === 'end' && glyph}
    </>
  );
}

type ButtonLinkProps = StyleProps & Omit<ComponentPropsWithoutRef<'a'>, 'className' | 'children'> & { href: string };

/** Link im Button-Look. Externe Ziele (http, tel:, mailto:) werden als <a> gerendert. */
export function ButtonLink({ href, variant, size, icon, iconPosition, className, children, ...rest }: ButtonLinkProps) {
  const classes = buttonClasses({ variant, size, className });
  const content = (
    <Content icon={icon} iconPosition={iconPosition}>
      {children}
    </Content>
  );
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);
  if (isExternal) {
    const newTab = href.startsWith('http');
    return (
      <a href={href} className={classes} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
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

export function Button({ variant, size, icon, iconPosition, className, children, type = 'button', ...rest }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...rest}>
      <Content icon={icon} iconPosition={iconPosition}>
        {children}
      </Content>
    </button>
  );
}

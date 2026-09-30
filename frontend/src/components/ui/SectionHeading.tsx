import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Eyebrow } from './Eyebrow';

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  as?: 'h1' | 'h2';
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'dark',
  as: Heading = 'h2',
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <Heading id={id} className={cn('text-h2 mt-5 font-bold', tone === 'light' ? 'text-white' : 'text-primary')}>
        {title}
      </Heading>
      {lead && (
        <p className={cn('text-lead mt-5', tone === 'light' ? 'text-muted-dark' : 'text-muted', align === 'center' && 'mx-auto')}>
          {lead}
        </p>
      )}
    </header>
  );
}

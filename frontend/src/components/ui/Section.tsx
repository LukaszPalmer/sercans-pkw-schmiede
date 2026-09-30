import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'white' | 'paper' | 'dark';

const tones: Record<Tone, string> = {
  white: 'bg-white text-primary',
  paper: 'bg-paper-grain text-primary',
  dark: 'bg-forge text-white',
};

interface SectionProps {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  labelledBy?: string;
  children: ReactNode;
}

/** Sektions-Primitive: vertikaler Rhythmus + Container (max. 1440 px) + Farbwelt. */
export function Section({ id, tone = 'white', className, containerClassName, labelledBy, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('section-y relative isolate overflow-hidden', tones[tone], className)}>
      {tone === 'dark' && <div aria-hidden="true" className="bg-blueprint absolute inset-0 -z-10 opacity-60" />}
      <div className={cn('container-site', containerClassName)}>{children}</div>
    </section>
  );
}

import type { ReactNode } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Section } from '@/components/ui/Section';

interface IntroSplitProps {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  graphic: ReactNode;
  children?: ReactNode;
  tone?: 'white' | 'paper';
}

/** Einleitung jeder Unterseite: Text links, seitenspezifische Grafik rechts. */
export function IntroSplit({ id, eyebrow, title, paragraphs, graphic, children, tone = 'white' }: IntroSplitProps) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} />
          <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-muted">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          {children && <div className="mt-10">{children}</div>}
        </div>
        <div className="reveal lg:col-span-6">{graphic}</div>
      </div>
    </Section>
  );
}

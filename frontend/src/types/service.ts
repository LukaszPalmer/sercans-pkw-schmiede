import type { IconName } from './icon';
import type { ImageKey } from './image';

export type ServiceSlug =
  | 'achsvermessung'
  | 'reparaturen'
  | 'instandhaltung'
  | 'aufbereitung'
  | 'reifenwechsel'
  | 'smart-repair-glas'
  | 'reifenlagerung'
  | 'oelwechsel'
  | 'tuev';

export interface ProcessStep {
  title: string;
  text: string;
}

export interface Benefit {
  icon: IconName;
  title: string;
  text: string;
}

export interface Service {
  slug: ServiceSlug;
  title: string;
  /** Kurzer Menü-/Kartentitel. */
  navTitle: string;
  icon: IconName;
  image: ImageKey;
  eyebrow: string;
  headline: string;
  summary: string;
  metaDescription: string;
  intro: string[];
  scope: string[];
  benefits: Benefit[];
  signs: { title: string; items: string[] };
  steps: ProcessStep[];
  related: ServiceSlug[];
}

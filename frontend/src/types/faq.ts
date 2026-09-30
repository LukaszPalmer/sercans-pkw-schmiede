import type { ServiceSlug } from './service';

export type FaqCategoryId = 'allgemein' | 'termine' | 'kosten' | 'reifen' | 'wartung' | 'pruefung' | 'pflege';

export interface FaqCategory {
  id: FaqCategoryId;
  title: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: FaqCategoryId;
  /** Verknüpft die Frage zusätzlich mit Leistungsseiten (Service-FAQ + JSON-LD). */
  services?: ServiceSlug[];
  /** Auf der Startseite hervorheben. */
  featured?: boolean;
}

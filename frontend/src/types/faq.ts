export interface FaqItem {
  question: string;
  answer: string;
  /** Weiterführender Link unter der Antwort – z. B. „Zur Anfahrt ↗“. */
  link?: { label: string; href: string };
}

export type FaqTopicId = 'anfrage' | 'ablauf' | 'leistungen' | 'besuch';

export interface FaqTopic {
  id: FaqTopicId;
  label: string;
}

/** Frage der Startseiten-FAQ: Thema für den Filter, dazu Suchbegriffe, die nicht im Text stehen („TÜV“ → HU/AU). */
export interface FaqEntry extends FaqItem {
  topic: FaqTopicId;
  keywords?: string;
}

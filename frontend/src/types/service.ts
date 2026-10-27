import type { FaqItem } from './faq';
import type { IconName } from './icon';
import type { ImageKey } from './image';

export type ServiceSlug =
  | 'smartrepair'
  | 'oelwechsel'
  | 'fahrzeugaufbereitung'
  | 'klimaservice'
  | 'reifen-felgenservice'
  | 'gutachten'
  | 'hu-au'
  | 'folierung'
  | 'autoglas';

export interface TitledText {
  title: string;
  text: string;
}

/** Banner-Varianten des Designs: Foto mit Verlauf · Graphit links, Foto rechts · Titelzeile über dem Foto. */
export type BannerLayout = 'overlay' | 'split' | 'stacked';

export interface Service {
  slug: ServiceSlug;
  /** Name wie im Design – Leistungsübersicht, Kicker „Leistung / …“, Formular. */
  title: string;
  /** Kurzname in der Fußzeile – „HU/AU“. */
  shortTitle: string;
  /** Kurzbeschreibung in der Leistungsübersicht der Startseite. */
  teaser: string;
  /** Linien-Icon in der Leistungsübersicht der Startseite. */
  icon: IconName;
  metaDescription: string;
  image: ImageKey;
  /** Titel mit „\n“ an den Zeilenumbrüchen des Designs. */
  banner: { layout: BannerLayout; title: string; intro: string };
  /** Leistungsumfang: `columns` drei Spalten, `rows` Tabellenzeilen – `night` auf Graphit. */
  scope: {
    kicker: string;
    title: string;
    text: string;
    layout: 'columns' | 'rows';
    tone: 'light' | 'night';
    items: TitledText[];
  };
  /** Vorbereitung: `aside` Titel und Hinweisbox links, Schritte rechts · `stacked` Titelzeile mit Hinweis, Schritte als Spalten. */
  preparation: {
    layout: 'aside' | 'stacked';
    title: string;
    notice: string;
    steps: TitledText[];
  };
  faqs: FaqItem[];
  /** „Auch interessant“ unter den Fragen. */
  related: ServiceSlug;
  /** Blaue Terminanfrage am Seitenende. */
  request: { title: string; text: string };
}

export type ImageKey =
  | 'startseite-banner'
  | 'startseite-aufbereitung'
  | 'startseite-werkstatt'
  | 'smartrepair'
  | 'oelwechsel'
  | 'fahrzeugaufbereitung'
  | 'klimaservice'
  | 'reifen-felgenservice'
  | 'gutachten'
  | 'hu-au'
  | 'folierung'
  | 'autoglas'
  | 'werkstatt'
  | 'kontakt';

/** Bild-Registry-Eintrag – statisches Foto aus /public/images. */
export interface SiteImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Winziges, eingebettetes Vorschaubild für den Blur-Placeholder (CLS 0). */
  blurDataURL: string;
  /** Bildausschnitt bei `object-cover` (CSS `object-position`) – wo das Motiv liegt. Standard: Mitte. */
  position?: string;
}

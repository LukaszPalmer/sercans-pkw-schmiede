export type ImageKey =
  | 'workshop-lift'
  | 'studio-sedan'
  | 'wheel-hub'
  | 'engine-bay'
  | 'instrument-cluster'
  | 'paint-droplets'
  | 'tire-sidewall'
  | 'windshield-crack'
  | 'tire-rack'
  | 'engine-service'
  | 'led-headlight'
  | 'gear-knob'
  | 'cockpit'
  | 'matte-front'
  | 'speedometer'
  | 'tire-tread'
  | 'headlight-detail'
  | 'alloy-wheel';

/** Bild-Registry-Eintrag – statisches Foto aus /public/images inkl. Lizenzangaben (CC BY 2.0). */
export interface SiteImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Winziges, eingebettetes Vorschaubild für den Blur-Placeholder (CLS 0). */
  blurDataURL: string;
  credit: ImageCredit;
}

export interface ImageCredit {
  author: string;
  title: string;
  sourceUrl: string;
  license: 'CC BY 2.0';
  licenseUrl: string;
  modified: boolean;
}

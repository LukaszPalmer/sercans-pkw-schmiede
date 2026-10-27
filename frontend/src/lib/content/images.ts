import type { ImageKey, SiteImage } from '@/types/image';

/**
 * Zentrale Bild-Registry. Alle Motive stammen aus dem Figma-Design (KI-generierte Symbolbilder,
 * keine Aufnahmen des Betriebs – siehe Bildnachweis im Impressum). Austausch: Datei in /public/images
 * unter neuem Namen ablegen und hier eintragen – Maße & blurDataURL anpassen.
 */
export const images: Record<ImageKey, SiteImage> = {
  'startseite-banner': {
    src: '/images/startseite-banner.jpg',
    width: 1584,
    height: 672,
    alt: 'Mechaniker zieht mit dem Drehmomentschlüssel eine Verschraubung am Radträger an',
    blurDataURL: 'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoMAAUAA4BaJZwAAurgFFJTAAD+9dutlud5UzmWHEYqtp0lrgAAAA==',
  },
  'startseite-aufbereitung': {
    src: '/images/startseite-aufbereitung.jpg',
    width: 1152,
    height: 928,
    alt: 'Lackprüfung mit Messgerät und Inspektionsleuchte an einer grauen Fahrzeugtür',
    blurDataURL: 'data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAACwAQCdASoMAAoAA4BaJZQAAleLFln4AP7eIKRLsqHKwWClw2VZoWtmgx70jqwB8to6p50eYWJVQYCQBXx0T2jlhggDuWBHY4/Su1hZWeNUAA==',
  },
  'startseite-werkstatt': {
    src: '/images/startseite-werkstatt.jpg',
    width: 1584,
    height: 672,
    alt: 'Werkstatthalle mit Werkbank, Werkzeugwand und einem Fahrzeug auf der Hebebühne',
    blurDataURL: 'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoMAAUAA4BaJZQC7AEOdPgrkAD+NHK34CDFcgN1GemRQ9nAIRPpTXnuEhrAe6FO0j1AAA==',
  },
  smartrepair: {
    src: '/images/smartrepair.jpg',
    width: 1584,
    height: 672,
    alt: 'Kfz-Techniker prüft eine kleine Lackspur an der Fahrzeugtür im Streiflicht einer Inspektionsleuchte',
    blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoMAAUAA4BaJZwAAqnLoAQAAP70mF0gyj/F9v57q9ftknVKG/mqlt6tK8KNgsfgAAA=',
  },
  oelwechsel: {
    src: '/images/oelwechsel.jpg',
    width: 1152,
    height: 928,
    alt: 'Frisches Motoröl wird aus einem Kanister in den Einfüllstutzen des Motors gefüllt',
    blurDataURL: 'data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADwAQCdASoMAAoAA4BaJZwAAmfdnuNPtQAA/vRdOR0wU+o4DWDCF9XWVln1UkO724F4nVkQzhkwuPkLEeLcxIUhvCQLuykCIfEm8XAA',
  },
  fahrzeugaufbereitung: {
    src: '/images/fahrzeugaufbereitung.jpg',
    width: 1584,
    height: 672,
    alt: 'Motorhaube eines grauen Fahrzeugs wird mit der Poliermaschine aufbereitet',
    blurDataURL: 'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoMAAUAA4BaJZwAAlxEGCiAAP21sXez8v3LdDOWAGjS5U53+aeJC2l+pXFzIAAA',
  },
  klimaservice: {
    src: '/images/klimaservice.jpg',
    width: 1584,
    height: 672,
    alt: 'Manometer und Serviceschläuche an den Anschlüssen der Klimaanlage im Motorraum',
    blurDataURL: 'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoMAAUAA4BaJZwAAsaVbTTYAP72pLVdPukm7QEmun9d6wN6Vyudyl49LMAAAA==',
  },
  'reifen-felgenservice': {
    src: '/images/reifen-felgenservice.jpg',
    width: 1152,
    height: 928,
    alt: 'Radschrauben einer Leichtmetallfelge werden mit dem Drehmomentschlüssel angezogen',
    blurDataURL: 'data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADQAQCdASoMAAoAA4BaJZQAAlyRAGyRAAD8PG71d+BGsWnFWCd1MR/CL9G+Q88wF7B3/VaKSMiOgBhAlDH89oY3M99ajYmPZdwtuX+rg+rbAAAA',
  },
  gutachten: {
    src: '/images/gutachten.jpg',
    width: 1584,
    height: 672,
    alt: 'Schaden an der Fahrzeugseite wird mit der Kamera dokumentiert, daneben ein Klemmbrett',
    blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoMAAUAA4BaJYwC7ADx+XBAAP2de6dl+3ujmMlJXC+WEQyZlune22YGxbJtql2tcAA=',
  },
  'hu-au': {
    src: '/images/hu-au.jpg',
    width: 1152,
    height: 928,
    alt: 'Kfz-Techniker prüft den Scheinwerfer mit einem Einstellgerät',
    blurDataURL: 'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAQAgCdASoMAAoAA4BaJZwAAxUzVQ39K0aAAP6I3qruB6wehLgv8fMHzq9sjGxuOktY5aoMkRjxZjoC9eytCBwwF5IamlVZemGKJDcSkAA=',
  },
  folierung: {
    src: '/images/folierung.jpg',
    width: 1584,
    height: 672,
    alt: 'Folie wird mit dem Rakel an einer Bauteilkante angelegt',
    blurDataURL: 'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAUAA4BaJZQCdADc+GSjAAD+9JSRln3WtA26FgVvmc7pHTWy/U8SeCCOE+AA',
  },
  autoglas: {
    src: '/images/autoglas.jpg',
    width: 1584,
    height: 672,
    alt: 'Steinschlagreparatur mit Reparaturbrücke an der Windschutzscheibe',
    blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoMAAUAA4BaJZQC7AD6imOSAAD0dlSfUVKxbnRP9FSWvBqJMREw8+BTEpAEcUFAAAA=',
  },
  werkstatt: {
    src: '/images/werkstatt.jpg',
    width: 1584,
    height: 672,
    alt: 'Werkbank mit Drehmomentschlüssel und Stecknüssen, dahinter ein Fahrzeug in der Werkstatt',
    blurDataURL: 'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoMAAUAA4BaJZQC7ADdBGUkAP7zOa6ahrwKIlrQpN/7Fp3yuUZP1twh8SUUzrZQDkCxjzQA',
  },
  kontakt: {
    src: '/images/kontakt.jpg',
    width: 1152,
    height: 928,
    alt: 'Auftragsbogen und Fahrzeugschlüssel auf dem Servicetresen der Werkstatt',
    blurDataURL: 'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADQAQCdASoMAAoAA4BaJZQAAl2LqLKcAAD5D7uYWAgxr9ZK6Uiqw6dtAsQi04v1X9MCp/DfiR9LV5h8e7j4L/vthN1YBkzio5vns4CAAAA=',
  },
};

import type { ImageKey, SiteImage } from '@/types/image';

/**
 * Zentrale Bild-Registry. Alle Motive außer „startseite-werkstatt“ (Foto aus der Werkstatt, mit KI bearbeitet)
 * stammen aus dem Figma-Design (KI-generierte Symbolbilder, keine Aufnahmen des Betriebs – siehe Bildnachweis
 * im Impressum). Austausch: Datei in /public/images unter neuem Namen ablegen und hier eintragen – Maße &
 * blurDataURL anpassen.
 */
export const images: Record<ImageKey, SiteImage> = {
  'startseite-banner': {
    src: '/images/startseite-banner-new.jpeg',
    width: 2560,
    height: 1440,
    alt: 'Mechaniker arbeitet mit Handschuhen und Ratsche an Bremsscheibe und Bremssattel eines angehobenen Fahrzeugs',
    blurDataURL: 'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoMAAcABUB8JZQAAmfqyn6leADLRnQ5nN80YWIIKF9pvLPBgrgz7hsXq2hWTFatFlUNtrpZgAA=',
  },
  'startseite-aufbereitung': {
    src: '/images/startseite-aufbereitung-neu.jpeg',
    width: 2048,
    height: 2048,
    alt: 'Lackprüfung mit Messgerät und Inspektionsleuchte an der zerkratzten Seitenwand eines grauen Fahrzeugs',
    blurDataURL: 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoMAAwABUB8JZwAAq8VsCYT6cAA+5D9HwzpzFpluxPjj4np4RJPokyvE6wG2P2xliYRTBg0+HkEY13jcH0NCAAA',
  },
  'startseite-werkstatt': {
    src: '/images/Banner_New.jpeg',
    width: 2560,
    height: 1440,
    alt: 'Werkstatthalle der PKW Schmiede mit zwei Hebebühnen: ein Transporter mit geöffneter Motorhaube und ein Kompaktwagen sind angehoben',
    blurDataURL: 'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoMAAcABUB8JYwAAlr6a5zWMYAA4hhmnBjsmAxtCxKOj9j2Cw/9gaF1ntgHbDjZ7PAAAA==',
  },
  smartrepair: {
    src: '/images/smartrepair-new.jpeg',
    width: 2560,
    height: 1440,
    alt: 'Kfz-Techniker prüft Kratzer an einer grauen Fahrzeugtür im Streiflicht einer Inspektionsleuchte',
    // Oben: Türgriff und Kratzer unter dem Titel statt dahinter (Desktop) · leicht rechts: Griff, Leuchte und Hand im Hochformat
    position: '56% 0%',
    blurDataURL: 'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoMAAcABUB8JZQAAvhwymMdAADyjZkaeZ/f6bmRbkMalyeR8btzyGQJ/iIm5YapigZwjgbIAAA=',
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

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
    src: '/images/oelwechsel-new.jpeg',
    width: 2368,
    height: 1776,
    alt: 'Hände in schwarzen Handschuhen füllen frisches Motoröl aus einem Kanister in den Einfüllstutzen des Motors',
    // Querformat: Kanister, Ölstrahl und Einfüllstutzen ganz im Bild · Hochformat: rechts der Mitte – Handschuh, Strahl und Stutzen
    position: '65% 45%',
    blurDataURL: 'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoMAAkABUB8JZQAAxP7HzI8AP7lv21DKVLKt3AqFW5LdmwNqQaotchfaYZkoudyFvq2wAAA',
  },
  fahrzeugaufbereitung: {
    src: '/images/fahrzeugaufbereitung-new.jpeg',
    width: 2368,
    height: 1776,
    alt: 'Hände in blauen Handschuhen polieren die Motorhaube eines dunklen Fahrzeugs mit der Poliermaschine',
    // Querformat: oben – Maschine und Hände ganz im Bild · Hochformat: rechts – Maschine statt hellem Polierpad hinter der Textzeile
    position: '72% 20%',
    blurDataURL: 'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoMAAkABUB8JYwCdAEfaSrriADxR4iNGt0xu44oFjXs5TP7GhT7rvSxCJ7txckTqI2a1gAA',
  },
  klimaservice: {
    src: '/images/klimaservice.jpg',
    width: 1584,
    height: 672,
    alt: 'Manometer und Serviceschläuche an den Anschlüssen der Klimaanlage im Motorraum',
    blurDataURL: 'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoMAAUAA4BaJZwAAsaVbTTYAP72pLVdPukm7QEmun9d6wN6Vyudyl49LMAAAA==',
  },
  'reifen-felgenservice': {
    src: '/images/reifen-felgenservice-new.jpeg',
    width: 2368,
    height: 1776,
    alt: 'Radschrauben einer Leichtmetallfelge werden am angehobenen Fahrzeug mit dem Akku-Schlagschrauber angezogen',
    // Querformat: Radnabe und Schlagschrauber mittig · Hochformat: rechts – Felge und Schrauber
    position: '65% 55%',
    blurDataURL: 'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoMAAkABUB8JZQAAxRAdqREKcAA/tHcy3wVEycmjP8m+DvJqPQ1u1H4QjcKYjQGcJNsYobFO0CXtdh76/gAAA==',
  },
  gutachten: {
    src: '/images/gutachten-new.jpeg',
    width: 2048,
    height: 2048,
    alt: 'Zustand eines grauen Fahrzeugs wird an Scheinwerfer und Stoßfänger geprüft und auf einem Prüfbogen am Klemmbrett festgehalten',
    // Querformat: Klemmbrett unter dem Titel statt daneben · Hochformat: Scheinwerfer und Klemmbrett
    position: '50% 35%',
    blurDataURL: 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoMAAwABUB8JZwAAp/IWWqVSAD4MmCmRUR9uQmCjDXR4Rr+5EJqjcPNwYVUAD58c4ve+HE500rDtI0oBdrWPwAA',
  },
  'hu-au': {
    src: '/images/hu-au.jpg',
    width: 1152,
    height: 928,
    alt: 'Kfz-Techniker prüft den Scheinwerfer mit einem Einstellgerät',
    blurDataURL: 'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAQAgCdASoMAAoAA4BaJZwAAxUzVQ39K0aAAP6I3qruB6wehLgv8fMHzq9sjGxuOktY5aoMkRjxZjoC9eytCBwwF5IamlVZemGKJDcSkAA=',
  },
  folierung: {
    src: '/images/Folierung-new.jpeg',
    width: 2560,
    height: 1440,
    alt: 'Satingraue Folie wird mit einem orangefarbenen Rakel am Kotflügel eines Fahrzeugs angelegt',
    // Querformat: Rakel unter dem Titel statt dahinter · Hochformat: Rakel und Hände
    position: '57% 25%',
    blurDataURL: 'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoMAAcABUB8JYwAAlxjD+INAAD9tBN6DIBEa1hf1z44coCc4QyN5f110TBzH5z/VcM82EkAAAA=',
  },
  autoglas: {
    src: '/images/autoglas-new.jpeg',
    width: 2368,
    height: 1776,
    alt: 'Eine Windschutzscheibe wird mit zwei Saughebern in die Karosserie eines grauen Fahrzeugs eingesetzt',
    // Querformat: oben – Scheibenkante und beide Sauger · Hochformat: beide Sauger
    position: '55% 20%',
    blurDataURL: 'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoMAAkABUB8JYwC7ADcpXx8rAAA/LKBNoTTxJesGWXKLvprW3KkO7aTfKOrnxQqnLQEJCkU244MOirbIlkAAA==',
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

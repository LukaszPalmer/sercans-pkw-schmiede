import { fullAddress, isPlaceholder, site } from '@/lib/site';
import type { FaqEntry, FaqTopic } from '@/types/faq';
import { requestPath, servicePath } from './services';

/*
 * Häufige Fragen der Startseite („Kurz geklärt.“) – nach Thema filter- und durchsuchbar.
 * Antworten im Ton der Seite: nichts zusagen, was erst am Fahrzeug oder in der Abstimmung geklärt wird.
 * Öffnungszeiten, Telefon und Anschrift kommen aus site.ts.
 */

export const faqTopics: FaqTopic[] = [
  { id: 'anfrage', label: 'Anfrage & Termin' },
  { id: 'ablauf', label: 'Ablauf & Kosten' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'besuch', label: 'Ihr Besuch' },
];

const hours = site.hours.map((h) => `${h.days}: ${h.time}`).join(' · ');

export const faqs: FaqEntry[] = [
  // ── Anfrage & Termin ───────────────────────────────────────
  {
    topic: 'anfrage',
    question: 'Wie komme ich zu einem Termin?',
    answer:
      'Senden Sie uns eine Anfrage über das Formular, per WhatsApp oder telefonisch. Nennen Sie kurz Fahrzeug und Anliegen – Umfang und einen möglichen Termin stimmen wir dann persönlich mit Ihnen ab.',
    link: { label: 'Termin anfragen', href: requestPath() },
    keywords: 'Termin vereinbaren buchen Terminanfrage Formular Kontakt',
  },
  {
    topic: 'anfrage',
    question: 'Ist meine Anfrage schon eine Buchung?',
    answer: 'Nein. Ein Termin entsteht erst nach persönlicher Abstimmung und Bestätigung.',
    keywords: 'verbindlich Bestätigung Zusage reservieren',
  },
  {
    topic: 'anfrage',
    question: 'Kann ich vorab eine Einschätzung bekommen?',
    answer:
      'Beschreiben Sie das Anliegen möglichst genau. Fotos helfen bei sichtbaren Schäden; eine verbindliche Beurteilung kann den Blick am Fahrzeug erfordern.',
    keywords: 'Einschätzung Beurteilung Diagnose vorab',
  },
  {
    topic: 'anfrage',
    question: 'Welche Angaben helfen bei der Anfrage?',
    answer: 'Modell, Baujahr, Kilometerstand und gewünschte Leistung. Für Wartungsfragen sind vorhandene Serviceunterlagen hilfreich.',
    keywords: 'Daten Fahrzeugdaten Motorisierung Unterlagen',
  },
  {
    topic: 'anfrage',
    question: 'Kann ich Fotos vom Schaden mitschicken?',
    answer:
      'Ja. Im Anfrageformular können Sie Fotos hochladen, per WhatsApp lassen sie sich direkt senden. Am meisten helfen eine Nahaufnahme und ein Bild des gesamten Bauteils.',
    keywords: 'Foto Bild Bilder hochladen Kratzer Delle Steinschlag Riss',
  },

  // ── Ablauf & Kosten ────────────────────────────────────────
  {
    topic: 'ablauf',
    question: 'Wie läuft die Zusammenarbeit ab?',
    answer:
      'Sie beschreiben Ihr Anliegen, wir ordnen ein, was sich vorab klären lässt, und stimmen Umfang und Termin mit Ihnen ab. Gearbeitet wird nach Absprache.',
    keywords: 'Ablauf Vorgehen Schritte',
  },
  {
    topic: 'ablauf',
    question: 'Was kostet die Arbeit an meinem Fahrzeug?',
    answer:
      'Das hängt von Fahrzeug, Zustand und gewünschtem Umfang ab. Eine genaue Beschreibung oder ein Foto ermöglicht eine erste Orientierung; den Aufwand stimmen wir vor der Ausführung mit Ihnen ab.',
    keywords: 'Kosten Preis Preise teuer günstig Kostenvoranschlag Angebot bezahlen',
  },
  {
    topic: 'ablauf',
    question: 'Was passiert, wenn zusätzlich etwas auffällt?',
    answer:
      'Der vereinbarte Umfang ist die Grundlage. Was darüber hinaus auffällt, besprechen wir mit Ihnen, bevor weitergearbeitet wird – nicht still auf der Rechnung.',
    keywords: 'zusätzliche Arbeiten Mängel Rechnung Freigabe Mehrkosten',
  },
  {
    topic: 'ablauf',
    question: 'Wie lange bleibt mein Fahrzeug in der Werkstatt?',
    answer: 'Das richtet sich nach Leistung, Fahrzeug und Zustand. Ein Zeitfenster vereinbaren wir vor dem Termin mit Ihnen.',
    keywords: 'Dauer Zeit Stunden Tage abholen fertig',
  },

  // ── Leistungen ─────────────────────────────────────────────
  {
    topic: 'leistungen',
    question: 'Welche Leistungen bietet die PKW Schmiede an?',
    answer:
      'Smartrepair, Ölwechsel, Fahrzeugaufbereitung, Klimaservice, Reifen- und Felgenservice, Folierung und Autoglas. Bei Gutachten und HU/AU klären wir Zuständigkeit und Verfügbarkeit individuell.',
    link: { label: 'Alle Leistungen', href: '/#leistungen' },
    keywords: 'Angebot Service Reparatur Wartung Pflege',
  },
  {
    topic: 'leistungen',
    question: 'Kann ich mehrere Leistungen in einem Termin verbinden?',
    answer: 'Ja. Nennen Sie alle Wünsche direkt bei der Anfrage, etwa Ölwechsel und Klimaservice. So lässt sich der Umfang gemeinsam planen.',
    keywords: 'kombinieren mehrere gleichzeitig zusammen',
  },
  {
    topic: 'leistungen',
    question: 'Ist die HU/AU bei Ihnen möglich?',
    answer:
      'Prüfort und Verfügbarkeit werden auf Anfrage geklärt; erst unsere Rückmeldung bestätigt das konkrete Vorgehen. Über die Plakette entscheidet die berechtigte Prüfperson.',
    link: { label: 'Hauptuntersuchung HU/AU', href: servicePath('hu-au') },
    keywords: 'TÜV Hauptuntersuchung Abgasuntersuchung Plakette Prüfung',
  },
  {
    topic: 'leistungen',
    question: 'Erstellen Sie Gutachten selbst?',
    answer:
      'Wer die Begutachtung übernimmt und wo sie stattfindet, wird im Einzelfall geklärt. Wir nehmen den Anlass auf und klären, welche Koordination möglich ist.',
    link: { label: 'Gutachten', href: servicePath('gutachten') },
    keywords: 'Gutachter Sachverständiger Unfall Schaden Bewertung',
  },

  // ── Ihr Besuch ─────────────────────────────────────────────
  {
    topic: 'besuch',
    question: 'Wann haben Sie geöffnet?',
    answer: `${hours}. Telefonisch und per WhatsApp erreichen Sie uns unter ${site.phone.display}.`,
    keywords: 'Öffnungszeiten geöffnet offen Uhrzeit Samstag Sonntag Feiertag erreichbar Telefon',
  },
  {
    topic: 'besuch',
    question: 'Kann ich ohne Termin vorbeikommen?',
    answer: 'Bitte fragen Sie einen Besuch vorab an. So lässt sich klären, welcher Zeitpunkt und welcher Umfang möglich sind.',
    keywords: 'spontan vorbeikommen ohne Termin',
  },
  {
    topic: 'besuch',
    question: 'Was sollte ich zum Termin mitbringen?',
    answer:
      'Die Zulassungsbescheinigung Teil I und vorhandene Serviceunterlagen. Beim Radwechsel gehören die Räder und gegebenenfalls der Schlüssel für Felgenschlösser dazu. Was darüber hinaus hilft, besprechen wir bei der Abstimmung.',
    keywords: 'mitbringen Fahrzeugschein Zulassungsbescheinigung Serviceheft Unterlagen Felgenschloss Reifen',
  },
  {
    topic: 'besuch',
    question: 'Wo finde ich die PKW Schmiede?',
    answer: `${isPlaceholder(fullAddress) ? '' : `Unsere Anschrift: ${fullAddress}. `}Karte und Routenplanung finden Sie auf der Kontaktseite unter „Anfahrt“.`,
    link: { label: 'Zur Anfahrt', href: '/kontakt#anfahrt' },
    keywords: 'Adresse Anschrift Standort Anfahrt Route Karte Navigation Weg',
  },
];

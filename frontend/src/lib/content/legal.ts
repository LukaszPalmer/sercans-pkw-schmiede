import { fullAddress, site } from '@/lib/site';
import type { LegalSection } from '@/types/legal';

/*
 * Rechtstexte – Platzhalter „XXX“ vor dem Livegang ergänzen.
 * Hinweis: Diese Vorlage ersetzt keine Rechtsberatung. Bei Mitgliedschaft in der Kfz-Innung
 * ggf. die Teilnahme an der Kfz-Schiedsstelle unter „Verbraucherstreitbeilegung“ angeben.
 */

const company = `**${site.name}**\nGeschäftsführer: ${site.owner}\n${fullAddress}`;
const contactLines = `Telefon: ${site.phone.display}\nWhatsApp: ${site.whatsapp.display}\nE-Mail: [${site.email}](mailto:${site.email})`;

export const impressumSections: LegalSection[] = [
  {
    id: 'anbieter',
    title: 'Angaben gemäß § 5 DDG',
    blocks: [{ type: 'p', text: `${company}\nRechtsform: ${site.legalForm}` }],
  },
  {
    id: 'kontakt',
    title: 'Kontakt',
    blocks: [{ type: 'p', text: contactLines }],
  },
  {
    id: 'umsatzsteuer',
    title: 'Umsatzsteuer-ID',
    blocks: [{ type: 'p', text: `Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:\n${site.vatId}` }],
  },
  {
    id: 'berufsrecht',
    title: 'Berufsrechtliche Angaben',
    blocks: [
      {
        type: 'p',
        text: `Berufsbezeichnung: ${site.professionTitle} (verliehen in der Bundesrepublik Deutschland)\nZuständige Kammer: ${site.chamber}\nEintragung in die Handwerksrolle: XXX`,
      },
      {
        type: 'p',
        text: 'Es gelten folgende berufsrechtliche Regelungen: Gesetz zur Ordnung des Handwerks (Handwerksordnung – HwO), einsehbar unter [gesetze-im-internet.de](https://www.gesetze-im-internet.de/hwo/).',
      },
    ],
  },
  {
    id: 'verantwortlich',
    title: 'Verantwortlich für den Inhalt',
    blocks: [{ type: 'p', text: `Verantwortlich nach § 18 Abs. 2 MStV:\n${site.owner}\n${fullAddress}` }],
  },
  {
    id: 'streitbeilegung',
    title: 'Verbraucherstreitbeilegung',
    blocks: [
      {
        type: 'p',
        text: 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      },
    ],
  },
  {
    id: 'haftung-inhalte',
    title: 'Haftung für Inhalte',
    blocks: [
      {
        type: 'p',
        text: 'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
      },
      {
        type: 'p',
        text: 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
      },
      {
        type: 'p',
        text: 'Die Inhalte dieser Website dienen der allgemeinen Information und ersetzen keine individuelle Prüfung Ihres Fahrzeugs.',
      },
    ],
  },
  {
    id: 'haftung-links',
    title: 'Haftung für Links',
    blocks: [
      {
        type: 'p',
        text: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
      },
    ],
  },
  {
    id: 'urheberrecht',
    title: 'Urheberrecht',
    blocks: [
      {
        type: 'p',
        text: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten – insbesondere Texte, Grafiken, Logo und Gestaltung – unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Soweit Inhalte nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechend gekennzeichnet (siehe Bildnachweis).',
      },
    ],
  },
  {
    id: 'bildnachweis',
    title: 'Bildnachweis',
    blocks: [
      {
        type: 'p',
        text: 'Die Fotos dieser Website sind KI-generierte Symbolbilder, die im Rahmen der Gestaltung des Markenauftritts entstanden sind. Sie zeigen keine Aufnahmen unseres Betriebs, unserer Mitarbeitenden oder von Kundenfahrzeugen.',
      },
    ],
  },
];

export const datenschutzSections: LegalSection[] = [
  {
    id: 'verantwortlicher',
    title: 'Verantwortlicher',
    blocks: [
      { type: 'p', text: 'Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:' },
      { type: 'p', text: `${company}\n${contactLines}` },
    ],
  },
  {
    id: 'ueberblick',
    title: 'Datenschutz auf einen Blick',
    blocks: [
      {
        type: 'p',
        text: 'Wir nehmen den Schutz Ihrer persönlichen Daten ernst und verarbeiten sie ausschließlich im Rahmen der gesetzlichen Bestimmungen. Diese Website verwendet **keine Analyse- oder Marketing-Cookies** und keine Tracking-Tools. Inhalte Dritter bindet sie an einer Stelle ein: die Karte von Google Maps auf der Kontaktseite – und auch diese erst, nachdem Sie sie per Klick laden (siehe „Google Maps“).',
      },
      {
        type: 'p',
        text: 'Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Rechtsgrundlagen der Verarbeitung sind insbesondere Art. 6 Abs. 1 lit. a (Einwilligung), lit. b (Vertrag bzw. vorvertragliche Maßnahmen), lit. c (rechtliche Verpflichtung) und lit. f DSGVO (berechtigte Interessen).',
      },
    ],
  },
  {
    id: 'hosting',
    title: 'Hosting & Server-Logfiles',
    blocks: [
      {
        type: 'p',
        text: 'Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf der Website werden technisch notwendige Daten in Server-Logfiles verarbeitet:',
      },
      {
        type: 'ul',
        items: [
          'IP-Adresse des anfragenden Geräts',
          'Datum und Uhrzeit des Zugriffs',
          'aufgerufene Seite bzw. Datei und übertragene Datenmenge',
          'Referrer-URL, Browsertyp und Betriebssystem',
        ],
      },
      {
        type: 'p',
        text: 'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, stabilen und schnellen Bereitstellung der Website. Serverseitige Funktionen werden bevorzugt im Rechenzentrum Frankfurt am Main ausgeführt. Soweit Daten in die USA übermittelt werden, erfolgt dies auf Grundlage des EU-US Data Privacy Framework (Art. 45 DSGVO) bzw. der EU-Standardvertragsklauseln (Art. 46 DSGVO), die Bestandteil des Auftragsverarbeitungsvertrags mit Vercel sind.',
      },
    ],
  },
  {
    id: 'kontaktformular',
    title: 'Kontaktformular & E-Mail-Versand',
    blocks: [
      {
        type: 'p',
        text: 'Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten wir Ihre Angaben (Name, E-Mail-Adresse, gewünschte Leistung und Ihr Anliegen sowie optional Telefonnummer, Fahrzeug, Motorisierung, Kilometerstand und Fotos) zur Bearbeitung der Anfrage und für mögliche Anschlussfragen. Hochgeladene Fotos werden ausschließlich als Anhang der Anfrage-E-Mail an uns übermittelt.',
      },
      {
        type: 'p',
        text: 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen zusammenhängt, im Übrigen Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie jederzeit mit Wirkung für die Zukunft widerrufen können.',
      },
      {
        type: 'p',
        text: 'Für den technischen Versand der Formular-E-Mail nutzen wir den Dienst Resend (Plus Five Five, Inc., Anschrift: XXX). Die Daten werden ausschließlich zur Zustellung an unser Postfach verarbeitet. Eine Übermittlung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln (Art. 46 DSGVO) bzw. – sofern vorhanden – einer Zertifizierung nach dem EU-US Data Privacy Framework. Mit Resend besteht ein Auftragsverarbeitungsvertrag.',
      },
      {
        type: 'p',
        text: 'Ihre Anfrage wird gelöscht, sobald sie abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten (z. B. nach Handels- und Steuerrecht) entgegenstehen.',
      },
    ],
  },
  {
    id: 'postfach',
    title: 'E-Mail-Postfach',
    blocks: [
      {
        type: 'p',
        text: 'Unser E-Mail-Postfach wird von der IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland betrieben. E-Mails, die Sie uns direkt oder über das Kontaktformular senden, werden dort gespeichert. Grundlage ist ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO; die Verarbeitung erfolgt in Rechenzentren innerhalb der EU.',
      },
    ],
  },
  {
    id: 'whatsapp',
    title: 'Kontakt per WhatsApp & Telefon',
    blocks: [
      {
        type: 'p',
        text: 'Sie können uns über WhatsApp kontaktieren – per Link. Erst mit Ihrem Klick wird eine Verbindung zu WhatsApp aufgebaut; vorher werden keine Daten an WhatsApp übertragen. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.',
      },
      {
        type: 'p',
        text: 'Bei der Nutzung von WhatsApp verarbeitet der Anbieter u. a. Ihre Telefonnummer, Metadaten und Nachrichteninhalte (Ende-zu-Ende-verschlüsselt). Eine Übermittlung von Daten an Meta-Konzerngesellschaften, auch in die USA, kann nicht ausgeschlossen werden. Rechtsgrundlage für unsere Verarbeitung ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO. Wenn Sie dies nicht wünschen, kontaktieren Sie uns bitte telefonisch, per E-Mail oder über das Kontaktformular.',
      },
      {
        type: 'p',
        text: 'Bei telefonischer Kontaktaufnahme verarbeiten wir Ihre Telefonnummer und Ihr Anliegen ausschließlich zur Bearbeitung der Anfrage.',
      },
    ],
  },
  {
    id: 'karte',
    title: 'Google Maps',
    blocks: [
      {
        type: 'p',
        text: 'Auf der Kontaktseite können Sie eine Karte des Dienstes Google Maps einblenden. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Die Karte wird erst geladen, wenn Sie auf „Karte laden“ klicken – vorher wird keine Verbindung zu Google aufgebaut.',
      },
      {
        type: 'p',
        text: 'Mit dem Laden der Karte werden insbesondere Ihre IP-Adresse, Angaben zu Browser und Gerät sowie Ihre Nutzung der Karte an Google übermittelt; Google kann dabei Cookies oder ähnliche Technologien einsetzen. Eine Übermittlung an die Google LLC in den USA ist möglich und erfolgt auf Grundlage des EU-US Data Privacy Framework (Art. 45 DSGVO).',
      },
      {
        type: 'p',
        text: 'Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, die Sie mit dem Klick erteilen. Sie gilt nur für den jeweiligen Seitenaufruf und lässt sich mit Wirkung für die Zukunft widerrufen, indem Sie die Seite neu laden. Der Link „Route planen“ öffnet Google Maps in einem neuen Fenster. Weitere Informationen: [policies.google.com/privacy](https://policies.google.com/privacy).',
      },
    ],
  },
  {
    id: 'schriftarten',
    title: 'Schriftarten & externe Links',
    blocks: [
      {
        type: 'p',
        text: 'Die auf dieser Website verwendeten Schriftarten werden lokal von unserem Server ausgeliefert. Es findet **keine Verbindung zu Servern von Google** oder anderen Font-Anbietern statt.',
      },
      {
        type: 'p',
        text: 'Links zu externen Diensten (z. B. der WhatsApp-Chat) werden erst beim Anklicken aktiv. Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen des jeweiligen Anbieters.',
      },
    ],
  },
  {
    id: 'verschluesselung',
    title: 'SSL-/TLS-Verschlüsselung',
    blocks: [
      {
        type: 'p',
        text: 'Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ und dem Schloss-Symbol in der Adresszeile Ihres Browsers.',
      },
    ],
  },
  {
    id: 'rechte',
    title: 'Ihre Rechte',
    blocks: [
      { type: 'p', text: 'Sie haben im Rahmen der gesetzlichen Bestimmungen jederzeit das Recht auf:' },
      {
        type: 'ul',
        items: [
          'Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)',
          'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
          'Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)',
          'Datenübertragbarkeit (Art. 20 DSGVO)',
          'Widerspruch gegen die Verarbeitung auf Grundlage berechtigter Interessen (Art. 21 DSGVO)',
          'Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)',
        ],
      },
      {
        type: 'p',
        text: `Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO). Zuständig ist: ${site.supervisoryAuthority}.`,
      },
      { type: 'p', text: `Zur Ausübung Ihrer Rechte genügt eine Nachricht an [${site.email}](mailto:${site.email}).` },
    ],
  },
  {
    id: 'stand',
    title: 'Aktualität',
    blocks: [
      {
        type: 'p',
        text: 'Stand dieser Datenschutzerklärung: Oktober 2026. Wir passen sie an, sobald Änderungen der Website oder der Rechtslage dies erfordern.',
      },
    ],
  },
];

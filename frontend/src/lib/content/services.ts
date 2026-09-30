import type { Service, ServiceSlug } from '@/types/service';

/**
 * Leistungskatalog – eine Datenquelle für Navigation, Übersicht, Detailseiten,
 * Formular-Auswahl, Sitemap und Structured Data.
 */
export const services: Service[] = [
  {
    slug: 'achsvermessung',
    title: 'Achsvermessung',
    navTitle: 'Achsvermessung',
    icon: 'alignment',
    image: 'wheel-hub',
    eyebrow: 'Fahrwerk & Geometrie',
    headline: 'Achsvermessung – exakt eingestellt, sicher unterwegs.',
    summary:
      'Computergestützte Vermessung von Spur und Sturz für präzises Lenkverhalten, gleichmäßigen Reifenverschleiß und spürbar mehr Fahrsicherheit.',
    metaDescription:
      'Achsvermessung bei Sercans PKW Schmiede: Spur, Sturz & Nachlauf präzise vermessen und nach Herstellervorgaben einstellen – mit Messprotokoll. Jetzt Termin anfragen.',
    intro: [
      'Schon wenige Winkelminuten Abweichung genügen, damit ein Fahrzeug zur Seite zieht, das Lenkrad schief steht oder Reifen einseitig abfahren. Schlaglöcher, Bordsteinkontakt und natürlicher Verschleiß verändern die Fahrwerksgeometrie schleichend – meist, ohne dass man es sofort bemerkt.',
      'Mit moderner, computergestützter Messtechnik erfassen wir alle relevanten Achswerte an Vorder- und Hinterachse, vergleichen sie mit den Sollwerten des Herstellers und stellen Ihr Fahrzeug exakt ein. Das Ergebnis dokumentieren wir in einem Messprotokoll mit Vorher-Nachher-Werten.',
    ],
    scope: [
      'Vermessung von Spur, Sturz, Nachlauf und Spreizung',
      'Vorder- und Hinterachse inkl. Messprotokoll',
      'Einstellung exakt nach Herstellervorgaben',
      'Prüfung von Spurstangen, Traggelenken und Buchsen',
      'Geradestellung des Lenkrads',
      'Abschließende Probefahrt zur Kontrolle',
    ],
    benefits: [
      { icon: 'gauge', title: 'Präzises Fahrgefühl', text: 'Ihr Fahrzeug läuft sauber geradeaus, das Lenkrad steht mittig und reagiert direkt.' },
      { icon: 'tire', title: 'Längere Reifenlebensdauer', text: 'Korrekte Spurwerte verhindern einseitigen Abrieb – Ihre Reifen halten deutlich länger.' },
      { icon: 'euro', title: 'Weniger Verbrauch', text: 'Optimal ausgerichtete Räder senken den Rollwiderstand und damit Kraftstoff- bzw. Energiebedarf.' },
    ],
    signs: {
      title: 'Wann eine Vermessung sinnvoll ist',
      items: [
        'Das Fahrzeug zieht nach links oder rechts',
        'Das Lenkrad steht bei Geradeausfahrt schief',
        'Reifen sind innen oder außen einseitig abgefahren',
        'Nach Bordstein-, Schlagloch- oder Unfallkontakt',
        'Nach Arbeiten an Fahrwerk, Lenkung oder einer Tieferlegung',
        'Beim Aufziehen neuer Reifen',
      ],
    },
    steps: [
      { title: 'Fahrwerks-Check', text: 'Sichtprüfung von Lenkung, Achsteilen und Reifen, Einstellung des korrekten Reifendrucks.' },
      { title: 'Präzisionsmessung', text: 'Computergestützte Erfassung aller Achswerte an Vorder- und Hinterachse.' },
      { title: 'Einstellung', text: 'Justage von Spur und – wo konstruktiv möglich – Sturz auf die Herstellersollwerte.' },
      { title: 'Protokoll & Probefahrt', text: 'Kontrollfahrt und Übergabe des Messprotokolls mit Vorher-Nachher-Werten.' },
    ],
    related: ['reifenwechsel', 'reparaturen', 'reifenlagerung'],
  },
  {
    slug: 'reparaturen',
    title: 'Reparaturen',
    navTitle: 'Reparaturen',
    icon: 'wrench',
    image: 'engine-bay',
    eyebrow: 'Mechanik & Elektrik',
    headline: 'Reparaturen – fachgerecht, transparent, termintreu.',
    summary:
      'Von Bremsen über Kupplung bis Motor und Elektrik: Wir diagnostizieren präzise und reparieren nach Herstellervorgaben – mit Kostenvoranschlag vorab.',
    metaDescription:
      'Kfz-Reparaturen für alle Marken: Diagnose, Bremsen, Kupplung, Motor, Fahrwerk & Elektrik. Transparenter Kostenvoranschlag vorab – Sercans PKW Schmiede.',
    intro: [
      'Eine gute Reparatur beginnt mit einer sauberen Diagnose. Statt Teile auf Verdacht zu tauschen, lesen wir Fehlerspeicher aus, prüfen Messwerte und grenzen die Ursache systematisch ein. So zahlen Sie nur für das, was Ihr Fahrzeug wirklich braucht.',
      'Bevor wir mit der Arbeit beginnen, erhalten Sie einen verständlichen Kostenvoranschlag. Erst nach Ihrer Freigabe legen wir los – mit Originalteilen oder Teilen in gleichwertiger Qualität, sorgfältig verbaut und abschließend geprüft.',
    ],
    scope: [
      'Fehlerdiagnose per Steuergeräte-Auslesung',
      'Bremsen: Beläge, Scheiben, Sättel & Bremsflüssigkeit',
      'Kupplung, Getriebe und Antriebswellen',
      'Motor, Zahnriemen und Steuerkette',
      'Abgasanlage, Turbolader und Kühlsystem',
      'Stoßdämpfer, Federn und Fahrwerksteile',
      'Batterie, Lichtmaschine, Anlasser & Elektrik',
      'Klimaanlagen-Check und Wartung',
    ],
    benefits: [
      { icon: 'search', title: 'Präzise Diagnose', text: 'Systematische Fehlersuche statt Rätselraten – das spart Zeit, Teile und Geld.' },
      { icon: 'euro', title: 'Kosten vorab klar', text: 'Sie erhalten einen Kostenvoranschlag. Keine Arbeiten ohne Ihre ausdrückliche Freigabe.' },
      { icon: 'shield', title: 'Qualität, die hält', text: 'Originalteile oder gleichwertige Qualität, verbaut nach Herstellervorgaben.' },
    ],
    signs: {
      title: 'Warnsignale, die Sie ernst nehmen sollten',
      items: [
        'Eine Warnleuchte im Kombiinstrument leuchtet auf',
        'Bremsen quietschen, schleifen oder das Pedal fühlt sich weich an',
        'Ungewohnte Geräusche, Vibrationen oder Gerüche',
        'Leistungsverlust oder unruhiger Motorlauf',
        'Flüssigkeitsflecken unter dem geparkten Fahrzeug',
      ],
    },
    steps: [
      { title: 'Annahme', text: 'Sie schildern uns die Symptome – persönlich, telefonisch oder per WhatsApp.' },
      { title: 'Diagnose & Angebot', text: 'Wir ermitteln die Ursache und erstellen einen transparenten Kostenvoranschlag.' },
      { title: 'Reparatur', text: 'Nach Ihrer Freigabe reparieren wir fachgerecht und nach Herstellervorgaben.' },
      { title: 'Endkontrolle', text: 'Funktionsprüfung, Probefahrt und Übergabe mit Erläuterung der Arbeiten.' },
    ],
    related: ['instandhaltung', 'tuev', 'oelwechsel'],
  },
  {
    slug: 'instandhaltung',
    title: 'Instandhaltung',
    navTitle: 'Instandhaltung',
    icon: 'maintenance',
    image: 'instrument-cluster',
    eyebrow: 'Inspektion & Wartung',
    headline: 'Instandhaltung – Werterhalt mit System.',
    summary:
      'Inspektion nach Herstellervorgaben, Wartungsplan im Blick und alle Verschleißteile geprüft – für Zuverlässigkeit, Werterhalt und eine lückenlose Service-Historie.',
    metaDescription:
      'Inspektion & Wartung nach Herstellervorgaben – die Herstellergarantie bleibt erhalten. Lückenlose Service-Historie für alle Marken bei Sercans PKW Schmiede.',
    intro: [
      'Regelmäßige Wartung ist die günstigste Reparatur. Wer Intervalle einhält, verhindert Folgeschäden, erhält den Wert seines Fahrzeugs und fährt entspannter. Wir warten Ihr Fahrzeug exakt nach dem Serviceplan des Herstellers.',
      'Gut zu wissen: Dank der EU-Gruppenfreistellungsverordnung (Kfz-GVO) dürfen Sie Inspektionen auch in einer freien Werkstatt durchführen lassen. Die Herstellergarantie bleibt erhalten, sofern nach Herstellervorgaben und mit geeigneten Teilen gearbeitet wird – genau das ist unser Standard.',
    ],
    scope: [
      'Inspektion nach Herstellervorgaben',
      'Motoröl-, Luft-, Innenraum- und Kraftstofffilter',
      'Zündkerzen, Bremsflüssigkeit und Kühlmittel',
      'Zahnriemen- und Nebenaggregatetrieb nach Intervall',
      'Prüfung von Bremsen, Fahrwerk, Licht und Batterie',
      'Rücksetzen der Serviceanzeige',
      'Dokumentation im Serviceheft',
    ],
    benefits: [
      { icon: 'shield', title: 'Garantie bleibt erhalten', text: 'Wartung nach Herstellervorgaben sichert Ihre Garantie- und Kulanzansprüche.' },
      { icon: 'gauge', title: 'Maximale Zuverlässigkeit', text: 'Verschleiß wird erkannt, bevor er zur Panne auf der Autobahn wird.' },
      { icon: 'euro', title: 'Höherer Wiederverkaufswert', text: 'Ein lückenlos gepflegtes Serviceheft ist beim Verkauf bares Geld wert.' },
    ],
    signs: {
      title: 'Wann die nächste Wartung ansteht',
      items: [
        'Die Serviceanzeige im Display meldet sich',
        'Das Intervall laut Serviceheft (Kilometer oder Zeit) ist erreicht',
        'Vor längeren Reisen oder der Urlaubsfahrt',
        'Vor dem Verkauf – für eine lückenlose Historie',
        'Nach dem Kauf eines Gebrauchtwagens mit unklarer Vorgeschichte',
      ],
    },
    steps: [
      { title: 'Serviceplan prüfen', text: 'Wir ermitteln anhand von Fahrzeugdaten und Laufleistung den fälligen Umfang.' },
      { title: 'Wartung & Check', text: 'Alle vorgeschriebenen Arbeiten plus Sichtprüfung der Verschleißteile.' },
      { title: 'Rücksprache', text: 'Zusätzlicher Bedarf? Wir melden uns vorab – ohne Freigabe kein Mehraufwand.' },
      { title: 'Dokumentation', text: 'Eintrag ins Serviceheft, Rücksetzen der Anzeige, Übergabe mit Bericht.' },
    ],
    related: ['oelwechsel', 'reparaturen', 'tuev'],
  },
  {
    slug: 'aufbereitung',
    title: 'Aufbereitung',
    navTitle: 'Aufbereitung',
    icon: 'sparkle',
    image: 'paint-droplets',
    eyebrow: 'Pflege & Werterhalt',
    headline: 'Aufbereitung – Glanz, der bleibt.',
    summary:
      'Professionelle Innen- und Außenaufbereitung: gründliche Reinigung, maschinelle Politur und Versiegelung – für einen Auftritt wie am ersten Tag.',
    metaDescription:
      'Fahrzeugaufbereitung innen & außen: Handwäsche, Lackpolitur, Versiegelung, Innenraum-Tiefenreinigung und Lederpflege. Ideal vor Verkauf oder Leasing-Rückgabe.',
    intro: [
      'Lack und Innenraum erzählen die Geschichte eines Fahrzeugs. Waschanlagen-Kratzer, Flugrost, verblasste Kunststoffe oder Flecken im Polster mindern nicht nur das Fahrgefühl, sondern auch den Wert – spätestens beim Verkauf oder der Leasing-Rückgabe.',
      'Unsere Aufbereitung geht Schicht für Schicht vor: gründliche Reinigung, Dekontamination, maschinelle Politur zur Reduzierung von Swirls und feinen Kratzern und eine Versiegelung, die den Glanz schützt. Innen sorgen Tiefenreinigung und Materialpflege für ein spürbar frisches Ambiente.',
    ],
    scope: [
      'Schonende Handwäsche und Felgenreinigung',
      'Lackreinigung mit Knete, Entfernung von Flugrost',
      'Maschinelle Politur gegen Swirls und feine Kratzer',
      'Lackversiegelung für langanhaltenden Schutz',
      'Innenraum-Tiefenreinigung von Polstern und Teppichen',
      'Lederreinigung und -pflege',
      'Kunststoff-, Gummi- und Scheibenpflege',
      'Geruchsneutralisation',
    ],
    benefits: [
      { icon: 'sparkle', title: 'Sichtbarer Tiefenglanz', text: 'Politur und Versiegelung bringen Farbtiefe und Brillanz zurück in den Lack.' },
      { icon: 'euro', title: 'Mehr Wert beim Verkauf', text: 'Ein gepflegter erster Eindruck wirkt sich spürbar auf Verkaufspreis und Rückgabe aus.' },
      { icon: 'shield', title: 'Schutz vor Umwelteinflüssen', text: 'Versiegelt gegen UV-Strahlung, Vogelkot, Baumharz und Streusalz.' },
    ],
    signs: {
      title: 'Ideal für diese Momente',
      items: [
        'Vor dem Verkauf oder der Leasing-Rückgabe',
        'Nach dem Winter – gegen Streusalz und Schmutz',
        'Bei stumpfem, vergrautem oder verkratztem Lack',
        'Bei Flecken, Tierhaaren oder Gerüchen im Innenraum',
        'Als Geschenk oder vor besonderen Anlässen',
      ],
    },
    steps: [
      { title: 'Zustandsanalyse', text: 'Wir begutachten Lack und Innenraum und empfehlen den passenden Umfang.' },
      { title: 'Reinigung', text: 'Wäsche, Dekontamination und Tiefenreinigung als Basis für das Ergebnis.' },
      { title: 'Politur & Schutz', text: 'Maschinelle Politur und Versiegelung – abgestimmt auf Ihren Lack.' },
      { title: 'Gemeinsame Abnahme', text: 'Übergabe im Licht – inklusive Pflegetipps für lang anhaltenden Glanz.' },
    ],
    related: ['smart-repair-glas', 'instandhaltung', 'reparaturen'],
  },
  {
    slug: 'reifenwechsel',
    title: 'Reifenwechsel',
    navTitle: 'Reifenwechsel',
    icon: 'tire',
    image: 'tire-sidewall',
    eyebrow: 'Räder & Reifen',
    headline: 'Reifenwechsel – schnell, sauber, sicher.',
    summary:
      'Saisonaler Radwechsel, Reifenmontage und Auswuchten – inklusive Profil- und Zustandsprüfung sowie korrektem Anzugsdrehmoment.',
    metaDescription:
      'Reifenwechsel & Radwechsel: Montage, Auswuchten, RDKS, Drehmoment nach Herstellervorgabe und Profilcheck. Kombinierbar mit Reifenlagerung. Termin anfragen.',
    intro: [
      'Reifen sind die einzige Verbindung zwischen Fahrzeug und Straße – die Kontaktfläche eines Rades ist kaum größer als eine Postkarte. Umso wichtiger sind das richtige Profil, der passende Luftdruck und eine fachgerechte Montage.',
      'Beim Wechsel prüfen wir nicht nur die Profiltiefe, sondern auch das Reifenalter anhand der DOT-Nummer, Beschädigungen und Risse. Räder werden gewuchtet, mit dem Drehmomentschlüssel nach Herstellervorgabe angezogen und das Reifendruckkontrollsystem (RDKS) geprüft.',
    ],
    scope: [
      'Saisonaler Radwechsel Sommer/Winter',
      'Reifenmontage auf Stahl- und Alufelgen',
      'Elektronisches Auswuchten',
      'Profil-, Alters- (DOT) und Schadensprüfung',
      'Luftdruck einstellen, RDKS prüfen und anlernen',
      'Anzug mit Drehmomentschlüssel nach Vorgabe',
      'Beratung und Beschaffung neuer Reifen',
    ],
    benefits: [
      { icon: 'shield', title: 'Sicherheit bei jedem Wetter', text: 'Richtiger Reifen, richtiges Profil, richtiger Druck – für kurze Bremswege.' },
      { icon: 'clock', title: 'Zügig erledigt', text: 'Mit Termin sind Sie schnell wieder auf der Straße – ohne lange Wartezeit.' },
      { icon: 'tire', title: 'Ruhiger Lauf', text: 'Präzises Auswuchten verhindert Vibrationen und schont Fahrwerk und Reifen.' },
    ],
    signs: {
      title: 'Faustregeln & Fakten',
      items: [
        'Von O bis O: Winterreifen etwa von Oktober bis Ostern',
        'Gesetzliche Mindestprofiltiefe: 1,6 mm',
        'Empfehlung: Sommerreifen ab 3 mm, Winterreifen ab 4 mm ersetzen',
        'Seit 1. Oktober 2024 gelten nur Reifen mit Alpine-Symbol als Winterreifen',
        'Reifen altern auch ungenutzt – die DOT-Nummer verrät das Alter',
      ],
    },
    steps: [
      { title: 'Termin & Annahme', text: 'Sie bringen Ihr Fahrzeug – oder wir holen die eingelagerten Räder bereit.' },
      { title: 'Prüfung', text: 'Profil, Alter und Zustand werden kontrolliert, Auffälligkeiten besprochen.' },
      { title: 'Montage & Wuchten', text: 'Fachgerechte Montage, Auswuchten und Anzug mit Drehmomentschlüssel.' },
      { title: 'Druck & RDKS', text: 'Luftdruck nach Herstellerangabe, Prüfung und Anlernen des RDKS.' },
    ],
    related: ['reifenlagerung', 'achsvermessung', 'instandhaltung'],
  },
  {
    slug: 'smart-repair-glas',
    title: 'Smart Repair Glas',
    navTitle: 'Smart Repair Glas',
    icon: 'glass',
    image: 'windshield-crack',
    eyebrow: 'Scheibe & Steinschlag',
    headline: 'Smart Repair Glas – reparieren statt tauschen.',
    summary:
      'Kleine Steinschläge werden mit Spezialharz dauerhaft versiegelt – schnell, kostengünstig und ressourcenschonend. Ist ein Tausch nötig, übernehmen wir auch das.',
    metaDescription:
      'Steinschlagreparatur & Scheibentausch: Smart Repair für die Windschutzscheibe, oft über die Teilkasko abgedeckt. Schnell, günstig, nachhaltig – Sercans PKW Schmiede.',
    intro: [
      'Ein Steinschlag wirkt harmlos – doch Temperaturwechsel, Erschütterungen und die Heizung lassen aus einem kleinen Einschlag schnell einen langen Riss werden. Dann hilft nur noch der teure Austausch der kompletten Scheibe.',
      'Wird der Schaden früh erkannt, versiegeln wir ihn per Smart Repair: Die Bruchstelle wird gereinigt, unter Vakuum mit einem speziellen, UV-härtenden Harz gefüllt und anschließend poliert. Die Scheibe erhält ihre Stabilität zurück, die Stelle ist kaum noch sichtbar. Viele Teilkaskoversicherungen übernehmen die Kosten einer Reparatur – häufig ohne Selbstbeteiligung.',
    ],
    scope: [
      'Fachkundige Begutachtung des Schadens',
      'Steinschlagreparatur mit UV-härtendem Spezialharz',
      'Politur der Reparaturstelle',
      'Austausch von Front-, Heck- und Seitenscheiben',
      'Prüfung und ggf. Kalibrierung der Frontkamera nach Scheibentausch',
      'Unterstützung bei der Abwicklung mit Ihrer Versicherung',
    ],
    benefits: [
      { icon: 'clock', title: 'Schnell erledigt', text: 'Eine Steinschlagreparatur dauert in der Regel weniger als eine Stunde.' },
      { icon: 'euro', title: 'Oft ohne Eigenanteil', text: 'Viele Teilkaskotarife übernehmen Reparaturen häufig ohne Selbstbeteiligung.' },
      { icon: 'shield', title: 'Stabilität zurück', text: 'Die Frontscheibe trägt zur Karosseriesteifigkeit bei – eine intakte Scheibe ist Sicherheit.' },
    ],
    signs: {
      title: 'Reparieren oder tauschen? Die Faustregeln',
      items: [
        'Der Schaden ist kleiner als eine 2-Euro-Münze',
        'Er liegt mindestens etwa 10 cm vom Scheibenrand entfernt',
        'Er befindet sich nicht im direkten Sichtfeld des Fahrers',
        'Aus dem Einschlag ist noch kein längerer Riss entstanden',
        'Tipp: Steinschlag sofort mit Klebefolie abdecken – das hält Schmutz und Feuchtigkeit fern',
      ],
    },
    steps: [
      { title: 'Schadensprüfung', text: 'Wir prüfen Größe, Art und Lage – und sagen Ihnen ehrlich, ob Reparatur möglich ist.' },
      { title: 'Vorbereitung', text: 'Reinigung der Bruchstelle und Entfernung von Luft und Feuchtigkeit per Vakuum.' },
      { title: 'Harz & UV-Härtung', text: 'Injektion des Spezialharzes und Aushärtung mit UV-Licht.' },
      { title: 'Politur & Kontrolle', text: 'Oberfläche plan polieren, Sichtprüfung und Übergabe.' },
    ],
    related: ['aufbereitung', 'tuev', 'reparaturen'],
  },
  {
    slug: 'reifenlagerung',
    title: 'Reifenlagerung',
    navTitle: 'Reifenlagerung',
    icon: 'storage',
    image: 'tire-rack',
    eyebrow: 'Reifenhotel',
    headline: 'Reifenlagerung – sauber verstaut, sicher geprüft.',
    summary:
      'Ihre Räder überwintern und übersommern bei uns fachgerecht: gereinigt, geprüft, gekennzeichnet und optimal gelagert – ohne Schlepperei und Platzprobleme.',
    metaDescription:
      'Reifenlagerung im Reifenhotel: Räder gereinigt, geprüft, gekennzeichnet und fachgerecht gelagert – bequem kombiniert mit dem saisonalen Reifenwechsel.',
    intro: [
      'Vier Räder im Keller, auf dem Balkon oder im Kofferraum – das kostet Platz, Kraft und oft auch Reifenqualität. Denn Licht, Wärme, Feuchtigkeit und falsches Stapeln lassen Gummi schneller altern und verformen.',
      'In unserem Reifenhotel lagern Ihre Räder unter optimalen Bedingungen. Vor der Einlagerung werden sie gereinigt und geprüft; Sie erfahren sofort, ob die Reifen noch eine Saison durchhalten. Zum nächsten Wechseltermin stehen sie bereit – ganz ohne Schlepperei.',
    ],
    scope: [
      'Reinigung der Räder vor der Einlagerung',
      'Profil- und Zustandsprüfung mit Rückmeldung',
      'Eindeutige Kennzeichnung und Zuordnung',
      'Lagerung trocken, kühl und dunkel',
      'Fachgerechtes Lagern von Kompletträdern',
      'Kombinierbar mit dem saisonalen Radwechsel',
      'Auf Wunsch Erinnerung an den nächsten Wechsel',
    ],
    benefits: [
      { icon: 'storage', title: 'Mehr Platz zu Hause', text: 'Keller, Garage und Balkon bleiben frei – Ihre Räder sind in guten Händen.' },
      { icon: 'shield', title: 'Längere Lebensdauer', text: 'Optimale Lagerbedingungen schützen Gummimischung und Reifenform.' },
      { icon: 'clock', title: 'Maximaler Komfort', text: 'Zum Termin sind Ihre Räder bereit – kein Transport, kein Schmutz im Auto.' },
    ],
    signs: {
      title: 'So lagern Reifen optimal',
      items: [
        'Trocken, kühl und dunkel – UV-Licht lässt Gummi altern',
        'Fern von Ozon, Lösungsmitteln, Ölen und Heizquellen',
        'Kompletträder liegend gestapelt oder hängend',
        'Reifen ohne Felge stehend lagern und regelmäßig drehen',
        'Vor der Einlagerung Profil und Zustand prüfen',
      ],
    },
    steps: [
      { title: 'Übernahme', text: 'Direkt beim Radwechsel nehmen wir Ihre abmontierten Räder entgegen.' },
      { title: 'Reinigung & Prüfung', text: 'Räder werden gereinigt, Profil und Zustand dokumentiert.' },
      { title: 'Einlagerung', text: 'Eindeutig gekennzeichnet und fachgerecht gelagert.' },
      { title: 'Bereitstellung', text: 'Zum nächsten Wechsel sind Ihre Räder vorbereitet und startklar.' },
    ],
    related: ['reifenwechsel', 'achsvermessung', 'aufbereitung'],
  },
  {
    slug: 'oelwechsel',
    title: 'Ölwechsel',
    navTitle: 'Ölwechsel',
    icon: 'oil',
    image: 'engine-service',
    eyebrow: 'Motoröl & Filter',
    headline: 'Ölwechsel – frisches Öl, gesunder Motor.',
    summary:
      'Motoröl nach Herstellerfreigabe, neuer Ölfilter und fachgerechte Altöl-Entsorgung – schnell erledigt und sauber dokumentiert.',
    metaDescription:
      'Ölwechsel mit Motoröl nach Herstellerfreigabe, neuem Ölfilter und Altöl-Entsorgung. Serviceanzeige zurückgesetzt, Eintrag ins Serviceheft. Jetzt Termin anfragen.',
    intro: [
      'Motoröl schmiert, kühlt, reinigt und schützt vor Korrosion – und verliert mit jedem Kilometer an Leistungsfähigkeit. Kurzstrecken, hohe Temperaturen und Additivverbrauch setzen ihm zusätzlich zu. Ein rechtzeitiger Wechsel ist deshalb die beste Versicherung für Ihren Motor.',
      'Entscheidend ist nicht allein die Viskosität wie 5W-30, sondern die Herstellerfreigabe – etwa VW 504 00, MB 229.52 oder BMW Longlife-04. Wir ermitteln anhand Ihrer Fahrzeugdaten das exakt passende Öl und die richtige Füllmenge.',
    ],
    scope: [
      'Motoröl gemäß Herstellerfreigabe und Viskosität',
      'Neuer Ölfilter inkl. Dichtungen',
      'Sichtprüfung auf Undichtigkeiten',
      'Kontrolle von Kühlmittel, Bremsflüssigkeit und Wischwasser',
      'Rücksetzen der Serviceanzeige',
      'Fachgerechte Entsorgung des Altöls',
      'Dokumentation im Serviceheft',
    ],
    benefits: [
      { icon: 'gauge', title: 'Optimaler Motorschutz', text: 'Frisches Öl reduziert Reibung und Verschleiß – für lange Motorlebensdauer.' },
      { icon: 'euro', title: 'Teure Schäden vermeiden', text: 'Ein Ölwechsel kostet einen Bruchteil einer Motorinstandsetzung.' },
      { icon: 'shield', title: 'Herstellerkonform', text: 'Die richtige Freigabe sichert Garantie- und Kulanzansprüche.' },
    ],
    signs: {
      title: 'Wann ein Ölwechsel fällig ist',
      items: [
        'Das Intervall laut Hersteller (Kilometer oder Zeit) ist erreicht',
        'Die Serviceanzeige oder Öl-Warnleuchte meldet sich',
        'Der Ölstand ist zu niedrig oder das Öl sehr dunkel und zäh',
        'Sie fahren überwiegend Kurzstrecken',
        'Nach dem Kauf eines Gebrauchtwagens',
      ],
    },
    steps: [
      { title: 'Öl ermitteln', text: 'Freigabe, Viskosität und Füllmenge anhand Ihrer Fahrzeugdaten bestimmen.' },
      { title: 'Ablassen & Filter', text: 'Altöl vollständig ablassen, Ölfilter und Dichtungen erneuern.' },
      { title: 'Befüllen & prüfen', text: 'Neues Öl einfüllen, Füllstand und Dichtheit kontrollieren.' },
      { title: 'Dokumentieren', text: 'Serviceanzeige zurücksetzen und Wechsel im Serviceheft eintragen.' },
    ],
    related: ['instandhaltung', 'reparaturen', 'tuev'],
  },
  {
    slug: 'tuev',
    title: 'TÜV-Service',
    navTitle: 'TÜV (HU/AU)',
    icon: 'inspection',
    image: 'led-headlight',
    eyebrow: 'Hauptuntersuchung & Abgasuntersuchung',
    headline: 'TÜV-Service – bestens vorbereitet zur Plakette.',
    summary:
      'Wir prüfen Ihr Fahrzeug vorab, beheben Mängel direkt und übernehmen die Vorführung zur Hauptuntersuchung inklusive Abgasuntersuchung – alles aus einer Hand.',
    metaDescription:
      'TÜV-Service: HU/AU-Vorabcheck, Mängelbeseitigung und Vorführung zur Hauptuntersuchung – alles aus einer Hand bei Sercans PKW Schmiede. Jetzt Termin anfragen.',
    intro: [
      'Alle zwei Jahre steht die Hauptuntersuchung an – bei Neuwagen erstmals nach drei Jahren. Wer unvorbereitet hinfährt, riskiert eine Nachprüfung, zusätzliche Wege und Kosten. Häufige Mängel betreffen Beleuchtung, Bremsen, Reifen und die Achsaufhängung.',
      'Mit unserem TÜV-Service ist Ihr Fahrzeug bestens vorbereitet: Wir führen einen Vorab-Check nach den Prüfkriterien der HU durch, beheben Mängel nach Ihrer Freigabe und organisieren die Vorführung. Die Prüfung selbst nimmt ein Sachverständiger einer amtlich anerkannten Prüforganisation vor.',
    ],
    scope: [
      'Vorab-Check nach HU-Prüfkriterien',
      'Bremsen, Lenkung, Fahrwerk und Reifen',
      'Beleuchtung und Scheinwerfereinstellung',
      'Mängelbeseitigung nach Rücksprache',
      'Abgasuntersuchung (AU) als Teil der HU',
      'Vorführung zur Hauptuntersuchung (HU)',
      'Kontrolle von Verbandkasten, Warndreieck und Warnweste',
    ],
    benefits: [
      { icon: 'badge', title: 'Beim ersten Mal bestehen', text: 'Durch den Vorab-Check werden Mängel erkannt, bevor der Prüfer sie findet.' },
      { icon: 'clock', title: 'Ein Termin für alles', text: 'Check, Reparatur und Vorführung – Sie sparen Wege, Zeit und Nerven.' },
      { icon: 'shield', title: 'Verkehrssicher unterwegs', text: 'Die Plakette bestätigt, was wir sicherstellen: ein sicheres Fahrzeug.' },
    ],
    signs: {
      title: 'Gut zu wissen',
      items: [
        'HU-Intervall: alle 24 Monate, bei Neuwagen erstmals nach 36 Monaten',
        'Die Zahl oben auf der Plakette zeigt den Monat, die Farbe das Jahr',
        'Mehr als zwei Monate überzogen? Dann wird eine erweiterte Prüfung fällig',
        'Zusätzlich drohen bei Überziehung Verwarn- bzw. Bußgelder',
        'Bei erheblichen Mängeln ist innerhalb eines Monats eine Nachprüfung nötig',
      ],
    },
    steps: [
      { title: 'Vorab-Check', text: 'Prüfung aller HU-relevanten Baugruppen – ehrlich und gründlich.' },
      { title: 'Mängelbeseitigung', text: 'Nach Ihrer Freigabe beheben wir gefundene Mängel direkt.' },
      { title: 'HU/AU-Vorführung', text: 'Vorführung bei einer amtlich anerkannten Prüforganisation.' },
      { title: 'Übergabe', text: 'Sie erhalten Ihr Fahrzeug mit Prüfbericht und frischer Plakette.' },
    ],
    related: ['reparaturen', 'instandhaltung', 'achsvermessung'],
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesBySlugs(slugs: ServiceSlug[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter((s): s is Service => Boolean(s));
}

export const servicePath = (slug: ServiceSlug) => `/leistungen/${slug}`;

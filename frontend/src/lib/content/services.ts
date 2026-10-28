import type { Service, ServiceSlug } from '@/types/service';

/**
 * Leistungskatalog wie im Figma-Design – eine Datenquelle für Startseite, Detailseiten, Fußzeile,
 * Formular-Auswahl, Sitemap und Structured Data. Reihenfolge = Nummerierung „01“–„09“ im Design.
 */
export const services: Service[] = [
  {
    slug: 'smartrepair',
    title: 'Smartrepair',
    shortTitle: 'Smartrepair',
    teaser: 'Kleine Lackschäden gezielt behandeln.',
    icon: 'paint',
    metaDescription:
      'Smartrepair bei der PKW Schmiede: Kratzer, Schrammen und kleine Lackschäden beurteilen und gezielt behandeln. Reparaturweg, Aufwand und Termin stimmen wir vorab mit Ihnen ab.',
    image: 'smartrepair',
    banner: {
      layout: 'overlay',
      title: 'Kleine Spuren.\nGezielter Eingriff.',
      intro: 'Kratzer, Schrammen, kleine Lackschäden: Entscheidend ist nicht nur die Größe, sondern wo und wie tief die Spur sitzt.',
      centered: 'always',
      narrowIntro: true,
      narrowShade: true,
      mobile: { title: 'Smartrepair', subtitle: 'Kleine Spuren. Gezielter Eingriff.' },
    },
    scope: {
      kicker: 'Erhalten statt großflächig ersetzen',
      title: 'So wenig Eingriff wie sinnvoll.',
      text: 'Smartrepair kann bei örtlich begrenzten Schäden eine passende Lösung sein. Wir beurteilen die Stelle und besprechen, welches Ergebnis realistisch ist – bevor aus einer kleinen Spur eine große Maßnahme wird.',
      layout: 'columns',
      tone: 'light',
      items: [
        { title: 'Lackschäden beurteilen', text: 'Lage, Tiefe und Untergrund bestimmen, ob eine lokale Behandlung infrage kommt.' },
        { title: 'Reparaturweg abstimmen', text: 'Polieren, örtlich ausbessern oder weitergehend behandeln: Die Methode folgt dem Schaden.' },
        { title: 'Übergänge im Blick', text: 'Farbton, Glanz und die angrenzende Oberfläche gehören zur Beurteilung dazu.' },
      ],
    },
    preparation: {
      layout: 'aside',
      title: 'Zeigen Sie uns die Stelle.',
      notice: 'Nicht jeder Schaden eignet sich für Smartrepair. Fotos helfen zur Orientierung, ersetzen aber nicht immer die Besichtigung.',
      steps: [
        { title: 'Fotos senden', text: 'Eine Nahaufnahme und ein Bild des gesamten Bauteils helfen, den Schaden einzuordnen.' },
        { title: 'Stelle besichtigen', text: 'Wir betrachten Oberfläche und Verlauf im passenden Licht und klären den möglichen Umfang.' },
        { title: 'Vorgehen vereinbaren', text: 'Reparaturweg, Aufwand und Termin werden vor der Ausführung abgestimmt.' },
      ],
    },
    faqs: [
      {
        question: 'Lässt sich jeder Kratzer entfernen?',
        answer: 'Nein. Tiefe Kratzer bis zum Untergrund brauchen eine andere Behandlung als oberflächliche Spuren.',
      },
      {
        question: 'Kann ich den Preis anhand eines Fotos erfahren?',
        answer: 'Ein Foto ermöglicht eine erste Orientierung. Der tatsächliche Aufwand hängt vom Zustand vor Ort ab.',
      },
      {
        question: 'Ist Smartrepair auch vor einer Rückgabe sinnvoll?',
        answer: 'Eine Zustandsprüfung kann helfen, sinnvolle Maßnahmen zu erkennen. Rückgabevorgaben sollten dabei vorliegen.',
      },
    ],
    related: 'fahrzeugaufbereitung',
    request: {
      title: 'Eine kleine Spur?\nSchauen wir genauer hin.',
      text: 'Senden Sie uns Fahrzeugangaben und eine kurze Beschreibung der betroffenen Stelle.',
    },
  },
  {
    slug: 'oelwechsel',
    title: 'Ölwechsel',
    shortTitle: 'Ölwechsel',
    teaser: 'Das passende Öl. Der richtige Wechsel.',
    icon: 'oil',
    metaDescription:
      'Ölwechsel bei der PKW Schmiede: Motoröl und Filter nach Fahrzeugvorgabe – mit Blick auf Freigabe, Motorisierung und den passenden Wartungszeitpunkt. Jetzt Termin anfragen.',
    image: 'oelwechsel',
    banner: {
      layout: 'overlay',
      title: 'Der richtige Schutz.\nFür Ihren Motor.',
      intro: 'Ölwechsel nach Fahrzeuganforderung – mit Blick auf Freigabe, Filter und den passenden Wartungszeitpunkt.',
      centered: 'always',
      narrowIntro: true,
      narrowShade: true,
      mobile: { title: 'Ölwechsel', subtitle: 'Der richtige Schutz. Für Ihren Motor.' },
    },
    scope: {
      kicker: 'Wartung mit Maß',
      title: 'Nicht irgendein Öl. Das passende.',
      text: 'Viskosität allein reicht nicht. Für die Auswahl sind die Herstellervorgaben und die konkrete Motorisierung entscheidend. Diese Angaben klären wir vor dem Wechsel.',
      layout: 'rows',
      tone: 'light',
      items: [
        { title: 'Freigabe klären', text: 'Fahrzeugdaten und Wartungsunterlagen bilden die Grundlage für die Auswahl des Motoröls.' },
        { title: 'Öl und Filter wechseln', text: 'Der vereinbarte Wechsel umfasst das passende Öl und den zugehörigen Filter nach Fahrzeugvorgabe.' },
        {
          title: 'Füllstand kontrollieren',
          text: 'Nach dem Wechsel werden Füllstand und der bearbeitete Bereich geprüft. Ein Servicehinweis wird nach Absprache berücksichtigt.',
        },
      ],
    },
    preparation: {
      layout: 'aside',
      title: 'Die Fahrzeugdaten machen den Unterschied.',
      notice: 'Ein Ölwechsel ist nicht automatisch eine vollständige Inspektion. Weitere Wartungspositionen bitte separat abstimmen.',
      steps: [
        { title: 'Daten bereithalten', text: 'Modell, Baujahr, Motorisierung und Kilometerstand angeben. Hilfreich: die Zulassungsbescheinigung.' },
        { title: 'Intervall einordnen', text: 'Wann war der letzte Wechsel? Gibt es eine Serviceanzeige oder einen Eintrag im Wartungsheft?' },
        { title: 'Umfang bestätigen', text: 'Wir stimmen Material und Arbeit mit Ihnen ab und vereinbaren einen möglichen Termin.' },
      ],
    },
    faqs: [
      {
        question: 'Wann braucht mein Fahrzeug neues Öl?',
        answer: 'Maßgeblich sind Herstellervorgabe, Zeit und Laufleistung. Eine pauschale Kilometerangabe wäre nicht für jedes Fahrzeug richtig.',
      },
      {
        question: 'Kann eine Warnleuchte bis zum Termin warten?',
        answer:
          'Bei einer roten Öldruckwarnung sicher anhalten, den Motor abstellen und die Hinweise der Betriebsanleitung beachten. Nicht einfach weiterfahren.',
      },
      {
        question: 'Kann ich einen weiteren Service mit anfragen?',
        answer: 'Ja. Nennen Sie zusätzliche Wartungswünsche direkt bei der Anfrage, damit der Umfang geplant werden kann.',
      },
    ],
    related: 'klimaservice',
    request: {
      title: 'Wartung fällig?\nDaten senden. Termin klären.',
      text: 'Mit Fahrzeugmodell, Motorisierung und Kilometerstand lässt sich Ihr Ölwechsel gezielt vorbereiten.',
    },
  },
  {
    slug: 'fahrzeugaufbereitung',
    title: 'Fahrzeugaufbereitung',
    shortTitle: 'Fahrzeugaufbereitung',
    teaser: 'Oberflächen pflegen. Substanz erhalten.',
    icon: 'shine',
    metaDescription:
      'Fahrzeugaufbereitung bei der PKW Schmiede: Innenraum und Außenflächen materialgerecht reinigen und pflegen – abgestimmt auf Zustand, Material und Ihr Pflegeziel.',
    image: 'fahrzeugaufbereitung',
    banner: {
      layout: 'overlay',
      title: 'Pflege, die man sieht.\nSorgfalt, die bleibt.',
      intro: 'Innenraum und Außenflächen gezielt behandeln. Abgestimmt auf Material, Zustand und Ihren Anspruch.',
      centered: 'always',
      narrowIntro: true,
      narrowShade: true,
      mobile: { title: 'Fahrzeug\u00adaufbereitung', subtitle: 'Pflege, die man sieht. Sorgfalt, die bleibt.' },
    },
    scope: {
      kicker: 'Substanz im Mittelpunkt',
      title: 'Jede Oberfläche hat ihre Eigenheiten.',
      text: 'Lack, Kunststoff, Textil oder Leder brauchen unterschiedliche Pflege. Wir beginnen beim Zustand und wählen die Behandlung danach aus – nicht nach einem starren Paket.',
      layout: 'columns',
      tone: 'night',
      items: [
        {
          title: 'Außenflächen',
          text: 'Schonende Reinigung und eine abgestimmte Lackbehandlung. Der Zustand entscheidet über die sinnvolle Intensität.',
        },
        { title: 'Innenraum', text: 'Materialgerechte Reinigung von Flächen, Sitzen und Kontaktbereichen nach vereinbartem Umfang.' },
        { title: 'Pflegeziel', text: 'Alltag, Verkauf oder Rückgabe: Wir besprechen, worauf es Ihnen bei der Aufbereitung ankommt.' },
      ],
    },
    preparation: {
      layout: 'stacked',
      title: 'Ein gutes Ergebnis beginnt beim Hinsehen.',
      notice:
        'Tiefe Beschädigungen, Materialverschleiß und manche Flecken lassen sich durch Reinigung oder Politur nicht vollständig beheben.',
      steps: [
        { title: 'Zustand beschreiben', text: 'Nennen Sie beanspruchte Bereiche, Flecken oder sichtbare Lackspuren. Ergänzen Sie gern Fotos.' },
        { title: 'Behandlung festlegen', text: 'Wir grenzen Reinigung, Lackkorrektur und mögliche Pflegeprodukte gemeinsam ab.' },
        {
          title: 'Übergabe vorbereiten',
          text: 'Persönliche Gegenstände bitte vor dem Termin aus dem Fahrzeug nehmen. Den benötigten Zeitraum stimmen wir ab.',
        },
      ],
    },
    faqs: [
      {
        question: 'Verschwindet jeder Kratzer durch Polieren?',
        answer: 'Nein. Ob eine Korrektur sinnvoll ist, hängt von der Tiefe der Spur und der verfügbaren Lackschicht ab.',
      },
      {
        question: 'Ist eine Innenraumreinigung einzeln möglich?',
        answer: 'Fragen Sie den gewünschten Bereich gezielt an. Wir stimmen einen passenden Umfang ab.',
      },
      {
        question: 'Wie lange bleibt das Fahrzeug in der Werkstatt?',
        answer: 'Das richtet sich nach Größe, Zustand und Behandlung. Ein Zeitfenster wird vor dem Termin vereinbart.',
      },
    ],
    related: 'smartrepair',
    request: {
      title: 'Mehr Pflege.\nWeniger Kompromiss.',
      text: 'Erzählen Sie uns, welche Bereiche Sie aufbereiten lassen möchten und welches Ergebnis Ihnen wichtig ist.',
    },
  },
  {
    slug: 'klimaservice',
    title: 'Klimaservice',
    shortTitle: 'Klimaservice',
    teaser: 'Kühlleistung und Funktion im Blick.',
    icon: 'climate',
    metaDescription:
      'Klimaservice bei der PKW Schmiede: nachlassende Kühlung, Geräusche oder Geruch einordnen und Prüfung sowie Service passend zu Fahrzeug und Kältemitteltyp abstimmen.',
    image: 'klimaservice',
    banner: {
      layout: 'overlay',
      title: 'Ein kühler Kopf.\nEine klare Prüfung.',
      intro: 'Weniger Kühlung, ungewohnte Geräusche oder Geruch? Wir grenzen das Anliegen ein und stimmen den nächsten Schritt ab.',
    },
    scope: {
      kicker: 'Funktion vor Routine',
      title: 'Schwache Kühlung hat nicht nur eine Ursache.',
      text: 'Eine Klimaanlage ist ein geschlossenes System. Bei nachlassender Leistung ist es sinnvoll, den Zustand einzuordnen statt nur auf Verdacht nachzufüllen. Fahrzeug und Kältemitteltyp bestimmen die Möglichkeiten.',
      layout: 'columns',
      tone: 'light',
      items: [
        { title: 'Leistung einordnen', text: 'Wie kühlt die Anlage, wann tritt das Problem auf und welche Auffälligkeiten gibt es?' },
        { title: 'Service abstimmen', text: 'Art des Kältemittels, Fahrzeugdaten und Prüfergebnis bestimmen den möglichen Serviceumfang.' },
        {
          title: 'Geruch gezielt ansprechen',
          text: 'Geruchsprobleme können andere Ursachen haben als fehlende Kühlung. Reinigung und Filter separat besprechen.',
        },
      ],
    },
    preparation: {
      layout: 'stacked',
      title: 'Was fällt Ihnen im Alltag auf?',
      notice: 'Kältemittel nicht selbst nachfüllen. Bei vermuteter Undichtigkeit ist zunächst eine fachgerechte Prüfung nötig.',
      steps: [
        { title: 'Symptome notieren', text: 'Kühlt die Anlage nur zeitweise? Gibt es Geräusche oder Geruch? Seit wann besteht die Veränderung?' },
        { title: 'Fahrzeug nennen', text: 'Modell und Baujahr helfen, Anlage und Kältemitteltyp zuzuordnen. Vorherige Arbeiten bitte erwähnen.' },
        { title: 'Prüfung und Service klären', text: 'Wir stimmen die Untersuchung und mögliche weitere Maßnahmen vor der Ausführung ab.' },
      ],
    },
    faqs: [
      {
        question: 'Hilft Nachfüllen immer?',
        answer: 'Nein. Fehlende Kühlung kann auch durch Undichtigkeiten oder andere technische Fehler entstehen.',
      },
      {
        question: 'Ist Geruch ein Zeichen für zu wenig Kältemittel?',
        answer:
          'Nicht zwangsläufig. Filter und feuchtigkeitsbedingte Ablagerungen können eine Rolle spielen und sollten gesondert betrachtet werden.',
      },
      {
        question: 'Kann jedes Kältemittel bearbeitet werden?',
        answer: 'Bitte Fahrzeugdaten angeben. Ob die konkrete Anlage betreut werden kann, wird mit der Anfrage bestätigt.',
      },
    ],
    related: 'oelwechsel',
    request: {
      title: 'Kühlleistung verändert?\nSprechen wir darüber.',
      text: 'Mit einer kurzen Beschreibung der Symptome lässt sich die Anfrage besser vorbereiten.',
    },
  },
  {
    slug: 'reifen-felgenservice',
    title: 'Reifen- und Felgenservice',
    shortTitle: 'Reifen- und Felgenservice',
    teaser: 'Für einen sauberen Kontakt zur Straße.',
    icon: 'wheel',
    metaDescription:
      'Reifen- und Felgenservice bei der PKW Schmiede: Radwechsel, Reifenmontage, Auswuchten und Felgenzustand – passend zu Fahrzeug, Dimension und Zustand. Jetzt Termin anfragen.',
    image: 'reifen-felgenservice',
    banner: {
      layout: 'overlay',
      title: 'Der Kontakt\nzur Straße zählt.',
      intro: 'Saisonwechsel, Reifenmontage und Fragen zur Felge. Passend zu Fahrzeug, Dimension und Zustand.',
      centered: 'always',
      narrowIntro: true,
      narrowShade: true,
      mobile: { title: 'Reifen- und Felgenservice', subtitle: 'Der Kontakt zur Straße zählt.' },
    },
    scope: {
      kicker: 'Rund um Rad und Reifen',
      title: 'Mehr als ein Wechsel der Saison.',
      text: 'Ob kompletter Radsatz oder neue Bereifung: Der nötige Aufwand ist unterschiedlich. Wir klären vorab, was vorhanden ist und welche Arbeiten am Rad sinnvoll sind.',
      layout: 'rows',
      tone: 'light',
      items: [
        { title: 'Radwechsel', text: 'Vorhandene Kompletträder wechseln und den vereinbarten Kontrollumfang abstimmen.' },
        { title: 'Montage und Wuchten', text: 'Bei neuen Reifen oder Unwucht die passende Montage und das Auswuchten anfragen.' },
        { title: 'Felgenzustand', text: 'Beschädigungen und sichtbare Auffälligkeiten einordnen. Nicht jede Felge ist reparaturfähig.' },
      ],
    },
    preparation: {
      layout: 'aside',
      title: 'Den richtigen Satz Daten mitbringen.',
      notice:
        'Bei Druckverlust, sichtbarer Beschädigung oder ungewöhnlichem Fahrverhalten nicht bis zum Saisonwechsel warten. Weiterfahrt sicher beurteilen lassen.',
      steps: [
        { title: 'Dimension angeben', text: 'Reifengröße, Fahrzeugmodell und gegebenenfalls abweichende Felgendaten nennen.' },
        { title: 'Bestand beschreiben', text: 'Sind Kompletträder vorhanden oder sollen Reifen montiert werden? RDKS bitte mit angeben.' },
        { title: 'Termin vorbereiten', text: 'Räder und gegebenenfalls den Schlüssel für Felgenschlösser zum Termin mitbringen.' },
      ],
    },
    faqs: [
      {
        question: 'Radwechsel oder Reifenwechsel – was ist der Unterschied?',
        answer:
          'Beim Radwechsel wird das komplette Rad getauscht. Beim Reifenwechsel wird der Reifen von der Felge ab- und ein anderer aufgezogen.',
      },
      {
        question: 'Was ist bei einem Reifendruckkontrollsystem wichtig?',
        answer: 'Je nach System müssen Sensoren berücksichtigt oder Werte neu angelernt werden. Fahrzeugdaten helfen bei der Planung.',
      },
      {
        question: 'Können beschädigte Felgen instand gesetzt werden?',
        answer: 'Das hängt von Art und Ausmaß des Schadens ab. Eine Prüfung geht jeder Empfehlung voraus.',
      },
    ],
    related: 'hu-au',
    request: {
      title: 'Bereit für\nden nächsten Wechsel?',
      text: 'Nennen Sie uns Fahrzeug, Reifendimension und ob ein kompletter Radsatz vorhanden ist.',
    },
  },
  {
    slug: 'gutachten',
    title: 'Gutachten',
    shortTitle: 'Gutachten',
    teaser: 'Anlass klären. Begutachtung anfragen.',
    icon: 'report',
    metaDescription:
      'Gutachten anfragen bei der PKW Schmiede: Anlass klären, Unterlagen sammeln und die Koordination einer Begutachtung abstimmen – Zuständigkeit und Termin werden ausdrücklich bestätigt.',
    image: 'gutachten',
    banner: {
      layout: 'overlay',
      title: 'Erst dokumentieren.\nDann entscheiden.',
      intro: 'Sie benötigen eine Begutachtung? Wir klären den Anlass und fragen den passenden Weg zur Koordination an.',
      centered: 'always',
      narrowIntro: true,
      narrowShade: true,
      mobile: { title: 'Gutachten', subtitle: 'Erst dokumentieren. Dann entscheiden.' },
    },
    scope: {
      kicker: 'Anlass und Zuständigkeit klären',
      title: 'Eine fundierte Grundlage beginnt mit den richtigen Fragen.',
      text: 'Schaden, Fahrzeugzustand oder eine andere Fragestellung: Nicht jeder Anlass braucht dieselbe Art der Begutachtung. Wir nehmen Ihre Anfrage auf und klären, welche Koordination möglich ist.',
      layout: 'columns',
      tone: 'light',
      items: [
        {
          title: 'Anliegen einordnen',
          text: 'Was soll festgestellt werden und für wen wird die Einschätzung benötigt? Das klären wir zuerst.',
        },
        { title: 'Unterlagen sammeln', text: 'Fahrzeugdaten, vorhandene Fotos und relevante Schreiben helfen bei der weiteren Abstimmung.' },
        {
          title: 'Begutachtung koordinieren',
          text: 'Zuständigkeit, Verfügbarkeit und möglicher Termin werden angefragt und ausdrücklich bestätigt.',
        },
      ],
    },
    preparation: {
      layout: 'aside',
      title: 'Die Fragestellung ist der Ausgangspunkt.',
      notice:
        'Die Anfrage ist keine Zusage einer Gutachtenerstellung durch PKW Schmiede. Zuständigkeit, Leistung und Verfügbarkeit sind vorab zu bestätigen.',
      steps: [
        {
          title: 'Anlass schildern',
          text: 'Beschreiben Sie kurz, ob es um einen Schaden, den Zustand oder eine konkrete Bewertungsfrage geht.',
        },
        {
          title: 'Dokumente bereithalten',
          text: 'Vorhandene Unterlagen und Ansprechpartner nennen. Sensible Daten erst nach Abstimmung übermitteln.',
        },
        {
          title: 'Weiteres Vorgehen klären',
          text: 'Wir stimmen ab, ob und wie eine Begutachtung koordiniert werden kann. Keine Zusage ohne Bestätigung.',
        },
      ],
    },
    faqs: [
      {
        question: 'Wird das Gutachten in der Werkstatt erstellt?',
        answer:
          'Wer die Begutachtung übernimmt und wo sie stattfindet, wird im Einzelfall geklärt. Eine eigene Sachverständigenleistung wird hier nicht zugesagt.',
      },
      {
        question: 'Soll ich vor einer Reparatur anfragen?',
        answer:
          'Wenn ein Schaden dokumentiert werden soll, das Vorgehen möglichst vor einer Veränderung am Fahrzeug mit den zuständigen Beteiligten abstimmen.',
      },
      {
        question: 'Ist die Anfrage eine Beratung zur Schadenregulierung?',
        answer:
          'Nein. Versicherungs- oder Rechtsfragen gehören zu den dafür zuständigen Stellen. Hier geht es um die Anfrage und Koordination.',
      },
    ],
    related: 'smartrepair',
    request: {
      title: 'Was soll\ngeklärt werden?',
      text: 'Nennen Sie uns Anlass und Fahrzeug. Wir melden uns zur möglichen Koordination einer Begutachtung.',
    },
  },
  {
    slug: 'hu-au',
    title: 'Hauptuntersuchung HU/AU',
    shortTitle: 'HU/AU',
    teaser: 'Prüftermin und Vorbereitung abstimmen.',
    icon: 'inspection',
    metaDescription:
      'Hauptuntersuchung HU/AU: Vorbereitung und mögliche Terminkoordination bei der PKW Schmiede anfragen. Die amtliche Prüfung erfolgt durch eine berechtigte Prüfstelle.',
    image: 'hu-au',
    banner: {
      layout: 'split',
      title: 'Prüftermin fällig?\nGut vorbereitet.',
      intro: 'Vorbereitung und mögliche Terminkoordination für HU/AU anfragen. Zuständigkeit und Verfügbarkeit klären wir vorab.',
    },
    scope: {
      kicker: 'Vor dem Prüftermin',
      title: 'Vorbereitung schafft Klarheit.',
      text: 'Wenn die Hauptuntersuchung ansteht, lohnt es sich, bekannte Auffälligkeiten vorher anzusprechen. Wir stimmen einen möglichen Vorab-Check und die weitere Terminabwicklung mit Ihnen ab.',
      layout: 'columns',
      tone: 'light',
      items: [
        {
          title: 'Fälligkeit nennen',
          text: 'Prüfmonat und Fahrzeugdaten helfen bei der Planung. Bei einer Nachprüfung bitte den Bericht bereithalten.',
        },
        {
          title: 'Vorbereitung anfragen',
          text: 'Bekannte Mängel und gewünschte Kontrollen am Fahrzeug vorab besprechen. Reparaturen nur nach Absprache.',
        },
        { title: 'Termin koordinieren', text: 'Ob und wie ein Prüftermin organisiert werden kann, wird individuell angefragt und bestätigt.' },
      ],
    },
    preparation: {
      layout: 'aside',
      title: 'Unterlagen bereit. Fragen geklärt.',
      notice:
        'Die amtliche Hauptuntersuchung erfolgt durch eine berechtigte Prüfstelle bzw. Prüfperson. Eine eigene Prüfberechtigung von PKW Schmiede wird nicht behauptet.',
      steps: [
        {
          title: 'Dokumente vorbereiten',
          text: 'Zulassungsbescheinigung Teil I sowie gegebenenfalls Nachweise zu Änderungen und den letzten Prüfbericht bereithalten.',
        },
        {
          title: 'Auffälligkeiten mitteilen',
          text: 'Warnanzeigen, Defekte oder bekannte Mängel nennen. Bei einer Nachprüfung den konkreten Bericht berücksichtigen.',
        },
        {
          title: 'Verfügbarkeit bestätigen lassen',
          text: 'Prüfort, zuständige Stelle und Termin werden vorab geklärt. Die Anfrage ist noch keine Buchung.',
        },
      ],
    },
    faqs: [
      {
        question: 'Ist die Untersuchung bei Ihnen garantiert möglich?',
        answer: 'Nein. Prüfort und Verfügbarkeit werden auf Anfrage geklärt. Erst die Rückmeldung bestätigt das konkrete Vorgehen.',
      },
      {
        question: 'Garantiert ein Vorab-Check eine neue Plakette?',
        answer: 'Nein. Die Entscheidung trifft die berechtigte Prüfperson im Rahmen der amtlichen Untersuchung.',
      },
      {
        question: 'Was gilt bei einer Nachprüfung?',
        answer: 'Bitte den Prüfbericht und die dort genannten Fristen beachten. Den möglichen Termin rechtzeitig abstimmen.',
      },
    ],
    related: 'reifen-felgenservice',
    request: {
      title: 'Fälligkeit im Blick.\nTermin in Abstimmung.',
      text: 'Nennen Sie Prüfmonat, Fahrzeug und mögliche Auffälligkeiten. Wir klären die nächsten Schritte.',
    },
  },
  {
    slug: 'folierung',
    title: 'Folierung',
    shortTitle: 'Folierung',
    teaser: 'Neue Oberfläche. Eigener Charakter.',
    icon: 'foil',
    metaDescription:
      'Folierung bei der PKW Schmiede: Farbe, Finish und ausgewählte Details – Idee, Untergrund und Ausführung stimmen wir vor dem Termin gemeinsam ab.',
    image: 'folierung',
    banner: {
      layout: 'overlay',
      title: 'Eine neue Fläche.\nIhr eigener Ausdruck.',
      intro: 'Farbe, Finish und ausgewählte Details. Eine Folierung beginnt mit einer klaren Idee und einem geeigneten Untergrund.',
      centered: 'always',
      narrowIntro: true,
      narrowShade: true,
      mobile: { title: 'Folierung', subtitle: 'Eine neue Fläche. Ihr eigener Ausdruck.' },
    },
    scope: {
      kicker: 'Gestaltung mit Augenmaß',
      title: 'Die Wirkung entsteht an der Kante.',
      text: 'Fläche, Form und Material müssen zusammenpassen. Wir besprechen die gewünschte Veränderung, den Zustand des Lacks und den möglichen Umfang – von einzelnen Akzenten bis zur angefragten größeren Fläche.',
      layout: 'columns',
      tone: 'night',
      items: [
        {
          title: 'Idee konkretisieren',
          text: 'Welche Bauteile, welcher Farbton, welches Finish? Muster und Referenzen machen Vorstellungen vergleichbar.',
        },
        { title: 'Untergrund prüfen', text: 'Lackzustand, frühere Reparaturen und Kanten beeinflussen, ob und wie foliert werden kann.' },
        { title: 'Ausführung abstimmen', text: 'Material, Vorbereitung und die gewünschte Flächenabdeckung werden vor einem Termin festgelegt.' },
      ],
    },
    preparation: {
      layout: 'stacked',
      title: 'Erst die Fläche. Dann das Finish.',
      notice: 'Folierung behebt keine Lackschäden. Haftung und spätere Entfernung hängen auch vom Zustand des Untergrunds ab.',
      steps: [
        {
          title: 'Wunsch beschreiben',
          text: 'Fahrzeug und betroffene Teile nennen. Bilder eines gewünschten Farbtons dienen als Orientierung, nicht als verbindliches Muster.',
        },
        { title: 'Zustand besprechen', text: 'Nachlackierungen, Steinschläge und bestehende Beschichtungen bitte vorab mitteilen.' },
        {
          title: 'Material und Termin festlegen',
          text: 'Geeignete Folie, Pflegehinweise und Zeitbedarf werden nach Prüfung des Vorhabens abgestimmt.',
        },
      ],
    },
    faqs: [
      {
        question: 'Kann über Kratzer foliert werden?',
        answer: 'Schäden können sich durch die Folie abzeichnen oder die Haftung beeinflussen. Der Untergrund muss vorab beurteilt werden.',
      },
      {
        question: 'Ist die Folie rückstandsfrei entfernbar?',
        answer: 'Das lässt sich nicht pauschal garantieren. Lackzustand, Material, Alter und Nutzung spielen dabei eine Rolle.',
      },
      {
        question: 'Wie pflege ich eine folierte Fläche?',
        answer:
          'Die Pflege richtet sich nach dem verwendeten Material und Finish. Passende Hinweise werden für die vereinbarte Folie besprochen.',
      },
    ],
    related: 'fahrzeugaufbereitung',
    request: {
      title: 'Eine Idee im Kopf?\nMachen wir sie konkret.',
      text: 'Senden Sie uns Ihr Fahrzeugmodell und die gewünschte Veränderung. Wir klären, was sich umsetzen lässt.',
    },
  },
  {
    slug: 'autoglas',
    title: 'Autoglas',
    shortTitle: 'Autoglas',
    teaser: 'Glasschäden beurteilen und versorgen.',
    icon: 'glass',
    metaDescription:
      'Autoglas bei der PKW Schmiede: Steinschlag oder Riss prüfen lassen und Reparatur oder Austausch passend zu Fahrzeug, Scheibenausstattung und Assistenzsystemen abstimmen.',
    image: 'autoglas',
    banner: {
      layout: 'overlay',
      title: 'Klare Sicht.\nKlare Entscheidung.',
      intro: 'Steinschlag oder Riss: Schadenstelle prüfen lassen und Reparatur oder Austausch passend zum Fahrzeug abstimmen.',
      centered: 'always',
      narrowIntro: true,
      narrowShade: true,
      mobile: { title: 'Autoglas', subtitle: 'Klare Sicht. Klare Entscheidung.' },
    },
    scope: {
      kicker: 'Glas braucht eine genaue Beurteilung',
      title: 'Reparieren, wenn es zulässig und sinnvoll ist.',
      text: 'Lage, Größe und Art des Schadens entscheiden über die Möglichkeiten. Bei einem Austausch sind außerdem die Ausstattung der Scheibe und mögliche Assistenzsysteme zu berücksichtigen.',
      layout: 'rows',
      tone: 'light',
      items: [
        {
          title: 'Schaden einordnen',
          text: 'Wo sitzt die Stelle und hat sich bereits ein Riss gebildet? Eine Besichtigung schafft die nötige Grundlage.',
        },
        { title: 'Reparatur oder Austausch', text: 'Wir besprechen den geeigneten Weg und stimmen den konkreten Arbeitsumfang vorab ab.' },
        {
          title: 'Ausstattung berücksichtigen',
          text: 'Kamera, Sensoren, Heizung oder weitere Funktionen bei der Anfrage nennen. Nötige Folgeschritte werden mitgeklärt.',
        },
      ],
    },
    preparation: {
      layout: 'aside',
      title: 'Nicht größer werden lassen.',
      notice:
        'Bei beeinträchtigter Sicht oder einem Riss die sichere Nutzung des Fahrzeugs klären. Eine Anfrage ersetzt keine Beurteilung der Verkehrssicherheit.',
      steps: [
        { title: 'Schaden fotografieren', text: 'Eine Nahaufnahme und ein Bild der gesamten Scheibe helfen, Lage und Verlauf zu erkennen.' },
        {
          title: 'Fahrzeugausstattung nennen',
          text: 'Fahrzeugdaten und bekannte Scheibenfunktionen angeben. Bei Kameraausstattung den möglichen Kalibrierbedarf mit abklären.',
        },
        {
          title: 'Versorgung abstimmen',
          text: 'Machbarkeit, Materialverfügbarkeit und Termin werden geprüft. Hinweise zur Nutzung nach der Arbeit beachten.',
        },
      ],
    },
    faqs: [
      {
        question: 'Kann jeder Steinschlag repariert werden?',
        answer: 'Nein. Lage, Ausmaß und Art des Schadens sowie geltende Vorgaben begrenzen die Reparaturmöglichkeit.',
      },
      {
        question: 'Übernimmt meine Versicherung die Kosten?',
        answer: 'Das hängt von Ihrem Vertrag und der Schadenart ab. Deckung und Abwicklung bitte direkt mit dem Versicherer klären.',
      },
      {
        question: 'Kann ich nach einem Scheibentausch sofort fahren?',
        answer:
          'Erforderliche Standzeiten richten sich unter anderem nach Klebesystem und Bedingungen. Die konkrete Freigabe ist maßgeblich.',
      },
    ],
    related: 'fahrzeugaufbereitung',
    request: {
      title: 'Eine Spur im Glas?\nJetzt einordnen lassen.',
      text: 'Beschreiben Sie die Stelle und Ihr Fahrzeug. Wir klären die passende Versorgung und einen möglichen Termin.',
    },
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const servicePath = (slug: ServiceSlug) => `/leistungen/${slug}`;

/** Terminanfrage mit vorausgewählter Leistung im Formular. */
export const requestPath = (slug?: ServiceSlug) => (slug ? `/kontakt?leistung=${slug}#anfrage` : '/kontakt#anfrage');

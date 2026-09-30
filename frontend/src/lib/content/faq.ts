import type { FaqCategory, FaqItem } from '@/types/faq';
import type { ServiceSlug } from '@/types/service';

export const faqCategories: FaqCategory[] = [
  { id: 'allgemein', title: 'Allgemein' },
  { id: 'termine', title: 'Termine & Ablauf' },
  { id: 'kosten', title: 'Kosten & Zahlung' },
  { id: 'wartung', title: 'Wartung & Reparatur' },
  { id: 'reifen', title: 'Reifen & Räder' },
  { id: 'pruefung', title: 'TÜV & Prüfung' },
  { id: 'pflege', title: 'Aufbereitung & Glas' },
];

export const faqs: FaqItem[] = [
  // ── Allgemein ──────────────────────────────────────────────
  {
    category: 'allgemein',
    featured: true,
    question: 'Reparieren Sie Fahrzeuge aller Marken?',
    answer:
      'Ja. Wir betreuen Pkw aller gängigen Marken und Modelle – vom Kleinwagen über den Familienkombi bis zum SUV. Für Diagnose und Wartung nutzen wir die Herstellerdaten und -vorgaben des jeweiligen Fahrzeugs.',
  },
  {
    category: 'allgemein',
    featured: true,
    services: ['instandhaltung', 'oelwechsel'],
    question: 'Verliere ich meine Herstellergarantie, wenn ich nicht zur Vertragswerkstatt fahre?',
    answer:
      'Nein. Nach der EU-Gruppenfreistellungsverordnung (Kfz-GVO) dürfen Wartungen und Inspektionen auch in freien Werkstätten durchgeführt werden. Die Herstellergarantie bleibt erhalten, solange nach Herstellervorgaben gearbeitet und geeignete Teile verwendet werden. Wir dokumentieren alle Arbeiten im Serviceheft.',
  },
  {
    category: 'allgemein',
    question: 'Verwenden Sie Originalteile?',
    answer:
      'Wir verbauen Originalteile oder Teile in gleichwertiger Qualität (Erstausrüster- bzw. Identteile). Auf Wunsch besprechen wir mit Ihnen vorab, welche Variante für Ihr Fahrzeug und Budget sinnvoll ist.',
  },
  {
    category: 'allgemein',
    question: 'Kann ich Ersatzteile selbst mitbringen?',
    answer:
      'Sprechen Sie uns gerne vorher an. Bei mitgebrachten Teilen können wir keine Gewährleistung für das Teil selbst übernehmen und müssen Passform und Qualität vorab prüfen. In vielen Fällen ist die Beschaffung über uns am Ende die sicherere und nicht teurere Lösung.',
  },
  {
    category: 'allgemein',
    question: 'Bieten Sie auch Arbeiten an Elektro- und Hybridfahrzeugen an?',
    answer:
      'Viele Arbeiten wie Reifen, Bremsen, Fahrwerk, Achsvermessung, Klimaservice oder Aufbereitung sind auch bei E- und Hybridfahrzeugen problemlos möglich. Für Arbeiten am Hochvoltsystem sprechen Sie uns bitte vorab an – wir klären dann, was wir für Sie übernehmen können.',
  },

  // ── Termine & Ablauf ───────────────────────────────────────
  {
    category: 'termine',
    featured: true,
    question: 'Wie vereinbare ich am schnellsten einen Termin?',
    answer:
      'Am schnellsten per WhatsApp oder Telefon. Alternativ nutzen Sie das Kontaktformular auf dieser Website – nennen Sie uns kurz Fahrzeug, gewünschte Leistung und Wunschtermin, wir melden uns zeitnah mit einem Terminvorschlag zurück.',
  },
  {
    category: 'termine',
    question: 'Kann ich auf mein Fahrzeug warten?',
    answer:
      'Bei kürzeren Arbeiten wie Ölwechsel, Radwechsel oder einer Steinschlagreparatur ist das nach Absprache in der Regel möglich. Bei umfangreicheren Arbeiten planen wir die Abholung mit Ihnen gemeinsam, damit Sie keine Zeit verlieren.',
  },
  {
    category: 'termine',
    question: 'Wie lange dauert eine Inspektion?',
    answer:
      'Das hängt vom Fahrzeug und vom fälligen Umfang ab. Eine kleine Inspektion ist meist innerhalb weniger Stunden erledigt, eine große Inspektion mit Zahnriemenwechsel kann einen Werktag beanspruchen. Bei der Terminvereinbarung nennen wir Ihnen eine realistische Einschätzung.',
  },
  {
    category: 'termine',
    question: 'Was passiert, wenn während der Arbeiten weitere Mängel entdeckt werden?',
    answer:
      'Wir melden uns bei Ihnen, erklären den Befund – auf Wunsch mit Foto per WhatsApp – und nennen die Kosten. Zusätzliche Arbeiten führen wir ausschließlich nach Ihrer ausdrücklichen Freigabe durch.',
  },
  {
    category: 'termine',
    question: 'Welche Unterlagen soll ich zum Termin mitbringen?',
    answer:
      'Idealerweise Fahrzeugschein (Zulassungsbescheinigung Teil I), Serviceheft bzw. Zugang zum digitalen Serviceheft sowie – falls vorhanden – Radschlossadapter und Unterlagen zu früheren Reparaturen.',
  },

  // ── Kosten & Zahlung ───────────────────────────────────────
  {
    category: 'kosten',
    featured: true,
    question: 'Bekomme ich vorab einen Kostenvoranschlag?',
    answer:
      'Ja. Nach der Diagnose erhalten Sie einen transparenten Kostenvoranschlag mit Teilen und Arbeitszeit. Erst wenn Sie zustimmen, beginnen wir mit der Reparatur – ohne versteckte Positionen.',
  },
  {
    category: 'kosten',
    question: 'Ist die Fehlerdiagnose kostenpflichtig?',
    answer:
      'Eine Diagnose erfordert Messtechnik und Arbeitszeit und wird daher nach Aufwand berechnet. Den Umfang und die zu erwartenden Kosten stimmen wir vorher mit Ihnen ab.',
  },
  {
    category: 'kosten',
    question: 'Welche Zahlungsmöglichkeiten gibt es?',
    answer: 'Die aktuell verfügbaren Zahlungsarten nennen wir Ihnen gerne bei der Terminvereinbarung: XXX.',
  },
  {
    category: 'kosten',
    services: ['smart-repair-glas'],
    question: 'Übernimmt die Versicherung die Kosten für eine Steinschlagreparatur?',
    answer:
      'Glasschäden sind in der Regel über die Teilkasko abgesichert. Viele Versicherer übernehmen die Reparatur eines Steinschlags häufig sogar ohne Selbstbeteiligung, weil sie deutlich günstiger ist als ein Scheibentausch. Die genauen Bedingungen hängen von Ihrem Tarif ab – wir unterstützen Sie gerne bei der Abwicklung.',
  },

  // ── Wartung & Reparatur ────────────────────────────────────
  {
    category: 'wartung',
    featured: true,
    services: ['oelwechsel'],
    question: 'Wie oft sollte ich das Motoröl wechseln?',
    answer:
      'Das Intervall legt der Hersteller fest – je nach Fahrzeug und Serviceart meist nach einer bestimmten Laufleistung oder spätestens nach ein bis zwei Jahren. Bei überwiegendem Kurzstreckenbetrieb, Anhängerbetrieb oder hoher Belastung empfiehlt sich ein früherer Wechsel.',
  },
  {
    category: 'wartung',
    services: ['oelwechsel'],
    question: 'Welches Motoröl ist das richtige für mein Auto?',
    answer:
      'Maßgeblich ist die Herstellerfreigabe (z. B. VW 504 00, MB 229.52 oder BMW Longlife-04), nicht nur die Viskosität wie 5W-30. Ein falsches Öl kann Motor und Abgasnachbehandlung schaden. Wir ermitteln die passende Spezifikation anhand Ihrer Fahrzeugdaten.',
  },
  {
    category: 'wartung',
    services: ['instandhaltung'],
    question: 'Was ist der Unterschied zwischen Inspektion und Wartung?',
    answer:
      'Umgangssprachlich wird beides oft gleich verwendet. Die Inspektion ist der vom Hersteller vorgeschriebene Service mit festgelegtem Prüf- und Wechselumfang. Wartung umfasst darüber hinaus alle Arbeiten, die den Zustand Ihres Fahrzeugs erhalten – etwa den Wechsel von Verschleißteilen.',
  },
  {
    category: 'wartung',
    services: ['instandhaltung', 'reparaturen'],
    question: 'Wann muss der Zahnriemen gewechselt werden?',
    answer:
      'Der Hersteller gibt ein Intervall nach Kilometern und Jahren vor – es gilt, was zuerst erreicht wird. Ein gerissener Zahnriemen kann schwere Motorschäden verursachen. Wir prüfen anhand Ihrer Fahrzeugdaten, wann der Wechsel fällig ist.',
  },
  {
    category: 'wartung',
    services: ['reparaturen'],
    question: 'Meine Motorkontrollleuchte leuchtet – kann ich weiterfahren?',
    answer:
      'Leuchtet sie dauerhaft gelb, sollten Sie das Fahrzeug zeitnah auslesen lassen. Blinkt sie oder zeigt das Fahrzeug Leistungsverlust, fahren Sie möglichst nicht weiter, um Folgeschäden – etwa am Katalysator – zu vermeiden. Rufen Sie uns an, wir beraten Sie.',
  },
  {
    category: 'wartung',
    services: ['reparaturen'],
    question: 'Woran erkenne ich, dass meine Bremsen gewechselt werden müssen?',
    answer:
      'Typische Anzeichen sind Quietschen oder Schleifen, ein längerer Bremsweg, ein pulsierendes Pedal oder die Verschleißwarnleuchte. Spätestens dann sollten Beläge und Scheiben geprüft werden. Die Bremsflüssigkeit wird zusätzlich nach Herstellerintervall erneuert.',
  },

  // ── Reifen & Räder ─────────────────────────────────────────
  {
    category: 'reifen',
    featured: true,
    services: ['reifenwechsel'],
    question: 'Wann sollte ich auf Winter- bzw. Sommerreifen wechseln?',
    answer:
      'Als Faustregel gilt „von O bis O“ – von Oktober bis Ostern Winterreifen. In Deutschland gilt zudem eine situative Winterreifenpflicht: Bei Glatteis, Schnee oder Reifglätte sind Winter- oder Ganzjahresreifen mit Alpine-Symbol vorgeschrieben.',
  },
  {
    category: 'reifen',
    services: ['reifenwechsel'],
    question: 'Reichen Reifen mit M+S-Kennzeichnung noch als Winterreifen?',
    answer:
      'Nein. Seit dem 1. Oktober 2024 gelten nur noch Reifen mit Alpine-Symbol (Bergpiktogramm mit Schneeflocke) als wintertauglich im Sinne der Straßenverkehrsordnung. Reifen, die ausschließlich M+S tragen, erfüllen die Winterreifenpflicht nicht mehr.',
  },
  {
    category: 'reifen',
    services: ['reifenwechsel'],
    question: 'Wie viel Profil muss mein Reifen mindestens haben?',
    answer:
      'Gesetzlich vorgeschrieben sind 1,6 mm. Aus Sicherheitsgründen empfehlen Experten bei Sommerreifen mindestens 3 mm und bei Winterreifen mindestens 4 mm – darunter verlängert sich der Bremsweg, insbesondere auf nasser oder winterlicher Fahrbahn, deutlich.',
  },
  {
    category: 'reifen',
    services: ['reifenwechsel'],
    question: 'Wie alt dürfen Reifen sein?',
    answer:
      'Eine gesetzliche Altersgrenze gibt es für Pkw nicht. Gummi altert jedoch auch ohne Nutzung und verliert an Elastizität. Das Herstellungsdatum steht in der DOT-Nummer (z. B. „3421“ = 34. Woche 2021). Wir prüfen Alter und Zustand bei jedem Wechsel und beraten Sie ehrlich.',
  },
  {
    category: 'reifen',
    services: ['reifenlagerung'],
    question: 'Wie läuft die Reifeneinlagerung bei Ihnen ab?',
    answer:
      'Beim Radwechsel übernehmen wir Ihre abmontierten Räder, reinigen und prüfen sie, kennzeichnen sie eindeutig und lagern sie trocken, kühl und dunkel. Zum nächsten Wechseltermin stehen sie vorbereitet bereit.',
  },
  {
    category: 'reifen',
    services: ['reifenlagerung'],
    question: 'Muss ich meine Räder vor der Einlagerung selbst reinigen?',
    answer:
      'Nein, das übernehmen wir. Die Reinigung gehört zu unserer Einlagerung – so können wir Profil, Flanken und Felgen zuverlässig prüfen und Ihnen mögliche Schäden direkt mitteilen.',
  },
  {
    category: 'reifen',
    services: ['achsvermessung'],
    question: 'Muss nach dem Reifenwechsel eine Achsvermessung gemacht werden?',
    answer:
      'Nicht zwingend. Empfehlenswert ist sie beim Aufziehen neuer Reifen, nach Fahrwerksarbeiten, nach Bordstein- oder Schlaglochkontakt oder wenn das Fahrzeug zur Seite zieht bzw. das Lenkrad schief steht.',
  },
  {
    category: 'reifen',
    services: ['achsvermessung'],
    question: 'Wie lange dauert eine Achsvermessung?',
    answer:
      'Eine Vermessung inklusive Einstellung dauert in der Regel etwa eine Stunde. Sind festgerostete Einstellelemente oder verschlissene Fahrwerksteile im Spiel, sprechen wir das weitere Vorgehen vorab mit Ihnen ab.',
  },

  // ── TÜV & Prüfung ──────────────────────────────────────────
  {
    category: 'pruefung',
    featured: true,
    services: ['tuev'],
    question: 'Führen Sie die Hauptuntersuchung (TÜV) selbst durch?',
    answer:
      'Die Hauptuntersuchung wird von einem Sachverständigen einer amtlich anerkannten Prüforganisation durchgeführt. Wir übernehmen alles drumherum: Vorab-Check, Mängelbeseitigung, Terminorganisation und Vorführung – Sie bekommen Ihr Fahrzeug mit Plakette zurück.',
  },
  {
    category: 'pruefung',
    services: ['tuev'],
    question: 'Wie oft muss mein Auto zur HU?',
    answer:
      'Pkw müssen alle 24 Monate zur Hauptuntersuchung. Bei Neufahrzeugen ist die erste HU nach 36 Monaten fällig. Den Termin erkennen Sie an der Plakette auf dem hinteren Kennzeichen: Die Zahl oben zeigt den Monat, die Farbe das Jahr.',
  },
  {
    category: 'pruefung',
    services: ['tuev'],
    question: 'Was passiert, wenn ich den TÜV-Termin überzogen habe?',
    answer:
      'Bei einer Überziehung von mehr als zwei Monaten wird eine erweiterte Prüfung mit höherer Gebühr fällig, zusätzlich drohen Verwarn- bzw. Bußgelder. Kommen Sie am besten rechtzeitig vor Ablauf zu uns – wir bereiten alles vor.',
  },
  {
    category: 'pruefung',
    services: ['tuev'],
    question: 'Was sind die häufigsten Gründe, durch die HU zu fallen?',
    answer:
      'Besonders häufig werden Mängel an Beleuchtung, Bremsen, Reifen, Achsaufhängung und Auspuffanlage festgestellt. Genau diese Punkte prüfen wir im Vorab-Check und beheben sie nach Ihrer Freigabe.',
  },

  // ── Aufbereitung & Glas ────────────────────────────────────
  {
    category: 'pflege',
    services: ['smart-repair-glas'],
    question: 'Wann kann ein Steinschlag repariert werden?',
    answer:
      'Als Faustregel: Der Schaden ist kleiner als eine 2-Euro-Münze, liegt mindestens etwa 10 cm vom Scheibenrand entfernt und nicht im direkten Sichtfeld des Fahrers. Hat sich bereits ein längerer Riss gebildet, ist in der Regel ein Scheibentausch notwendig.',
  },
  {
    category: 'pflege',
    services: ['smart-repair-glas'],
    question: 'Ist die reparierte Stelle danach noch sichtbar?',
    answer:
      'Je nach Art und Alter des Schadens bleibt oft eine leichte Kontur erkennbar, die optisch jedoch deutlich zurückgeht. Entscheidend ist: Die Bruchstelle ist versiegelt, stabilisiert und kann sich nicht weiter ausbreiten.',
  },
  {
    category: 'pflege',
    featured: true,
    services: ['aufbereitung'],
    question: 'Lohnt sich eine Aufbereitung vor dem Verkauf?',
    answer:
      'In den meisten Fällen ja. Ein gepflegter Innenraum und glänzender Lack prägen den ersten Eindruck und die Preisverhandlung erheblich. Auch vor einer Leasing-Rückgabe kann eine Aufbereitung helfen, Nachberechnungen für Verschmutzungen zu vermeiden.',
  },
  {
    category: 'pflege',
    services: ['aufbereitung'],
    question: 'Wie lange hält eine Lackversiegelung?',
    answer:
      'Das hängt vom Produkt, der Pflege und der Beanspruchung ab – von einigen Monaten bei Wachsen bis zu deutlich längeren Zeiträumen bei hochwertigen Versiegelungen. Wir beraten Sie, welche Lösung zu Ihrem Fahrzeug und Nutzungsprofil passt.',
  },
  {
    category: 'pflege',
    services: ['aufbereitung'],
    question: 'Wie lange dauert eine komplette Fahrzeugaufbereitung?',
    answer:
      'Eine Komplettaufbereitung mit Politur ist Handarbeit und nimmt je nach Fahrzeuggröße und Zustand in der Regel einen ganzen Tag in Anspruch. Den genauen Zeitrahmen nennen wir Ihnen nach der Zustandsanalyse.',
  },
];

export const featuredFaqs = faqs.filter((f) => f.featured);

export function getFaqsForService(slug: ServiceSlug): FaqItem[] {
  return faqs.filter((f) => f.services?.includes(slug));
}

export function getFaqsByCategory() {
  return faqCategories.map((category) => ({
    ...category,
    items: faqs.filter((f) => f.category === category.id),
  }));
}

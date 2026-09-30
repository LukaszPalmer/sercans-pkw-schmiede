import type { BlogPost } from '@/types/blog';

/** Ratgeber-Artikel – sortiert nach Veröffentlichungsdatum (neueste zuerst). */
const posts: BlogPost[] = [
  {
    slug: 'winterreifen-alpine-symbol-was-jetzt-gilt',
    title: 'Winterreifen 2026: Warum nur noch das Alpine-Symbol zählt',
    excerpt:
      'M+S reicht nicht mehr: Seit Oktober 2024 gelten nur Reifen mit Bergpiktogramm und Schneeflocke als Winterreifen. Was das für Sie bedeutet – und woran Sie gute Reifen erkennen.',
    category: 'Reifen',
    image: 'tire-tread',
    publishedAt: '2026-09-22',
    readingMinutes: 5,
    service: 'reifenwechsel',
    body: [
      {
        type: 'p',
        text: 'Mit den ersten kalten Nächten beginnt die Wechselsaison. Viele Autofahrerinnen und Autofahrer holen dann die Räder aus dem Keller, die schon einige Winter hinter sich haben – und erleben eine Überraschung: Nicht jeder vermeintliche Winterreifen ist heute noch einer.',
      },
      { type: 'h2', id: 'rechtslage', text: 'Die Rechtslage: situative Winterreifenpflicht' },
      {
        type: 'p',
        text: 'In Deutschland gibt es keine feste Winterreifenpflicht nach Datum. Es gilt eine situative Pflicht: Bei Glatteis, Schneeglätte, Schneematsch, Eis- oder Reifglätte dürfen Sie nur mit wintertauglicher Bereifung fahren. Wer dagegen verstößt, riskiert ein Bußgeld und einen Punkt in Flensburg – und im Schadensfall Ärger mit der Versicherung.',
      },
      { type: 'h2', id: 'alpine-symbol', text: 'M+S reicht nicht mehr – das Alpine-Symbol ist Pflicht' },
      {
        type: 'p',
        text: 'Bis Ende September 2024 galt eine Übergangsfrist für ältere Reifen mit reiner M+S-Kennzeichnung. Seit dem 1. Oktober 2024 ist sie abgelaufen. Als wintertauglich gelten jetzt ausschließlich Reifen mit dem Alpine-Symbol – einem Bergpiktogramm mit Schneeflocke (3PMSF). Nur diese Reifen haben einen standardisierten Test auf Schnee bestanden.',
      },
      {
        type: 'tip',
        title: 'Schnell-Check',
        text: 'Schauen Sie auf die Reifenflanke: Finden Sie dort nur „M+S“, aber kein Bergsymbol mit Schneeflocke, erfüllt der Reifen die Winterreifenpflicht nicht mehr.',
      },
      { type: 'h2', id: 'profil', text: 'Profiltiefe: 1,6 mm sind nur das Minimum' },
      {
        type: 'p',
        text: 'Gesetzlich vorgeschrieben sind 1,6 mm Restprofil. Für Winterreifen ist das viel zu wenig: Die Lamellen, die sich im Schnee verzahnen, verlieren mit abnehmender Profiltiefe ihre Wirkung. Experten empfehlen deshalb, Winterreifen spätestens bei 4 mm zu ersetzen.',
      },
      {
        type: 'ul',
        items: [
          'Unter 4 mm verschlechtern sich Traktion und Bremsweg auf Schnee deutlich.',
          'Messen Sie an mehreren Stellen – ungleichmäßiger Abrieb deutet auf falsche Spurwerte hin.',
          'Die Profiltiefe prüfen wir bei jedem Wechsel kostenlos mit.',
        ],
      },
      { type: 'h2', id: 'alter', text: 'Reifenalter: die DOT-Nummer verrät es' },
      {
        type: 'p',
        text: 'Gummi altert – auch wenn der Reifen kaum gefahren wurde. Die Mischung verhärtet und verliert gerade bei Kälte an Grip. Das Herstellungsdatum finden Sie in der DOT-Nummer auf der Flanke: Die letzten vier Ziffern stehen für Woche und Jahr, „3421“ bedeutet also 34. Kalenderwoche 2021.',
      },
      { type: 'h2', id: 'ganzjahr', text: 'Und Ganzjahresreifen?' },
      {
        type: 'p',
        text: 'Moderne Ganzjahresreifen mit Alpine-Symbol erfüllen die gesetzlichen Anforderungen und sind für Vielfahrer in Regionen mit milden Wintern eine bequeme Alternative. Wer häufig in schneereichen Regionen unterwegs ist oder sportlich fährt, ist mit spezialisierten Sommer- und Winterreifen meist besser bedient. Wir beraten Sie gerne individuell.',
      },
    ],
  },
  {
    slug: 'oelwechsel-intervall-freigabe-richtiges-motoroel',
    title: 'Ölwechsel richtig gemacht: Intervall, Freigabe und das passende Öl',
    excerpt:
      '5W-30 ist nicht gleich 5W-30. Warum die Herstellerfreigabe wichtiger ist als die Viskosität, wann das Öl wirklich raus muss und was Kurzstrecken damit zu tun haben.',
    category: 'Wartung',
    image: 'engine-service',
    publishedAt: '2026-09-08',
    readingMinutes: 4,
    service: 'oelwechsel',
    body: [
      {
        type: 'p',
        text: 'Motoröl ist das Blut des Motors: Es schmiert, kühlt, reinigt, dichtet ab und schützt vor Korrosion. Mit jedem Kilometer nutzt es sich ab – Additive werden verbraucht, Ruß und Kraftstoffreste reichern sich an. Ein rechtzeitiger Ölwechsel gehört deshalb zu den wirkungsvollsten Maßnahmen für einen langlebigen Motor.',
      },
      { type: 'h2', id: 'intervall', text: 'Wann ist der Ölwechsel fällig?' },
      {
        type: 'p',
        text: 'Das Intervall bestimmt der Hersteller. Moderne Fahrzeuge berechnen es teilweise flexibel anhand der Fahrweise und zeigen den Termin im Display an. Unabhängig davon gilt: Es zählt, was zuerst eintritt – Kilometerstand oder Zeit.',
      },
      {
        type: 'ul',
        items: [
          'Viele Kurzstrecken belasten das Öl stark, weil der Motor selten warm wird.',
          'Anhängerbetrieb, Stop-and-go und hohe Temperaturen verkürzen die Lebensdauer.',
          'Bei unklarer Historie – etwa nach einem Gebrauchtwagenkauf – lieber früher wechseln.',
        ],
      },
      { type: 'h2', id: 'freigabe', text: 'Freigabe schlägt Viskosität' },
      {
        type: 'p',
        text: 'Die Viskositätsangabe wie 5W-30 beschreibt nur das Fließverhalten bei Kälte und Wärme. Ob ein Öl zu Ihrem Motor passt, entscheidet die Herstellerfreigabe – etwa VW 504 00, MB 229.52 oder BMW Longlife-04. Sie garantiert, dass das Öl mit Motor, Turbolader und Abgasnachbehandlung wie Partikelfilter harmoniert.',
      },
      {
        type: 'tip',
        title: 'Achtung beim Nachfüllen',
        text: 'Auch beim Nachfüllen zwischen zwei Wechseln sollte ein Öl mit der passenden Freigabe verwendet werden. Die Spezifikation finden Sie in der Betriebsanleitung – oder fragen Sie uns.',
      },
      { type: 'h2', id: 'ablauf', text: 'So läuft ein Ölwechsel bei uns ab' },
      {
        type: 'ol',
        items: [
          'Ermittlung von Freigabe, Viskosität und Füllmenge anhand Ihrer Fahrzeugdaten.',
          'Vollständiges Ablassen des Altöls und Erneuerung des Ölfilters samt Dichtungen.',
          'Befüllen mit neuem Öl, Kontrolle von Füllstand und Dichtheit.',
          'Rücksetzen der Serviceanzeige, Eintrag im Serviceheft, fachgerechte Altöl-Entsorgung.',
        ],
      },
      {
        type: 'p',
        text: 'Ein Ölwechsel ist in kurzer Zeit erledigt – und kostet nur einen Bruchteil dessen, was ein Motorschaden durch überaltertes Öl verursachen kann.',
      },
    ],
  },
  {
    slug: 'tuev-checkliste-hauptuntersuchung-bestehen',
    title: 'TÜV-Checkliste: So besteht Ihr Auto die Hauptuntersuchung',
    excerpt:
      'Beleuchtung, Bremsen, Reifen: Diese Punkte führen am häufigsten zu Mängeln. Mit unserer Checkliste gehen Sie gut vorbereitet zur HU – und sparen sich die Nachprüfung.',
    category: 'Prüfung',
    image: 'led-headlight',
    publishedAt: '2026-08-25',
    readingMinutes: 5,
    service: 'tuev',
    body: [
      {
        type: 'p',
        text: 'Alle zwei Jahre steht sie an – und trotzdem kommt die Hauptuntersuchung für viele überraschend. Dabei lassen sich die meisten Mängel mit etwas Vorbereitung vermeiden. Wir zeigen Ihnen, worauf es ankommt.',
      },
      { type: 'h2', id: 'fristen', text: 'Fristen im Blick behalten' },
      {
        type: 'p',
        text: 'Pkw müssen alle 24 Monate zur HU, Neuwagen erstmals nach 36 Monaten. Die Plakette am hinteren Kennzeichen zeigt den Fälligkeitsmonat oben an, die Farbe steht für das Jahr. Wer mehr als zwei Monate überzieht, muss mit einer erweiterten Prüfung und höheren Gebühren rechnen – zusätzlich drohen Verwarn- bzw. Bußgelder.',
      },
      { type: 'h2', id: 'checkliste', text: 'Die Checkliste für zu Hause' },
      {
        type: 'ul',
        items: [
          'Beleuchtung: Abblend-, Fern-, Brems-, Rück- und Kennzeichenlicht sowie Blinker prüfen.',
          'Reifen: mindestens 1,6 mm Profil, keine Beulen, Risse oder Schnitte.',
          'Scheiben: keine Risse oder Steinschläge im Sichtfeld, funktionierende Wischer.',
          'Warnleuchten: Airbag-, ABS- oder Motorkontrollleuchte dürfen nicht dauerhaft leuchten.',
          'Hupe, Spiegel, Sicherheitsgurte: funktionsfähig und unbeschädigt.',
          'Verbandkasten (nicht abgelaufen), Warndreieck und Warnweste an Bord.',
        ],
      },
      {
        type: 'tip',
        title: 'Häufigster Mangel: das Licht',
        text: 'Defekte Leuchtmittel und falsch eingestellte Scheinwerfer gehören zu den Klassikern bei der HU. Ein kurzer Rundgang um das Fahrzeug – am besten mit einer zweiten Person – spart oft die Nachprüfung.',
      },
      { type: 'h2', id: 'profi', text: 'Was nur die Werkstatt sieht' },
      {
        type: 'p',
        text: 'Viele sicherheitsrelevante Bauteile liegen unter dem Fahrzeug: Bremsleitungen, Achsgelenke, Manschetten, Stoßdämpfer und die Abgasanlage. Diese Punkte prüfen wir im Vorab-Check auf der Hebebühne. Gefundene Mängel beheben wir nach Ihrer Freigabe – bevor der Prüfer sie findet.',
      },
      { type: 'h2', id: 'maengel', text: 'Durchgefallen – was nun?' },
      {
        type: 'p',
        text: 'Bei geringen Mängeln erhalten Sie die Plakette, müssen die Mängel aber unverzüglich beheben. Bei erheblichen Mängeln gibt es keine Plakette; innerhalb eines Monats ist eine Nachprüfung erforderlich. Mit unserem TÜV-Service organisieren wir Reparatur und Wiedervorführung aus einer Hand.',
      },
    ],
  },
  {
    slug: 'steinschlag-reparieren-oder-scheibe-tauschen',
    title: 'Steinschlag in der Frontscheibe: Reparieren oder tauschen?',
    excerpt:
      'Ein kleiner Einschlag kann über Nacht zum langen Riss werden. Wann eine Smart-Repair-Reparatur reicht, was die Versicherung zahlt und wie Sie sofort richtig reagieren.',
    category: 'Glas',
    image: 'windshield-crack',
    publishedAt: '2026-08-11',
    readingMinutes: 4,
    service: 'smart-repair-glas',
    body: [
      {
        type: 'p',
        text: 'Ein kurzes „Klack“ auf der Autobahn – und schon ist er da: der Steinschlag. Was zunächst wie ein kleiner Punkt aussieht, ist eine Schwachstelle in der Verbundglasscheibe. Temperaturwechsel, Schlaglöcher oder die Heizung können daraus in kürzester Zeit einen Riss machen.',
      },
      { type: 'h2', id: 'sofort', text: 'Was Sie sofort tun sollten' },
      {
        type: 'ol',
        items: [
          'Die Stelle mit transparentem Klebeband oder einer Steinschlagfolie abdecken.',
          'Starke Temperaturunterschiede vermeiden – keine heiße Gebläseluft direkt auf die kalte Scheibe.',
          'Zeitnah einen Termin vereinbaren: Je frischer der Schaden, desto besser das Ergebnis.',
        ],
      },
      { type: 'h2', id: 'faustregel', text: 'Die Faustregel: Wann reparieren möglich ist' },
      {
        type: 'ul',
        items: [
          'Der Schaden ist kleiner als eine 2-Euro-Münze.',
          'Er liegt mindestens etwa 10 cm vom Scheibenrand entfernt.',
          'Er befindet sich nicht im direkten Sichtfeld des Fahrers.',
          'Es hat sich noch kein längerer Riss gebildet.',
        ],
      },
      { type: 'h2', id: 'ablauf', text: 'So funktioniert Smart Repair' },
      {
        type: 'p',
        text: 'Die Bruchstelle wird gereinigt und unter Vakuum von Luft und Feuchtigkeit befreit. Anschließend wird ein spezielles Harz injiziert, das unter UV-Licht aushärtet. Zum Schluss wird die Oberfläche plan poliert. Die Reparatur dauert in der Regel weniger als eine Stunde – die Scheibe bleibt erhalten.',
      },
      {
        type: 'tip',
        title: 'Versicherung',
        text: 'Glasschäden sind meist über die Teilkasko versichert. Viele Versicherer übernehmen die Reparatur häufig ohne Selbstbeteiligung, weil sie deutlich günstiger ist als ein Scheibentausch. Prüfen Sie die Bedingungen Ihres Tarifs.',
      },
      { type: 'h2', id: 'tausch', text: 'Wenn doch getauscht werden muss' },
      {
        type: 'p',
        text: 'Ist die Scheibe nicht mehr reparabel, tauschen wir sie fachgerecht. Bei vielen modernen Fahrzeugen sitzt hinter der Frontscheibe eine Kamera für Assistenzsysteme wie Spurhalte- oder Notbremsassistent. Nach dem Tausch muss sie geprüft und gegebenenfalls kalibriert werden, damit die Systeme zuverlässig arbeiten.',
      },
    ],
  },
  {
    slug: 'achsvermessung-anzeichen-fahrwerk',
    title: 'Achsvermessung: 5 Anzeichen, dass Ihr Fahrwerk nicht mehr stimmt',
    excerpt:
      'Zieht Ihr Auto nach rechts? Steht das Lenkrad schief? Diese fünf Warnsignale deuten auf eine verstellte Fahrwerksgeometrie hin – und kosten bares Geld.',
    category: 'Fahrwerk',
    image: 'alloy-wheel',
    publishedAt: '2026-07-28',
    readingMinutes: 4,
    service: 'achsvermessung',
    body: [
      {
        type: 'p',
        text: 'Die Fahrwerksgeometrie bestimmt, wie Ihre Räder auf der Straße stehen. Schon kleine Abweichungen bei Spur oder Sturz wirken sich auf Fahrverhalten, Reifenverschleiß und Verbrauch aus. Das Tückische: Die Veränderung passiert schleichend.',
      },
      { type: 'h2', id: 'anzeichen', text: 'Die 5 typischen Anzeichen' },
      { type: 'h3', text: '1. Das Fahrzeug zieht zur Seite' },
      {
        type: 'p',
        text: 'Auf gerader, ebener Straße sollte Ihr Fahrzeug ohne Korrektur geradeaus laufen. Zieht es spürbar nach links oder rechts, kann eine verstellte Spur die Ursache sein – ebenso aber ungleicher Reifendruck, den wir vorab ausschließen.',
      },
      { type: 'h3', text: '2. Das Lenkrad steht schief' },
      {
        type: 'p',
        text: 'Steht das Lenkrad bei Geradeausfahrt nicht mittig, stimmen Spurwerte und Lenkradstellung nicht mehr überein. Das ist nicht nur lästig, sondern auch für moderne Assistenzsysteme relevant.',
      },
      { type: 'h3', text: '3. Einseitig abgefahrene Reifen' },
      {
        type: 'p',
        text: 'Ist ein Reifen innen oder außen deutlich stärker abgenutzt, deutet das auf falsche Spur- oder Sturzwerte hin. Ohne Korrektur fressen sich auch neue Reifen schnell wieder ab.',
      },
      { type: 'h3', text: '4. Unruhiges oder schwammiges Fahrgefühl' },
      {
        type: 'p',
        text: 'Wirkt die Lenkung indirekt oder das Fahrzeug in Kurven unruhig, lohnt sich eine Prüfung von Achsgeometrie und Fahrwerksteilen.',
      },
      { type: 'h3', text: '5. Nach Bordstein oder Schlagloch' },
      {
        type: 'p',
        text: 'Ein kräftiger Schlag gegen das Rad kann Fahrwerksteile verbiegen oder die Einstellung verändern – auch wenn äußerlich nichts zu sehen ist.',
      },
      {
        type: 'tip',
        title: 'Unsere Empfehlung',
        text: 'Lassen Sie die Achsen beim Aufziehen neuer Reifen und nach jeder Fahrwerksreparatur vermessen. So schützen Sie Ihre Investition in neue Reifen von Anfang an.',
      },
      { type: 'h2', id: 'ablauf', text: 'Was bei der Vermessung passiert' },
      {
        type: 'p',
        text: 'Wir erfassen mit computergestützter Messtechnik Spur, Sturz, Nachlauf und Spreizung, vergleichen die Werte mit den Herstellervorgaben und stellen Ihr Fahrzeug exakt ein. Das Messprotokoll mit Vorher-Nachher-Werten erhalten Sie selbstverständlich dazu.',
      },
    ],
  },
  {
    slug: 'fahrzeugaufbereitung-werterhalt-verkauf-leasing',
    title: 'Aufbereitung vor dem Verkauf: So holen Sie mehr heraus',
    excerpt:
      'Der erste Eindruck verkauft. Warum sich eine professionelle Aufbereitung vor Verkauf oder Leasing-Rückgabe fast immer lohnt – und was sie von der Waschanlage unterscheidet.',
    category: 'Pflege',
    image: 'headlight-detail',
    publishedAt: '2026-07-14',
    readingMinutes: 4,
    service: 'aufbereitung',
    body: [
      {
        type: 'p',
        text: 'Ob privater Verkauf, Inzahlungnahme oder Leasing-Rückgabe: Der Zustand von Lack und Innenraum beeinflusst den erzielbaren Preis erheblich. Käufer schließen vom Pflegezustand auf die Technik – ein gepflegtes Fahrzeug wirkt vertrauenswürdiger.',
      },
      { type: 'h2', id: 'unterschied', text: 'Mehr als eine Autowäsche' },
      {
        type: 'p',
        text: 'Eine Waschanlage entfernt oberflächlichen Schmutz. Eine professionelle Aufbereitung geht tiefer: Sie entfernt eingebrannte Verschmutzungen und Flugrost, reduziert Swirls und feine Kratzer durch maschinelle Politur und schützt den Lack mit einer Versiegelung. Innen werden Polster, Teppiche, Leder und Kunststoffe gründlich gereinigt und gepflegt.',
      },
      { type: 'h2', id: 'leasing', text: 'Leasing-Rückgabe: Nachberechnungen vermeiden' },
      {
        type: 'p',
        text: 'Bei der Rückgabe werden Gebrauchsspuren begutachtet. Starke Verschmutzungen, Flecken oder Gerüche können zu Nachberechnungen führen. Eine Aufbereitung vorab stellt sicher, dass Ihr Fahrzeug im bestmöglichen Zustand übergeben wird.',
      },
      {
        type: 'ul',
        items: [
          'Innenraum-Tiefenreinigung gegen Flecken und Gerüche',
          'Politur gegen Waschanlagen-Kratzer und matten Lack',
          'Felgen- und Scheibenreinigung für den perfekten Gesamteindruck',
        ],
      },
      { type: 'h2', id: 'selbst', text: 'Pflegetipps für zwischendurch' },
      {
        type: 'ol',
        items: [
          'Vogelkot und Baumharz möglichst schnell entfernen – sie greifen den Lack an.',
          'Im Winter regelmäßig Streusalz abwaschen, auch am Unterboden.',
          'Mit sauberen Mikrofasertüchern arbeiten, um Kratzer zu vermeiden.',
          'Innenraum regelmäßig saugen – Sand und Krümel wirken wie Schleifpapier.',
        ],
      },
      {
        type: 'tip',
        title: 'Der richtige Zeitpunkt',
        text: 'Planen Sie die Aufbereitung wenige Tage vor dem Verkaufstermin oder der Rückgabe. So präsentiert sich Ihr Fahrzeug bei Besichtigung und Fotos von seiner besten Seite.',
      },
    ],
  },
];

export const blogPosts = [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(iso));

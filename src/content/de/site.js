import { createLocaleContent } from '../create-locale-content.js'

export const deContent = createLocaleContent({
  code: 'de',
  name: 'German',
  nativeName: 'Deutsch',
  translated: true,
  homeLabel: 'Startseite',
  heroTitle: 'Internationale Personalbeschaffung für Unternehmen, die ohne Verzögerung Mitarbeiter für operative Rollen benötigen.',
  heroLead:
    'Die Seitenstruktur ist bereits für Lead-Generierung, mehrsprachiges SEO-Wachstum, Quizze, Fallstudien und beratende CTAs für B2B-Kunden vorbereitet.',
})

deContent.site.description =
  'Senken Sie Ihre Personalkosten um bis zu 54 % durch internationale Personalbeschaffung von Arbeitskräften aus Asien und Afrika als Komplettlösung.'

deContent.navigation.items = [
  { key: 'home', label: 'Startseite' },
  { key: 'services', label: 'Leistungen' },
  { key: 'industries', label: 'Branchen' },
  { key: 'cases', label: 'Projekte' },
  { key: 'report', label: 'Bericht' },
  { key: 'contacts', label: 'Kontakt' },
]

deContent.navigation.primaryCta = 'Personalbedarf berechnen'
deContent.navigation.secondaryCta = 'Gespräch buchen'

deContent.home = {
  meta: {
    title: 'Internationale Personalbeschaffung für Unternehmen',
    description:
      'Senken Sie Personalkosten und schließen Sie Personallücken mit einer Komplettlösung für die internationale Personalbeschaffung aus Asien und Afrika.',
  },
  hero: {
    lines: ['PERSONALKOSTEN', 'SENKEN'],
    highlight: 'UM BIS ZU 54 %',
    lead:
      'durch internationale Personalbeschaffung aus <strong>Asien und Afrika</strong> als Komplettlösung',
    stats: [
      { value: 10, suffix: ' TAGE', label: 'bis zur Auswahl der ersten Kandidaten' },
      { value: 7, suffix: ' JAHRE', label: 'Erfahrung im internationalen Recruiting' },
      { value: 100, suffix: ' %', label: 'Betreuung bei Dokumenten und Anreise' },
    ],
    video: {
      src: '/videos/international-recruitment-overview.mp4',
      poster: '/video-poster-home.svg',
      type: 'video/mp4',
    },
  },
  comparison: {
    eyebrow: 'Vergleich der Rekrutierungsmodelle',
    title: 'Wie Unternehmen durch Fachkräftemangel im lokalen Markt verlieren',
    cards: [
      {
        title: 'Andere',
        brandNote: 'lokale Rekrutierung / andere Agenturen',
        amount: '$36.000',
        period: '/ Monat',
        note: 'für ein Team von 30 Mitarbeitern',
        variant: 'other',
        rows: [
          {
            title: 'Mangel an guten Kandidaten',
            text: 'Dutzende von Unternehmen konkurrieren gleichzeitig um dieselben guten Mitarbeiter.',
          },
          {
            title: 'Stellen bleiben länger offen',
            text: 'Während die Suche andauert, arbeitet das Team überlastet.',
          },
          {
            title: 'Ständige Nachrekrutierung',
            text: 'Aufgrund des Personalmangels kehrt das Unternehmen immer wieder zur Suche zurück.',
          },
        ],
      },
      {
        title: 'VW Recruit',
        brandNote: 'systematische Lösung des Fachkräftemangels',
        amount: '$18.000',
        period: '/ Monat',
        note: 'für ein Team von 30 Mitarbeitern',
        variant: 'brand',
        rows: [
          {
            title: 'Zugang zu einem breiteren Kandidatenpool',
            text: 'Wir arbeiten über die Grenzen des lokalen Personalmangels hinaus.',
          },
          {
            title: 'Schneller Zugang zu Kandidaten',
            text: 'Erste relevante Personen bereits in 7–14 Tagen.',
          },
          {
            title: 'Fokus auf Geschäftskontinuität',
            text: 'Sie besetzen Stellen schneller, während Konkurrenten noch suchen.',
          },
        ],
      },
    ],
    cta: 'Fachkräftemangel schließen',
  },
  industries: {
    eyebrow: 'Für welche Branchen das Modell geeignet ist',
    title: 'Meistens wird dieses Rekrutierungsmodell für operative Arbeiten genutzt',
    lead:
      'Wir stellen Teams für Produktion, Lager, Bauwesen und Service zusammen, wenn Unternehmen einen planbaren Start und niedrigere Personalkosten benötigen.',
    items: [
      {
        title: 'Lager und Logistik',
        text: 'Zusammenstellung von Teams für Kommissionierung, Verpackung, Warentransport und Lagerbetrieb.',
      },
      {
        title: 'Bauwesen',
        text: 'Rekrutierung von Mitarbeitern für Baustellen, Montage, Hilfs- und Technikarbeiten.',
      },
      {
        title: 'Hotellerie und Service',
        text: 'Personalbeschaffung für Reinigung, Küche, Instandhaltung und den täglichen operativen Betrieb.',
      },
      {
        title: 'Produktion',
        text: 'Rekrutierung von Mitarbeitern für Produktionslinien, Verpackung, Sortierung und Hilfsprozesse.',
      },
    ],
  },
  calculator: {
    eyebrow: 'Quiz-Berechnung',
    title: 'Berechnen Sie den Personalbedarf für Ihr Unternehmen',
    lead:
      'Beantworten Sie ein paar kurze Fragen und erhalten Sie eine Kalkulation für die Rekrutierung Ihres Teams.',
  },
  casesSection: {
    eyebrow: 'Unsere Projekte',
    title: 'Unsere Projekte in der Personalbeschaffung',
    lead:
      'Wir zeigen, wie die Rekrutierung in realen Projekten aussieht: von Produktion und Lagern bis hin zu Service und operativen Teams.',
    cta: 'Alle Projekte',
    items: [
      {
        title: 'Delta Pack',
        subtitle: 'Produktionsunternehmen, Mitteleuropa',
        problem: 'Behebung des Mangels an 32 Mitarbeitern für die Verpackungslinie nach langwieriger lokaler Suche und hoher Fluktuation.',
        image: '/images/industry-manufacturing.jpg',
        alt: 'Mitarbeiter an der Produktionslinie',
      },
      {
        title: 'Nord Cargo Hub',
        subtitle: 'Lagerkomplex und Logistik',
        problem: 'Zusammenstellung eines Schichtteams für Kommissionierung und Sortierung, als das Unternehmen Spitzenlasten nicht mehr abdecken konnte.',
        image: '/images/industry-logistics.jpg',
        alt: 'Mitarbeiter im Lager und in der Logistik',
      },
      {
        title: 'Urban Build Group',
        subtitle: 'Bauunternehmen',
        problem: 'Verstärkung von Baustellen mit Monteuren und Hilfsarbeitern, um die Fristen für den Start einer neuen Bauphase nicht zu gefährden.',
        image: '/images/industry-construction.jpg',
        alt: 'Mitarbeiter auf der Baustelle',
      },
    ],
  },
  process: {
    eyebrow: 'Was nach Ihrer Anfrage passiert',
    title: 'Die nächsten Schritte nach Ihrer Anfrage',
    intro:
      'Wir klären die Anzahl der Mitarbeiter, die Anforderungen an die Kandidaten und den Zeitplan für den Start des Teams. Danach beginnt die Rekrutierung über unsere Datenbank und Partneragenturen in den Rekrutierungsländern.',
    steps: [
      {
        title: 'Stellenanalyse und Start der Rekrutierung',
        text: 'Wir erstellen ein Kandidatenprofil, stimmen Fristen ab und starten die Suche in relevanten Quellen.',
      },
      {
        title: 'Auswahl und Überprüfung der Kandidaten',
        text: 'Die Kandidaten durchlaufen eine Vorauswahl, Dokumentenprüfung und ein Basis-Interview. Das Unternehmen erhält Profile zur endgültigen Freigabe.',
      },
      {
        title: 'Dokumentenabwicklung',
        text: 'Wir organisieren die Vorbereitung aller notwendigen Dokumente für Beschäftigung und Einreise und überwachen den Prozess bis zur Fertigstellung.',
      },
      {
        title: 'Ankunft und Arbeitsbeginn',
        text: 'Wir koordinieren Logistik und Ankunft der Mitarbeiter. Nach der Ankunft nimmt das Team die Arbeit im Unternehmen auf.',
      },
    ],
  },
  guarantees: {
    eyebrow: 'Garantien und Sicherheit',
    title: 'Was Unternehmen mit der Rekrutierung erhalten',
    items: [
      {
        title: '100 % Legalität',
        text: 'Wir kümmern uns um Quoten, Arbeitserlaubnisse und Visaprozesse, damit das Unternehmen vor Kontrollen geschützt ist.',
      },
      {
        title: 'Kostenloser Ersatz',
        text: 'Wir bieten eine Garantiezeit für den Ersatz von Kandidaten, falls das Projekt Stabilität beim Start erfordert.',
      },
      {
        title: 'Komplette Betreuung (Komplettlösung)',
        text: 'Vom Interview in Asien bis zum Treffen am Flughafen und dem Schichtbeginn mit Unterstützung bei Anpassung und Kommunikation.',
      },
    ],
  },
  reportBlock: {
    eyebrow: 'Analysematerial',
    title: 'Warum verliert die lokale Personalbeschaffung an Effizienz?',
    lead:
      'Erhalten Sie den exklusiven Analysebericht "Arbeitsmarkt 2026: Integration von internationalem Personal".',
    points: [
      'Kostenvergleichstabelle: Lokaler Markt vs. Expats',
      '5 rechtliche Fehler bei der Einstellung von Ausländern',
      'So überwinden Sie die Sprachbarriere in der Produktion',
    ],
    cta: 'Bericht als PDF herunterladen',
  },
  reviews: {
    eyebrow: 'Vertrauen',
    title: 'Marktführer vertrauen uns',
    items: [
      {
        name: 'Oleksandr Koval',
        company: 'Operations Director, Delta Pack',
        text: 'VW Recruit hat den Personalmangel an unserer Produktionslinie behoben, ohne unsere interne HR-Abteilung zu überlasten. Am wertvollsten war, dass das Team sowohl die Rekrutierung als auch die Dokumentation übernommen hat.',
      },
      {
        name: 'Iryna Melnyk',
        company: 'HR Lead, Nord Cargo Hub',
        text: 'Wir haben nicht nur Kandidaten erhalten, sondern einen klaren Prozess für den Start des Teams. Logistik, Genehmigungen und Koordination waren unter Kontrolle, sodass das Lager ohne Unterbrechungen in die Saison starten konnte.',
      },
      {
        name: 'Taras Humeniuk',
        company: 'Projektmanager, Urban Build Group',
        text: 'Für uns war es wichtig, Baustellen schnell mit Leuten zu verstärken, die tatsächlich zur Schicht erscheinen. VW Recruit bot Planbarkeit bei den Fristen und starke Unterstützung auch nach der Ankunft der Kandidaten.',
      },
      {
        name: 'Maryna Savchuk',
        company: 'People Partner, East Service Group',
        text: 'Nach Beginn der Zusammenarbeit mussten wir Personalengpässe nicht mehr manuell lösen. Das Team von VW Recruit hat Anforderungen, Rekrutierungsländer und Fristen für den Arbeitsbeginn schnell synchronisiert.',
      },
      {
        name: 'Vitaliy Bondar',
        company: 'Operations Manager, Metal Works',
        text: 'Uns gefiel genau das Maß an Vorhersehbarkeit. Das Unternehmen wusste, wann Kandidaten ankommen würden, welche Dokumente bereits fertig waren und in welcher Phase sich jeder Mitarbeiter befand.',
      },
      {
        name: 'Nataliya Chernenko',
        company: 'HR Director, West Line Logistics',
        text: 'Für die Logistik ist die Geschwindigkeit des Schichtstarts entscheidend. Mit VW Recruit bekamen wir nicht nur Personalbeschaffung, sondern normalen operativen Support bis zum Arbeitsbeginn der Leute.',
      },
    ],
    metrics: [
      {
        value: '7 JAHRE',
        label: 'Erfahrung im internationalen Recruiting',
      },
      {
        value: '100 %',
        label: 'Kontrolle von Dokumenten und rechtlicher Abwicklung',
      },
      {
        value: '10 TAGE',
        label: 'Bis zu den ersten Kandidaten im Rekrutierungsprozess',
      },
      {
        value: 'KOMPLETTLÖSUNG',
        label: 'Unterstützung von der Auswahl bis zum Schichtbeginn',
      },
    ],
  },
  media: {
    eyebrow: 'Video und Antworten',
    title: 'Antworten auf die wichtigsten Fragen von Geschäftsinhabern',
    reels: [
      {
        title: 'Wie lange dauert der Start der internationalen Rekrutierung?',
        text: 'Wir erklären, wann ein Unternehmen die ersten Kandidaten erhält, was die Fristen beeinflusst und in welcher Phase die Dokumentenunterstützung ansetzt.',
        meta: 'Zeitplan für den Start',
        duration: '02:14',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Wie kontrolliert ein Unternehmen Legalität und Dokumente?',
        text: 'Wir schlüsseln auf, welche Quoten, Genehmigungen und Visaprozesse wir übernehmen, damit das Unternehmen bei Kontrollen keine Risiken trägt.',
        meta: 'Dokumente und Legalität',
        duration: '03:02',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'Was passiert nach Ankunft der Mitarbeiter im Projekt?',
        text: 'Wir zeigen, wie Anpassung, Schichtbeginn, Kommunikation mit Koordinatoren und Teamunterstützung in der ersten Phase aussehen.',
        meta: 'Anpassung und Betreuung',
        duration: '02:37',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
    ],
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    items: [
      {
        q: 'Wie wird das Problem der Sprachbarriere gelöst?',
        a: 'Wir integrieren Anpassung, Basistraining und Kommunikation über einen Koordinator oder Vorarbeiter, damit sich das Team schnell in die Arbeit einfindet.',
      },
      {
        q: 'Wer sucht nach Unterkünften für die Mitarbeiter?',
        a: 'Das Modell kann die Koordination von Unterkunft, Logistik und Ankunft umfassen, abhängig vom Zusammenarbeitsformat und dem Zielland.',
      },
      {
        q: 'Was tun, wenn ein Mitarbeiter krank wird oder nicht zur Schicht erscheint?',
        a: 'Zu Projektbeginn werden eine Reserve, Garantiebedingungen für den Ersatz und ein schnelles Kommunikationsverfahren mit Ihrer Seite vereinbart.',
      },
    ],
  },
  finalCta: {
    title: 'Bereit, den Personalmangel zu beheben und Ihr Geschäft zu skalieren?',
    lead: 'Buchen Sie eine kostenlose 30-minütige Zoom-Sitzung mit unserem Head of Recruitment.',
  },
}

deContent.forms.lead.title = 'Rekrutierungsberechnung erhalten'
deContent.forms.lead.success = 'Vielen Dank. Ihre Anfrage wurde gespeichert und wir werden Sie bezüglich der Rekrutierung kontaktieren.'
deContent.forms.callback.title = 'Gespräch buchen'
deContent.forms.callback.success = 'Vielen Dank. Ihre Rückrufanfrage wurde gespeichert.'
deContent.forms.report.title = 'Bericht anfordern'
deContent.forms.report.success = 'Vielen Dank. Wir haben Ihre Anfrage erhalten und werden Ihnen das PDF-Dokument in Kürze per E-Mail zusenden.'
deContent.forms.contact.title = 'Anfrage senden'
deContent.forms.contact.success = 'Vielen Dank. Ihre Anfrage ist eingegangen und das Team von VW Recruit wird sich mit dem nächsten Schritt bei Ihnen melden.'
deContent.brand.tagline = 'Internationaler Partner für Personalbeschaffung'
deContent.brand.homeAriaLabel = 'VW Recruit Startseite'

deContent.about = {
  meta: {
    title: 'Über VW Recruit',
    description:
      'Erfahren Sie mehr über VW Recruit, die internationale Personalbeschaffung, den Ablauf der Teameinführung und unseren Ansatz zur Zusammenarbeit mit Unternehmen.',
  },
  title: 'Über VW Recruit',
  lead:
    'Wir helfen Unternehmen, Personalengpässe durch internationale Rekrutierung von Arbeitskräften aus Asien und Afrika zu schließen – mit einem klaren Fahrplan von der Anfrage bis zum Schichtbeginn.',
}

deContent.faqPage = {
  meta: {
    title: 'Häufig gestellte Fragen für Arbeitgeber',
    description:
      'Antworten auf die wichtigsten Fragen von Arbeitgebern zur internationalen Personalbeschaffung: Fristen, Dokumente, Teamstart, Anpassung und Zusammenarbeitsformat.',
  },
  title: 'Häufig gestellte Fragen für Arbeitgeber',
  lead:
    'Wir haben die wichtigsten Fragen zur internationalen Personalbeschaffung zusammengestellt: von Startterminen und Dokumenten über Unterkunft und Anpassung bis hin zur Logik der Betreuung.',
}

deContent.privacy = {
  meta: {
    title: 'Datenschutzerklärung',
    description:
      'Lesen Sie die Datenschutzerklärung von VW Recruit zur Erhebung, Verarbeitung und zum Schutz personenbezogener Daten auf der Website.',
  },
  title: 'Datenschutzerklärung',
  sections: [
    {
      title: '1. Allgemeine Bestimmungen',
      paragraphs: [
        'Diese Datenschutzerklärung regelt das Verfahren zur Erhebung, Nutzung, Speicherung und zum Schutz der personenbezogenen Daten von Nutzern der Website VW Recruit (im Folgenden „Website“). Durch die Nutzung unserer Website stimmen Sie den Bedingungen dieser Erklärung zu. Wenn Sie diesen Bedingungen nicht zustimmen, stellen Sie die Nutzung der Website bitte ein.',
      ],
    },
    {
      title: '2. Welche Daten wir erheben',
      paragraphs: ['Während der Nutzung der Website können wir folgende personenbezogene Daten erheben:'],
      items: [
        'Kontaktinformationen: Name, Firmenname, E-Mail-Adresse, Telefonnummer. Sie geben diese Daten freiwillig an, wenn Sie Formulare ausfüllen (z. B. „Gespräch buchen“, „Bericht anfordern“, „Personalbedarf berechnen“).',
        'Technische Daten: IP-Adresse, Browsertyp, Gerätetyp, Daten zum Seitenbesuch (unter Verwendung von Cookies und Analysewerkzeugen).',
      ],
    },
    {
      title: '3. Zweck der Datenerhebung und -nutzung',
      paragraphs: ['Die erhobenen personenbezogenen Daten werden verwendet, um:'],
      items: [
        'Sie zu kontaktieren, um Beratungen zu internationalen Rekrutierungsdiensten anzubieten.',
        'Angefragte Materialien (z. B. PDF-Berichte, Kostenkalkulationen) zu senden.',
        'Die Leistung der Website zu verbessern und die Wirksamkeit unserer Marketingkampagnen zu analysieren.',
        'Wichtige Benachrichtigungen und kommerzielle Angebote (mit Ihrer Zustimmung) zu senden.',
      ],
    },
    {
      title: '4. Datenübermittlung an Dritte',
      paragraphs: [
        'Wir verkaufen, tauschen oder übertragen Ihre personenbezogenen Daten nicht ohne Ihre Zustimmung an Dritte, außer in den gesetzlich vorgesehenen Fällen. Daten können unseren zuverlässigen Vertragspartnern (z. B. Hosting-Anbietern, E-Mail-Marketing-Diensten) zugänglich sein, die verpflichtet sind, deren Vertraulichkeit zu wahren.',
      ],
    },
    {
      title: '5. Datenschutz und Speicherung',
      paragraphs: [
        'Wir ergreifen geeignete technische und organisatorische Maßnahmen, um Ihre Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen. Die Daten werden nur so lange gespeichert, wie es für die Erfüllung der in dieser Erklärung genannten Zwecke oder gemäß den gesetzlichen Anforderungen erforderlich ist.',
      ],
    },
    {
      title: '6. Benutzerrechte',
      paragraphs: ['Sie haben das Recht:'],
      items: [
        'Zugang zu Ihren personenbezogenen Daten zu erhalten, die wir speichern.',
        'Die Berichtigung von Ungenauigkeiten in Ihren Daten zu verlangen.',
        'Die Löschung Ihrer Daten zu verlangen („Recht auf Vergessenwerden“).',
        'Ihre Einwilligung zur Datenverarbeitung jederzeit zu widerrufen.',
      ],
    },
    {
      title: '7. Verwendung von Cookies',
      paragraphs: [
        'Unsere Website verwendet Cookies, um den ordnungsgemäßen Seitenbetrieb zu gewährleisten, den Datenverkehr zu analysieren und das Benutzererlebnis zu verbessern. Sie können das Speichern von Cookies in Ihren Browsereinstellungen konfigurieren oder deaktivieren.',
      ],
    },
    {
      title: '8. Änderungen der Datenschutzerklärung',
      paragraphs: [
        'Wir behalten uns das Recht vor, diese Erklärung zu aktualisieren. Änderungen treten ab dem Moment ihrer Veröffentlichung auf dieser Seite in Kraft.',
      ],
    },
    {
      title: '9. Kontakt',
      paragraphs: [
        'Wenn Sie Fragen zu dieser Datenschutzerklärung haben oder Ihre Rechte bezüglich personenbezogener Daten ausüben möchten, kontaktieren Sie uns bitte über das Kontaktformular auf der Website oder per E-Mail: partners.vizarecruting.com@gmail.com.',
      ],
    },
  ],
}

deContent.terms = {
  meta: {
    title: 'Nutzungsbedingungen',
    description:
      'Lesen Sie die Nutzungsbedingungen für die Website von VW Recruit, Regeln für die Interaktion über Formulare und grundlegende Prinzipien der Informationsbereitstellung auf der Website.',
  },
  title: 'Nutzungsbedingungen',
  sections: [
    {
      title: '1. Allgemeine Bestimmungen',
      paragraphs: [
        'Diese Nutzungsbedingungen (im Folgenden „Bedingungen“) regeln den Zugang und die Nutzung der Website von VW Recruit (im Folgenden „Website“). Durch den Zugriff und das Durchsuchen dieser Website stimmen Sie diesen Bedingungen vollständig zu.',
      ],
    },
    {
      title: '2. Dienstleistungen des Unternehmens',
      paragraphs: [
        'Die Website dient rein informativen Zwecken und wurde erstellt, um Benutzer mit den Dienstleistungen der internationalen Personalbeschaffung vertraut zu machen sowie die Möglichkeit zu bieten, eine Anfrage für Beratungen, Kalkulationen oder Analysematerialien zu hinterlassen. Das Ausfüllen eines Formulars auf der Website stellt keinen Vertragsabschluss über Dienstleistungen dar; Vertragsbeziehungen werden nach individueller Vereinbarung gesondert formalisiert.',
      ],
    },
    {
      title: '3. Pflichten des Nutzers',
      paragraphs: ['Der Nutzer verpflichtet sich:'],
      items: [
        'Wahrheitsgemäße Angaben (Name, Kontaktdaten des Unternehmens) beim Ausfüllen von Formularen auf der Website zu machen.',
        'Die Website nicht für illegale, betrügerische Handlungen oder die Verbreitung von Schadsoftware zu nutzen.',
        'Nicht zu versuchen, unbefugten Zugriff auf die Verwaltungssysteme der Website zu erlangen.',
      ],
    },
    {
      title: '4. Geistiges Eigentum',
      paragraphs: [
        'Alle auf der Website veröffentlichten Materialien, einschließlich Texte (Leistungsbeschreibungen, Fallstudien, Berichte), Bilder, Logos („VW Recruit“), Grafiken und Designstrukturen, sind Eigentum des Unternehmens oder werden unter Lizenz verwendet. Jegliches Kopieren, Verbreiten oder Verwenden der Website-Materialien für kommerzielle Zwecke ohne vorherige schriftliche Zustimmung des Urheberrechtsinhabers ist untersagt.',
      ],
    },
    {
      title: '5. Haftungsausschluss',
      paragraphs: [
        'Die Informationen auf der Website werden "wie besehen" bereitgestellt. Wir bemühen uns, die Daten aktuell zu halten (z.B. Informationen zu Fristen, Kosten oder Ersatzgarantien), die genauen Bedingungen der Zusammenarbeit werden jedoch ausschließlich in einem individuellen Vertrag festgehalten.',
        'Das Unternehmen haftet nicht für mögliche technische Ausfälle im Betrieb der Website oder vorübergehende Unzugänglichkeiten.',
        'Die Website kann Links zu Ressourcen Dritter enthalten. Wir sind nicht für den Inhalt und die Datenschutzrichtlinien solcher externen Ressourcen verantwortlich.',
      ],
    },
    {
      title: '6. Änderungen der Nutzungsbedingungen',
      paragraphs: [
        'Die Website-Administration behält sich das Recht vor, diese Bedingungen jederzeit und ohne vorherige persönliche Benachrichtigung der Benutzer zu ändern. Die aktualisierte Version der Bedingungen tritt ab dem Zeitpunkt ihrer Veröffentlichung auf dieser Seite in Kraft. Wir empfehlen, diesen Abschnitt regelmäßig zu überprüfen.',
      ],
    },
    {
      title: '7. Streitbeilegung',
      paragraphs: [
        'Alle Streitigkeiten, die im Zusammenhang mit der Nutzung dieser Website entstehen, werden durch Verhandlungen beigelegt. Falls keine Einigung erzielt wird, unterliegt der Streit der Prüfung gemäß dem geltenden Recht [Land oder Gerichtsbarkeit angeben].',
      ],
    },
    {
      title: '8. Feedback',
      paragraphs: [
        'Für alle Fragen bezüglich des Betriebs der Website oder der Bedingungen der Zusammenarbeit kontaktieren Sie uns bitte über das Formular auf der Seite „Kontakt“ oder unter: partners.vizarecruting.com@gmail.com.',
      ],
    },
  ],
}

deContent.contacts = {
  meta: {
    title: 'Kontakt zu VW Recruit',
    description:
      'Kontaktieren Sie VW Recruit bezüglich internationaler Personalbeschaffung, Teamstart, Dokumenten und Format der Zusammenarbeit.',
  },
  title: 'Kontakte für Unternehmen, die einen Personalmangel schnell beheben müssen',
  summary: [
    {
      label: 'Antwort',
      value: 'innerhalb eines Werktages',
    },
    {
      label: 'Format',
      value: 'Anruf, Zoom oder E-Mail',
    },
    {
      label: 'Fokus',
      value: 'Arbeitgeber und operative Teams',
    },
  ],
  channelsTitle: 'So starten Sie bequem die Kontaktaufnahme',
  channelsLead:
    'Wählen Sie das Format, das am besten zu Ihnen passt. Wenn Sie noch kein finales Briefing haben, können Sie mit einem kurzen Anruf beginnen und später zu den Details übergehen.',
  channels: [
    {
      icon: 'brief',
      label: 'Rekrutierungsanfrage',
      title: 'Hinterlassen Sie eine Anfrage für Ihren Bedarf',
      text: 'Die bequemste Option, wenn Sie bereits Rollen, die ungefähre Anzahl der Mitarbeiter oder den gewünschten Zeitrahmen für den Teamstart kennen.',
      actionLabel: 'Formular öffnen',
      actionType: 'anchor',
      actionTarget: '#contact-form',
    },
    {
      icon: 'call',
      label: 'Schnelle Synchronisierung',
      title: 'Buchen Sie ein kurzes Gespräch mit dem Team',
      text: 'Geeignet, wenn Sie schnell verstehen müssen, ob internationale Rekrutierung zu Ihrem speziellen Fall passt und was die nächsten Schritte sein werden.',
      actionLabel: 'Gespräch buchen',
      actionType: 'modal',
      actionTarget: 'callback',
    },
    {
      icon: 'documents',
      label: 'Fahrplan für den Start',
      title: 'Klären Sie Dokumente, Fristen und Ablauf',
      text: 'Wir erklären den Prozess von der Auswahl und Freigabe der Kandidaten bis hin zu Dokumenten, Logistik, Ankunft und Schichtbeginn.',
    },
  ],
  checklistTitle: 'Was Sie vor der Kontaktaufnahme vorbereiten können',
  checklistLead:
    'Ein perfekt formatiertes Briefing ist nicht erforderlich. Selbst grundlegende Informationen helfen, schneller zu einem fundierten Gespräch überzugehen.',
  checklist: [
    'Welche spezifischen Rollen oder Abteilungen verstärkt werden müssen',
    'Ungefähre Anzahl der Mitarbeiter und gewünschter Startzeitraum',
    'Land und Stadt, in der das Team arbeiten wird',
    'Ob Sie nur Personalvermittlung oder volle Unterstützung bis zum Start benötigen',
  ],
  supportTitle: 'Was das Team bereits beim ersten Kontakt klären kann',
  supportLead:
    'Der erste Kontakt dient nicht der Formalität, sondern dazu, Unklarheiten auszuräumen und zu zeigen, wie gut das Modell tatsächlich zu Ihrer Anfrage passt.',
  support: [
    'Wie schnell der Kandidatenfluss gestartet werden kann',
    'Welche Rekrutierungsländer am besten zu den Rollen passen',
    'Wie Dokumente, Genehmigungen und die Koordination der Ankunft organisiert sind',
    'Wie Kommunikation und Teamstart nach der Freigabe formatiert werden',
  ],
  form: {
    title: 'Hinterlassen Sie eine Anfrage und wir melden uns mit dem nächsten Schritt',
    lead:
      'Hinterlassen Sie Ihre Kontaktdaten, und das Team von VW Recruit schlägt das praktischste Startformat speziell für Ihre Situation vor.',
    note: 'Am besten geeignet für Arbeitgeber, die Rekrutierung, Ersatz oder den Start eines Teams benötigen.',
  },
}

deContent.thankYouReport = {
  meta: {
    title: 'Vielen Dank für Ihre Berichtsanfrage',
    description:
      'Ihre Anfrage nach einem Bericht wurde gespeichert. Das Team von VW Recruit wird Sie in Kürze kontaktieren und das Material senden.',
  },
  title: 'Vielen Dank. Ihre Berichtsanfrage ist eingegangen',
  lead:
    'Wir haben Ihre Anfrage gespeichert und werden das Material in Kürze senden sowie einen praktischen nächsten Schritt bezüglich Ihrer Einstellungssituation vorschlagen.',
  ctaLabel: 'Zurück zur Startseite',
  secondaryCtaLabel: 'Kontakt öffnen',
}

deContent.ui.modalClose = 'Modal schließen'
deContent.ui.leadCapture = 'Lead-Erfassung'
deContent.ui.video = 'Video'
deContent.ui.videoPlay = 'Video abspielen'
deContent.ui.openMenu = 'Menü öffnen'
deContent.ui.primaryNav = 'Hauptnavigation'
deContent.ui.languagePickerTitle = 'Sprache wählen'
deContent.ui.fieldName = 'Name'
deContent.ui.fieldCompany = 'Unternehmen'
deContent.ui.fieldEmail = 'E-Mail'
deContent.ui.fieldPhone = 'Telefon'
deContent.ui.fieldIsBusiness = 'Sind Sie eine reale Agentur oder ein Unternehmen?'
deContent.ui.fieldTargetCountries = 'Welche Länder interessieren Sie?'
deContent.ui.fieldWorkersCount = 'Für wie viele Personen benötigen Sie Recruiting?'
deContent.ui.fieldSelectOption = 'Option wählen'
deContent.ui.optionYes = 'Ja'
deContent.ui.optionNo = 'Nein'
deContent.ui.sendRequest = 'Anfrage senden'
deContent.ui.requestCallback = 'Gespräch buchen'
deContent.ui.getReport = 'Bericht anfordern'
deContent.ui.bookCall = 'Gespräch buchen'
deContent.ui.quizEyebrow = 'Quiz'
deContent.ui.quizContinue = 'Weiter'
deContent.ui.quizBack = 'Zurück'
deContent.ui.quizSubmit = 'Absenden'
deContent.ui.quizReady = 'Fertig'
deContent.ui.quizValidationError = 'Bitte füllen Sie den aktuellen Schritt aus.'
deContent.ui.quizSubmitError = 'Senden des Formulars fehlgeschlagen. Bitte versuchen Sie es erneut.'
deContent.ui.processEyebrow = 'Prozess'
deContent.ui.caseStudy = 'Fallstudie'
deContent.ui.caseViewLabel = 'Projekt ansehen'
deContent.ui.leadCaptureEyebrow = 'Lead-Erfassung'
deContent.ui.faqEyebrow = 'FAQ'
deContent.ui.aboutEyebrow = 'Über uns'
deContent.ui.contactsEyebrow = 'Kontakt'
deContent.ui.reportEyebrow = 'Bericht'
deContent.ui.privacyEyebrow = 'Datenschutzerklärung'
deContent.ui.termsEyebrow = 'Nutzungsbedingungen'
deContent.ui.thankYouEyebrow = 'Vielen Dank'
deContent.ui.finalCtaEyebrow = 'Finales CTA'
deContent.ui.downloadReport = 'Bericht herunterladen'
deContent.ui.openContactsPage = 'Kontaktseite öffnen'
deContent.ui.projectsExamples = 'Projektbeispiele'
deContent.ui.reelPlaceholder = 'Platzhalter für Reel oder Video im Popup-Modal nach Verknüpfung der Quellen.'
deContent.ui.industriesLead =
  'Am häufigsten nutzen Unternehmen dieses Modell für operative Arbeiten in Produktion, Lagern, Bauwesen und im Dienstleistungssektor.'
deContent.ui.legalPlaceholder = 'Hier steht der Rechtstext. Ersetzen Sie ihn vor dem Start durch die genehmigte endgültige Version.'
deContent.ui.footerDescription =
  'Komplettlösung für die Rekrutierung von Arbeitskräften aus Asien und Afrika: von der Kandidatensuche über Dokumente bis hin zu Ankunft, Anpassung und Schichtbeginn des Teams.'
deContent.ui.footerCorePages = 'Hauptseiten'
deContent.ui.footerLegal = 'Rechtliche Informationen'
deContent.ui.privacyPolicy = 'Datenschutzerklärung'
deContent.ui.termsAndConditions = 'Nutzungsbedingungen'
deContent.ui.formRequiredError = 'Bitte füllen Sie die Pflichtfelder des Formulars aus.'
deContent.ui.formSubmittingButton = 'Wird gesendet...'
deContent.ui.formSubmittingStatus = 'Formular wird gesendet...'
deContent.ui.formSubmitError = 'Senden des Formulars fehlgeschlagen. Bitte versuchen Sie es erneut.'
deContent.ui.industryVisualLogisticsAlt = 'Mitarbeiter im Lager und in der Logistik'
deContent.ui.industryVisualConstructionAlt = 'Mitarbeiter auf einer Baustelle'
deContent.ui.industryVisualHospitalityAlt = 'Personal in Hotellerie und Service'
deContent.ui.industryVisualManufacturingAlt = 'Mitarbeiter in der Produktion'
deContent.ui.industrySlidePlaceholder =
  'Eine separate visuelle Fallstudie für diese Vertikale kann für SEO-Seiten, Quizze und personalisierte CTAs skaliert werden.'
deContent.ui.comparisonCardCta = 'Personalbedarf berechnen'
deContent.ui.comparisonOtherMark = 'AN'
deContent.ui.guaranteesLegalDelta = 'Quoten, Genehmigungen, Visa'
deContent.ui.guaranteesReplacementMetric = '0 €'
deContent.ui.guaranteesReplacementDelta = 'Schneller Ersatz in der Garantie'
deContent.ui.guaranteesSupportMetric = 'Komplett'
deContent.ui.guaranteesSupportDelta = 'Von der Auswahl zur Schicht'
deContent.ui.guaranteesFallbackDelta = 'Vorteil VW Recruit'
deContent.ui.guaranteesReplacementLabel = 'Garantie beim Start'
deContent.ui.guaranteesReplacementUnit = '€'
deContent.ui.guaranteesReplacementWarrantyDays = 30
deContent.ui.guaranteesReplacementWarrantyLabel = 'Tage Garantie'
deContent.ui.guaranteesReplacementReplyHours = 48
deContent.ui.guaranteesReplacementReplyLabel = 'Stunden Antwortzeit'
deContent.ui.guaranteesSupportBadge = 'Ein Team für den gesamten Prozess'
deContent.ui.guaranteesCandidatesDays = 10
deContent.ui.guaranteesCandidatesDaysLabel = 'Tage bis Kandidaten'
deContent.ui.guaranteesSupportPercentLabel = '% Betreuung'
deContent.ui.guaranteesOneTeamCount = 1
deContent.ui.guaranteesOneTeamLabel = 'Team'
deContent.ui.guaranteeTimelineStepOne = 'Auswahl'
deContent.ui.guaranteeTimelineStepTwo = 'Dokumente'
deContent.ui.guaranteeTimelineStepThree = 'Logistik'
deContent.ui.guaranteeTimelineStepFour = 'Ankunft'
deContent.ui.guaranteeTimelineStepFive = 'Schicht'
deContent.ui.guaranteeSupportStepOne = 'Auswahl'
deContent.ui.guaranteeSupportStepTwo = 'Ankunft'
deContent.ui.guaranteeSupportNote = 'Schichtbeginn'
deContent.ui.guaranteeChecklistQuota = 'Quoten'
deContent.ui.guaranteeChecklistPermit = 'Genehmigungen'
deContent.ui.guaranteeChecklistVisa = 'Visa'
deContent.ui.reviewFallbackValue = '7 JAHRE'
deContent.ui.reviewLabelPrefix = '7 Jahre '
deContent.ui.servicesShortRequestEyebrow = 'Kurze Anfrage'
deContent.ui.servicesHeroGhostCta = 'Servicebedingungen ansehen'
deContent.ui.servicesHeroPanelTitle =
  'Rekrutierung, Dokumente, Logistik und Teameinführung in einem Prozess'
deContent.ui.servicesHeroPanelText =
  'Der gesamte Weg ist so aufgebaut, dass das Unternehmen vorhersehbare Startphasen sieht und der Kandidat versteht, was bei jedem Schritt passiert.'
deContent.ui.servicesPillarsEyebrow = 'Was wir abdecken'
deContent.ui.servicesPillarsTitle =
  'Der Service ist nicht als "Lebenslaufsuche" konzipiert, sondern als kompletter Weg zur Eingliederung von Menschen in die Arbeit'
deContent.ui.servicesOfferEyebrow = 'Was beide Seiten erhalten'
deContent.ui.servicesOfferTitle =
  'Ein Modell, bei dem das Unternehmen ein kontrolliertes Ergebnis erhält und der Kandidat einen transparenten Prozess sieht'
deContent.ui.servicesOfferVisualLabel = 'VW Recruit / Fahrplan'
deContent.ui.servicesOfferVisualPrimary = 'Für Unternehmen'
deContent.ui.servicesOfferVisualSecondary = 'Für Kandidaten'
deContent.ui.servicesBeamEyebrow = 'Prozesskarte'
deContent.ui.servicesRouteEyebrow = 'Wie die Zusammenarbeit funktioniert'
deContent.ui.servicesRouteTitle = 'Transparenter Weg von der Anfrage bis zum Schichtbeginn der Mitarbeiter'
deContent.ui.servicesRouteLead =
  'Das Unternehmen sieht einen klaren Startweg mit vorhersehbaren Phasen von der Anfrage bis zum Arbeitsbeginn der Mitarbeiter.'
deContent.ui.servicesProofEyebrow = 'Warum das funktioniert'
deContent.ui.servicesProofTitle =
  'Nicht nur Rekrutierung, sondern ein verwalteter Service mit einem klaren Ergebnis in jeder Phase'
deContent.ui.servicesFitEyebrow = 'Wo es am besten funktioniert'
deContent.ui.servicesFitTitle =
  'Rollen und Nischen, in denen internationale Personalbeschaffung maximale operative Effekte erzielt'
deContent.ui.servicesFitLead =
  'Jede Karte zeigt, wo das Modell das schnellste operative Ergebnis, den reibungslosesten Teamstart und die höchste Prozessstabilität liefert.'
deContent.ui.servicesFitScoreLabel = 'Übereinstimmungsgrad'
deContent.ui.servicesFitMetricOne = 'Startgeschwindigkeit'
deContent.ui.servicesFitMetricTwo = 'Stabilität'
deContent.ui.servicesFitMetricThree = 'Transparenz'
deContent.ui.servicesFitCardTextOne =
  'Funktioniert am besten, wenn sich wiederholende Schichten, Anwesenheitsdisziplin und schnelle Skalierung ohne Ausfälle wichtig sind.'
deContent.ui.servicesFitCardTextTwo =
  'Eignet sich gut für saisonale Spitzen, Volumenwachstum und Betriebe, in denen das Unternehmen dringend einen rhythmischen Start von Mitarbeitern benötigt.'
deContent.ui.servicesFitCardTextThree =
  'Geeignet für Projekte mit strengen Fristen, bei denen Rekrutierung, Dokumente und Anreise ohne Chaos kombiniert werden müssen.'
deContent.ui.servicesFitCardTextFour =
  'Zeigt gute Ergebnisse in Service-Teams, in denen ein klarer Weg, schnelle Anpassung und Startstabilität entscheidend sind.'
deContent.ui.servicesLeadEyebrow = 'Dialog starten'
deContent.ui.servicesLeadText =
  'Für Arbeitgeber ist es ein schneller Weg, um den Start der Rekrutierung zu verstehen. Für Kandidaten ist es eine Gelegenheit, eine ehrliche Erklärung des Beschäftigungsweges und der Dokumente zu erhalten.'
deContent.ui.servicesSegmentBadgeBusiness = 'B2B'
deContent.ui.servicesSegmentBadgeCandidate = 'B2C'
deContent.ui.industriesSectionTitle = 'FÜR WELCHE BRANCHEN DIESES MODELL GEEIGNET IST'
deContent.ui.industrySliderPrev = 'Vorherige Folie'
deContent.ui.industrySliderNext = 'Nächste Folie'
deContent.ui.quizSectionLead =
  'Ein kurzes Schritt-für-Schritt-Quiz, das hilft, Anfragen schnell zu sammeln und in einem einheitlichen Format zu übermitteln.'
deContent.ui.casesSectionLead =
  'Wir zeigen Beispiele von Rekrutierungsstarts für Produktion, Logistik, Hotellerie und andere operative Teams.'
deContent.ui.caseSliderPrev = 'Vorheriges Projekt'
deContent.ui.caseSliderNext = 'Nächstes Projekt'
deContent.ui.casesTimelineSteps = ['Briefing', 'Suche', 'Freigabe', 'Dokumente', 'Ankunft']
deContent.ui.industriesFitSummary =
  'Signale, die normalerweise bedeuten, dass lokale Personalbeschaffung nicht mehr mit dem Tempo Ihres Betriebs mithalten kann und ein systematischeres Modell zur Teambesetzung erforderlich ist.'
deContent.ui.caseSubtitlePlaceholder = 'Kurze Projektbeschreibung'
deContent.ui.caseProblemPlaceholder =
  'Separate SEO-Seite für den Fall mit Ergebnissen, Fristen und einer Zielaktion.'
deContent.ui.processStepLabel = 'Schritt'
deContent.ui.reportPanelTitle = 'Material per E-Mail erhalten'
deContent.ui.reportPanelText =
  'Hinterlassen Sie Ihre Kontaktdaten, und wir senden Ihnen nützliches Material zum Thema internationales Recruiting und Personalkostenoptimierung.'
deContent.ui.reportPanelKicker = 'VW Recruit / Analytik'
deContent.ui.reportPanelReportTitle = 'Arbeitsmarkt 2026'
deContent.ui.reportPanelReportText =
  'Integration von internationalem Personal für Unternehmen mit Personalmangel'
deContent.ui.reportPanelGuide = 'PDF'
deContent.ui.videoInsightLabel = 'Video-Einblick'
deContent.ui.mediaDefaultDuration = '02:00'
deContent.ui.reviewsPrev = 'Vorherige Bewertung'
deContent.ui.reviewsNext = 'Nächste Bewertung'
deContent.ui.genericPageCardOne = 'Basisseite vorbereitet für lokalisierte Inhalte'
deContent.ui.genericPageCardTwo = 'Metadaten und Struktur sind bereit zur weiteren Befüllung'
deContent.ui.genericPageCardThree = 'Jede Route wird für jede Sprache separat generiert'

deContent.quiz.title = 'Personalbedarf berechnen'
deContent.quiz.progressLabel = 'Schritt'
deContent.quiz.completionTitle = 'Ihre Anfrage ist bereit'
deContent.quiz.completionLead =
  'Wir haben Ihre Antworten erhalten. Im nächsten Schritt kontaktieren wir Sie, um eine Beratung oder eine Vorkalkulation vorzubereiten.'
deContent.quiz.steps = [
  {
    id: 'industry',
    label: 'Für welche Branche benötigen Sie Mitarbeiter?',
    type: 'options',
    options: ['Produktion', 'Bauwesen', 'Lager und Logistik', 'Hotellerie und Service', 'Sonstige'],
  },
  {
    id: 'teamSize',
    label: 'Wie viele Mitarbeiter benötigen Sie?',
    type: 'options',
    options: ['1–10', '11–30', '31–50', '50+'],
  },
  {
    id: 'timeline',
    label: 'Wann soll das Team mit der Arbeit beginnen?',
    type: 'options',
    options: ['Dringend', 'Innerhalb von 2–4 Wochen', 'Innerhalb von 1–2 Monaten', 'Ich prüfe vorerst Optionen'],
  },
  {
    id: 'location',
    label: 'Wo befindet sich Ihr Unternehmen?',
    type: 'text',
    fields: [
      { name: 'country', label: 'Land', required: true },
      { name: 'city', label: 'Stadt', required: false },
    ],
  },
  {
    id: 'problem',
    label: 'Was ist derzeit das größte Einstellungsproblem?',
    type: 'options',
    options: ['Hohe Personalkosten', 'Personalmangel', 'Personalfluktuation', 'Saisonale Spitzen', 'Produktionsskalierung', 'Sonstige'],
  },
  {
    id: 'contact',
    label: 'Wohin sollen wir die Kalkulation senden?',
    type: 'text',
    fields: [
      { name: 'name', label: 'Name', required: true },
      { name: 'company', label: 'Unternehmen', required: true },
      { name: 'phone', label: 'Telefon', required: true },
      { name: 'email', label: 'E-Mail', required: true },
    ],
  },
]

deContent.services = {
  title: 'Komplettlösungen für die internationale Personalbeschaffung',
  lead:
    'Wir schließen <strong>operative Personallücken</strong> für Unternehmen und führen Kandidaten zum <strong>legalen Arbeitsbeginn</strong>: von der Suche und Auswahl bis hin zu Dokumenten, Ankunft und Schichtbeginn.',
  intro: '',
  cta: 'Personalbeschaffung für Ihr Unternehmen besprechen',
  metrics: [
    { value: '10', suffix: ' Tage', label: 'bis zu den ersten Kandidaten' },
    { value: '100', suffix: ' %', label: 'Unterstützung bei Dokumenten und Legalität' },
    { value: '4', suffix: ' Phasen', label: 'von der Anfrage bis zum Teamstart' },
  ],
  heroBadges: [
    { value: '10', suffix: ' Tage', label: 'bis zu den ersten Kandidaten' },
    { value: '100', suffix: ' %', label: 'rechtliche Unterstützung' },
    { value: 'Komplettlösung', suffix: '', label: 'von der Suche bis zum Schichtstart' },
    { value: '1 Team', suffix: '', label: 'Recruiting, Dokumente, Logistik' },
  ],
  segments: [
    {
      variant: 'business',
      label: 'Für Unternehmen',
      badge: 'B2B',
      title: 'Für Unternehmen, die ein stabiles Team ohne Personalausfälle benötigen',
      text: 'Geeignet für Unternehmen, die operative Rollen nicht durch lokale Rekrutierung besetzen können, skalieren, saisonale Spitzen haben oder hohe Personalfluktuation leid sind.',
      cta: 'Rekrutierungsplan erhalten',
    },
    {
      variant: 'candidate',
      label: 'Für Kandidaten',
      badge: 'B2C',
      title: 'Für Kandidaten, die legal im Ausland arbeiten möchten',
      text: 'Wir erklären die Phasen einfach: Vorauswahl, Dokumente, Ankunft, Anpassung und Arbeitsbeginn. Keine undurchsichtigen Bedingungen und keine vagen Versprechungen.',
      cta: 'Bewerbung einreichen',
    },
  ],
  pillars: [
    {
      title: 'Kandidatensuche und -auswahl',
      text: 'Wir erstellen ein Rollenprofil, starten die Suche über unsere Datenbank und unser Partnernetzwerk, sortieren schwache Kandidaten aus und legen nur relevante Personen zur Freigabe vor.',
    },
    {
      title: 'Dokumente, Genehmigungen und Legalität',
      text: 'Wir kümmern uns um Quoten, Genehmigungen, Visa- und Migrationsprozesse, damit der Arbeitgeber nicht in Bürokratie ertrinkt und der Kandidat weiß, in welcher Phase er sich befindet.',
    },
    {
      title: 'Ankunft, Anpassung und Schichtbeginn',
      text: 'Wir koordinieren Logistik, Ankunft, Arbeitsbeginn und die erste Anpassungsphase, damit die Mitarbeiter tatsächlich fristgerecht vor Ort erscheinen.',
    },
  ],
  timeline: [
    {
      title: 'Briefing und Modellkalkulation',
      text: 'Wir klären die Anzahl der Personen, Rollen, Zeitpläne, das Zielland und Projektbeschränkungen und erstellen dann ein realistisches Rekrutierungsszenario.',
    },
    {
      title: 'Auswahl und Kandidatenfreigabe',
      text: 'Wir starten die Suche, führen ein Screening durch, prüfen Dokumente und geben Ihrer Seite die Möglichkeit, Kandidaten endgültig freizugeben.',
    },
    {
      title: 'Registrierung und Anreiseorganisation',
      text: 'Nach der Freigabe starten wir die Dokumentenvorbereitung, die Koordination von Genehmigungen, Logistik und die Reisebereitschaft der Personen.',
    },
    {
      title: 'Arbeitsbeginn und Betreuung',
      text: 'Nach der Ankunft koordinieren wir den Schichtstart, die Anpassung und die Kommunikation zwischen Unternehmen, Mitarbeitern und Verantwortlichen vor Ort.',
    },
  ],
  deliverables: [
    'Stellenprofil und Suchstrategie für eine spezifische Rolle',
    'Paket ausgewählter Kandidaten, die zur Freigabe bereitstehen',
    'Kontrolle aller Phasen der dokumentarischen Registrierung',
    'Zeitplan für die Ankunft der Mitarbeiter und den Teamstart',
    'Teambetreuung beim Arbeitsbeginn und in der ersten Anpassungsphase',
    'Garantiebedingungen für den Ersatz, abhängig vom Projektformat',
  ],
  offerCards: [
    {
      title: 'Rekrutierung für Arbeitgeber',
      text: 'Schneller Rekrutierungsstart für Vakanzen, saisonale Spitzen oder Produktionsskalierung.',
    },
    {
      title: 'Legaler Weg für Kandidaten',
      text: 'Transparenter Auswahlprozess, Dokumentenvorbereitung und Unterstützung bis zum tatsächlichen Arbeitsbeginn.',
    },
    {
      title: 'Unterstützung nach dem Start',
      text: 'Anpassung, Kommunikation, Ersatz und Prozesskoordination in der ersten Arbeitsphase des Teams.',
    },
  ],
  beam: {
    title: 'Wie sich der Rekrutierungsprozess von der Anfrage bis zum Schichtbeginn bewegt',
    lead:
      'Eine visuelle Prozesskarte, die zeigt, wie Briefing, Auswahl, Freigabe, Dokumente und Teamstart zu einem verwalteten Prozess verbunden sind.',
    centerLabel: 'Verarbeitung',
    outputLabel: 'Schichtbeginn',
    steps: ['Briefing', 'Suche', 'Freigabe', 'Dokumente', 'Ankunft'],
  },
  roles: [
    'Mitarbeiter für Produktionslinien, Verpackung, Sortierung und Hilfsprozesse',
    'Lagerteams für Kommissionierung, Sortierung, Transport und Logistikoperationen',
    'Bau- und Montagearbeiter für Baustellen mit Personalmangel',
    'Mitarbeiter für Hotels, Küche, Zimmerreinigung und Servicedienstleistungen',
  ],
  promise: {
    title: 'Ein Team ist für den gesamten Kandidatenweg verantwortlich',
    text: 'Für Unternehmen bedeutet das weniger Chaos zwischen Recruiting, Dokumenten, Logistik und dem Arbeitsbeginn der Leute. Sie erhalten ein klares Interaktionsmodell anstelle eines Netzes einzelner Dienstleister.',
  },
  trust: [
    'Der Arbeitgeber sieht einen vorhersehbaren Weg zum Teamstart',
    'Der Kandidat erhält einen legalen und verständlichen Beschäftigungsweg',
    'Ein Team koordiniert Recruiting, Dokumente, Logistik und Anpassung',
  ],
  form: {
    title: 'Rekrutierungsplan oder Einstellungsberatung erhalten',
    lead: 'Füllen Sie ein kurzes Formular aus. Für Arbeitgeber bereiten wir den nächsten Schritt zum Start der Rekrutierung vor. Für Kandidaten erklären wir den Weg und die Anforderungen für den Start.',
    button: 'Beratung anfordern',
    note: 'Wir antworten normalerweise innerhalb eines Werktages.',
  },
}

deContent.cases = {
  title: 'Internationale Rekrutierungsprojekte mit messbarem operativen Ergebnis',
  lead:
    'Reale Szenarien, in denen ein Unternehmen Personalengpässe schließt, den Teamstart beschleunigt und einen vorhersehbaren Weg zum Arbeitsbeginn erhält.',
  description:
    'Fallstudien zur internationalen Personalbeschaffung: Herausforderung, Einführungsmodell, Fristen und Ergebnis für das Unternehmen.',
  eyebrow: 'Fallstudien',
  intro:
    'Diese Seite dient nicht nur "Erfolgsgeschichten", sondern als Beweis dafür, dass das Modell unter realen operativen Bedingungen funktioniert: bei Personalmangel, verpassten Fristen oder saisonaler Arbeitsbelastung.',
  stats: [
    { value: '3', label: 'detaillierte Einführungsfälle' },
    { value: '4', label: 'wichtige Geschäftsbereiche' },
    { value: '96', suffix: ' %', label: 'Schichtantrittsquote' },
  ],
  featured: [
    {
      title: 'Delta Pack',
      category: 'Produktion',
      colSpan: 2,
      subtitle: 'Produktionsunternehmen, Mitteleuropa',
      problem:
        'Das Unternehmen konnte die Schicht an der Verpackungslinie aufgrund langwieriger lokaler Einstellungen und ständiger Fluktuation lange Zeit nicht stabil besetzen.',
      solution:
        'Das Einführungsmodell kombinierte Kandidatensuche, Dokumentenbetreuung, Logistik und die Koordination des Teamstarts in einem Prozess.',
      result:
        'Das Unternehmen erhielt einen klaren Plan für den Schichtstart, einen kürzeren Freigabezyklus für Kandidaten und mehr Kontrolle über den Projektstart.',
      timeline: 'Erste Kandidaten in 7-14 Tagen',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Mitarbeiter an der Produktionslinie',
      metrics: [
        { label: 'Bedarf', value: '32 Mitarbeiter' },
        { label: 'Format', value: 'Verpackungslinie' },
        { label: 'Fokus', value: 'Stabiler Schichtstart' },
      ],
    },
    {
      title: 'Nord Cargo Hub',
      category: 'Logistik',
      colSpan: 1,
      subtitle: 'Lagerkomplex und Logistik',
      problem:
        'Das Lager konnte Spitzenlasten ohne Personalreserve und einen vorhersehbaren Ankunftsplan der Mitarbeiter nicht abdecken.',
      solution:
        'Der Fokus lag auf der Geschwindigkeit der Shortlist, Dokumentenkontrolle und der Vorbereitung der Personen auf das Schichtsystem.',
      result:
        'Das operative Team erhielt einen vorhersehbareren Zeitplan, um Onboarding und Schichtleiter vorzubereiten und Spitzenzeiten ohne Chaos abzudecken.',
      timeline: 'Schneller Start für die Saison',
      image: '/images/industry-logistics.jpg',
      alt: 'Mitarbeiter im Lager und in der Logistik',
      metrics: [
        { label: 'Bedarf', value: 'Sortierteam' },
        { label: 'Format', value: 'Lagerbetrieb' },
        { label: 'Fokus', value: 'Bereitschaft für Spitzenlast' },
      ],
    },
    {
      title: 'Urban Build Group',
      category: 'Bauwesen',
      colSpan: 3,
      subtitle: 'Bauunternehmen',
      problem:
        'Das Bauunternehmen musste aktive Baustellen schnell verstärken, ohne Fristen zu verschieben und ohne dass es bei der Teambesetzung zu Ausfällen kam.',
      solution:
        'Suche, Genehmigungen, Logistik und der Start der Anpassung wurden als ein Workflow von der Freigabe bis zum Betreten der Baustelle synchronisiert.',
      result:
        'Der Kunde erhielt ein Modell, das die Lücke zwischen Kandidatenfreigabe, Dokumentenvorbereitung und dem tatsächlichen Arbeitsbeginn verringerte.',
      timeline: 'Fahrplan passend zu Baustellenfristen',
      image: '/images/industry-construction.jpg',
      alt: 'Mitarbeiter auf der Baustelle',
      metrics: [
        { label: 'Bedarf', value: 'Baustellenverstärkung' },
        { label: 'Format', value: 'Rollen am Bau' },
        { label: 'Fokus', value: 'Schutz der Startfristen' },
      ],
    },
  ],
  convincingTitle: 'Von der Herausforderung zum Ergebnis: Warum unsere Erfahrung Unternehmen hilft, schneller zu handeln',
  frameworkTitle: 'Von der Herausforderung zum Ergebnis: Warum unsere Erfahrung Unternehmen hilft, schneller zu handeln',
  frameworkLead:
    'Ein starkes Projekt zeigt nicht nur das Ergebnis, sondern auch, warum der Startfahrplan gerade für diesen Arbeitgebertyp realistisch war.',
  routeLabel: 'Fahrplan',
  outcomeLabel: 'Ergebnis',
  framework: [
    {
      title: 'Klare Ausgangsherausforderung',
      text: 'Wir zeigen genau, wo lokale Personalbeschaffung, Saisonalität oder Fluktuation ein operatives Risiko für das Unternehmen darstellten.',
    },
    {
      title: 'Transparente Einführungsmodelle',
      text: 'Wir erklären, wie Rekrutierung, Dokumente, Logistik und der Arbeitsbeginn in einem Prozess verbunden wurden.',
    },
    {
      title: 'Operatives Ergebnis',
      text: 'Wir übersetzen den Fall in eine klare Geschäftssprache: Schichtstabilität, Startgeschwindigkeit und Vorhersehbarkeit vor Ort.',
    },
  ],
  checklistTitle: 'Was in jedem nächsten Projekt enthalten sein sollte',
  checklist: [
    'Beschreibung der Rolle und der anfänglichen Personalherausforderung',
    'Logik des Rekrutierungslandes oder Suchmodells',
    'Zeitplan vom Briefing bis zur Ankunft',
    'Wichtige Punkte zu Dokumenten und Logistik',
    'Ergebnis für das Unternehmen und klares CTA',
  ],
  ctaTitle: 'Müssen Sie ein ähnliches Rekrutierungsmodell für Ihr Team starten?',
  ctaLead:
    'Beschreiben Sie Ihren Personalmangel, und wir erstellen einen Rekrutierungsplan, Startfristen und den nächsten praktischen Schritt für Ihr Unternehmen.',
}

deContent.industries = {
  title: 'Branchen, in denen internationale Personalbeschaffung den stärksten operativen Effekt hat',
  lead:
    'Wir konzentrieren uns auf Branchen, in denen der Mangel an Linienpersonal und die hohe Fluktuation die Geschäftsentwicklung am meisten behindern.',
  description:
    'Internationale Rekrutierung von Arbeitskräften für Produktion, Bauwesen, Lager, Logistik, Hotels und Service-Teams.',
  eyebrow: 'Branchen',
  intro: '',
  sectorsTitle: 'Schlüsselbereiche, in denen das Modell die schnellsten Ergebnisse liefert',
  sectorsLead: '',
  stats: [
    { value: '3', label: 'Schlüsselbranchen mit höchstem Einfluss' },
    { value: '1+', label: 'Jahr Vertragslaufzeit für die meisten Teams' },
    { value: '54 %', label: 'Potenzial zur Senkung der Personalkosten' },
  ],
  sectors: [
    {
      title: 'Produktion',
      colSpan: 2,
      text: 'Stabile Teams für Fließbänder, Verpackungshallen und Sortierzentren.',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Mitarbeiter in der Produktion',
      tags: ['Produktionslinien', 'Verpackung', 'Sortierung'],
      problem:
        'Ständige "Löcher" in Schichten durch fehlende lokale Arbeitskräfte und eine jährliche Fluktuation von 30-50 %.',
      solution:
        'Wir stellen Gruppen von Arbeitskräften zusammen, die mit einem Vertrag ab 1 Jahr anreisen. Dies garantiert Disziplin und macht wöchentliche Einarbeitungen überflüssig.',
      roles: ['Anlagenbediener', 'Verpacker', 'Sortierer', 'Hilfsarbeiter'],
      points: [
        'Wir stabilisieren die Schichtpräsenz ohne ständige Nachrekrutierung',
        'Wir verringern den Druck auf Schichtleiter und das HR-Team',
        'Wir bieten einen vorhersehbaren Rhythmus bei der Teamintegration',
      ],
      cta: 'Berechnung für die Produktion erhalten',
    },
    {
      title: 'Bauwesen',
      colSpan: 1,
      text: 'Skalierung von Baustellen ohne Abhängigkeit vom Personalmangel auf dem lokalen Markt.',
      image: '/images/industry-construction.jpg',
      alt: 'Mitarbeiter auf der Baustelle',
      tags: ['Montage', 'Hilfsarbeiten', 'Baustellenteams'],
      problem:
        'Verpasste Abgabefristen von Projekten, da in der Hochsaison nicht schnell 20-50 Hilfsarbeiter oder Monteure gefunden werden können.',
      solution:
        'Wir organisieren die zügige Anreise gebildeter Trupps. Wir kümmern uns um die gesamte Legalisierung, damit sich Ihre Bauleiter auf das Bauen und nicht auf Papierkram konzentrieren.',
      roles: ['Hilfsarbeiter', 'Monteure', 'Eisenflechter', 'Betonbauer'],
      points: [
        'Wir verstärken aktive Baustellen ohne Fristverschiebungen',
        'Wir entlasten Bauleiter von administrativen Aufgaben',
        'Wir arbeiten für saisonale Spitzen und Skalierung von Trupps',
      ],
      cta: 'Berechnung für das Bauwesen erhalten',
    },
    {
      title: 'Lager und Logistik',
      colSpan: 1,
      text: 'Flexibilität und Leistungsstärke für 3PL-Betreiber und E-Commerce.',
      image: '/images/industry-logistics.jpg',
      alt: 'Mitarbeiter im Lager und in der Logistik',
      tags: ['Kommissionierung', 'Sortierung', 'Warentransport'],
      problem:
        'Unvorhersehbarkeit während saisonaler Spitzen und hohe Kosten für "Nachtschichten" durch lokales Personal.',
      solution:
        'Sie erhalten ein Team, das bereit für einen intensiven Schichtplan ist. Personalkosten werden vorhersehbar und fix.',
      roles: ['Kommissionierer', 'Verpacker', 'Lader', 'Staplerfahrer'],
      points: [
        'Wir arbeiten für saisonale Wellen und ein hohes Schichttempo',
        'Wir sorgen für eine bessere Vorhersehbarkeit der Personalkosten',
        'Wir helfen bei der Planung von Teamstarts ohne Panik',
      ],
      cta: 'Berechnung für Lager und Logistik erhalten',
    },
    {
      title: 'Hotellerie und Service',
      colSpan: 2,
      text: 'Stabile Teams für Zimmerreinigung, Küchenhilfe und tägliche Servicearbeiten.',
      image: '/images/industry-hospitality.jpg',
      alt: 'Personal in Hotellerie und Service',
      tags: ['Zimmerreinigung', 'Küchenhilfe', 'Servicearbeiten'],
      problem:
        'In Spitzenzeiten ist es schwer, ein stabiles Serviceteam aufrechtzuerhalten, wenn lokales Personal schnell den Arbeitgeber wechselt oder nicht zur Schicht erscheint.',
      solution:
        'Wir wählen Mitarbeiter für einen längeren Arbeitshorizont aus und bauen einen legalen Weg zum Standort auf, damit das operative Team nicht ständig im Notfall-Rekrutierungsmodus lebt.',
      roles: ['Zimmermädchen', 'Küchenpersonal', 'Servicekräfte', 'Allround-Helfer'],
      points: [
        'Wir reduzieren Chaos bei der täglichen Schichtplanung',
        'Wir verstärken Hotels und Service-Standorte in saisonalen Spitzen',
        'Wir bieten einen klaren und legalen Beschäftigungsweg',
      ],
      cta: 'Berechnung für Hotellerie und Service erhalten',
    },
  ],
  frameworkTitle: 'Warum entscheiden sich Unternehmen für Arbeitskräfte aus Asien und Afrika?',
  frameworkLead:
    'Es geht nicht um einen "billigeren Ersatz", sondern um Teamstabilität, Motivation und einen planbaren, langen Arbeitszyklus vor Ort.',
  framework: [
    {
      title: 'Hohe Motivation',
      text: 'Für Kandidaten aus diesen Regionen ist die Arbeit in Europa eine Chance auf eine bessere Zukunft, weshalb sie den Arbeitsplatz mehr schätzen und nach einem Monat seltener das Unternehmen wechseln.',
    },
    {
      title: 'Disziplin',
      text: 'In vielen asiatischen Ländern baut die Arbeitskultur auf Respekt vor Hierarchie, klaren Anweisungen und der stabilen Ausführung sich wiederholender Vorgänge auf.',
    },
    {
      title: 'Langfristiges Engagement',
      text: 'Die Mitarbeiter reisen mit speziellen Arbeitsvisa für längere Zeit an, was das Problem des saisonalen Personalverlusts und ständiger Neustarts der Rekrutierung beseitigt.',
    },
  ],
  fitTitle: 'Wann brauchen Sie definitiv internationale Personalbeschaffung?',
  fitLead:
    'Wenn Sie Ihre Situation in diesen Signalen wiedererkennen, löst lokale Rekrutierung das Problem wahrscheinlich nicht mehr systematisch.',
  fitSignals: [
    'Fluktuation über 20 %: Sie verbringen mehr Zeit mit Interviews als mit der Produktionssteuerung.',
    'Überhitzter lokaler Markt: Die Gehaltserwartungen lokaler Kandidaten steigen, aber die Produktivität nicht.',
    'Planung neuer Standorte oder Linien: Sie scheuen davor zurück, neue Kapazitäten zu starten, weil niemand da ist, der arbeiten kann.',
    'Rekrutierungskosten steigen: Lokale Agenturen verlangen hohe Provisionen, und die Leute kündigen nach einer Woche.',
  ],
  ctaTitle: 'Benötigen Sie einen Startplan für eine bestimmte Branche?',
  ctaLead:
    'Geben Sie Ihre Nische, die Teamgröße und den Startzeitraum an, und wir schlagen das beste Rekrutierungsmodell speziell für Ihren Betrieb vor.',
  seoTitle: 'Internationale Personalbeschaffung für Produktion, Lager und Bauwesen',
  seoText:
    'VW Recruit ist auf die umfassende Lösung von Personalengpässen für europäische Unternehmen spezialisiert. Wir bieten die Rekrutierung von Linienpersonal für Lager, Fabriken und Baustellen an und nutzen dabei die Ressourcen von Ländern mit einem überschüssigen Arbeitskräftepotenzial, insbesondere den Philippinen, Indien, Vietnam und afrikanischen Ländern. Unser Modell umfasst nicht nur das Recruiting, sondern auch die vollständige Dokumentenabwicklung, Logistik und die Anpassung der Mitarbeiter vor Ort, wodurch Kunden die operativen Personalkosten um bis zu 54 % senken können.',
}

deContent.report = {
  title: 'Arbeitsmarkt 2026: Wenn lokale Personalbeschaffung nicht mehr ausreicht',
  lead:
    'Ein Analysebericht für Arbeitgeber, die die tatsächlichen Kosten, Fristen und rechtlichen Nuancen der internationalen Personalbeschaffung verstehen wollen.',
  description:
    'Laden Sie den Bericht über internationale Personalbeschaffung, Personalkosten, rechtliche Risiken und den Teamstart herunter.',
  eyebrow: 'Bericht',
  intro:
    'Dies ist nicht nur ein PDF "für die Akten", sondern Inhalt, der Interesse in ein substanzielles Gespräch über Kosten, Startfristen, Legalität und die Bereitschaft des Unternehmens zur internationalen Einstellung verwandelt.',
  stats: [
    { value: '1', label: 'praxisnaher Analysebericht' },
    { value: '5', label: 'wichtige Erkenntnisse enthalten' },
    { value: '1', label: 'klare Conversion-Aktion' },
  ],
  pointsTitle: 'Was der Bericht enthält',
  points: [
    'Logik des Kostenvergleichs: lokale Einstellung vs. internationale Rekrutierung',
    'Häufigste rechtliche Fehler bei der Einstellung von Ausländern',
    'So bereiten Sie den Betrieb auf Onboarding und Anpassung vor',
    'Was sich tatsächlich auf die Startfristen vom Briefing bis zur Schicht auswirkt',
    'Wie man den Personalengpass in operativen und manuellen Rollen reduziert',
  ],
  benefitsTitle: 'Warum Unternehmen diesen Bericht anfragen',
  benefitsLead:
    'Der Bericht ist besonders nützlich, wenn das Unternehmen bereits Personalengpässe spürt und statt abstrakter Informationen ein klares Lösungsmodell benötigt.',
  benefits: [
    {
      title: 'Schnellere interne Abstimmung',
      text: 'Hilft dem Inhaber, dem operativen Betrieb und der HR, die gleiche Sprache über den realen Weg zum Rekrutierungsstart zu sprechen.',
    },
    {
      title: 'Klarerer Blick auf die Kosten',
      text: 'Ermöglicht einen nüchternen Vergleich von Gehaltsdruck, Startfristen und Risiken für die Teamkontinuität.',
    },
    {
      title: 'Besserer Übergang zum nächsten Schritt',
      text: 'Verwandelt "nur mal schauen" in eine fundierte Beratung mit spezifischen Einschränkungen und Fristen.',
    },
  ],
  trustTitle: 'Was diesen Bericht wirklich nützlich macht',
  trustLead:
    'Starkes Analysematerial sollte kein allgemeiner HR-Inhalt sein. Es muss direkt auf das Geschäftsproblem antworten, wegen dem eine Person das Formular ausfüllt.',
  trustPoints: [
    'Aufgebaut um Personalengpässe in operativen Betrieben, nicht um allgemeine Theorien',
    'Vorbereitet als Grundlage für das erste Beratungs- oder Verkaufsgespräch',
    'Nützlich für Arbeitgeber, die prüfen, ob das Modell zu ihrem Standort und ihren Fristen passt',
  ],
  faqTitle: 'Fragen vor dem Download',
  faq: [
    {
      q: 'Für wen ist dieser Bericht?',
      a: 'Für Arbeitgeber in Produktion, Logistik, Bauwesen, Gastgewerbe und anderen operativen Betrieben mit Personalmangel oder Gehaltsdruck.',
    },
    {
      q: 'Ist das nur ein allgemeines PDF?',
      a: 'Nein. Der Bericht soll helfen, eine echte Einstellungsentscheidung zu treffen und ein fundiertes Gespräch über das Einführungsmodell, Fristen und Einschränkungen vorzubereiten.',
    },
    {
      q: 'Was passiert nach dem Absenden des Formulars?',
      a: 'Die Person erhält den Weg zur PDF-Lieferung und wird gleichzeitig zu einem qualifizierten Lead für eine weitere Beratung zum Personalbedarf.',
    },
  ],
  ctaTitle: 'Holen Sie sich den Bericht und verstehen Sie Ihren nächsten Personalschritt',
  ctaLead:
    'Hinterlassen Sie Ihre Kontaktdaten, und wir senden Ihnen das PDF. Zudem helfen wir Ihnen zu bewerten, ob das Modell der internationalen Personalbeschaffung zu Ihrem aktuellen Personalmangel passt.',
  formTitle: 'Bericht anfordern',
  formLead:
    'Füllen Sie ein kurzes Formular aus, um das PDF zu erhalten und zu einem fundierteren Gespräch über Personalkosten, Startfristen und rechtliche Vorbereitung überzugehen.',
  formNote: 'Am nützlichsten für Arbeitgeber, die Rekrutierung, Ersatz oder Teamskalierung planen.',
}

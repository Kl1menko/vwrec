const languageCoverage = [
  'Ukrainian',
  'English',
  'Czech',
  'Polish',
  'Slovak',
  'German',
  'Lithuanian',
  'Estonian',
  'Hungarian',
  'Croatian',
  'Romanian',
  'Bulgarian',
]

export function createLocaleContent({
  code,
  name,
  nativeName,
  heroTitle,
  heroLead,
  homeLabel,
  translated = false,
}) {
  return {
    locale: {
      code,
      name,
      nativeName,
      translated,
    },
    site: {
      title: 'VW Recruit',
      description:
        'International recruitment for production, logistics, construction, hospitality, and operational teams.',
      languages: languageCoverage,
    },
    navigation: {
      items: [
        { key: 'home', label: homeLabel ?? 'Home' },
        { key: 'services', label: translated ? 'Services' : 'Services' },
        { key: 'industries', label: translated ? 'Industries' : 'Industries' },
        { key: 'cases', label: translated ? 'Cases' : 'Cases' },
        { key: 'report', label: translated ? 'Report' : 'Report' },
        { key: 'contacts', label: translated ? 'Contacts' : 'Contacts' },
      ],
      primaryCta: 'Calculate hiring cost',
      secondaryCta: 'Book a call',
    },
    home: {
      meta: {
        title: 'International recruitment for labor-intensive businesses',
        description:
          'Reduce staffing costs and close labor shortages with international recruitment from Asia and Africa.',
      },
      hero: {
        eyebrow: 'International recruitment for business',
        title: heroTitle,
        lead: heroLead,
        metrics: [
          { value: '12', label: 'site languages prepared' },
          { value: '4', label: 'priority industries' },
          { value: '1', label: 'mobile-first lead flow' },
        ],
        actions: [
          { label: 'Start hiring quiz', action: 'quiz' },
          { label: 'Request consultation', action: 'callback' },
        ],
      },
      comparison: {
        title: 'Why companies switch from local hiring to international recruitment',
        items: [
          'Lower pressure on payroll budgets',
          'More stable access to operational talent',
          'Turnkey legal and onboarding support',
        ],
      },
      industries: {
        title: 'Priority industries',
        items: [
          'Manufacturing',
          'Construction',
          'Warehouses & Logistics',
          'Hotels & Service',
        ],
      },
      process: {
        title: 'How cooperation works',
        steps: [
          'Audit your staffing gap and hiring target',
          'Match role profile, sourcing geography, and timeline',
          'Coordinate legal, logistics, arrival, and onboarding',
        ],
      },
      faq: {
        title: 'Frequently asked questions',
        items: [
          {
            q: 'How fast can a hiring project start?',
            a: 'The starter build is ready for a timeline-focused consultation flow and a future FAQ content expansion.',
          },
          {
            q: 'Can legal support be highlighted on every page?',
            a: 'Yes. The current architecture keeps trust blocks reusable across home, services, industry pages, and case pages.',
          },
          {
            q: 'Will every locale have separate SEO URLs?',
            a: 'Yes. Locale-based page generation is already configured for all required languages.',
          },
        ],
      },
      finalCta: {
        title: 'Need a staffing plan for the next hiring cycle?',
        lead: 'Launch with a clear offer, quiz, consultation CTA, and scalable multilingual page structure.',
      },
    },
    services: {
      title: 'Turnkey international recruitment services',
      lead: 'Explain recruitment, legal support, screening, logistics, and onboarding as separate reusable content blocks.',
    },
    industries: {
      title: 'Industry-specific hiring solutions',
      lead: 'Create SEO-focused pages for manufacturing, construction, warehousing, hospitality, and other operational sectors.',
    },
    cases: {
      title: 'Case studies and measurable outcomes',
      lead: 'Keep each case on a separate SEO-friendly URL with challenge, solution, timeline, and results.',
    },
    report: {
      title: 'Gated report landing page',
      lead: 'Use a focused lead magnet about why local hiring loses efficiency and capture demand with a short form.',
    },
    about: {
      title: 'About VW Recruit',
      lead: 'Present the company, international network, and operational approach in a trust-building format.',
    },
    contacts: {
      title: 'Talk to the VW Recruit team',
      lead: 'Add contact channels, quick lead form, messenger links, and call booking options.',
    },
    faqPage: {
      title: 'FAQ for employers',
      lead: 'Cluster content by legal questions, timelines, housing, language barriers, guarantees, and replacement terms.',
    },
    privacy: {
      title: 'Privacy policy',
      lead: 'Replace the current placeholder with approved legal copy before launch.',
    },
    terms: {
      title: 'Terms & conditions',
      lead: 'Replace the current placeholder with approved legal and service terms before launch.',
    },
    forms: {
      lead: {
        title: 'Request hiring proposal',
        success: 'Thanks. Your request has been captured and is ready for Google-based delivery integration.',
      },
      callback: {
        title: 'Book a callback',
        success: 'Thanks. We saved your callback request.',
      },
      report: {
        title: 'Get the report',
        success: 'Thanks. The report delivery flow is ready to connect to your file and Google workflow.',
      },
      contact: {
        title: 'Send a message',
        success: 'Thanks. Your message was queued for the contact flow.',
      },
    },
    quiz: {
      title: 'Hiring calculator',
      progressLabel: 'Step',
      completionTitle: 'Your request is ready',
      completionLead:
        'The quiz flow is connected to a single payload structure, so it can be sent to Apps Script, Google Forms, or a Sheet-backed endpoint.',
      steps: [
        {
          id: 'industry',
          label: 'Which industry do you need workers for?',
          type: 'options',
          options: ['Manufacturing', 'Construction', 'Warehouses & Logistics', 'Hotels & Service', 'Other'],
        },
        {
          id: 'teamSize',
          label: 'How many workers do you need?',
          type: 'options',
          options: ['1–10', '11–30', '31–50', '50+'],
        },
        {
          id: 'timeline',
          label: 'When do you need the team to start?',
          type: 'options',
          options: ['Urgently', 'Within 2–4 weeks', 'Within 1–2 months', 'Just exploring options'],
        },
        {
          id: 'location',
          label: 'Where is your business located?',
          type: 'text',
          fields: [
            { name: 'country', label: 'Country', required: true },
            { name: 'city', label: 'City', required: false },
          ],
        },
        {
          id: 'problem',
          label: 'What is the biggest hiring problem right now?',
          type: 'options',
          options: ['High salary costs', 'Staff shortage', 'Turnover', 'Seasonal peaks', 'Scaling production', 'Other'],
        },
        {
          id: 'contact',
          label: 'Where should we send your estimate?',
          type: 'text',
          fields: [
            { name: 'name', label: 'Name', required: true },
            { name: 'company', label: 'Company', required: true },
            { name: 'phone', label: 'Phone', required: true },
            { name: 'email', label: 'Email', required: true },
          ],
        },
      ],
    },
  }
}

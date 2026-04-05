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
    brand: {
      tagline: 'International hiring partner',
      homeAriaLabel: 'VW Recruit home',
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
        title: 'International hiring partner for employers facing labor shortages',
        description:
          'Reduce staffing pressure, improve launch predictability, and build operational teams with international recruitment from Asia and Africa.',
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
        title: 'Why employers switch from repeated local hiring to international recruitment',
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
            a: 'Once the staffing need, role profile, and timing are clear, the first candidate flow can typically start within days rather than weeks.',
          },
          {
            q: 'Can legal support be highlighted on every page?',
            a: 'Yes. Legal support, permits, visas, and onboarding coordination can be explained consistently across the homepage, service page, and sector pages.',
          },
          {
            q: 'Will every locale have separate SEO URLs?',
            a: 'Yes. Each language version uses its own route structure, which supports localized SEO pages and future content scaling.',
          },
        ],
      },
      finalCta: {
        title: 'Need a staffing plan for the next hiring cycle?',
        lead: 'Tell us where hiring pressure is slowing the business down, and we will map the right recruitment route, timing, and next step.',
      },
    },
    services: {
      title: 'Turnkey international recruitment services for operational teams',
      lead:
        'See how sourcing, legal support, logistics, and onboarding work together in one hiring route built for employers who need teams to launch without delays.',
      eyebrow: 'Services',
      intro:
        'This service model is built for employers who need more than candidate sourcing. It covers the full route from staffing request to first shift, with clearer timing, lower coordination pressure, and one accountable process.',
      cta: 'Request service consultation',
      metrics: [
        { value: '7-14', suffix: ' days', label: 'to first candidates' },
        { value: '100%', suffix: '', label: 'document support' },
        { value: '4', suffix: ' stages', label: 'from request to team start' },
      ],
      heroBadges: [
        { value: '7-14', suffix: 'd', label: 'to first candidates' },
        { value: '100%', suffix: '', label: 'document support' },
        { value: 'Turnkey', suffix: '', label: 'launch model' },
      ],
      pillars: [
        {
          title: 'Candidate sourcing',
          text: 'Role profiling, sourcing geography, and first candidate shortlist for operational teams.',
        },
        {
          title: 'Compliance support',
          text: 'Work permits, visa coordination, and document flow management before arrival.',
        },
        {
          title: 'Arrival and onboarding',
          text: 'Logistics coordination, arrival support, and first-stage adaptation for the team.',
        },
      ],
      offerCards: [
        {
          title: 'Predictable hiring route for employers',
          text: 'A clearer path from staffing request to approved candidates, documents, arrival, and team launch.',
        },
        {
          title: 'Transparent legal route for candidates',
          text: 'A more understandable process from initial screening to documents, travel, adaptation, and first shift.',
        },
        {
          title: 'Support after the team starts',
          text: 'Coordination, adaptation, replacements, and communication support during the first stage of launch.',
        },
      ],
      beam: {
        title: 'How the hiring process moves from request to first shift',
        lead:
          'A visual route that shows how sourcing, approvals, documents, arrival, and launch stay connected in one process.',
        centerLabel: 'Processing',
        outputLabel: 'Team launch',
        steps: [
          'Brief',
          'Search',
          'Approval',
          'Documents',
          'Arrival',
        ],
      },
      timeline: [
        {
          title: 'Brief and role audit',
          text: 'Define team size, profile, start window, and practical constraints of the site.',
        },
        {
          title: 'Search and shortlist',
          text: 'Launch sourcing, screen candidates, and prepare profiles for review.',
        },
        {
          title: 'Documents and logistics',
          text: 'Move approved candidates through permit, visa, travel, and arrival planning.',
        },
        {
          title: 'Start and support',
          text: 'Coordinate arrival, first shifts, and communication on the client side.',
        },
      ],
      deliverables: [
        'Shortlist of screened candidates ready for approval',
        'Document process tracking for each approved worker',
        'Launch timeline with sourcing and arrival milestones',
        'Communication support during startup and adaptation',
      ],
      roles: [
        'Manufacturing lines and packaging teams',
        'Warehousing, picking, sorting, and logistics operations',
        'Construction, assembly, and support roles',
        'Hotels, kitchen, housekeeping, and service staff',
      ],
      promise: {
        title: 'A recruitment model built for employers who need predictability',
        text: 'The service should make it easy to understand what is covered, where the risk is reduced, and what the next operational step looks like.',
      },
    },
    industries: {
      title: 'International hiring solutions for industries facing the most staffing pressure',
      lead:
        'See how international recruitment fits manufacturing, construction, warehousing, hospitality, and other operational sectors where hiring delays affect output.',
      description:
        'Explore international hiring solutions for manufacturing, construction, warehousing, hospitality, and other operational teams facing labor shortages.',
      eyebrow: 'Industries',
      intro:
        'This page helps employers quickly recognize whether the hiring model fits their sector, operating pressure, and team-launch timeline before they move into a more specific conversation.',
      stats: [
        { value: '4', label: 'priority sectors' },
        { value: '1', label: 'launch model across all pages' },
        { value: '3', label: 'stages under control' },
      ],
      sectors: [
        {
          title: 'Manufacturing',
          text: 'Stable teams for production lines, packaging, sorting, and support operations where continuity and shift discipline matter.',
          image: '/images/industry-manufacturing.jpg',
          alt: 'Workers in manufacturing',
          tags: ['Production lines', 'Packaging', 'Sorting'],
          points: [
            'Support for repetitive operational roles',
            'Faster candidate launch for shift-based work',
            'Clear route from sourcing to arrival',
          ],
        },
        {
          title: 'Construction',
          text: 'Recruitment support for contractors and active sites that need assembly, support, and site reinforcement without timeline slips.',
          image: '/images/industry-construction.jpg',
          alt: 'Workers at a construction site',
          tags: ['Assemblers', 'Support roles', 'Site teams'],
          points: [
            'Built around project deadlines',
            'Permit and logistics coordination',
            'Operational reinforcement for active sites',
          ],
        },
        {
          title: 'Warehouses & Logistics',
          text: 'Teams for picking, sorting, packing, and goods movement when peaks and seasonal volumes create staffing pressure.',
          image: '/images/industry-logistics.jpg',
          alt: 'Workers in warehouse and logistics operations',
          tags: ['Picking', 'Sorting', 'Goods movement'],
          points: [
            'Designed for shift operations and peaks',
            'Predictable arrival planning',
            'Shortlist speed for warehouse needs',
          ],
        },
        {
          title: 'Hotels & Service',
          text: 'Staffing model for housekeeping, kitchens, and service operations where reliability and onboarding speed are critical.',
          image: '/images/industry-hospitality.jpg',
          alt: 'Hotel and service staff',
          tags: ['Housekeeping', 'Kitchen teams', 'Service staff'],
          points: [
            'Clear legal employment route',
            'Support for service-focused team launch',
            'Fast adaptation for operational roles',
          ],
        },
      ],
      frameworkTitle: 'What makes this industries page useful to employers',
      frameworkLead:
        'A strong industries page should do more than list sectors. It should help an employer see their staffing problem, understand the route, and decide whether to take the next step.',
      framework: [
        {
          title: 'Map the business context',
          text: 'Each block should connect the industry to real staffing pressure: seasonality, scaling, turnover, or launch deadlines.',
        },
        {
          title: 'Explain why the model fits',
          text: 'Clarify what the sector actually needs from recruitment, documents, logistics, and startup support.',
        },
        {
          title: 'Open the path to deeper pages',
          text: 'Use this page as the parent for future vertical pages, case studies, and industry-specific CTAs.',
        },
      ],
      fitTitle: 'Signals that the model is a fit',
      fitLead:
        'These patterns usually indicate that a business should explore international recruitment instead of relying only on repeated local hiring.',
      fitSignals: [
        'High turnover in line, warehouse, or support roles',
        'Seasonal peaks or expansion plans that local hiring cannot absorb',
        'Repeated launch delays because the team is never complete',
        'Need for a more predictable route from request to first shift',
      ],
      ctaTitle: 'Need a hiring plan built around your industry?',
      ctaLead:
        'Tell us where staffing pressure is hurting operations most, and we will map the right hiring route, timing, and next step for your team.',
    },
    cases: {
      title: 'Recruitment case studies that show the route, timeline, and business outcome',
      lead:
        'Review real hiring scenarios that show what the employer needed, how the launch was structured, and what operational result the project was built to deliver.',
      description:
        'Review international recruitment case studies with hiring challenges, launch routes, timelines, and business outcomes for operational teams.',
      eyebrow: 'Case studies',
      intro:
        'For employers, strong case studies reduce uncertainty. They show where the staffing pressure started, how the route was built, and why the model made sense in a real operating environment.',
      stats: [
        { value: '3', label: 'featured launch stories' },
        { value: '4', label: 'core industries covered' },
        { value: '1', label: 'clear next step on every case' },
      ],
      featured: [
        {
          title: 'Delta Pack',
          subtitle: 'Manufacturing company, Central Europe',
          problem:
            'A packaging line needed a stable shift team after repeated delays in local hiring.',
          solution:
            'The launch combined sourcing, document flow, arrival planning, and startup coordination into one route.',
          result:
            'The employer received an approved team launch plan with first candidates prepared for review.',
          timeline: 'First candidates in 7-14 days',
          image: '/images/industry-manufacturing.jpg',
          alt: 'Workers on a manufacturing line',
          metrics: [
            { label: 'Need', value: '32 workers' },
            { label: 'Format', value: 'Packaging line' },
            { label: 'Focus', value: 'Stable shift launch' },
          ],
        },
        {
          title: 'Nord Cargo Hub',
          subtitle: 'Warehouse and logistics operation',
          problem:
            'The warehouse could not cover peak loads without a predictable staffing reserve.',
          solution:
            'The project focused on shortlist speed, document control, and arrival planning for shift-based work.',
          result:
            'The operation got a clearer timeline to prepare warehouse leads, onboarding, and first-shift staffing.',
          timeline: 'Fast launch for peak season',
          image: '/images/industry-logistics.jpg',
          alt: 'Warehouse operations team',
          metrics: [
            { label: 'Need', value: 'Sorting and picking team' },
            { label: 'Format', value: 'Warehouse operations' },
            { label: 'Focus', value: 'Peak readiness' },
          ],
        },
        {
          title: 'Urban Build Group',
          subtitle: 'Construction contractor',
          problem:
            'The contractor needed to reinforce active sites without extending launch deadlines.',
          solution:
            'Recruitment, permit preparation, logistics, and first-stage adaptation were aligned as a single workflow.',
          result:
            'The client got a route that reduced coordination gaps between candidate approval and site start.',
          timeline: 'Route designed around site deadlines',
          image: '/images/industry-construction.jpg',
          alt: 'Construction workers on site',
          metrics: [
            { label: 'Need', value: 'Site reinforcement' },
            { label: 'Format', value: 'Construction roles' },
            { label: 'Focus', value: 'Deadline protection' },
          ],
        },
      ],
      frameworkTitle: 'What makes a case study persuasive',
      frameworkLead:
        'A strong case study should not just state the result. It should show why the hiring route was realistic, practical, and relevant to the employer situation.',
      routeLabel: 'Route',
      outcomeLabel: 'Outcome',
      framework: [
        {
          title: 'Clear starting problem',
          text: 'Show where local hiring, turnover, or seasonal pressure created a business bottleneck.',
        },
        {
          title: 'Transparent launch route',
          text: 'Explain how sourcing, documents, travel, and startup were coordinated in one model.',
        },
        {
          title: 'Operational outcome',
          text: 'Translate the project into staffing continuity, launch speed, and better predictability for the site.',
        },
      ],
      checklistTitle: 'What every future case study should include',
      checklist: [
        'Role profile and hiring challenge',
        'Country mix or sourcing route',
        'Timeline from brief to arrival',
        'Legal and logistics support points',
        'Business outcome and next step CTA',
      ],
      ctaTitle: 'Need a similar hiring route for your team?',
      ctaLead:
        'Share your staffing gap and we will map the right recruitment route, launch timing, and next operational step for your business.',
    },
    report: {
      title: 'International hiring report for employers under staffing pressure',
      lead:
        'Download a practical report that helps employers compare local hiring costs, staffing risk, and the real launch route for international recruitment.',
      description:
        'Download a practical international hiring report for employers facing labor shortages, payroll pressure, and launch delays in operational teams.',
      eyebrow: 'Report',
      intro:
        'Built for employers who need to assess whether international hiring is the right next step, this report turns general interest into a more informed staffing conversation.',
      stats: [
        { value: '1', label: 'focused lead magnet' },
        { value: '5', label: 'core insights inside' },
        { value: '1', label: 'clear conversion action' },
      ],
      pointsTitle: "What you'll find inside the report",
      points: [
        'Cost comparison logic for local vs international hiring',
        'The most common legal mistakes in foreign-worker hiring',
        'How to prepare operations for onboarding and adaptation',
        'What affects launch speed from brief to first shift',
        'How to reduce staffing pressure in labor-intensive roles',
      ],
      benefitsTitle: 'Why employers download it',
      benefitsLead:
        'The report works best when a business is already feeling staffing pressure and needs a more realistic decision model.',
      benefits: [
        {
          title: 'Faster internal alignment',
          text: 'It gives owners, operations, and HR a shared view of what the hiring route actually involves.',
        },
        {
          title: 'Clearer cost framing',
          text: 'It helps compare payroll pressure, launch timing, and continuity risk more clearly than job-board hiring alone.',
        },
        {
          title: 'Better next-step decisions',
          text: 'It moves the conversation from vague interest to a concrete launch discussion with real constraints.',
        },
      ],
      trustTitle: 'Why this report earns trust',
      trustLead:
        'A strong lead magnet is not generic industry content. It must connect directly to the business problem behind the form submission.',
      trustPoints: [
        'Built around operational staffing pressure, not generic HR theory',
        'Structured to support the first sales or consultation conversation',
        'Useful for employers evaluating whether the model fits their site and timeline',
      ],
      faqTitle: 'Questions before downloading',
      faq: [
        {
          q: 'Who is this report for?',
          a: 'It is designed for employers in manufacturing, logistics, construction, hospitality, and other operational businesses that face labor shortages or payroll pressure.',
        },
        {
          q: 'Is this a generic PDF?',
          a: 'No. The report is meant to frame a real staffing decision and prepare the next conversation about launch model, timing, and constraints.',
        },
        {
          q: 'What happens after form submission?',
          a: 'The user gets the report flow and also becomes a qualified lead for a follow-up conversation about hiring needs.',
        },
      ],
      ctaTitle: 'Download the report and clarify your next hiring move',
      ctaLead:
        'Leave your details and we will send the PDF while helping you understand whether this hiring model fits your current staffing gap.',
      formTitle: 'Download the report',
      formLead:
        'Use the short form to receive the PDF and start a more informed conversation about staffing costs, launch timing, and legal readiness.',
      formNote: 'Best suited for employers planning hiring, replacement, or expansion.',
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
        title: 'Download the report',
        success: 'Thanks. We received your request and will send the PDF report to your email shortly.',
      },
      contact: {
        title: 'Send a message',
        success: 'Thanks. Your message was queued for the contact flow.',
      },
    },
    ui: {
      modalClose: 'Close modal',
      leadCapture: 'Lead capture',
      video: 'Video',
      videoPlay: 'Play video',
      openMenu: 'Open menu',
      primaryNav: 'Primary',
      fieldName: 'Name',
      fieldCompany: 'Company',
      fieldEmail: 'Email',
      fieldPhone: 'Phone',
      sendRequest: 'Send request',
      requestCallback: 'Request callback',
      getReport: 'Get report',
      bookCall: 'Book a call',
      quizEyebrow: 'Quiz',
      quizContinue: 'Continue',
      quizBack: 'Back',
      quizSubmit: 'Submit',
      quizReady: 'Ready',
      quizValidationError: 'Please complete the current step.',
      quizSubmitError: 'Submission failed. Please try again.',
      processEyebrow: 'Process',
      caseStudy: 'Case study',
      caseViewLabel: 'View case',
      leadCaptureEyebrow: 'Lead capture',
      faqEyebrow: 'FAQ',
      finalCtaEyebrow: 'Final CTA',
      downloadReport: 'Download report',
      openContactsPage: 'Open contacts page',
      projectsExamples: 'Project examples',
      reelPlaceholder: 'Space for a reel or video in a popup modal after connecting the sources.',
      industriesLead:
        'Companies most often use this hiring model for operational roles in manufacturing, warehouses, construction, and service.',
      legalPlaceholder: 'Legal copy placeholder. Replace with approved content before launch.',
      footerDescription:
        'Mobile-first starter for multilingual B2B recruitment pages, case studies, lead flows, and SEO expansion.',
      footerCorePages: 'Core pages',
      footerLegal: 'Legal',
      privacyPolicy: 'Privacy policy',
      termsAndConditions: 'Terms & conditions',
      formRequiredError: 'Please complete the required form fields.',
      formSubmittingButton: 'Sending...',
      formSubmittingStatus: 'Sending form...',
      formSubmitError: 'Submission failed. Please try again.',
      industryVisualLogisticsAlt: 'Workers in warehouse and logistics operations',
      industryVisualConstructionAlt: 'Workers at a construction site',
      industryVisualHospitalityAlt: 'Hotel and service staff',
      industryVisualManufacturingAlt: 'Workers in manufacturing',
      industrySlidePlaceholder:
        'This vertical can be expanded into SEO pages, quiz paths, and personalized CTAs.',
      comparisonCardCta: 'Calculate hiring cost',
      guaranteesLegalDelta: 'Quotas, permits, visas',
      guaranteesReplacementMetric: 'No fee',
      guaranteesReplacementDelta: 'Fast replacement under guarantee',
      guaranteesSupportMetric: 'Turnkey',
      guaranteesSupportDelta: 'From sourcing to first shift',
      guaranteesFallbackDelta: 'VW Recruit advantage',
      guaranteeSupportStepOne: 'Selection',
      guaranteeSupportStepTwo: 'Arrival',
      guaranteeSupportNote: 'First shift start',
      guaranteeChecklistQuota: 'Quotas',
      guaranteeChecklistPermit: 'Permit',
      guaranteeChecklistVisa: 'Visa',
      reviewFallbackValue: '7 YEARS',
      reviewLabelPrefix: '7 years ',
      servicesShortRequestEyebrow: 'Quick request',
      servicesHeroGhostCta: 'View service terms',
      servicesHeroPanelTitle: 'Sourcing, documents, logistics, and team launch in one process',
      servicesHeroPanelText:
        'The route is structured so the employer sees a predictable launch path, while every stage from sourcing to arrival stays coordinated in one process.',
      servicesPillarsEyebrow: 'What we cover',
      servicesPillarsTitle:
        'The service is built not as a resume search, but as a full route to launch people into work',
      servicesOfferEyebrow: 'What both sides get',
      servicesOfferTitle:
        'A model where the business gets a managed result and the candidate sees a transparent process',
      servicesOfferVisualLabel: 'VW Recruit flow',
      servicesOfferVisualPrimary: 'Employer route',
      servicesOfferVisualSecondary: 'Candidate route',
      servicesBeamEyebrow: 'Process map',
      servicesRouteEyebrow: 'How cooperation works',
      servicesRouteTitle: 'A transparent route from request to workers starting their shifts',
      servicesProofEyebrow: 'Why it converts',
      servicesProofTitle:
        'Not just candidate sourcing, but a managed service with a clear result at every stage',
      servicesFitEyebrow: 'Where it works best',
      servicesFitTitle:
        'Roles and niches where international recruitment delivers the strongest operational impact',
      servicesFitLead:
        'Each card highlights where the model gives the fastest operational return, the cleanest launch rhythm, and the strongest staffing stability.',
      servicesFitScoreLabel: 'fit score',
      servicesFitMetricOne: 'Launch speed',
      servicesFitMetricTwo: 'Retention',
      servicesFitMetricThree: 'Process clarity',
      servicesLeadEyebrow: 'Start the conversation',
      servicesLeadText:
        'For employers, this is a fast way to understand how to launch hiring. For candidates, it is a chance to get a clear explanation of the employment route and documents.',
      industriesSectionTitle: 'WHICH INDUSTRIES THIS HIRING MODEL FITS',
      industrySliderPrev: 'Previous slide',
      industrySliderNext: 'Next slide',
      quizSectionLead:
        'Step-based mobile-friendly flow with analytics events and a single submission payload.',
      caseSubtitlePlaceholder: 'Short case summary',
      caseProblemPlaceholder:
        'Separate SEO-friendly URL for the case, results, timing, and CTA.',
      processStepLabel: 'Step',
      reportPanelTitle: 'Get the material by email',
      reportPanelText:
        'Leave your contact details and we will send a useful resource about international hiring and payroll optimization.',
      reportPanelKicker: 'VW Recruit / Insight',
      reportPanelReportTitle: 'Labor market 2026',
      reportPanelReportText:
        'International workforce integration for businesses facing labor shortages',
      reportPanelGuide: 'PDF',
      reviewsPrev: 'Previous review',
      reviewsNext: 'Next review',
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

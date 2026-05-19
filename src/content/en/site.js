import { createLocaleContent } from '../create-locale-content.js'

export const enContent = createLocaleContent({
  code: 'en',
  name: 'English',
  nativeName: 'English',
  translated: true,
  homeLabel: 'Home',
  heroTitle: 'International recruitment for businesses needing people in operational roles without delays.',
  heroLead:
    'The site structure is already prepared for lead generation, multilingual SEO growth, quizzes, case studies, and consulting CTAs for B2B clients.',
})

enContent.site.description =
  'Reduce personnel costs by up to 54% with turnkey international recruitment of workers from Asia and Africa.'

enContent.navigation.items = [
  { key: 'home', label: 'Home' },
  { key: 'services', label: 'Services' },
  { key: 'industries', label: 'Industries' },
  { key: 'cases', label: 'Cases' },
  { key: 'report', label: 'Report' },
  { key: 'contacts', label: 'Contacts' },
]

enContent.navigation.primaryCta = 'Calculate recruitment'
enContent.navigation.secondaryCta = 'Book a call'

enContent.home = {
  meta: {
    title: 'International employee recruitment for business',
    description:
      'Reduce personnel costs and close staffing shortages with turnkey international recruitment of workers from Asia and Africa.',
  },
  hero: {
    lines: ['CUT PERSONNEL', 'COSTS'],
    highlight: 'BY UP TO 54%',
    lead:
      'with turnkey international recruitment of workers from <strong>Asia and Africa</strong>',
    stats: [
      { value: 10, suffix: 'DAYS', label: 'to select first candidates' },
      { value: 7, suffix: 'YEARS', label: 'of experience in international recruitment' },
      { value: 100, suffix: '%', label: 'document and arrival support' },
    ],
    video: {
      src: '/videos/international-recruitment-overview.mp4',
      poster: '/video-poster-home.svg',
      type: 'video/mp4',
    },
  },
  comparison: {
    eyebrow: 'Hiring model comparison',
    title: 'How businesses lose to talent shortages in the local market',
    cards: [
      {
        title: 'Others',
        brandNote: 'local hiring / other agencies',
        amount: '$36,000',
        period: '/ month',
        note: 'for a team of 30 workers',
        variant: 'other',
        rows: [
          {
            title: 'Shortage of strong candidates',
            text: 'Dozens of companies compete for the same good workers simultaneously.',
          },
          {
            title: 'Vacancies stay open longer',
            text: 'While the search continues, the team operates under constant overload.',
          },
          {
            title: 'Constant re-hiring',
            text: 'Due to talent shortages, business keeps returning to the search again and again.',
          },
        ],
      },
      {
        title: 'VW Recruit',
        brandNote: 'systematic talent shortage solution',
        amount: '$18,000',
        period: '/ month',
        note: 'for a team of 30 workers',
        variant: 'brand',
        rows: [
          {
            title: 'Access to a wider talent pool',
            text: 'We work beyond the boundaries of the local talent shortage.',
          },
          {
            title: 'Fast access to candidates',
            text: 'First relevant people ready in just 7–14 days.',
          },
          {
            title: 'Focus on business continuity',
            text: 'You fill vacancies faster while competitors are still searching.',
          },
        ],
      },
    ],
    cta: 'Close the talent shortage',
  },
  industries: {
    eyebrow: 'Which industries the model suits',
    title: 'Most often, this hiring model is used for operational work',
    lead:
      'We form teams for manufacturing, warehouses, construction, and service when a business needs a predictable launch and lower personnel costs.',
    items: [
      {
        title: 'Warehouses and logistics',
        text: 'Forming teams for picking, packing, moving goods, and warehouse operations.',
      },
      {
        title: 'Construction',
        text: 'Recruiting workers for construction sites, installation, utility, and technical work.',
      },
      {
        title: 'Hotels and hospitality',
        text: 'Recruiting personnel for cleaning, kitchen, maintenance, and daily operational work.',
      },
      {
        title: 'Manufacturing',
        text: 'Recruiting workers for production lines, packaging, sorting, and auxiliary processes.',
      },
    ],
  },
  calculator: {
    eyebrow: 'Quiz calculation',
    title: 'Calculate worker recruitment for your enterprise',
    lead:
      'Answer a few short questions and get a team recruitment calculation for your business.',
  },
  casesSection: {
    eyebrow: 'Our projects',
    title: 'Our worker recruitment projects',
    lead:
      'We show what recruitment looks like in real projects: from manufacturing and warehouses to service and operational teams.',
    cta: 'All projects',
    items: [
      {
        title: 'Delta Pack',
        subtitle: 'Manufacturing enterprise, Central Europe',
        problem: 'Closed a shortage of 32 workers for the packaging line after prolonged local hiring and high turnover.',
        image: '/images/industry-manufacturing.jpg',
        alt: 'Workers on the production line',
      },
      {
        title: 'Nord Cargo Hub',
        subtitle: 'Warehouse complex and logistics',
        problem: 'Formed a shift team for picking and sorting when the business could not cover peak loads.',
        image: '/images/industry-logistics.jpg',
        alt: 'Workers in warehouse and logistics',
      },
      {
        title: 'Urban Build Group',
        subtitle: 'Construction contractor',
        problem: 'Reinforced sites with installers and utility workers to avoid disrupting the launch deadlines of a new construction stage.',
        image: '/images/industry-construction.jpg',
        alt: 'Workers on a construction site',
      },
    ],
  },
  process: {
    eyebrow: 'What happens after the request',
    title: 'What happens after your request',
    intro:
      'We clarify the number of workers, candidate requirements, and team launch dates. After that, recruitment is launched through our database and partner agencies in the recruiting countries.',
    steps: [
      {
        title: 'Vacancy analysis and recruitment launch',
        text: 'We form a candidate profile, agree on deadlines, and start searching through relevant sources.',
      },
      {
        title: 'Selection and candidate verification',
        text: 'Candidates undergo preliminary selection, document verification, and a basic interview. The enterprise receives profiles for final approval.',
      },
      {
        title: 'Document processing',
        text: 'We organize the preparation of all necessary documents for employment and entry, and control the process until ready.',
      },
      {
        title: 'Arrival and work launch',
        text: 'We coordinate logistics and worker arrival. After arrival, the team starts working at the enterprise.',
      },
    ],
  },
  guarantees: {
    eyebrow: 'Guarantees and safety',
    title: 'What business gets along with recruitment',
    items: [
      {
        title: '100% legality',
        text: 'We take care of quotas, work permits, and visa processes so the company is protected against inspections.',
      },
      {
        title: 'Free replacement',
        text: 'We provide a guarantee period for candidate replacement if the project requires stability at the start.',
      },
      {
        title: 'Full turnkey support',
        text: 'From the interview in Asia to the airport meeting and the start of the shift with adaptation and communication support.',
      },
    ],
  },
  reportBlock: {
    eyebrow: 'Analytical material',
    title: 'Why is local hiring losing efficiency?',
    lead:
      'Get the closed analytical report "Labor Market 2026: Integration of International Personnel".',
    points: [
      'Cost comparison table: Local vs Expats',
      '5 legal mistakes when hiring foreigners',
      'How to overcome the language barrier in production',
    ],
    cta: 'Download report in PDF',
  },
  reviews: {
    eyebrow: 'Trust',
    title: 'Market leaders trust us',
    items: [
      {
        name: 'Oleksandr Koval',
        company: 'Operations Director, Delta Pack',
        text: 'VW Recruit closed the shortage on the production line for us without overloading internal HR. The most valuable thing was that the team took on both recruitment and document support.',
      },
      {
        name: 'Iryna Melnyk',
        company: 'HR Lead, Nord Cargo Hub',
        text: 'We received not just candidates, but a clear team launch process. Logistics, permits, and coordination were under control, so the warehouse entered the season without disruptions.',
      },
      {
        name: 'Taras Humeniuk',
        company: 'Project Manager, Urban Build Group',
        text: 'It was important for us to quickly reinforce sites with people who actually show up for shifts. VW Recruit gave predictability in terms and strong support even after candidate arrival.',
      },
      {
        name: 'Maryna Savchuk',
        company: 'People Partner, East Service Group',
        text: 'After starting cooperation, we stopped putting out HR fires manually. The VW Recruit team quickly synchronized requirements, recruiting countries, and dates for people to enter the site.',
      },
      {
        name: 'Vitaliy Bondar',
        company: 'Operations Manager, Metal Works',
        text: 'We liked the exact level of predictability. Business understood when candidates would arrive, what documents were already ready, and at what stage each worker was.',
      },
      {
        name: 'Nataliya Chernenko',
        company: 'HR Director, West Line Logistics',
        text: 'Launch speed of shifts is critically important for logistics. With VW Recruit, we got not just recruitment, but normal operational support until people started working.',
      },
    ],
    metrics: [
      {
        value: '7 YEARS',
        label: 'Of experience in international recruitment',
      },
      {
        value: '100%',
        label: 'Control of documents and legal registration',
      },
      {
        value: '10 DAYS',
        label: 'To first candidates in recruitment',
      },
      {
        value: 'TURNKEY',
        label: 'Support from selection to shift start',
      },
    ],
  },
  media: {
    eyebrow: 'Video and answers',
    title: 'Answers to the main questions of business owners',
    reels: [
      {
        title: 'How long does it take to launch international recruitment?',
        text: 'We explain when a business gets the first candidates, what affects the deadlines, and at what stage document support is connected.',
        meta: 'Launch timeline',
        duration: '02:14',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'How does a business control legality and documents?',
        text: 'We break down what quotas, permits, and visa processes we handle so the company does not bear risks before inspections.',
        meta: 'Documents and legality',
        duration: '03:02',
        video: {
          src: '/videos/international-recruitment-overview.mp4',
          type: 'video/mp4',
          poster: '/video-poster-home.svg',
        },
      },
      {
        title: 'What happens after workers arrive at the project?',
        text: 'We show what adaptation, shift start, communication with coordinators, and team support look like at the first stage.',
        meta: 'Adaptation and support',
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
    title: 'Frequently Asked Questions',
    items: [
      {
        q: 'How is the language barrier resolved?',
        a: 'We incorporate adaptation, basic training, and communication through a coordinator or foreman so the team quickly gets involved in work.',
      },
      {
        q: 'Who is looking for housing for workers?',
        a: 'The model can include coordination of housing, logistics, and arrival, depending on the cooperation format and launch country.',
      },
      {
        q: 'What to do if a worker gets sick or does not show up for a shift?',
        a: 'At the project start, a reserve, guarantee conditions for replacement, and a rapid communication procedure with your side are agreed upon.',
      },
    ],
  },
  videoTestimonials: {
    items: [
      {
        src: '/videos/review-1.mp4',
        poster: '',
        name: 'Candidate review',
        role: 'Worker placed via VW Recruit',
      },
      {
        src: '/videos/review-2.mp4',
        poster: '',
        name: 'Candidate review',
        role: 'Worker placed via VW Recruit',
      },
    ],
  },
  finalCta: {
    title: 'Ready to close the staffing shortage and scale your business?',
    lead: 'Book a free 30-minute Zoom session with our Head of Recruitment.',
  },
}

enContent.forms.lead.title = 'Get a recruitment calculation'
enContent.forms.lead.success = 'Thank you. Your request has been saved, and we will contact you regarding recruitment.'
enContent.forms.callback.title = 'Book a call'
enContent.forms.callback.success = 'Thank you. Your call request has been saved.'
enContent.forms.report.title = 'Get the report'
enContent.forms.report.success = 'Thank you. We have received your request and will send the PDF document to your email shortly.'
enContent.forms.contact.title = 'Send a request'
enContent.forms.contact.success = 'Thank you. Your request has been received, and the VW Recruit team will contact you with the next step.'
enContent.brand.tagline = 'International hiring partner'
enContent.brand.homeAriaLabel = 'VW Recruit home'

enContent.about = {
  meta: {
    title: 'About VW Recruit',
    description:
      'Learn more about VW Recruit, international worker recruitment, team launch route, and approach to working with businesses.',
  },
  title: 'About VW Recruit',
  lead:
    'We help businesses close staffing shortages through international recruitment of workers from Asia and Africa with a clear route from request to people going on shift.',
}

enContent.faqPage = {
  meta: {
    title: 'Frequently asked questions for employers',
    description:
      'Answers to key employer questions about international recruitment: deadlines, documents, team launch, adaptation, and cooperation format.',
  },
  title: 'Frequently asked questions for employers',
  lead:
    'We have collected key questions about international worker recruitment: from launch deadlines and documents to housing, adaptation, and support logic.',
}

enContent.privacy = {
  meta: {
    title: 'Privacy Policy',
    description:
      'Read the VW Recruit privacy policy regarding the collection, processing, and protection of personal data on the website.',
  },
  title: 'Privacy Policy',
  sections: [
    {
      title: '1. General Provisions',
      paragraphs: [
        'This Privacy Policy determines the procedure for collecting, using, storing, and protecting the personal data of users of the VW Recruit website (hereinafter — the "Site"). By using our Site, you agree to the terms of this Policy. If you do not agree with these terms, please stop using the Site.',
      ],
    },
    {
      title: '2. What data we collect',
      paragraphs: ['While using the Site, we may collect the following personal data:'],
      items: [
        'Contact information: name, company name, email address, phone number. You provide this data voluntarily when filling out forms (e.g., "Book a call", "Get the report", "Calculate recruitment").',
        'Technical data: IP address, browser type, device type, page visit data (using cookies and analytical tools).',
      ],
    },
    {
      title: '3. Purpose of data collection and use',
      paragraphs: ['The collected personal data is used to:'],
      items: [
        'Contact you to provide consultations on international recruitment services.',
        'Send requested materials (e.g., PDF reports, cost calculations).',
        'Improve the Site\'s performance and analyze the effectiveness of our marketing campaigns.',
        'Send important notifications and commercial offers (with your consent).',
      ],
    },
    {
      title: '4. Data transfer to third parties',
      paragraphs: [
        'We do not sell, exchange, or transfer your personal data to third parties without your consent, except in cases provided by law. Data may be accessible to our reliable contractors (e.g., hosting providers, email marketing services) who are obliged to maintain its confidentiality.',
      ],
    },
    {
      title: '5. Data protection and storage',
      paragraphs: [
        'We take appropriate technical and organizational measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Data is stored only for the time necessary to fulfill the purposes stated in this Policy, or per legal requirements.',
      ],
    },
    {
      title: '6. User rights',
      paragraphs: ['You have the right to:'],
      items: [
        'Gain access to your personal data that we store.',
        'Request the correction of inaccuracies in your data.',
        'Request the deletion of your data (the "right to be forgotten").',
        'Withdraw consent for data processing at any time.',
      ],
    },
    {
      title: '7. Use of Cookies',
      paragraphs: [
        'Our Site uses cookies to ensure proper page operation, traffic analytics, and user experience improvement. You can configure or disable the saving of cookies in your browser settings.',
      ],
    },
    {
      title: '8. Changes to the Privacy Policy',
      paragraphs: [
        'We reserve the right to update this Policy. Changes take effect from the moment they are published on this page.',
      ],
    },
    {
      title: '9. Contacts',
      paragraphs: [
        'If you have questions regarding this Privacy Policy or wish to exercise your personal data rights, please contact us via the contact form on the Site or by email: partners.vizarecruting.com@gmail.com.',
      ],
    },
  ],
}

enContent.terms = {
  meta: {
    title: 'Terms of Use',
    description:
      'Read the terms of use for the VW Recruit website, rules of interaction through forms, and basic principles of providing information on the site.',
  },
  title: 'Terms of Use',
  sections: [
    {
      title: '1. General Provisions',
      paragraphs: [
        'These Terms of Use (hereinafter — "Terms") govern access and use of the VW Recruit website (hereinafter — the "Site"). By accessing and browsing this Site, you fully agree to these Terms.',
      ],
    },
    {
      title: '2. Company Services',
      paragraphs: [
        'The Site is purely informational and created to familiarize users with international worker recruitment services, as well as to provide an opportunity to leave a request for consultations, calculations, or analytical materials. Filling out a form on the site does not constitute the conclusion of a service agreement; contractual relations are formalized separately after individual agreement.',
      ],
    },
    {
      title: '3. User Responsibilities',
      paragraphs: ['The user undertakes to:'],
      items: [
        'Provide accurate information (name, company contact details) when filling out forms on the Site.',
        'Not use the Site for any illegal, fraudulent actions, or the distribution of malware.',
        'Not attempt to gain unauthorized access to the Site\'s administration systems.',
      ],
    },
    {
      title: '4. Intellectual Property',
      paragraphs: [
        'All materials posted on the Site, including texts (service descriptions, cases, reports), images, logos ("VW Recruit"), graphics, and design structure, are the property of the company or are used under license. Any copying, distribution, or use of the Site\'s materials for commercial purposes without the prior written consent of the copyright holder is prohibited.',
      ],
    },
    {
      title: '5. Disclaimer',
      paragraphs: [
        'The information on the Site is provided "as is". We strive to keep data up-to-date (e.g., information on deadlines, costs, or replacement guarantees), however, exact conditions of cooperation are recorded exclusively in an individual contract.',
        'The company is not responsible for possible technical failures in the Site\'s operation or temporary inability to access it.',
        'The Site may contain links to third-party resources. We are not responsible for the content and privacy policies of such external resources.',
      ],
    },
    {
      title: '6. Changes to Terms of Use',
      paragraphs: [
        'The Site administration reserves the right to make changes to these Terms at any time without prior personal notice to users. The updated version of the Terms comes into force from the moment it is posted on this page. We recommend periodically checking this section.',
      ],
    },
    {
      title: '7. Dispute Resolution',
      paragraphs: [
        'All disputes arising in connection with the use of this Site shall be resolved through negotiations. If an agreement is not reached, the dispute is subject to review in accordance with applicable law [specify country or jurisdiction].',
      ],
    },
    {
      title: '8. Feedback',
      paragraphs: [
        'For all questions regarding the operation of the Site or conditions of cooperation, please contact us via the form on the "Contacts" page or at: partners.vizarecruting.com@gmail.com.',
      ],
    },
  ],
}

enContent.contacts = {
  meta: {
    title: 'VW Recruit Contacts',
    description:
      'Contact VW Recruit regarding international worker recruitment, team launch, documents, and cooperation format.',
  },
  title: 'Contacts for businesses that need to quickly close a staffing shortage',
  summary: [
    {
      label: 'Reply',
      value: 'within a business day',
    },
    {
      label: 'Format',
      value: 'call, Zoom, or email',
    },
    {
      label: 'Focus',
      value: 'employers and operational teams',
    },
  ],
  channelsTitle: 'How is it convenient to start contact',
  channelsLead:
    'Choose the format that fits best right now. If you don\'t have a final brief yet, you can start with a short call and move to details later.',
  channels: [
    {
      icon: 'brief',
      label: 'Recruitment request',
      title: 'Leave a request for your needs',
      text: 'The most convenient option if you already understand the roles, approximate number of workers, or desired team launch timeframe.',
      actionLabel: 'Open form',
      actionType: 'anchor',
      actionTarget: '#contact-form',
    },
    {
      icon: 'call',
      label: 'Quick sync',
      title: 'Book a short call with the team',
      text: 'Suitable if you need to quickly understand whether international recruitment fits your specific case and what the next steps will be.',
      actionLabel: 'Book a call',
      actionType: 'modal',
      actionTarget: 'callback',
    },
    {
      icon: 'documents',
      label: 'Launch route',
      title: 'Clarify documents, deadlines, and launch logic',
      text: 'We explain the process from selection and candidate approval to documents, logistics, arrival, and people going on shift.',
    },
  ],
  checklistTitle: 'What is useful to prepare before contacting',
  checklistLead:
    'A perfectly formatted brief is not required. Even basic information will help move to a substantive conversation faster.',
  checklist: [
    'Which specific roles or departments need to be reinforced',
    'Approximate number of workers and desired start timeframe',
    'Country and city where the team will work',
    'Whether you need only recruitment or full support until launch',
  ],
  supportTitle: 'What the team can clarify on the first contact',
  supportLead:
    'The first contact is needed not for formality, but to remove uncertainty and show how well the model actually fits your request.',
  support: [
    'How quickly the flow of candidates can be launched',
    'Which recruiting countries best match the roles',
    'How documents, permits, and arrival coordination are organized',
    'What the communication and team launch format will be after approval',
  ],
  form: {
    title: 'Leave a request and we will return with the next step',
    lead:
      'Leave your contacts, and the VW Recruit team will suggest the most practical start format specifically for your situation.',
    note: 'Best suited for employers who need team recruitment, replacement, or launch.',
  },
}

enContent.thankYouReport = {
  meta: {
    title: 'Thank you for your report request',
    description:
      'Your report request has been saved. The VW Recruit team will contact you and send the material shortly.',
  },
  title: 'Thank you. Your report request has been received',
  lead:
    'We have saved the application and will send the material shortly, as well as suggest a practical next step regarding your hiring situation.',
  ctaLabel: 'Return to home',
  secondaryCtaLabel: 'Open contacts',
}

enContent.ui.modalClose = 'Close modal'
enContent.ui.leadCapture = 'Lead capture'
enContent.ui.video = 'Video'
enContent.ui.videoPlay = 'Play video'
enContent.ui.openMenu = 'Open menu'
enContent.ui.primaryNav = 'Primary navigation'
enContent.ui.languagePickerTitle = 'Choose language'
enContent.ui.fieldName = 'Name'
enContent.ui.fieldCompany = 'Company'
enContent.ui.fieldEmail = 'Email'
enContent.ui.fieldPhone = 'Phone'
enContent.ui.fieldIsBusiness = 'Are you a real agency or business?'
enContent.ui.fieldTargetCountries = 'Which countries are you interested in?'
enContent.ui.fieldWorkersCount = 'How many workers do you need?'
enContent.ui.fieldSelectOption = 'Select an option'
enContent.ui.optionYes = 'Yes'
enContent.ui.optionNo = 'No'
enContent.ui.sendRequest = 'Send request'
enContent.ui.requestCallback = 'Book a call'
enContent.ui.getReport = 'Get report'
enContent.ui.bookCall = 'Book a call'
enContent.ui.quizEyebrow = 'Quiz'
enContent.ui.quizContinue = 'Continue'
enContent.ui.quizBack = 'Back'
enContent.ui.quizSubmit = 'Submit'
enContent.ui.quizReady = 'Ready'
enContent.ui.quizValidationError = 'Please fill out the current step.'
enContent.ui.quizSubmitError = 'Failed to submit the form. Please try again.'
enContent.ui.processEyebrow = 'Process'
enContent.ui.caseStudy = 'Case'
enContent.ui.caseViewLabel = 'View case'
enContent.ui.leadCaptureEyebrow = 'Lead capture'
enContent.ui.faqEyebrow = 'FAQ'
enContent.ui.aboutEyebrow = 'About us'
enContent.ui.contactsEyebrow = 'Contacts'
enContent.ui.reportEyebrow = 'Report'
enContent.ui.privacyEyebrow = 'Privacy Policy'
enContent.ui.termsEyebrow = 'Terms of Use'
enContent.ui.thankYouEyebrow = 'Thank you'
enContent.ui.finalCtaEyebrow = 'Final CTA'
enContent.ui.downloadReport = 'Download report'
enContent.ui.openContactsPage = 'Open contacts page'
enContent.ui.projectsExamples = 'Project examples'
enContent.ui.reelPlaceholder = 'Placeholder for reel or video in popup modal after connecting sources.'
enContent.ui.industriesLead =
  'Most often, enterprises use this model for operational work in manufacturing, warehouses, construction, and the service sector.'
enContent.ui.legalPlaceholder = 'Legal text will be here. Replace it with the approved final version before launch.'
enContent.ui.footerDescription =
  'Turnkey recruitment of workers from Asia and Africa: from finding candidates and documents to arrival, adaptation, and the team going on shift.'
enContent.ui.footerCorePages = 'Core pages'
enContent.ui.footerLegal = 'Legal information'
enContent.ui.privacyPolicy = 'Privacy Policy'
enContent.ui.termsAndConditions = 'Terms of Use'
enContent.ui.formRequiredError = 'Please fill in the required form fields.'
enContent.ui.formSubmittingButton = 'Sending...'
enContent.ui.formSubmittingStatus = 'Sending form...'
enContent.ui.formSubmitError = 'Failed to submit the form. Please try again.'
enContent.ui.industryVisualLogisticsAlt = 'Workers in warehouse and logistics'
enContent.ui.industryVisualConstructionAlt = 'Workers on a construction site'
enContent.ui.industryVisualHospitalityAlt = 'Personnel in hospitality and service'
enContent.ui.industryVisualManufacturingAlt = 'Workers in manufacturing'
enContent.ui.industrySlidePlaceholder =
  'A separate visual case for this vertical can be scaled for SEO pages, quizzes, and personalized CTAs.'
enContent.ui.comparisonCardCta = 'Close the talent shortage'
enContent.ui.comparisonOtherMark = 'IN'
enContent.ui.comparisonCtaNote = 'Free consultation · Reply within 1 business day'
enContent.ui.comparisonSavingsLabel = 'savings'
enContent.ui.guaranteesLegalDelta = 'Quotas, permits, visas'
enContent.ui.guaranteesReplacementMetric = '$0'
enContent.ui.guaranteesReplacementDelta = 'Fast replacement under warranty'
enContent.ui.guaranteesSupportMetric = 'Turnkey'
enContent.ui.guaranteesSupportDelta = 'From selection to shift'
enContent.ui.guaranteesFallbackDelta = 'VW Recruit Advantage'
enContent.ui.guaranteesReplacementLabel = 'Guarantee at launch'
enContent.ui.guaranteesReplacementUnit = '$'
enContent.ui.guaranteesReplacementWarrantyDays = 30
enContent.ui.guaranteesReplacementWarrantyLabel = 'days warranty'
enContent.ui.guaranteesReplacementReplyHours = 48
enContent.ui.guaranteesReplacementReplyLabel = 'hours reply'
enContent.ui.guaranteesSupportBadge = 'One team for the entire process'
enContent.ui.guaranteesCandidatesDays = 10
enContent.ui.guaranteesCandidatesDaysLabel = 'days to candidates'
enContent.ui.guaranteesSupportPercentLabel = '% support'
enContent.ui.guaranteesOneTeamCount = 1
enContent.ui.guaranteesOneTeamLabel = 'team'
enContent.ui.guaranteeTimelineStepOne = 'Selection'
enContent.ui.guaranteeTimelineStepTwo = 'Documents'
enContent.ui.guaranteeTimelineStepThree = 'Logistics'
enContent.ui.guaranteeTimelineStepFour = 'Arrival'
enContent.ui.guaranteeTimelineStepFive = 'Shift'
enContent.ui.guaranteeSupportStepOne = 'Selection'
enContent.ui.guaranteeSupportStepTwo = 'Arrival'
enContent.ui.guaranteeSupportNote = 'Shift start'
enContent.ui.guaranteeChecklistQuota = 'Quotas'
enContent.ui.guaranteeChecklistPermit = 'Permit'
enContent.ui.guaranteeChecklistVisa = 'Visa'
enContent.ui.reviewFallbackValue = '7 YEARS'
enContent.ui.reviewLabelPrefix = '7 years '
enContent.ui.servicesShortRequestEyebrow = 'Short request'
enContent.ui.servicesHeroGhostCta = 'View service conditions'
enContent.ui.servicesHeroPanelTitle =
  'Recruitment, documents, logistics, and team launch in one process'
enContent.ui.servicesHeroPanelText =
  'The entire route is built so that the business sees predictable launch stages, and the candidate understands what happens at every step.'
enContent.ui.servicesPillarsEyebrow = 'What we cover'
enContent.ui.servicesPillarsTitle =
  'The service is built not as "resume search", but as a complete route for launching people into work'
enContent.ui.servicesOfferEyebrow = 'What both sides get'
enContent.ui.servicesOfferTitle =
  'A model where the business gets a managed result, and the candidate sees a transparent process'
enContent.ui.servicesOfferVisualLabel = 'VW Recruit / route'
enContent.ui.servicesOfferVisualPrimary = 'For business'
enContent.ui.servicesOfferVisualSecondary = 'For candidates'
enContent.ui.servicesBeamEyebrow = 'Process map'
enContent.ui.servicesRouteEyebrow = 'How cooperation works'
enContent.ui.servicesRouteTitle = 'Transparent route from request to workers going on shift'
enContent.ui.servicesRouteLead =
  'Business sees a clear launch route with predictable stages from the request to people going on shift.'
enContent.ui.servicesProofEyebrow = 'Why this sells'
enContent.ui.servicesProofTitle =
  'Not just recruitment, but a managed service with a clear result at each stage'
enContent.ui.servicesFitEyebrow = 'Where it works best'
enContent.ui.servicesFitTitle =
  'Roles and niches where international recruitment gives maximum operational effect'
enContent.ui.servicesFitLead =
  'Each card shows where the model provides the fastest operational result, the cleanest team launch, and the highest process stability.'
enContent.ui.servicesFitScoreLabel = 'match level'
enContent.ui.servicesFitMetricOne = 'Launch speed'
enContent.ui.servicesFitMetricTwo = 'Stability'
enContent.ui.servicesFitMetricThree = 'Transparency'
enContent.ui.servicesFitCardTextOne =
  'Works best where repetitive shifts, attendance discipline, and quick scaling without launch failures are important.'
enContent.ui.servicesFitCardTextTwo =
  'Works well for seasonal peaks, volume growth, and operations where business critically needs a rhythmic launch of people.'
enContent.ui.servicesFitCardTextThree =
  'Suitable for projects with strict deadlines, where recruitment, documents, and arrival need to be combined without chaos.'
enContent.ui.servicesFitCardTextFour =
  'Shows a good result in service teams where a clear route, fast adaptation, and launch stability are critical.'
enContent.ui.servicesLeadEyebrow = 'Start dialogue'
enContent.ui.servicesLeadText =
  'For employers, it is a quick way to understand how to launch recruitment. For candidates, it is an opportunity to get an honest explanation of the employment route and documents.'
enContent.ui.servicesSegmentBadgeBusiness = 'B2B'
enContent.ui.servicesSegmentBadgeCandidate = 'B2C'
enContent.ui.industriesSectionTitle = 'WHICH INDUSTRIES THIS HIRING MODEL SUITS'
enContent.ui.industrySliderPrev = 'Previous slide'
enContent.ui.industrySliderNext = 'Next slide'
enContent.ui.quizSectionLead =
  'A short step-by-step quiz that helps quickly collect a request and submit it in a unified format.'
enContent.ui.casesSectionLead =
  'We show examples of recruitment launches for manufacturing, logistics, hotels, and other operational teams.'
enContent.ui.caseSliderPrev = 'Previous case'
enContent.ui.caseSliderNext = 'Next case'
enContent.ui.casesTimelineSteps = ['Brief', 'Search', 'Approval', 'Documents', 'Arrival']
enContent.ui.industriesFitSummary =
  'Signals that usually mean local hiring is no longer keeping up with your operation\'s pace and a more systematic team staffing model is needed.'
enContent.ui.caseSubtitlePlaceholder = 'Short case description'
enContent.ui.caseProblemPlaceholder =
  'Separate SEO page for the case with results, deadlines, and a target action.'
enContent.ui.processStepLabel = 'Step'
enContent.ui.reportPanelTitle = 'Get material by email'
enContent.ui.reportPanelText =
  'Leave your contacts, and we will send useful material on international hiring and personnel cost optimization.'
enContent.ui.reportPanelKicker = 'VW Recruit / Analytics'
enContent.ui.reportPanelReportTitle = 'Labor Market 2026'
enContent.ui.reportPanelReportText =
  'Integration of international personnel for businesses with staff shortages'
enContent.ui.reportPanelGuide = 'PDF'
enContent.ui.videoInsightLabel = 'Video insight'
enContent.ui.mediaDefaultDuration = '02:00'
enContent.ui.reviewsPrev = 'Previous review'
enContent.ui.reviewsNext = 'Next review'
enContent.ui.genericPageCardOne = 'Base page prepared for localized content'
enContent.ui.genericPageCardTwo = 'Metadata and structure are ready for further filling'
enContent.ui.genericPageCardThree = 'Each route is generated separately for each locale'

enContent.quiz.title = 'Recruitment Calculation'
enContent.quiz.progressLabel = 'Step'
enContent.quiz.completionTitle = 'Your request is ready'
enContent.quiz.completionLead =
  'We have received your answers. The next step is to contact you and prepare a consultation or a preliminary calculation.'
enContent.quiz.steps = [
  {
    id: 'industry',
    label: 'Which industry do you need workers for?',
    type: 'options',
    options: ['Manufacturing', 'Construction', 'Warehouses and Logistics', 'Hotels and Hospitality', 'Other'],
  },
  {
    id: 'teamSize',
    label: 'How many workers do you need?',
    type: 'options',
    options: ['1–10', '11–30', '31–50', '50+'],
  },
  {
    id: 'timeline',
    label: 'When should the team start working?',
    type: 'options',
    options: ['Urgently', 'Within 2–4 weeks', 'Within 1–2 months', 'Just exploring options for now'],
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
    options: ['High payroll costs', 'Staff shortages', 'Staff turnover', 'Seasonal peaks', 'Production scaling', 'Other'],
  },
  {
    id: 'contact',
    label: 'Where to send the calculation?',
    type: 'text',
    fields: [
      { name: 'name', label: 'Name', required: true },
      { name: 'company', label: 'Company', required: true },
      { name: 'phone', label: 'Phone', required: true },
      { name: 'email', label: 'Email', required: true },
    ],
  },
]

enContent.services = {
  title: 'Turnkey international worker recruitment services',
  lead:
    'We close <strong>operational staff shortages</strong> for business and guide candidates to <strong>legal work starts</strong>: from search and selection to documents, arrival, and shift launch.',
  intro: '',
  cta: 'Discuss recruitment for business',
  metrics: [
    { value: '10', suffix: ' days', label: 'to first candidates in recruitment' },
    { value: '100', suffix: '%', label: 'support for documents and legality' },
    { value: '4', suffix: ' stages', label: 'from request to team start' },
  ],
  heroBadges: [
    { value: '10', suffix: ' days', label: 'to first candidates' },
    { value: '100', suffix: '%', label: 'legal support' },
    { value: 'Turnkey', suffix: '', label: 'from search to shift start' },
    { value: '1 team', suffix: '', label: 'recruiting, documents, logistics' },
  ],
  segments: [
    {
      variant: 'business',
      label: 'For business',
      badge: 'B2B',
      title: 'For businesses that need a stable team without staffing gaps',
      text: 'Suitable for companies that cannot close operational roles with local hiring, are scaling, have seasonal peaks, or are tired of high staff turnover.',
      cta: 'Get a recruitment plan',
    },
    {
      variant: 'candidate',
      label: 'For candidates',
      badge: 'B2C',
      title: 'For candidates who want to legally go to work abroad',
      text: 'We explain the stages simply: primary selection, documents, arrival, adaptation, and work start. No opaque conditions and no vague promises.',
      cta: 'Submit application',
    },
  ],
  pillars: [
    {
      title: 'Candidate search and selection',
      text: 'We form a role profile, launch search through our database and partner network, screen out weak candidates, and provide only relevant people for approval.',
    },
    {
      title: 'Documents, permits, and legality',
      text: 'We handle quotas, permits, visa, and migration processes so the employer doesn\'t drown in bureaucracy and the candidate understands what stage they are at.',
    },
    {
      title: 'Arrival, adaptation, and shift launch',
      text: 'We coordinate logistics, arrival, work start, and the first stage of adaptation so workers actually arrive on site within agreed timeframes.',
    },
  ],
  timeline: [
    {
      title: 'Brief and model calculation',
      text: 'We clarify the number of people, roles, schedule, launch country, and project limitations, after which we form a realistic recruitment scenario.',
    },
    {
      title: 'Selection and candidate approval',
      text: 'We launch the search, conduct screening, verify documents, and allow your side to finally approve candidates.',
    },
    {
      title: 'Registration and arrival organization',
      text: 'After approval, we launch document preparation, coordination of permits, logistics, and people\'s readiness for departure.',
    },
    {
      title: 'Work start and support',
      text: 'After arrival, we coordinate shift start, adaptation, and communication between business, workers, and responsible persons on site.',
    },
  ],
  deliverables: [
    'Vacancy profile and search strategy for a specific role',
    'Package of selected candidates ready for approval',
    'Control of all stages of documentary registration',
    'Timeline of worker arrival and team launch',
    'Team support at the work start and during the first adaptation period',
    'Warranty conditions for replacement depending on the project format',
  ],
  offerCards: [
    {
      title: 'Recruitment for employers',
      text: 'Fast launch of recruitment for vacancies, seasonal peaks, or production scaling.',
    },
    {
      title: 'Legal route for candidates',
      text: 'Transparent selection process, document preparation, and support up to the actual work start.',
    },
    {
      title: 'Support after start',
      text: 'Adaptation, communication, replacements, and process coordination at the first stage of team work.',
    },
  ],
  beam: {
    title: 'How the recruitment process moves from request to people going on shift',
    lead:
      'A visual process map showing how the brief, selection, approval, documents, and team launch are connected into one managed process.',
    centerLabel: 'Processing',
    outputLabel: 'Going on shift',
    steps: ['Brief', 'Search', 'Approval', 'Documents', 'Arrival'],
  },
  roles: [
    'Workers for production lines, packaging, sorting, and auxiliary processes',
    'Warehouse teams for picking, sorting, moving, and logistics operations',
    'Construction and installation workers for sites with a staff shortage',
    'Workers for hotels, kitchen, room cleaning, and service operations',
  ],
  promise: {
    title: 'One team is responsible for the entire candidate route',
    text: 'For business, this means less chaos between recruiting, documents, logistics, and launching people into work. You get one clear interaction model instead of a set of separate contractors.',
  },
  trust: [
    'The employer sees a predictable team launch path',
    'The candidate receives a legal and understandable employment route',
    'One team coordinates recruiting, documents, logistics, and adaptation',
  ],
  form: {
    title: 'Get a recruitment plan or employment consultation',
    lead: 'Fill out a short form. For the employer, we will prepare the next step for launching recruitment. For the candidate, we will explain the route and requirements for the start.',
    button: 'Get a consultation',
    note: 'We usually respond within a business day.',
  },
}

enContent.cases = {
  title: 'International recruitment cases with a measurable operational result',
  lead:
    'Real scenarios where a business closes a staff shortage, speeds up team launch, and gets a predictable route for people to go to work.',
  description:
    'International worker recruitment cases: challenge, launch model, deadlines, and result for the business.',
  eyebrow: 'Cases',
  intro:
    'This page is not just for "success stories", but to prove that the model works in real operational conditions: when there is a shortage of people, missed deadlines, or a seasonal workload.',
  stats: [
    { value: '3', label: 'detailed launch cases' },
    { value: '4', label: 'key business areas' },
    { value: '96', suffix: '%', label: 'shift start rate' },
  ],
  featured: [
    {
      title: 'Delta Pack',
      category: 'Manufacturing',
      colSpan: 2,
      subtitle: 'Manufacturing enterprise, Central Europe',
      problem:
        'The enterprise could not stably close the shift on the packaging line for a long time due to prolonged local hiring and constant turnover.',
      solution:
        'The launch model combined candidate search, document support, logistics, and team start coordination into one route.',
      result:
        'Business received a clear shift launch plan, a shorter candidate approval cycle, and more control over the project start.',
      timeline: 'First candidates in 7-14 days',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Workers on the production line',
      metrics: [
        { label: 'Need', value: '32 workers' },
        { label: 'Format', value: 'Packaging line' },
        { label: 'Focus', value: 'Stable shift launch' },
      ],
    },
    {
      title: 'Nord Cargo Hub',
      category: 'Logistics',
      colSpan: 1,
      subtitle: 'Warehouse complex and logistics',
      problem:
        'The warehouse could not cover peak loads without a reserve of people and a predictable worker arrival schedule.',
      solution:
        'The case focus was on short-list speed, document control, and preparing people to enter a shift schedule.',
      result:
        'The operational team got a more predictable timeline to prepare onboarding, supervisors, and peak coverage without chaos.',
      timeline: 'Fast launch for the season',
      image: '/images/industry-logistics.jpg',
      alt: 'Workers in warehouse and logistics',
      metrics: [
        { label: 'Need', value: 'Sorting team' },
        { label: 'Format', value: 'Warehouse operations' },
        { label: 'Focus', value: 'Readiness for peak' },
      ],
    },
    {
      title: 'Urban Build Group',
      category: 'Construction',
      colSpan: 3,
      subtitle: 'Construction contractor',
      problem:
        'The contractor needed to quickly reinforce active sites without postponing deadlines and without failing in crew staffing.',
      solution:
        'Search, permits, logistics, and adaptation start were synchronized as a single workflow from approval to site entry.',
      result:
        'The client received a model that reduced the gap between candidate approval, document preparation, and actual start of work.',
      timeline: 'Route to fit site deadlines',
      image: '/images/industry-construction.jpg',
      alt: 'Workers on a construction site',
      metrics: [
        { label: 'Need', value: 'Site reinforcement' },
        { label: 'Format', value: 'Construction roles' },
        { label: 'Focus', value: 'Launch deadline protection' },
      ],
    },
  ],
  convincingTitle: 'From challenge to result: why our experience helps business act faster',
  frameworkTitle: 'From challenge to result: why our experience helps business act faster',
  frameworkLead:
    'A strong case shows not only the result, but also why the launch route was realistic specifically for this type of employer.',
  routeLabel: 'Route',
  outcomeLabel: 'Result',
  framework: [
    {
      title: 'Clear starting challenge',
      text: 'We show exactly where local hiring, seasonality, or turnover created an operational risk for the business.',
    },
    {
      title: 'Transparent launch model',
      text: 'We explain how recruitment, documents, logistics, and putting workers into work were connected in one process.',
    },
    {
      title: 'Operational result',
      text: 'We translate the case into clear business language: shift stability, launch speed, and predictability for the site.',
    },
  ],
  checklistTitle: 'What should be in every next case',
  checklist: [
    'Description of the role and initial staffing challenge',
    'Logic of the recruiting country or search model',
    'Timeline from brief to arrival',
    'Key points on documents and logistics',
    'Result for business and clear CTA',
  ],
  ctaTitle: 'Need to launch a similar recruitment model for your team?',
  ctaLead:
    'Describe the staff shortage, and we will prepare a recruitment route, launch deadlines, and the next practical step for your business.',
}

enContent.industries = {
  title: 'Industries where international recruitment gives the strongest operational effect',
  lead:
    'We focus on industries where the shortage of line personnel and high staff turnover hinder business development the most.',
  description:
    'International recruitment of workers for manufacturing, construction, warehouses, logistics, hotels, and service teams.',
  eyebrow: 'Industries',
  intro: '',
  sectorsTitle: 'Key areas where the model gives the fastest result',
  sectorsLead: '',
  stats: [
    { value: '3', label: 'key industries with the highest impact' },
    { value: '1+', label: 'year contract for most teams' },
    { value: '54%', label: 'personnel cost reduction potential' },
  ],
  sectors: [
    {
      title: 'Manufacturing',
      colSpan: 2,
      text: 'Stable teams for conveyor lines, packaging workshops, and sorting centers.',
      image: '/images/industry-manufacturing.jpg',
      alt: 'Workers in manufacturing',
      tags: ['Production lines', 'Packaging', 'Sorting'],
      problem:
        'Constant "holes" in shifts due to local workers not showing up and an annual turnover rate of 30-50%.',
      solution:
        'We form groups of workers who arrive on a contract from 1 year. This guarantees discipline and eliminates the need to retrain new people weekly.',
      roles: ['Line operators', 'Packers', 'Sorters', 'General workers'],
      points: [
        'We stabilize shift turnout without constant extra hiring',
        'We reduce pressure on shift supervisors and the HR team',
        'We provide a predictable rhythm for launching people into work',
      ],
      cta: 'Get a calculation for manufacturing',
    },
    {
      title: 'Construction',
      colSpan: 1,
      text: 'Scaling sites without being tied to the staff shortage in the local market.',
      image: '/images/industry-construction.jpg',
      alt: 'Workers on a construction site',
      tags: ['Installation', 'Utility roles', 'Site teams'],
      problem:
        'Missing project completion deadlines due to the inability to quickly find 20-50 utility workers or installers during the peak season.',
      solution:
        'We organize the prompt arrival of formed crews. We handle all legalization so your foremen are busy building, not dealing with paperwork.',
      roles: ['Utility workers', 'Installers', 'Rebar workers', 'Concrete workers'],
      points: [
        'We reinforce active sites without missing deadlines',
        'We remove administrative burden from foremen',
        'We work for seasonal peaks and crew scaling',
      ],
      cta: 'Get a calculation for construction',
    },
    {
      title: 'Warehouses and Logistics',
      colSpan: 1,
      text: 'Flexibility and power for 3PL operators and E-commerce.',
      image: '/images/industry-logistics.jpg',
      alt: 'Workers in warehouse and logistics',
      tags: ['Picking', 'Sorting', 'Goods moving'],
      problem:
        'Unpredictability during seasonal peaks and the high cost of "night" shifts of local personnel.',
      solution:
        'You get a team that is ready for an intensive shift schedule. Personnel costs become predictable and fixed.',
      roles: ['Pickers', 'Packers', 'Loaders', 'Warehouse equipment operators'],
      points: [
        'We work for seasonal waves and high shift tempo',
        'We provide greater predictability of personnel costs',
        'We help plan team launches without panic',
      ],
      cta: 'Get a calculation for warehouse and logistics',
    },
    {
      title: 'Hotels and Hospitality',
      colSpan: 2,
      text: 'Stable teams for room cleaning, kitchen support, and daily service operations.',
      image: '/images/industry-hospitality.jpg',
      alt: 'Personnel in hospitality and service',
      tags: ['Room cleaning', 'Kitchen support', 'Service operations'],
      problem:
        'It is difficult to maintain a stable service team during peak periods when local staff quickly change employers or do not show up for shifts.',
      solution:
        'We select workers for a longer work horizon and build a legal route to the site so the operational team does not live in a constant emergency recruiting mode.',
      roles: ['Maids', 'Kitchen staff', 'Service workers', 'Universal assistants'],
      points: [
        'We reduce chaos in daily shift planning',
        'We reinforce hotels and service sites during seasonal peaks',
        'We provide a clear and legal employment route',
      ],
      cta: 'Get a calculation for hotels and service',
    },
  ],
  frameworkTitle: 'Why does business choose workers from Asia and Africa?',
  frameworkLead:
    'It is not a matter of a "cheaper replacement", but a matter of team stability, motivation, and a predictable long cycle of work on site.',
  framework: [
    {
      title: 'High motivation',
      text: 'For candidates from these regions, working in Europe is a chance for a better future, so they value the workplace more and change companies less often after a month.',
    },
    {
      title: 'Discipline',
      text: 'In many Asian countries, work culture is built on respect for hierarchy, clear instructions, and stable execution of repetitive operations.',
    },
    {
      title: 'Long-term commitment',
      text: 'Workers arrive on target visas for a long term, which removes the problem of seasonal staff disappearance and constant recruitment restarts.',
    },
  ],
  fitTitle: 'When do you definitely need international recruitment?',
  fitLead:
    'If you recognize your situation in these signals, local hiring is likely no longer systematically solving the problem.',
  fitSignals: [
    'Staff turnover over 20%: you spend more time interviewing than managing production.',
    'Overheated local market: salary expectations of local candidates are growing, but productivity is not.',
    'Planning new sites or lines: you are afraid to launch new capacities because there is no one to work.',
    'Hiring cost is growing: local agencies charge large commissions, and people quit after a week.',
  ],
  ctaTitle: 'Need a launch plan for a specific industry?',
  ctaLead:
    'Write down your niche, team size, and launch timeframe, and we will suggest the best recruitment model specifically for this operation.',
  seoTitle: 'International personnel recruitment for manufacturing, warehouses, and construction',
  seoText:
    'VW Recruit specializes in comprehensively solving staffing shortages for European business. We provide line personnel recruitment for warehouses, factories, and construction sites, using the resources of countries with a surplus labor potential, particularly the Philippines, India, Vietnam, and African countries. Our model includes not only recruiting, but also full documentary support, logistics, and worker adaptation on site, which allows clients to reduce operational personnel costs by up to 54%.',
}

enContent.report = {
  title: 'Labor Market 2026: When local hiring can no longer keep up',
  lead:
    'An analytical report for employers who want to understand the real costs, deadlines, and legal nuances of international recruitment.',
  description:
    'Download the report on international worker recruitment, personnel costs, legal risks, and team launch.',
  eyebrow: 'Report',
  intro:
    'This is not just a PDF "for show", but content that translates interest into a substantive conversation about costs, launch deadlines, legality, and business readiness for international hiring.',
  stats: [
    { value: '1', label: 'practical analytical report' },
    { value: '5', label: 'key insights inside' },
    { value: '1', label: 'clear conversion action' },
  ],
  pointsTitle: 'What is inside the report',
  points: [
    'Logic of cost comparison: local hiring vs international recruitment',
    'Most common legal mistakes when hiring foreigners',
    'How to prepare the operation for onboarding and adaptation',
    'What actually affects launch deadlines from brief to shift start',
    'How to reduce staffing pressure in operational and manual roles',
  ],
  benefitsTitle: 'Why business requests this report',
  benefitsLead:
    'The report is especially useful when the company already feels staffing pressure and needs a clear solution model rather than abstract information.',
  benefits: [
    {
      title: 'Faster internal alignment',
      text: 'Helps the owner, operations, and HR speak the same language about the real recruitment launch route.',
    },
    {
      title: 'Clearer vision of costs',
      text: 'Allows a more sober comparison of salary pressure, launch deadlines, and risks to team continuity.',
    },
    {
      title: 'Better transition to the next step',
      text: 'Transfers interest from the "just looking" level to a substantive consultation with specific limitations and deadlines.',
    },
  ],
  trustTitle: 'What makes this report truly useful',
  trustLead:
    'Strong analytical material should not be general HR content. It must directly answer the business problem for which a person leaves the form.',
  trustPoints: [
    'Built around staffing pressure in operational business, not general theory',
    'Prepared as a base for the first consultation or sales conversation',
    'Useful for employers evaluating whether the model fits their site and deadlines',
  ],
  faqTitle: 'Questions before downloading',
  faq: [
    {
      q: 'Who is this report for?',
      a: 'For employers in manufacturing, logistics, construction, hospitality and other operational businesses with staffing shortages or salary pressure.',
    },
    {
      q: 'Is this just a general PDF?',
      a: 'No. The report is intended to help make a real hiring decision and prepare a substantive conversation about the launch model, deadlines, and constraints.',
    },
    {
      q: 'What happens after submitting the form?',
      a: 'The person receives the PDF delivery route and at the same time becomes a qualified lead for further consultation regarding the hiring need.',
    },
  ],
  ctaTitle: 'Get the report and understand your next staffing step',
  ctaLead:
    'Leave your contacts, and we will send the PDF, as well as help assess whether the international recruitment model fits your current staff shortage.',
  formTitle: 'Get the report',
  formLead:
    'Fill out a short form to receive the PDF and move to a more substantive conversation about personnel costs, launch deadlines, and legal preparation.',
  formNote: 'Most useful for employers planning recruitment, replacement, or team scaling.',
}

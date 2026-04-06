import { buildPageUrl } from '../core/site-config.js'

const logoSymbol = '/logo-symbol.svg'

function renderBeamIcon(type) {
  const icons = {
    brief: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3h8"/><path d="M9 3v3"/><path d="M15 3v3"/><rect x="4" y="6" width="16" height="14" rx="3"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="m20 20-3.5-3.5"/></svg>`,
    approval: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12.75 11.25 15 15 9.75"/><circle cx="12" cy="12" r="8"/></svg>`,
    documents: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></svg>`,
    arrival: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 9-7 9 7"/><path d="M5 10.5V20h14v-9.5"/><path d="M9 20v-5h6v5"/></svg>`,
    user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21v-1.5a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4V21"/><circle cx="12" cy="8" r="4"/></svg>`,
  }

  return icons[type] ?? icons.brief
}

function renderIndustryBentoIcon(title = '') {
  const value = String(title).toLowerCase()

  if (value.includes('вироб')) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18"/><path d="M5 21V8l7-4 7 4v13"/><path d="M9 11h.01"/><path d="M12 11h.01"/><path d="M15 11h.01"/><path d="M9 15h.01"/><path d="M12 15h.01"/><path d="M15 15h.01"/></svg>`
  }

  if (value.includes('буд')) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18"/><path d="M5 21V9h14v12"/><path d="M9 9V5h6v4"/><path d="M9 13h.01"/><path d="M15 13h.01"/><path d="M9 17h.01"/><path d="M15 17h.01"/></svg>`
  }

  if (value.includes('склад') || value.includes('логіст')) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16.5 12 21l9-4.5"/></svg>`
  }

  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h16"/><path d="M6 20v-9h12v9"/><path d="M9 8V5h6v3"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/></svg>`
}

function renderIndustryFrameworkIcon(title = '') {
  const value = String(title).toLowerCase()

  if (value.includes('мотивац')) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19h16"/><path d="M6 15.5 10 11.5l3 3 5-6"/><path d="M14 8.5h4v4"/></svg>`
  }

  if (value.includes('дисцип')) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`
  }

  if (value.includes('довгострок')) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/><path d="M8 3v3"/><path d="M16 3v3"/></svg>`
  }

  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16"/><path d="M12 4v16"/></svg>`
}

const INDUSTRY_SLIDE_VISUALS = [
  {
    match: /склади|логістик|warehouse|logistics/i,
    image: '/images/industry-logistics.jpg',
    altKey: 'industryVisualLogisticsAlt',
  },
  {
    match: /будівницт/i,
    image: '/images/industry-construction.jpg',
    altKey: 'industryVisualConstructionAlt',
  },
  {
    match: /готелі|сервіс|hotel|service|hospitality/i,
    image: '/images/industry-hospitality.jpg',
    altKey: 'industryVisualHospitalityAlt',
  },
  {
    match: /виробництв|manufacturing|factory/i,
    image: '/images/industry-manufacturing.jpg',
    altKey: 'industryVisualManufacturingAlt',
  },
]

function buildServicesFitCards(roles, ui = {}) {
  const presets = [
    {
      score: 96,
      metrics: [94, 92, 97],
      text:
        'Найсильніше працює там, де важливі повторювані зміни, дисципліна виходу і швидке масштабування без провалів у запуску.',
    },
    {
      score: 93,
      metrics: [91, 89, 95],
      text:
        'Добре заходить для сезонних піків, зростання обсягів і операцій, де бізнесу критично потрібен ритмічний запуск людей.',
    },
    {
      score: 89,
      metrics: [84, 88, 90],
      text:
        'Підходить для проєктів із жорсткими дедлайнами, де потрібно поєднати рекрутинг, документи та прибуття без хаосу.',
    },
    {
      score: 87,
      metrics: [86, 83, 92],
      text:
        'Показує хороший результат у сервісних командах, де критичні зрозумілий маршрут, швидка адаптація і стабільність старту.',
    },
  ]

  const metricLabels = [
    ui.servicesFitMetricOne ?? 'Launch speed',
    ui.servicesFitMetricTwo ?? 'Retention',
    ui.servicesFitMetricThree ?? 'Process clarity',
  ]

  return (roles ?? []).map((item, index) => {
    const preset = presets[index] ?? presets[presets.length - 1]

    return {
      title: item,
      text: preset.text,
      score: preset.score,
      metrics: metricLabels.map((label, metricIndex) => ({
        label,
        value: preset.metrics[metricIndex],
      })),
    }
  })
}

function renderLeadForm(content, type = 'lead') {
  const ui = content.ui ?? {}

  return `
    <form class="stack card card--form" data-form data-form-type="${type}">
      ${type === 'lead'
        ? `
          <div class="lead-form__brand" aria-hidden="true">
            <img src="${logoSymbol}" alt="" loading="lazy" />
            <span>VW Recruit</span>
          </div>
        `
        : ''}
      <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
      <label class="field">
        <span>${ui.fieldName ?? 'Name'} *</span>
        <input type="text" name="name" autocomplete="name" required />
      </label>
      <label class="field">
        <span>${ui.fieldCompany ?? 'Company'} *</span>
        <input type="text" name="company" autocomplete="organization" required />
      </label>
      <label class="field">
        <span>${ui.fieldEmail ?? 'Email'} *</span>
        <input type="email" name="email" autocomplete="email" required />
      </label>
      <label class="field">
        <span>${ui.fieldPhone ?? 'Phone'}</span>
        <input type="tel" name="phone" autocomplete="tel" />
      </label>
      <button class="button" type="submit">${ui.sendRequest ?? 'Send request'}</button>
      <p class="form-status" data-form-status role="status" hidden></p>
    </form>
  `
}

function renderReportStyleForm(content, { type = 'lead', title, buttonLabel, note = '' } = {}) {
  const ui = content.ui ?? {}
  const resolvedTitle = title ?? content.forms?.[type]?.title ?? content.forms?.lead?.title ?? 'Send request'
  const resolvedButtonLabel = buttonLabel ?? ui.sendRequest ?? 'Send request'

  return `
    <div class="report-form__card report-form__card--embedded">
      <div class="report-form__card-inner">
        <h3 class="report-form__card-title">${resolvedTitle}</h3>
        <form class="report-form__fields" data-form data-form-type="${type}">
          <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
          <label class="report-form__field">
            <span>${ui.fieldName ?? 'Name'} *</span>
            <input type="text" name="name" autocomplete="name" required />
          </label>
          <label class="report-form__field">
            <span>${ui.fieldCompany ?? 'Company'} *</span>
            <input type="text" name="company" autocomplete="organization" required />
          </label>
          <label class="report-form__field">
            <span>${ui.fieldEmail ?? 'Email'} *</span>
            <input type="email" name="email" autocomplete="email" required />
          </label>
          <label class="report-form__field">
            <span>${ui.fieldPhone ?? 'Phone'}</span>
            <input type="tel" name="phone" autocomplete="tel" />
          </label>
          <button class="report-form__submit" type="submit">${resolvedButtonLabel}</button>
          <p class="form-status" data-form-status role="status" hidden></p>
        </form>
        ${note ? `<p class="report-form__note">${note}</p>` : ''}
      </div>
    </div>
  `
}

function renderServicesLeadForm(content) {
  const ui = content.ui ?? {}
  const servicesForm = content.services?.form ?? {}

  return `
    <div class="services-form-card card card--form">
      <div class="services-form-card__head">
        <h3>${servicesForm.title ?? content.forms.lead.title}</h3>
        <p>${servicesForm.lead ?? ''}</p>
      </div>
      <form class="stack" data-form data-form-type="lead">
        <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
        <label class="field">
          <span>${ui.fieldName ?? 'Name'} *</span>
          <input type="text" name="name" autocomplete="name" required />
        </label>
        <label class="field">
          <span>${ui.fieldCompany ?? 'Company'} *</span>
          <input type="text" name="company" autocomplete="organization" required />
        </label>
        <label class="field">
          <span>${ui.fieldEmail ?? 'Email'} *</span>
          <input type="email" name="email" autocomplete="email" required />
        </label>
        <label class="field">
          <span>${ui.fieldPhone ?? 'Phone'}</span>
          <input type="tel" name="phone" autocomplete="tel" />
        </label>
        <button class="button services-form-card__button" type="submit">${servicesForm.button ?? ui.sendRequest ?? 'Send request'}</button>
        <p class="services-form-card__note">${servicesForm.note ?? ''}</p>
        <p class="form-status" data-form-status role="status" hidden></p>
      </form>
    </div>
  `
}

function renderReportCaptureForm(content) {
  const ui = content.ui ?? {}

  return `
    <form class="report-capture__form" data-form data-form-type="report">
      <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
      <label class="field">
        <span>${ui.fieldName ?? 'Name'} *</span>
        <input type="text" name="name" autocomplete="name" required />
      </label>
      <label class="field">
        <span>${ui.fieldCompany ?? 'Company'} *</span>
        <input type="text" name="company" autocomplete="organization" required />
      </label>
      <label class="field">
        <span>${ui.fieldEmail ?? 'Email'} *</span>
        <input type="email" name="email" autocomplete="email" required />
      </label>
      <label class="field">
        <span>${ui.fieldPhone ?? 'Phone'}</span>
        <input type="tel" name="phone" autocomplete="tel" />
      </label>
      <button class="button report-capture__submit" type="submit">${content.home.reportBlock.cta}</button>
      <p class="form-status" data-form-status role="status" hidden></p>
    </form>
  `
}

function renderCardList(items, mapper) {
  return items.map(mapper).join('')
}

function renderSimplePage(title, lead, pageKey) {
  return `
    <section class="page-hero">
      <div class="shell">
        <p class="eyebrow">VW Recruit / ${pageKey}</p>
        <h1>${title}</h1>
        <p class="lead">${lead}</p>
      </div>
    </section>
  `
}

function renderFaq(items) {
  return items
    .map(
      (item, index) => `
        <article class="faq-item" data-accordion-item>
          <button
            class="faq-item__trigger"
            type="button"
            data-accordion-trigger
            aria-expanded="false"
            aria-controls="faq-answer-${index + 1}"
          >
            <span class="faq-item__question">${item.q}</span>
            <span class="faq-item__icon" aria-hidden="true"></span>
          </button>
          <div class="faq-item__content" id="faq-answer-${index + 1}" data-accordion-content hidden>
            <p>${item.a}</p>
          </div>
        </article>
      `,
    )
    .join('')
}

function renderComparisonCard(card, content) {
  const variant = card.variant ?? 'default'
  const isBrand = variant === 'brand'
  const amount = card.amount ? `<div class="comparison-card__price"><strong>${card.amount}</strong>${card.period ? `<span>${card.period}</span>` : ''}</div>` : ''
  const note = card.note ? `<p class="comparison-card__note">${card.note}</p>` : ''
  const cta = isBrand
    ? `<div class="comparison-card__actions"><a class="button" href="#quiz">${content.home.comparison.cta ?? content.ui?.comparisonCardCta ?? 'Calculate hiring cost'}</a></div>`
    : ''
  const rows = renderCardList(
    card.rows,
    (row) => `
      <li class="comparison-card__feature">
        <span class="comparison-card__check" aria-hidden="true"></span>
        <div>
          <strong>${typeof row === 'string' ? row : row.title}</strong>
          ${typeof row === 'string' ? '' : `<p>${row.text}</p>`}
        </div>
      </li>
    `,
  )

  return `
    <article class="comparison-card comparison-card--${variant}">
      <div class="comparison-card__brand">
        <span class="comparison-card__brand-mark${isBrand ? ' comparison-card__brand-mark--logo' : ''}">
          ${isBrand ? `<img src="${logoSymbol}" alt="" loading="lazy" />` : '<span>IN</span>'}
        </span>
        <div class="comparison-card__brand-copy">
          <strong>${card.title}</strong>
        </div>
      </div>
      ${amount}
      ${note}
      <ul class="comparison-card__features">
        ${rows}
      </ul>
      ${cta}
    </article>
  `
}

function getIndustryVisual(item, ui = {}) {
  const title = typeof item === 'string' ? item : item.title
  const visual = INDUSTRY_SLIDE_VISUALS.find((entry) => entry.match.test(title))

  return {
    image: visual?.image ?? '/images/industry-logistics.jpg',
    alt: visual ? ui[visual.altKey] ?? title : title,
  }
}

function renderIndustrySlide(item, ui = {}) {
  const title = typeof item === 'string' ? item : item.title
  const text =
    typeof item === 'string'
      ? ui.industrySlidePlaceholder ?? 'This vertical can be expanded into SEO pages, quiz paths, and personalized CTAs.'
      : item.text
  const visual = getIndustryVisual(item, ui)

  return `
    <article class="industry-slide">
      <div class="industry-slide__copy">
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
      <div class="industry-slide__media">
        <img src="${visual.image}" alt="${visual.alt}" loading="lazy" />
      </div>
    </article>
  `
}

function getGuaranteeCardMeta(item, index, ui = {}) {
  const title = item.title ?? ''

  if (/легаль|legal/i.test(title)) {
    return {
      label: 'Legal shield',
      metric: '100%',
      delta: ui.guaranteesLegalDelta ?? 'Quotas, permits, visas',
      variant: 'compliance',
    }
  }

  if (/заміна|replace/i.test(title)) {
    return {
      label: 'Replacement',
      metric: ui.guaranteesReplacementMetric ?? 'No fee',
      delta: ui.guaranteesReplacementDelta ?? 'Fast replacement under guarantee',
      variant: 'replacement',
    }
  }

  if (/супровід|support|ключ/i.test(title)) {
    return {
      label: 'Full support',
      metric: ui.guaranteesSupportMetric ?? 'Turnkey',
      delta: ui.guaranteesSupportDelta ?? 'From sourcing to first shift',
      variant: 'support',
    }
  }

  return {
    label: `Benefit 0${index + 1}`,
    metric: `${index + 1}00%`,
    delta: ui.guaranteesFallbackDelta ?? 'VW Recruit advantage',
    variant: 'compliance',
  }
}

function renderGuaranteeVisual(variant, ui = {}) {
  if (variant === 'replacement') {
    return `
      <div class="guarantee-card__replacement-scene" aria-hidden="true">
        <div class="guarantee-card__replacement-card guarantee-card__replacement-card--old">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="guarantee-card__replacement-loop">
          <svg class="guarantee-card__replacement-loop-svg" viewBox="0 0 88 88" aria-hidden="true">
            <defs>
              <marker
                id="replacement-loop-arrowhead"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                markerUnits="userSpaceOnUse"
                orient="auto"
              >
                <path d="M0 0L6 3L0 6Z" fill="#5a6bf8" />
              </marker>
            </defs>
            <circle class="guarantee-card__replacement-loop-ring" cx="44" cy="44" r="39" />
            <g class="guarantee-card__replacement-loop-rotor">
              <path class="guarantee-card__replacement-loop-arc" d="M28 24 A24 24 0 0 1 63 31" marker-end="url(#replacement-loop-arrowhead)" />
              <path class="guarantee-card__replacement-loop-arc" d="M60 64 A24 24 0 0 1 25 57" marker-end="url(#replacement-loop-arrowhead)" />
            </g>
          </svg>
        </div>
        <div class="guarantee-card__replacement-card guarantee-card__replacement-card--new">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `
  }

  if (variant === 'support') {
    return `
      <div class="guarantee-card__support-scene" aria-hidden="true">
        <div class="guarantee-card__support-step">
          <strong>01</strong>
          <span>${ui.guaranteeSupportStepOne ?? 'Selection'}</span>
        </div>
        <div class="guarantee-card__support-path">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="guarantee-card__support-step guarantee-card__support-step--accent">
          <strong>02</strong>
          <span>${ui.guaranteeSupportStepTwo ?? 'Arrival'}</span>
        </div>
        <div class="guarantee-card__support-note">${ui.guaranteeSupportNote ?? 'First shift start'}</div>
      </div>
    `
  }

  return `
    <div class="guarantee-card__compliance-scene" aria-hidden="true">
      <div class="guarantee-card__doc">
        <span class="guarantee-card__doc-line"></span>
        <span class="guarantee-card__doc-line guarantee-card__doc-line--short"></span>
        <span class="guarantee-card__doc-line guarantee-card__doc-line--medium"></span>
      </div>
      <div class="guarantee-card__checklist">
        <span class="guarantee-card__checklist-item is-done">${ui.guaranteeChecklistQuota ?? 'Quotas'}</span>
        <span class="guarantee-card__checklist-item is-done">${ui.guaranteeChecklistPermit ?? 'Permit'}</span>
        <span class="guarantee-card__checklist-item is-done">${ui.guaranteeChecklistVisa ?? 'Visa'}</span>
      </div>
    </div>
  `
}

function renderGuaranteeCard(item, index, ui = {}) {
  const meta = getGuaranteeCardMeta(item, index, ui)

  return `
    <article class="guarantee-card guarantee-card--${meta.variant}">
      <div class="guarantee-card__head">
        <h3 class="guarantee-card__title">${item.title}</h3>
      </div>
      <div class="guarantee-card__metric">${meta.metric}</div>
      <div class="guarantee-card__delta">${meta.delta}</div>
      <div class="guarantee-card__visual">
        ${renderGuaranteeVisual(meta.variant, ui)}
      </div>
      <div class="guarantee-card__copy">
        <p>${item.text}</p>
      </div>
    </article>
  `
}

function getReviewMetricMeta(item, index, ui = {}) {
  const source =
    typeof item === 'string'
      ? { value: ui.reviewFallbackValue ?? '7 YEARS', label: item.replace(ui.reviewLabelPrefix ?? '7 years ', '') }
      : item
  const text = `${source.value ?? ''} ${source.label ?? ''}`.toLowerCase()

  if (/досвід|рекрутинг|experience/.test(text)) {
    return { ...source, icon: 'experience' }
  }

  if (/легаль|документ|visa|permit|compliance/.test(text)) {
    return { ...source, icon: 'shield' }
  }

  if (/швидк|днів|timeline|speed/.test(text)) {
    return { ...source, icon: 'speed' }
  }

  if (/support|супровід|підтримк|onboarding/.test(text)) {
    return { ...source, icon: 'support' }
  }

  return { ...source, icon: ['experience', 'shield', 'speed', 'support'][index % 4] }
}

function renderReviewMetricIcon(icon) {
  if (icon === 'shield') {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    `
  }

  if (icon === 'speed') {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6h4" />
      </svg>
    `
  }

  if (icon === 'support') {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
        <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
      </svg>
    `
  }

  return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  `
}

function renderMediaInsightCard(item, index, ui) {
  const title = typeof item === 'string' ? item : item.title
  const text =
    typeof item === 'string'
      ? ui.reelPlaceholder ?? 'Space for a reel or video in a popup modal after connecting the sources.'
      : item.text
  const meta = typeof item === 'string' ? `${ui.video ?? 'Video'} insight` : item.meta
  const duration = typeof item === 'string' ? '02:00' : item.duration ?? '02:00'
  const videoSrc = typeof item === 'string' ? '' : item.video?.src ?? ''
  const videoType = typeof item === 'string' ? 'video/mp4' : item.video?.type ?? 'video/mp4'
  const videoPoster = typeof item === 'string' ? '' : item.video?.poster ?? ''

  return `
    <article class="media-answer-card">
      <div class="media-answer-card__head">
        <span class="media-answer-card__index">0${index + 1}</span>
        <span class="media-answer-card__duration">${duration}</span>
      </div>
      <div class="media-answer-card__visual">
        <button
          class="media-answer-card__play"
          type="button"
          data-video-trigger
          data-video-title="${title}"
          data-video-src="${videoSrc}"
          data-video-type="${videoType}"
          data-video-poster="${videoPoster}"
          aria-label="${ui.videoPlay ?? 'Play video'}"
        >
          <span></span>
        </button>
        <div class="media-answer-card__signal">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="media-answer-card__body">
        <span class="media-answer-card__meta">${meta}</span>
        <h3>${title}</h3>
        <p>${text}</p>
        <button
          class="button button--ghost media-answer-card__action"
          type="button"
          data-video-trigger
          data-video-title="${title}"
          data-video-src="${videoSrc}"
          data-video-type="${videoType}"
          data-video-poster="${videoPoster}"
        >
          ${ui.videoPlay ?? 'Play video'}
        </button>
      </div>
    </article>
  `
}

function renderServicesPage(content, ui) {
  const services = content.services
  const metrics = services.metrics ?? []
  const heroBadges = services.heroBadges ?? metrics
  const segments = services.segments ?? []
  const pillars = services.pillars ?? []
  const beam = services.beam ?? {}
  const timeline = services.timeline ?? []
  const deliverables = services.deliverables ?? []
  const offerCards = services.offerCards ?? []
  const roles = services.roles ?? []
  const fitCards = buildServicesFitCards(roles, ui)
  const trust = services.trust ?? []

  return `
    <section class="services-hero" data-reveal>
      <div class="shell services-hero__grid">
        <div class="services-hero__copy">
          <h1>${services.title}</h1>
          <p class="lead">${services.lead}</p>
          <div class="button-row services-hero__actions">
            <button class="button" type="button" data-open-modal="callback">${services.cta ?? content.navigation.secondaryCta}</button>
            <a class="button button--ghost" href="#services-form">${ui.servicesHeroGhostCta ?? 'View service terms'}</a>
          </div>
        </div>
        <div class="services-hero__panel">
          <div class="services-hero-visual" aria-hidden="true">
            <div class="services-hero-visual__orbit services-hero-visual__orbit--one"></div>
            <div class="services-hero-visual__orbit services-hero-visual__orbit--two"></div>
            <div class="services-hero-visual__card">
              <div class="services-hero-visual__card-brand">
                <img src="${logoSymbol}" alt="" loading="eager" />
              </div>
              <div class="services-hero-visual__card-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            ${renderCardList(
              heroBadges.slice(0, 4),
              (item, index) => `
                <article class="services-hero-badge services-hero-badge--${index + 1}">
                  <strong>${
                    /^\d+$/.test(String(item.value))
                      ? `<span data-counter-target="${item.value}" data-counter-duration="1400">0</span>${item.suffix ? `<em>${item.suffix}</em>` : ''}`
                      : `${item.value}${item.suffix ? `<em>${item.suffix}</em>` : ''}`
                  }</strong>
                  <p>${item.label}</p>
                </article>
              `,
            )}
          </div>
        </div>
        ${services.intro ? `<p class="services-hero__intro">${services.intro}</p>` : ''}
      </div>
    </section>

    <section class="section services-segments" data-reveal>
      <div class="shell services-segments__grid">
        ${renderCardList(
          segments,
          (item) => `
            <article class="services-segment-card services-segment-card--${item.variant === 'candidate' ? 'b2c' : 'b2b'}">
              <span class="services-segment-card__label">${item.badge ?? (item.variant === 'candidate' ? 'B2C' : 'B2B')}</span>
              <h2>${item.title}</h2>
              <p>${item.text}</p>
              <button class="button${item.variant === 'candidate' ? ' button--ghost' : ' button--white'}" type="button" data-open-modal="callback">${item.cta}</button>
            </article>
          `,
        )}
      </div>
    </section>

    <section class="section services-pillars-section" data-reveal>
      <div class="shell">
        <div class="services-pillars">
          <div class="services-pillars__head">
            <div class="services-pillars__heading">
              <h2>${ui.servicesPillarsTitle ?? 'The service is built not as a resume search, but as a full route to launch people into work'}</h2>
            </div>
          </div>
          <div class="services-pillars__grid">
            ${renderCardList(
              pillars,
              (item, index) => {
                const icons = [
                  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="m21 21-4.35-4.35"/><circle cx="10" cy="9" r="2.5"/><path d="M7.5 14.5c.8-1 1.6-1.5 2.5-1.5s1.7.5 2.5 1.5"/></svg>`,
                  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></svg>`,
                  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
                ]
                return `
                  <article class="services-pillar-card">
                    <div class="services-pillar-card__top">
                      <div class="services-pillar-card__icon">${icons[index] ?? ''}</div>
                      <span class="services-pillar-card__index">0${index + 1}</span>
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                  </article>
                `
              },
            )}
          </div>
        </div>
      </div>
    </section>

    <section class="section section--muted" data-reveal>
      <div class="shell services-offer">
        <div class="services-section-heading services-section-heading--wide">
          <h2>${ui.servicesOfferTitle ?? 'A model where the business gets a managed result and the candidate sees a transparent process'}</h2>
        </div>
        <div class="services-offer__layout">
          <div class="services-offer-visual" aria-hidden="true">
            <div class="services-offer-visual__glow"></div>
            <div class="services-offer-visual__chips">
              <span class="services-offer-visual__chip services-offer-visual__chip--top">${ui.servicesOfferVisualPrimary ?? 'Employer route'}</span>
              <span class="services-offer-visual__chip services-offer-visual__chip--bottom">${ui.servicesOfferVisualSecondary ?? 'Candidate route'}</span>
            </div>
            <div class="services-offer-visual__panel">
              <div class="services-offer-visual__panel-head">
                <span class="services-offer-visual__panel-label">${ui.servicesOfferVisualLabel ?? 'VW Recruit flow'}</span>
                <div class="services-offer-visual__panel-status">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="services-offer-visual__messages">
                ${
                  offerCards[0]
                    ? `
                      <div class="services-offer-visual__message services-offer-visual__message--brand">
                        <strong>${offerCards[0].title}</strong>
                        <p>${offerCards[0].text}</p>
                      </div>
                    `
                    : ''
                }
                ${
                  offerCards[1]
                    ? `
                      <div class="services-offer-visual__message services-offer-visual__message--light">
                        <strong>${offerCards[1].title}</strong>
                        <p>${offerCards[1].text}</p>
                      </div>
                    `
                    : ''
                }
                <div class="services-offer-visual__metrics">
                  ${renderCardList(
                    heroBadges.slice(0, 2),
                    (item) => `
                      <div class="services-offer-visual__metric">
                        <strong>${item.value}${item.suffix ?? ''}</strong>
                        <span>${item.label}</span>
                      </div>
                    `,
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="services-offer__stack">
            ${renderCardList(
              offerCards,
              (item, index) => `
                <article class="services-offer-card${index === 0 ? ' is-active' : ''}">
                  <div class="services-offer-card__head">
                    <span class="services-offer-card__icon" aria-hidden="true"></span>
                    <h3>${item.title}</h3>
                  </div>
                  <p>${item.text}</p>
                </article>
              `,
            )}
          </div>
        </div>
      </div>
    </section>

    <section class="section" data-reveal>
      <div class="shell services-beam">
        <div class="services-section-heading services-section-heading--wide services-beam__heading">
          <h2>${beam.title ?? services.promise?.title ?? ''}</h2>
        </div>
        <div class="services-beam__board" data-animated-beam>
          <svg class="services-beam__svg" data-beam-svg aria-hidden="true"></svg>
          <div class="services-beam__layout">
            <div class="services-beam__column services-beam__column--inputs">
              ${renderCardList(
                (beam.steps ?? timeline.map((item) => item.title)).slice(0, 5),
                (item, index) => `
                  <div class="services-beam-node" data-beam-node>
                    <div class="services-beam-node__circle" data-beam-anchor>
                      ${renderBeamIcon(['brief', 'search', 'approval', 'documents', 'arrival'][index])}
                    </div>
                    <span class="services-beam-node__label">${typeof item === 'string' ? item : item.title}</span>
                  </div>
                `,
              )}
            </div>
            <div class="services-beam__column services-beam__column--center">
              <div class="services-beam-core" data-beam-center>
                <div class="services-beam-core__mark" data-beam-anchor>
                  <img src="${logoSymbol}" alt="" loading="lazy" />
                </div>
                <span class="services-beam-core__label">${beam.centerLabel ?? 'Processing'}</span>
              </div>
            </div>
            <div class="services-beam__column services-beam__column--output">
              <div class="services-beam-output" data-beam-output>
                <div class="services-beam-output__circle" data-beam-anchor>
                  ${renderBeamIcon('user')}
                </div>
                <span class="services-beam-output__label">${beam.outputLabel ?? 'Team launch'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" data-reveal>
      <div class="shell services-route">
        <div class="services-route__board">
          <div class="services-route__intro">
            <h2>${ui.servicesRouteTitle ?? 'A transparent route from request to workers starting their shifts'}</h2>
            <p class="lead">${ui.servicesRouteLead ?? services.promise?.text ?? ''}</p>
          </div>
          <div class="services-route__grid">
            ${renderCardList(
              timeline,
              (item, index) => `
                <article class="services-route-step">
                  <div class="services-route-step__rail" aria-hidden="true">
                    <span class="services-route-step__number">0${index + 1}</span>
                    ${index < timeline.length - 1 ? '<span class="services-route-step__line"></span>' : ''}
                  </div>
                  <div class="services-route-step__body">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                  </div>
                </article>
              `,
            )}
          </div>
        </div>
      </div>
    </section>

    <section class="section" data-reveal>
        <div class="shell services-proof">
        <div class="services-proof__board">
          <div class="services-proof__copy">
            <h2>${ui.servicesProofTitle ?? 'Not just sourcing, but a managed service with a clear result at every stage'}</h2>
            <div class="services-proof__trust">
              ${renderCardList(
                trust,
                (item) => `
                  <div class="services-proof__trust-item">
                    <span aria-hidden="true"></span>
                    <p>${item}</p>
                  </div>
                `,
              )}
            </div>
          </div>
          <div class="services-proof__list">
            ${renderCardList(
              deliverables,
              (item) => `
                <div class="services-proof-item">
                  <span class="services-proof-item__icon" aria-hidden="true"></span>
                  <p>${item}</p>
                </div>
              `,
            )}
          </div>
        </div>
      </div>
    </section>

    <section class="section section--accent" data-reveal>
      <div class="shell services-fit">
        <div class="services-fit__copy">
          <h2>${ui.servicesFitTitle ?? 'Roles and niches where international recruitment delivers the strongest operational impact'}</h2>
          <p class="lead">${ui.servicesFitLead ?? services.promise?.title ?? ''}</p>
        </div>
        <div class="services-fit__grid">
          ${renderCardList(
            fitCards,
            (item) => `
              <article class="services-fit-card">
                <div class="services-fit-card__head">
                  <div class="services-fit-card__score" data-fit-score="${item.score}" style="--fit-progress:0;">
                    <div class="services-fit-card__score-ring"></div>
                    <div class="services-fit-card__score-value">
                      <strong data-fit-score-value>0</strong>
                      <span>%</span>
                    </div>
                  </div>
                  <div class="services-fit-card__copy-head">
                    <h3>${item.title}</h3>
                  </div>
                </div>
                <div class="services-fit-card__metrics">
                  ${renderCardList(
                    item.metrics,
                    (metric) => `
                      <div class="services-fit-card__metric">
                        <div class="services-fit-card__metric-top">
                          <span>${metric.label}</span>
                          <strong>${metric.value}%</strong>
                        </div>
                        <span class="services-fit-card__metric-bar" data-fit-bar="${metric.value}" style="--fit-bar-progress:0;"></span>
                      </div>
                    `,
                  )}
                </div>
                <p>${item.text}</p>
              </article>
            `,
          )}
        </div>
      </div>
    </section>

    <section class="section" id="services-form" data-reveal>
      <div class="shell services-lead">
        <div class="services-lead__copy">
          <h2>${content.services?.form?.title ?? content.forms.lead.title}</h2>
        </div>
        ${renderServicesLeadForm(content)}
      </div>
    </section>
  `
}

function renderCasesPage(content, ui) {
  const cases = content.cases ?? {}
  const stats = cases.stats ?? []
  const featured = cases.featured ?? content.home.casesSection?.items ?? []
  const framework = cases.framework ?? []
  const timelineSteps = ['Бриф', 'Пошук', 'Погодження', 'Документи', 'Приїзд']

  const renderTimeline = () =>
    renderCardList(
      timelineSteps,
      (step, index) => `
        <span class="tl-step">${step}</span>
        ${
          index < timelineSteps.length - 1
            ? '<span class="tl-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></span>'
            : ''
        }
      `,
    )

  return `
    <section class="page-hero cases-page-hero">
      <div class="shell">
        <h1 class="cases-hero__title">${cases.title}</h1>
        <p class="cases-hero__desc">${cases.lead}</p>
        ${
          stats.length
            ? `
              <div class="cases-hero__stats">
                ${renderCardList(
                  stats,
                  (item) => `
                    <div class="cases-hero__stat">
                      <span class="cases-hero__stat-num">${item.value}${item.suffix ?? ''}</span>
                      <span class="cases-hero__stat-label">${item.label}</span>
                    </div>
                  `,
                )}
              </div>
            `
            : ''
        }
      </div>
    </section>

    <section class="section section--muted cases-page-section" data-reveal>
      <div class="shell">
        <div class="cases-grid">
          ${renderCardList(
            featured,
            (item) => `
              <article class="case-card case-card--col-${item.colSpan ?? 1}">
                <div class="case-card__media">
                  <img src="${item.image}" alt="${item.alt ?? item.title}" loading="lazy" />
                </div>
                <div class="case-card__body">
                  <span class="case-card__category">${item.category ?? cases.eyebrow ?? ui.caseStudy ?? 'Case study'}</span>
                  <h3 class="case-card__name">${item.title}</h3>
                  <p class="case-card__sub">${item.subtitle ?? ''}</p>
                  <p class="case-card__desc">${item.problem ?? ''}</p>
                  ${
                    item.metrics?.length
                      ? `
                        <div class="case-card__metrics">
                          ${renderCardList(
                            item.metrics,
                            (metric) => `
                              <div class="case-card__metric">
                                <span class="case-card__metric-val">${metric.value}</span>
                                <span class="case-card__metric-label">${metric.label}</span>
                              </div>
                            `,
                          )}
                        </div>
                      `
                      : ''
                  }
                  <div class="case-card__timeline">${renderTimeline()}</div>
                </div>
              </article>
            `,
          )}
        </div>
      </div>
    </section>

    <section class="section cases-page-section" data-reveal>
      <div class="shell convincing-section">
        <p class="convincing-section__label">${ui.whyItWorks ?? 'Чому це працює'}</p>
        <h2 class="convincing-section__title">${cases.convincingTitle ?? cases.frameworkTitle ?? ''}</h2>
        <div class="animated-list">
          ${renderCardList(
            framework,
            (item, index) => `
              <article class="animated-list__item">
                <div class="animated-list__step">Крок ${index + 1}</div>
                <div class="animated-list__visual animated-list__visual--${index === 0 ? 'challenge' : index === 1 ? 'flow' : 'result'}" aria-hidden="true">
                  <span class="animated-list__visual-orb animated-list__visual-orb--a"></span>
                  <span class="animated-list__visual-orb animated-list__visual-orb--b"></span>
                  ${
                    index === 0
                      ? `
                        <span class="animated-list__visual-panel animated-list__visual-panel--tall"></span>
                        <span class="animated-list__visual-panel animated-list__visual-panel--wide"></span>
                        <span class="animated-list__visual-chip"></span>
                      `
                      : index === 1
                        ? `
                          <span class="animated-list__visual-line animated-list__visual-line--one"></span>
                          <span class="animated-list__visual-line animated-list__visual-line--two"></span>
                          <span class="animated-list__visual-node animated-list__visual-node--start"></span>
                          <span class="animated-list__visual-node animated-list__visual-node--end"></span>
                        `
                        : `
                          <span class="animated-list__visual-stack animated-list__visual-stack--back"></span>
                          <span class="animated-list__visual-stack animated-list__visual-stack--front"></span>
                          <span class="animated-list__visual-badge"></span>
                        `
                  }
                  ${index < framework.length - 1 ? '<span class="animated-list__connector"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m13 7 6 5-6 5"></path></svg></span>' : ''}
                </div>
                <div class="animated-list__num">0${index + 1}</div>
                <div class="animated-list__content">
                  <h3 class="animated-list__heading">${item.title}</h3>
                  <p class="animated-list__desc">${item.text}</p>
                </div>
              </article>
            `,
          )}
        </div>
      </div>
    </section>

    <section class="section cases-page-section" data-reveal>
      <div class="shell">
        <div class="cases-cta">
          <div class="cases-cta__text">
            <h2 class="cases-cta__title">${cases.ctaTitle ?? content.forms.lead.title}</h2>
            <p class="cases-cta__desc">${cases.ctaLead ?? content.home.finalCta?.lead ?? ''}</p>
          </div>
          ${renderReportStyleForm(content, {
            type: 'lead',
            title: content.forms?.lead?.title,
            buttonLabel: ui.sendRequest ?? 'Send request',
            note: cases.ctaLead ?? '',
          })}
        </div>
      </div>
    </section>
  `
}

function renderIndustriesPage(content, ui) {
  const industries = content.industries ?? {}
  const stats = industries.stats ?? []
  const sectors = industries.sectors ?? content.home.industries.items ?? []
  const framework = industries.framework ?? []
  const fitSignals = industries.fitSignals ?? []

  return `
    <section class="page-hero industries-page-hero">
      <div class="shell">
        <div
          class="industries-hero-ripple"
          data-ripple
          data-ripple-size="170"
          data-ripple-opacity="0.16"
          data-ripple-count="6"
        >
          <p class="industries-hero-ripple__text">VW Recruit</p>
        </div>
        <div class="industries-page-hero__copy">
          <h1>${industries.title}</h1>
          <p class="lead">${industries.lead ?? ''}</p>
          ${industries.intro ? `<p class="industries-page-hero__intro">${industries.intro}</p>` : ''}
        </div>
        ${
          stats.length
            ? `
              <div class="hero__stats industries-page-hero__stats">
                ${renderCardList(
                  stats,
                  (item) => `
                    <article class="hero-stat-card industries-stat-card">
                      <div class="hero-stat-card__value">
                        <strong>${item.value}</strong>
                      </div>
                      <p>${item.label}</p>
                    </article>
                  `,
                )}
              </div>
            `
            : ''
        }
      </div>
    </section>

    <section class="section section--muted industries-page-section" data-reveal>
      <div class="shell industries-page__sectors">
        <div class="industries-page__head">
          <h2>${industries.sectorsTitle ?? industries.title}</h2>
          <p>${industries.sectorsLead ?? industries.lead ?? ''}</p>
        </div>
        <div class="industries-page__grid">
          ${renderCardList(
            sectors,
            (item, index) => `
              <article class="bento-card bento-card--col-${typeof item === 'string' ? (index === 0 || index === 3 ? 2 : 1) : item.colSpan ?? (index === 0 || index === 3 ? 2 : 1)}">
                <div class="bento-card__bg">
                  <img
                    src="${typeof item === 'string' ? getIndustryVisual(item, ui).image : item.image ?? getIndustryVisual(item, ui).image}"
                    alt="${typeof item === 'string' ? getIndustryVisual(item, ui).alt : item.alt ?? item.title}"
                    loading="lazy"
                  />
                </div>
                <div class="bento-card__body">
                  <div class="bento-card__icon">${renderIndustryBentoIcon(typeof item === 'string' ? item : item.title)}</div>
                  <p class="bento-card__eyebrow">${industries.eyebrow ?? 'Industries'}</p>
                  <h3 class="bento-card__name">${typeof item === 'string' ? item : item.title}</h3>
                  <p class="bento-card__desc">${typeof item === 'string' ? item : item.text ?? ''}</p>
                  ${
                    item.tags?.length
                      ? `
                        <div class="bento-card__tags">
                          ${renderCardList(
                            item.tags,
                            (tag) => `<span class="bento-card__tag">${tag}</span>`,
                          )}
                        </div>
                      `
                      : ''
                  }
                  <div class="bento-card__cta">
                    ${
                      item.caseLabel && item.caseHref
                        ? `<a href="${buildPageUrl(content.locale.code, item.caseHref.startsWith('/') ? item.caseHref.slice(1) : item.caseHref)}">${item.caseLabel}</a>`
                        : ''
                    }
                    ${
                      item.cta
                        ? `<button class="button-link" type="button" data-open-modal="callback">${item.cta}</button>`
                        : ''
                    }
                  </div>
                </div>
                <div class="bento-card__overlay"></div>
              </article>
            `,
          )}
        </div>
      </div>
    </section>

    <section class="section industries-page-section" data-reveal>
      <div class="shell industries-framework">
        <div class="industries-framework__copy">
          <div class="industries-framework__copy-inner">
            <h2>${industries.frameworkTitle ?? ''}</h2>
            <p class="lead">${industries.frameworkLead ?? ''}</p>
          </div>
        </div>
        <div class="industries-framework__grid">
          ${renderCardList(
            framework,
            (item, index) => `
              <article class="industries-framework-card">
                <div class="industries-framework-card__top">
                  <span class="industries-framework-card__icon">${renderIndustryFrameworkIcon(item.title)}</span>
                  <span class="industries-framework-card__index">0${index + 1}</span>
                </div>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `,
          )}
        </div>
      </div>
    </section>

    <section class="section section--muted industries-page-section" data-reveal>
      <div class="shell industries-fit">
        <div class="industries-fit__panel">
          <div class="industries-fit__intro">
            <h2>${industries.fitTitle ?? ''}</h2>
            <p class="lead">${industries.fitLead ?? ''}</p>
            <div class="industries-fit__summary">
              <p class="industries-fit__summary-text">Сигнали, які зазвичай означають, що локальний найм уже не тримає темп вашої операції і потрібна більш системна модель комплектування команди.</p>
            </div>
          </div>
          <div class="industries-fit__items">
            ${renderCardList(
              fitSignals,
              (item) => `
                <div class="industries-fit__item">
                  <p>${item}</p>
                </div>
              `,
            )}
          </div>
        </div>
      </div>
    </section>

    <section class="section industries-page-section" data-reveal>
      <div class="shell split split--hero industries-cta">
        <div class="industries-cta__copy">
          <h2>${industries.ctaTitle ?? content.forms.lead.title}</h2>
          <p class="lead">${industries.ctaLead ?? content.home.finalCta?.lead ?? ''}</p>
        </div>
        ${renderReportStyleForm(content, {
          type: 'lead',
          title: content.forms?.lead?.title,
          buttonLabel: ui.sendRequest ?? 'Send request',
          note: content.forms?.lead?.success ? '' : industries.ctaLead ?? '',
        })}
      </div>
    </section>
  `
}

function renderReportPage(content, ui) {
  const report = content.report ?? {}
  const stats = report.stats ?? []
  const points = report.points ?? content.home.reportBlock?.points ?? []
  const benefits = report.benefits ?? []
  const faqItems = report.faq ?? []
  const reportLabel = report.eyebrow ?? 'Report'
  const reportButton = report.formTitle ?? content.forms.report.title
  const reportPdfTitle = ui.reportPanelReportTitle ?? 'Labor market 2026'
  const reportPdfText = ui.reportPanelReportText ?? 'International workforce integration for businesses facing labor shortages'
  const reportPdfMeta = report.stats?.[1]?.value ? `${ui.reportPanelKicker ?? 'VW Recruit / Insight'} - ${report.stats[1].value} ${report.stats[1].label}` : ui.reportPanelKicker ?? 'VW Recruit / Insight'
  const pointIcons = [
    '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
    '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
  ]

  const renderReportMarquee = () =>
    renderCardList(
      points.concat(points),
      (item, index) => `
        <div class="report-marquee__item">
          <span class="report-marquee__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              ${pointIcons[index % pointIcons.length]}
            </svg>
          </span>
          <span class="report-marquee__text">${item}</span>
        </div>
      `,
    )

  return `
    <section class="report-hero">
      <div class="report-hero__ripple">
        <div class="shell report-hero__content">
          <h1 class="report-hero__title">${report.title}</h1>
          <p class="report-hero__desc">${report.lead}</p>
          <a class="report-hero__button" href="#report-form">${reportButton}</a>
          ${
            stats.length
              ? `
                <div class="report-stats">
                  ${renderCardList(
                    stats,
                    (item) => {
                      const numericValue = Number.parseInt(item.value, 10)
                      const isCounter = Number.isFinite(numericValue)

                      return `
                        <div class="report-stat">
                          <span class="report-stat__num"${isCounter ? ` data-counter-target="${numericValue}"` : ''}>${isCounter ? '0' : item.value}</span>
                          <span class="report-stat__label">${item.label}</span>
                        </div>
                      `
                    },
                  )}
                </div>
              `
              : ''
          }
        </div>
      </div>
    </section>

    <section class="report-page-section report-marquee-section" data-reveal>
      <div class="shell">
        <p class="report-marquee__label">${report.pointsTitle ?? 'What is inside'}</p>
      </div>
      <div class="report-marquee">
        <div class="report-marquee__track">
          ${renderReportMarquee()}
        </div>
      </div>
    </section>

    <section class="report-page-section report-why" data-reveal>
      <div class="shell">
        <h2 class="report-section__title">${report.benefitsTitle ?? ''}</h2>
        ${report.benefitsLead ? `<p class="report-section__lead">${report.benefitsLead}</p>` : ''}
        <div class="report-why__grid">
          ${renderCardList(
            benefits,
            (item, index) => `
              <article class="report-why-card">
                <span class="report-why-card__index">0${index + 1}</span>
                <h3 class="report-why-card__title">${item.title}</h3>
                <p class="report-why-card__desc">${item.text}</p>
              </article>
            `,
          )}
        </div>
      </div>
    </section>

    ${
      faqItems.length
        ? `
          <section class="report-page-section report-faq-section" data-reveal>
            <div class="shell">
              <h2 class="report-section__title">${report.faqTitle ?? ''}</h2>
              <div class="report-faq__list">
                ${renderFaq(faqItems)}
              </div>
            </div>
          </section>
        `
        : ''
    }

    <section class="report-page-section report-form-section" id="report-form" data-reveal>
      <div class="shell report-form">
        <div class="report-form__info">
          <h2 class="report-section__title">${report.ctaTitle ?? content.forms.report.title}</h2>
          <p class="report-form__desc">${report.ctaLead ?? report.formLead ?? ''}</p>
          <div class="report-form__pdf">
            <div class="report-form__pdf-icon">${ui.reportPanelGuide ?? 'PDF'}</div>
            <div class="report-form__pdf-meta">
              <span class="report-form__pdf-title">${reportPdfTitle}</span>
              <span class="report-form__pdf-sub">${reportPdfMeta}</span>
            </div>
          </div>
        </div>

        <div class="report-form__card">
          <div class="report-form__card-inner">
            <h3 class="report-form__card-title">${report.formTitle ?? ui.reportPanelTitle ?? 'Get the report by email'}</h3>
            <form class="report-form__fields" data-form data-form-type="report">
              <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
              <label class="report-form__field">
                <span>${ui.fieldName ?? 'Name'} *</span>
                <input type="text" name="name" autocomplete="name" required />
              </label>
              <label class="report-form__field">
                <span>${ui.fieldCompany ?? 'Company'} *</span>
                <input type="text" name="company" autocomplete="organization" required />
              </label>
              <label class="report-form__field">
                <span>${ui.fieldEmail ?? 'Email'} *</span>
                <input type="email" name="email" autocomplete="email" required />
              </label>
              <label class="report-form__field">
                <span>${ui.fieldPhone ?? 'Phone'}</span>
                <input type="tel" name="phone" autocomplete="tel" />
              </label>
              <button class="report-form__submit" type="submit">${reportButton}</button>
              <p class="form-status" data-form-status role="status" hidden></p>
            </form>
            <p class="report-form__note">${report.formNote ?? reportPdfText}</p>
          </div>
        </div>
      </div>
    </section>
  `
}

export function renderPage(content, pageKey) {
  const ui = content.ui ?? {}

  if (pageKey === 'home') {
    const comparisonCards = content.home.comparison.cards
    const industryItems = content.home.industries.items
    const caseItems = content.home.casesSection?.items ?? []
    const guaranteeItems = content.home.guarantees?.items ?? []
    const reviewItems = content.home.reviews?.items ?? []
    const reviewMetrics = content.home.reviews?.metrics ?? []
    const reelItems = content.home.media?.reels ?? []

    return `
      <section class="hero" data-reveal>
        <div class="shell hero__simple">
          <div class="hero__globe" aria-hidden="true">
            <div class="hero__globe-stage" data-hero-globe-stage>
              <canvas class="hero__globe-canvas" data-hero-globe-canvas></canvas>
            </div>
          </div>
          <div class="hero__headline">
            ${renderCardList(
              content.home.hero.lines ?? [content.home.hero.title],
              (line, index, lines) => {
                const isLastLine = index === lines.length - 1
                const highlight = isLastLine && content.home.hero.highlight
                  ? ` <span class="hero__highlight">${content.home.hero.highlight}</span>`
                  : ''

                return `<div class="hero__line">${line}${highlight}</div>`
              },
            )}
          </div>
          <p class="hero__lead">${content.home.hero.lead}</p>
          <div class="hero__cta">
            <button class="button" type="button" data-open-modal="hero-quiz">${content.navigation.primaryCta}</button>
            <a class="button button--hero-secondary" href="${buildPageUrl(content.locale.code, 'cases')}">${ui.projectsExamples ?? 'Project examples'}</a>
          </div>
          ${
            content.home.hero.stats?.length
              ? `
                <div class="hero__stats">
                  ${renderCardList(
                    content.home.hero.stats,
                    (item) => `
                      <article class="hero-stat-card">
                        <div class="hero-stat-card__value">
                          <strong data-counter-target="${item.value}" data-counter-duration="1500">0</strong><span>${item.suffix}</span>
                        </div>
                        <p>${item.label}</p>
                      </article>
                    `,
                  )}
                </div>
              `
              : ''
          }
          ${
            content.home.hero.video
              ? `
                <div class="hero-video" data-hero-video-player>
                  <video
                    class="hero-video__media"
                    playsinline
                    preload="metadata"
                    ${content.home.hero.video.src ? `src="${content.home.hero.video.src}"` : ''}
                    ${content.home.hero.video.poster ? `poster="${content.home.hero.video.poster}"` : ''}
                  >
                    ${content.home.hero.video.src ? `<source src="${content.home.hero.video.src}" type="${content.home.hero.video.type ?? 'video/mp4'}" />` : ''}
                  </video>
                  <button class="hero-video__play" type="button" aria-label="${ui.videoPlay ?? 'Play video'}" data-hero-video-trigger></button>
                </div>
              `
              : ''
          }
        </div>
      </section>

      <section class="section" data-reveal>
        <div class="shell comparison-section">
          <div class="comparison-heading">
            <h2>${content.home.comparison.title}</h2>
          </div>
          <div class="comparison-grid">
            ${comparisonCards
              ? renderCardList(
                  comparisonCards,
                  (card) => renderComparisonCard(card, content),
                )
              : content.home.comparison.items.map((item) => `<div class="line-card">${item}</div>`).join('')}
          </div>
        </div>
      </section>

      <section class="section section--muted" data-reveal data-report-prompt-trigger>
        <div class="shell industries-showcase">
          <div class="industries-showcase__head">
            <h2>${ui.industriesSectionTitle ?? 'WHICH INDUSTRIES THIS HIRING MODEL FITS'}</h2>
            <p class="lead">${ui.industriesLead ?? 'Companies most often use this hiring model for operational roles in manufacturing, warehouses, construction, and service.'}</p>
          </div>
          <div class="industries-slider" data-industry-slider>
            <div class="industries-slider__controls">
              <button class="industries-slider__button" type="button" data-industry-slider-prev aria-label="${ui.industrySliderPrev ?? 'Previous slide'}">←</button>
              <button class="industries-slider__button" type="button" data-industry-slider-next aria-label="${ui.industrySliderNext ?? 'Next slide'}">→</button>
            </div>
            <div class="industries-slider__track" data-industry-slider-track>
              ${renderCardList(industryItems, (item) => renderIndustrySlide(item, ui))}
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="quiz" data-reveal>
        <div class="shell split split--hero">
          <div>
            <h2>${content.home.calculator?.title ?? content.quiz.title}</h2>
            <p class="lead">${content.home.calculator?.lead ?? ui.quizSectionLead ?? 'Step-based mobile-friendly flow with analytics events and a single submission payload.'}</p>
          </div>
          <div data-quiz data-quiz-source="page_quiz"></div>
        </div>
      </section>

      ${
        caseItems.length
          ? `
            <section class="section section--muted" id="cases" data-reveal>
              <div class="shell">
                <div class="cases-section__head">
                  <h2>${content.home.casesSection.title}</h2>
                </div>
                <div class="cases-slider" data-cases-slider>
                  <div class="cases-slider__controls">
                    <button class="cases-slider__button" type="button" data-cases-slider-prev aria-label="${ui.caseSliderPrev ?? 'Previous case'}">←</button>
                    <button class="cases-slider__button" type="button" data-cases-slider-next aria-label="${ui.caseSliderNext ?? 'Next case'}">→</button>
                  </div>
                  <div class="cases-slider__track" data-cases-slider-track>
                    ${renderCardList(
                      caseItems,
                      (item) => `
                        <article class="case-card">
                          <div class="case-card__content">
                            <p class="eyebrow">${ui.caseStudy ?? 'Case study'}</p>
                            <h3>${typeof item === 'string' ? item : item.title}</h3>
                            <p class="case-card__subtitle">${typeof item === 'string' ? ui.caseSubtitlePlaceholder ?? 'Short case summary' : item.subtitle}</p>
                            <p class="case-card__problem">${typeof item === 'string' ? ui.caseProblemPlaceholder ?? 'Separate SEO-friendly URL for the case, results, timing, and CTA.' : item.problem}</p>
                            <div class="button-row">
                              <a class="button button--ghost case-card__button" href="${buildPageUrl(content.locale.code, 'cases')}">
                                <span>${ui.caseViewLabel ?? 'View case'}</span>
                                <span class="case-card__button-icon" aria-hidden="true">→</span>
                              </a>
                            </div>
                          </div>
                          <div class="case-card__media">
                            <img
                              src="${typeof item === 'string' ? '/images/industry-logistics.jpg' : item.image}"
                              alt="${typeof item === 'string' ? item : item.alt ?? item.title}"
                              loading="lazy"
                            />
                          </div>
                        </article>
                      `,
                    )}
                  </div>
                </div>
              </div>
            </section>
          `
          : ''
      }

      <section class="section section--accent" data-reveal>
        <div class="shell process-flow">
          <div class="process-flow__intro">
            <h2>${content.home.process.title}</h2>
            ${content.home.process.intro ? `<p class="lead">${content.home.process.intro}</p>` : ''}
          </div>
          <div class="process-flow__board">
            <div class="process-flow__rail" aria-hidden="true">
              ${renderCardList(
                content.home.process.steps,
                (step, index) => `
                  <div class="process-flow__rail-step${index === content.home.process.steps.length - 1 ? ' is-current' : ''}">
                    <span class="process-flow__rail-badge">${index + 1}</span>
                    <span class="process-flow__rail-title">${typeof step === 'string' ? `${ui.processStepLabel ?? 'Step'} ${index + 1}` : step.title}</span>
                  </div>
                `,
              )}
            </div>
            <div class="process-flow__cards">
              ${renderCardList(
                content.home.process.steps,
                (step, index) => `
                  <article class="process-card${index === content.home.process.steps.length - 1 ? ' process-card--accent' : ''}">
                    <div class="process-card__meta">
                      <strong>0${index + 1}</strong>
                    </div>
                    <div class="process-card__preview" aria-hidden="true">
                      <span class="process-card__preview-line process-card__preview-line--short"></span>
                      <span class="process-card__preview-line"></span>
                      <span class="process-card__preview-line process-card__preview-line--medium"></span>
                    </div>
                    <h3>${typeof step === 'string' ? `${ui.processStepLabel ?? 'Step'} ${index + 1}` : step.title}</h3>
                    <p>${typeof step === 'string' ? step : step.text}</p>
                  </article>
                `,
              )}
            </div>
          </div>
        </div>
      </section>

      ${
        guaranteeItems.length
          ? `
            <section class="section" data-reveal>
              <div class="shell">
                <h2 class="guarantees-title">${content.home.guarantees.title}</h2>
                <div class="card-grid guarantees-grid">
                  ${renderCardList(
                    guaranteeItems,
                    (item, index) => renderGuaranteeCard(item, index, ui),
                  )}
                </div>
              </div>
            </section>
          `
          : ''
      }

      ${
        content.home.reportBlock
          ? `
            <section class="section section--muted" data-reveal>
              <div class="shell report-capture">
                <div class="report-capture__content">
                  <h2>${content.home.reportBlock.title}</h2>
                  <p class="lead">${content.home.reportBlock.lead}</p>
                  <div class="report-capture__points">
                    ${renderCardList(
                      content.home.reportBlock.points,
                      (item, index) => `
                        <article class="report-capture__point">
                          <span class="report-capture__point-index">0${index + 1}</span>
                          <p>${item}</p>
                        </article>
                      `,
                    )}
                  </div>
                </div>
                <div class="report-capture__panel">
                  <div class="report-capture__panel-copy">
                    <strong>${ui.reportPanelTitle ?? 'Get the material by email'}</strong>
                    <p>${ui.reportPanelText ?? 'Leave your contact details and we will send a useful resource about international hiring and payroll optimization.'}</p>
                  </div>
                  <div class="report-capture__panel-card" aria-hidden="true">
                    <div class="report-capture__panel-card-sheet">
                      <span class="report-capture__panel-card-kicker">${ui.reportPanelKicker ?? 'VW Recruit / Insight'}</span>
                      <strong>${ui.reportPanelReportTitle ?? 'Labor market 2026'}</strong>
                      <p>${ui.reportPanelReportText ?? 'International workforce integration for businesses facing labor shortages'}</p>
                    </div>
                    <div class="report-capture__panel-card-badge">
                      <span>${ui.reportPanelGuide ?? 'Guide'}</span>
                    </div>
                  </div>
                  ${renderReportCaptureForm(content)}
                </div>
              </div>
            </section>
          `
          : ''
      }

      ${
        reviewItems.length
          ? `
            <section class="section reviews-section" data-reveal>
              <div class="shell">
                <h2>${content.home.reviews.title}</h2>
                <div class="reviews-slider" data-reviews-slider>
                  <div class="reviews-slider__controls">
                    <button class="reviews-slider__button" type="button" data-reviews-slider-prev aria-label="${ui.reviewsPrev ?? 'Previous review'}">←</button>
                    <button class="reviews-slider__button" type="button" data-reviews-slider-next aria-label="${ui.reviewsNext ?? 'Next review'}">→</button>
                  </div>
                  <div class="reviews-slider__track" data-reviews-slider-track>
                    ${renderCardList(
                      reviewItems,
                      (item) => `
                        <article class="testimonial-card">
                          <p class="testimonial-card__text">${item.text}</p>
                          <div class="testimonial-card__footer">
                            <strong class="testimonial-card__name">${item.name ?? item.title}</strong>
                            <span class="testimonial-card__company">${item.company ?? ''}</span>
                          </div>
                        </article>
                      `,
                    )}
                  </div>
                </div>
                <div class="reviews-facts">
                  ${renderCardList(
                    reviewMetrics,
                    (item, index) => {
                      const meta = getReviewMetricMeta(item, index, ui)

                      return `
                        <article class="reviews-fact reviews-fact--${meta.icon}">
                          <div class="reviews-fact__icon" aria-hidden="true">
                            ${renderReviewMetricIcon(meta.icon)}
                          </div>
                          <div class="reviews-fact__copy">
                            <strong>${meta.value ?? ui.reviewFallbackValue ?? '7 YEARS'}</strong>
                            <span>${meta.label ?? ''}</span>
                          </div>
                        </article>
                      `
                    },
                  )}
                </div>
              </div>
            </section>
          `
          : ''
      }

      ${
        reelItems.length
          ? `
            <section class="section section--muted media-answers-section" data-reveal>
              <div class="shell media-answers">
                <div class="media-answers__head">
                  <h2>${content.home.media.title}</h2>
                </div>
                <div class="media-answers__grid">
                  ${renderCardList(reelItems, (item, index) => renderMediaInsightCard(item, index, ui))}
                </div>
              </div>
            </section>
          `
          : ''
      }

      <section class="section final-lead-mobile-center" data-reveal>
        <div class="shell split final-lead-section">
          <div class="final-lead-section__copy">
            <h2>${content.forms.lead.title}</h2>
            <p class="lead">${content.home.finalCta.lead}</p>
          </div>
          ${renderLeadForm(content)}
        </div>
      </section>

      <section class="section section--muted faq-section" data-reveal>
        <div class="shell split">
          <div>
            <h2>${content.home.faq.title}</h2>
          </div>
          <div class="stack">
            ${renderFaq(content.home.faq.items)}
          </div>
        </div>
      </section>

      <section class="section" data-reveal>
        <div class="shell cta-banner">
          <div class="cta-banner__copy">
            <div class="cta-banner__brand" aria-hidden="true">
              <img src="${logoSymbol}" alt="" loading="lazy" />
              <span>VW Recruit</span>
            </div>
            <h2>${content.home.finalCta.title}</h2>
            <p>${content.home.finalCta.lead}</p>
          </div>
          <div class="cta-banner__actions">
            <button class="button cta-banner__button cta-banner__button--pulse" type="button" data-open-modal="report">${ui.downloadReport ?? 'Download report'}</button>
            <a class="button button--ghost cta-banner__button cta-banner__button--ghost" href="${buildPageUrl(content.locale.code, 'contacts')}">${ui.openContactsPage ?? 'Open contacts page'}</a>
          </div>
        </div>
      </section>
    `
  }

  if (pageKey === 'services') {
    return renderServicesPage(content, ui)
  }

  if (pageKey === 'cases') {
    return renderCasesPage(content, ui)
  }

  if (pageKey === 'industries') {
    return renderIndustriesPage(content, ui)
  }

  if (pageKey === 'report') {
    return renderReportPage(content, ui)
  }

  const contentMap = {
    report: content.report,
    about: content.about,
    contacts: content.contacts,
    faq: content.faqPage,
    'privacy-policy': content.privacy,
    terms: content.terms,
  }

  const page = contentMap[pageKey] ?? content.about
  const includeForm = !['privacy-policy', 'terms'].includes(pageKey)
  const includeFaq = pageKey === 'faq'

  return `
    ${renderSimplePage(page.title, page.lead, pageKey)}
    <section class="section">
      <div class="shell split">
        <div class="stack">
          <div class="line-card">Starter page template for <strong>${pageKey}</strong></div>
          <div class="line-card">Ready for localized metadata and content expansion</div>
          <div class="line-card">Built as a separate SEO-friendly route per locale</div>
        </div>
        ${
          includeForm
            ? renderReportStyleForm(content, {
                type: pageKey === 'report' ? 'report' : 'contact',
                title: content.forms?.[pageKey === 'report' ? 'report' : 'contact']?.title,
                buttonLabel: ui.sendRequest ?? 'Send request',
                note: page.lead ?? '',
              })
            : `<div class="card"><p>${ui.legalPlaceholder ?? 'Legal copy placeholder. Replace with approved content before launch.'}</p></div>`
        }
      </div>
    </section>
    ${
      includeFaq
        ? `
          <section class="section section--muted">
            <div class="shell stack">
              ${renderFaq(content.home.faq.items)}
            </div>
          </section>
        `
        : ''
    }
  `
}

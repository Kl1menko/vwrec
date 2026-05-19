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
      text: ui.servicesFitCardTextOne,
    },
    {
      score: 93,
      metrics: [91, 89, 95],
      text: ui.servicesFitCardTextTwo,
    },
    {
      score: 89,
      metrics: [84, 88, 90],
      text: ui.servicesFitCardTextThree,
    },
    {
      score: 87,
      metrics: [86, 83, 92],
      text: ui.servicesFitCardTextFour,
    },
  ]

  const metricLabels = [
    ui.servicesFitMetricOne,
    ui.servicesFitMetricTwo,
    ui.servicesFitMetricThree,
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

function renderExtraLeadFields(ui, fieldClassName = 'field') {
  return `
    <label class="${fieldClassName}">
      <span>${ui.fieldIsBusiness} *</span>
      <select name="isBusiness" required>
        <option value="" disabled selected>${ui.fieldSelectOption}</option>
        <option value="yes">${ui.optionYes}</option>
        <option value="no">${ui.optionNo}</option>
      </select>
    </label>
    <label class="${fieldClassName}">
      <span>${ui.fieldTargetCountries} *</span>
      <input type="text" name="targetCountries" autocomplete="off" required />
    </label>
    <label class="${fieldClassName}">
      <span>${ui.fieldWorkersCount} *</span>
      <input type="number" name="workersNeeded" min="1" step="1" inputmode="numeric" required />
    </label>
  `
}

function renderReportStyleForm(content, { type = 'lead', title, buttonLabel, note = '' } = {}) {
  const ui = content.ui ?? {}
  const resolvedTitle = title ?? content.forms?.[type]?.title ?? content.forms?.lead?.title
  const resolvedButtonLabel = buttonLabel ?? ui.sendRequest

  return `
    <div class="report-form__card report-form__card--embedded">
      <div class="report-form__card-inner">
        <h3 class="report-form__card-title">${resolvedTitle}</h3>
        <form class="report-form__fields" data-form data-form-type="${type}">
          <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
          <label class="report-form__field">
            <span>${ui.fieldName} *</span>
            <input type="text" name="name" autocomplete="name" required />
          </label>
          <label class="report-form__field">
            <span>${ui.fieldCompany} *</span>
            <input type="text" name="company" autocomplete="organization" required />
          </label>
          <label class="report-form__field">
            <span>${ui.fieldEmail}</span>
            <input type="email" name="email" autocomplete="email" />
          </label>
          <label class="report-form__field">
            <span>${ui.fieldPhone} *</span>
            <input type="tel" name="phone" autocomplete="tel" required />
          </label>
          ${renderExtraLeadFields(ui, 'report-form__field')}
          <button class="report-form__submit" type="submit">${resolvedButtonLabel}</button>
          <p class="form-status" data-form-status role="status" hidden></p>
        </form>
        ${note ? `<p class="report-form__note">${note}</p>` : ''}
      </div>
    </div>
  `
}

function renderServicesLeadForm(content) {
  const servicesForm = content.services?.form ?? {}

  return renderReportStyleForm(content, {
    type: 'lead',
    title: servicesForm.title ?? content.forms?.lead?.title,
    buttonLabel: servicesForm.button ?? content.ui.sendRequest,
    note: servicesForm.note ?? servicesForm.lead ?? '',
  })
}

function renderReportCaptureForm(content) {
  const ui = content.ui ?? {}

  return `
    <form class="report-capture__form" data-form data-form-type="report">
      <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
      <label class="field">
        <span>${ui.fieldName} *</span>
        <input type="text" name="name" autocomplete="name" required />
      </label>
      <label class="field">
        <span>${ui.fieldCompany} *</span>
        <input type="text" name="company" autocomplete="organization" required />
      </label>
      <label class="field">
        <span>${ui.fieldEmail}</span>
        <input type="email" name="email" autocomplete="email" />
      </label>
      <label class="field">
        <span>${ui.fieldPhone} *</span>
        <input type="tel" name="phone" autocomplete="tel" required />
      </label>
      ${renderExtraLeadFields(ui)}
      <button class="button report-capture__submit" type="submit">${content.home.reportBlock.cta}</button>
      <p class="form-status" data-form-status role="status" hidden></p>
    </form>
  `
}

function renderCardList(items, mapper) {
  return items.map(mapper).join('')
}

function resolveGenericPageEyebrow(content, pageKey) {
  const ui = content.ui ?? {}
  const labels = {
    about: ui.aboutEyebrow,
    faq: ui.faqEyebrow,
    contacts: ui.contactsEyebrow,
    report: ui.reportEyebrow,
    'privacy-policy': ui.privacyEyebrow,
    terms: ui.termsEyebrow,
    'thank-you-report': ui.thankYouEyebrow,
  }

  return labels[pageKey] ?? content.site.title
}

function renderSimplePage(content, title, lead, pageKey) {
  return `
    <section class="page-hero">
      <div class="shell">
        <p class="eyebrow">${content.site.title} / ${resolveGenericPageEyebrow(content, pageKey)}</p>
        <h1>${title}</h1>
        ${lead ? `<p class="lead">${lead}</p>` : ''}
      </div>
    </section>
  `
}

function renderLegalSections(sections = []) {
  if (!sections.length) {
    return ''
  }

  return `
    <section class="section legal-page-section">
      <div class="shell legal-page__stack">
        ${sections
          .map(
            (section) => `
              <article class="legal-section">
                <h2>${section.title ?? ''}</h2>
                ${(section.paragraphs ?? []).map((paragraph) => `<p>${paragraph}</p>`).join('')}
                ${
                  section.items?.length
                    ? `
                      <ul class="legal-list">
                        ${section.items.map((item) => `<li>${item}</li>`).join('')}
                      </ul>
                    `
                    : ''
                }
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `
}

function renderThankYouReportPage(content) {
  const page = content.thankYouReport ?? {}

  return `
    <section class="page-hero">
      <div class="shell split split--hero">
        <div class="stack" style="justify-items:center;text-align:center;width:100%;">
          <h1>${page.title}</h1>
          <p class="lead">${page.lead ?? ''}</p>
          <div class="button-row" style="justify-content:center;">
            <a class="button" href="${buildPageUrl(content.locale.code, 'home')}">${page.ctaLabel}</a>
            <a class="button button--ghost" href="${buildPageUrl(content.locale.code, 'contacts')}">${page.secondaryCtaLabel}</a>
          </div>
        </div>
      </div>
    </section>
  `
}

function renderContactIcon(type = 'brief') {
  const icons = {
    brief: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3h8"/><path d="M9 3v3"/><path d="M15 3v3"/><rect x="4" y="6" width="16" height="14" rx="3"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>`,
    call: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.8 2.6a2 2 0 0 1-.5 2.3L8 10a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.3-.5c.8.4 1.7.7 2.6.8A2 2 0 0 1 22 16.9Z"/></svg>`,
    documents: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></svg>`,
  }

  return icons[type] ?? icons.brief
}

function renderContactAction(item = {}, ui = {}) {
  if (!item.actionLabel) {
    return ''
  }

  if (item.actionType === 'modal') {
    return `<button class="contacts-card__action" type="button" data-open-modal="${item.actionTarget ?? 'callback'}">${item.actionLabel}</button>`
  }

  return `<a class="contacts-card__action" href="${item.actionTarget ?? '#contact-form'}">${item.actionLabel}</a>`
}

function renderContactsPage(content, ui) {
  const contacts = content.contacts ?? {}
  const summary = contacts.summary ?? []
  const channels = contacts.channels ?? []
  const checklist = contacts.checklist ?? []
  const support = contacts.support ?? []
  const form = contacts.form ?? {}

  return `
    <section class="contacts-page">
      <section class="contacts-page-hero">
        <div class="shell contacts-page-hero__layout">
          <div class="contacts-page-hero__copy">
            <h1>${contacts.title}</h1>
            <div class="contacts-page-hero__actions">
              <a class="button" href="#contact-form">${ui.sendRequest}</a>
              <button class="button button--ghost" type="button" data-open-modal="callback">${ui.bookCall}</button>
            </div>
          </div>
          <div class="contacts-page-hero__summary">
            ${summary
              .map(
                (item) => `
                  <article class="contacts-summary-card">
                    <span class="contacts-summary-card__label">${item.label}</span>
                    <strong class="contacts-summary-card__value">${item.value}</strong>
                  </article>
                `,
              )
              .join('')}
          </div>
        </div>
      </section>

      <section class="section contacts-page-section">
        <div class="shell">
          <div class="contacts-page__section-head">
            <h2>${contacts.channelsTitle}</h2>
            <p>${contacts.channelsLead ?? ''}</p>
          </div>
          <div class="contacts-grid">
            ${channels
              .map(
                (item) => `
                  <article class="contacts-card">
                    <div class="contacts-card__icon">${renderContactIcon(item.icon)}</div>
                    <h3>${item.title ?? ''}</h3>
                    <p>${item.text ?? ''}</p>
                    ${renderContactAction(item, ui)}
                  </article>
                `,
              )
              .join('')}
          </div>
        </div>
      </section>

      <section class="section contacts-page-section contacts-page-section--soft">
        <div class="shell contacts-page__info-grid">
          <article class="contacts-panel">
            <h2>${contacts.checklistTitle}</h2>
            <p class="contacts-panel__lead">${contacts.checklistLead ?? ''}</p>
            <ul class="contacts-list">
              ${checklist.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </article>
          <article class="contacts-panel">
            <h2>${contacts.supportTitle}</h2>
            <p class="contacts-panel__lead">${contacts.supportLead ?? ''}</p>
            <ul class="contacts-list">
              ${support.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </article>
        </div>
      </section>

      <section class="section contacts-page-form-section" id="contact-form">
        <div class="shell contacts-page-form">
          <div class="contacts-page__section-head contacts-page__section-head--compact">
            <h2>${form.title ?? content.forms?.contact?.title}</h2>
            <p>${form.lead ?? contacts.lead ?? ''}</p>
          </div>
          ${renderReportStyleForm(content, {
            type: 'contact',
            title: form.title ?? content.forms?.contact?.title,
            buttonLabel: ui.sendRequest,
            note: form.note ?? '',
          })}
        </div>
      </section>
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
    ? `<div class="comparison-card__actions">
        <a class="button" href="#quiz">${content.home.comparison.cta ?? content.ui.comparisonCardCta}</a>
        <p class="comparison-card__cta-note">${content.ui.comparisonCtaNote ?? 'Free consultation · Reply within 1 business day'}</p>
      </div>`
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

  const brandLabel = isBrand
    ? ''
    : `<span class="comparison-card__other-label">${card.title}</span>`

  return `
    <article class="comparison-card comparison-card--${variant}">
      <div class="comparison-card__brand">
        <span class="comparison-card__brand-mark${isBrand ? ' comparison-card__brand-mark--logo' : ''}">
          ${isBrand ? `<img src="${logoSymbol}" alt="" loading="lazy" />` : `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M14 4L4 14M4 4L14 14" stroke="#b04a2a" stroke-width="2.2" stroke-linecap="round"/></svg>`}
        </span>
        <div class="comparison-card__brand-copy">
          <strong>${card.title}</strong>
          ${card.brandNote ? `<span>${card.brandNote}</span>` : ''}
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
    alt: visual ? ui[visual.altKey] : title,
  }
}

function renderIndustrySlide(item, ui = {}) {
  const title = typeof item === 'string' ? item : item.title
  const text =
    typeof item === 'string'
      ? ui.industrySlidePlaceholder
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

function renderBenefitCheck(text) {
  return `
    <div class="benefit-check">
      <span class="benefit-check__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span class="benefit-check__text">${text}</span>
    </div>
  `
}

function renderBenefitsTimeline(ui = {}) {
  const steps = [
    { label: ui.guaranteeTimelineStepOne, style: 'filled' },
    { label: ui.guaranteeTimelineStepTwo, style: 'filled' },
    { label: ui.guaranteeTimelineStepThree, style: 'accent' },
    { label: ui.guaranteeTimelineStepFour, style: 'accent' },
    { label: ui.guaranteeTimelineStepFive, style: 'outline' },
  ]

  return steps
    .map((step, index) => {
      const number = String(index + 1).padStart(2, '0')
      const connector =
        index < steps.length - 1
          ? `
            <div class="bt-connector" aria-hidden="true">
              <div class="bt-connector__track"></div>
              <div class="bt-connector__beam"></div>
            </div>
          `
          : ''

      return `
        <div class="bt-node">
          <div class="bt-node__dot bt-node__dot--${step.style}">${number}</div>
          <span class="bt-node__label">${step.label}</span>
        </div>
        ${connector}
      `
    })
    .join('')
}

function renderBenefitsSection(content, ui = {}) {
  const guarantees = content.home.guarantees ?? {}
  const items = guarantees.items ?? []

  if (!items.length) return ''

  const [legal = {}, replacement = {}, support = {}] = items

  return `
    <section class="section benefits-section-wrap" data-reveal>
      <div class="shell benefits-section">
        <h2 class="benefits-section__title">${guarantees.title}</h2>

        <div class="benefits-grid">
          <article class="benefit-card">
            <div class="benefit-card__inner">
              <div class="benefit-card__tag">
                <span class="benefit-card__tag-dot"></span>
                ${ui.guaranteesLegalDelta}
              </div>
              <h3 class="benefit-card__title">${legal.title ?? ''}</h3>
              <div class="benefit-card__metric">
                <span class="benefit-card__metric-val" data-counter-target="100">0</span>
                <span class="benefit-card__metric-unit">%</span>
              </div>
              <p class="benefit-card__desc">${legal.text ?? ''}</p>
              <div class="benefit-checks">
                ${renderBenefitCheck(ui.guaranteeChecklistQuota)}
                ${renderBenefitCheck(ui.guaranteeChecklistPermit)}
                ${renderBenefitCheck(ui.guaranteeChecklistVisa)}
              </div>
            </div>
          </article>

          <article class="benefit-card">
            <div class="benefit-card__inner">
              <div class="benefit-card__tag">
                <span class="benefit-card__tag-dot"></span>
                ${ui.guaranteesReplacementLabel}
              </div>
              <h3 class="benefit-card__title">${replacement.title ?? ''}</h3>
              <div class="benefit-card__metric">
                <span class="benefit-card__metric-val">0</span>
                <span class="benefit-card__metric-unit">${ui.guaranteesReplacementUnit}</span>
              </div>
              <p class="benefit-card__desc">${replacement.text ?? ''}</p>

              <div class="counter-row">
                <div class="counter-item">
                  <span class="counter-item__val" data-counter-target="${ui.guaranteesReplacementWarrantyDays ?? 30}">0</span>
                  <span class="counter-item__label">${ui.guaranteesReplacementWarrantyLabel}</span>
                </div>
                <div class="counter-item">
                  <span class="counter-item__val" data-counter-target="${ui.guaranteesReplacementReplyHours ?? 48}">0</span>
                  <span class="counter-item__label">${ui.guaranteesReplacementReplyLabel}</span>
                </div>
              </div>

              <span class="benefit-badge benefit-badge--green">
                <span class="benefit-badge__dot"></span>
                ${ui.guaranteesReplacementDelta}
              </span>
            </div>
          </article>

          <article class="benefit-card benefit-card--full benefits-grid__full">
            <div class="benefit-card__inner">
              <div class="benefit-card__text-col">
                <div class="benefit-card__tag">
                  <span class="benefit-card__tag-dot"></span>
                  ${ui.guaranteesSupportDelta}
                </div>
                <h3 class="benefit-card__title">${support.title ?? ''}</h3>
                <p class="benefit-card__desc benefit-card__desc--spaced">${support.text ?? ''}</p>
                <span class="benefit-badge benefit-badge--accent">
                  <span class="benefit-badge__dot"></span>
                  ${ui.guaranteesSupportBadge}
                </span>
              </div>
              <div class="benefit-timeline-col">
                <div class="benefit-timeline">
                  ${renderBenefitsTimeline(ui)}
                </div>
                <div class="counter-row">
                  <div class="counter-item">
                    <span class="counter-item__val" data-counter-target="${ui.guaranteesCandidatesDays ?? 10}">0</span>
                    <span class="counter-item__label">${ui.guaranteesCandidatesDaysLabel}</span>
                  </div>
                  <div class="counter-item">
                    <span class="counter-item__val" data-counter-target="100">0</span>
                    <span class="counter-item__label">${ui.guaranteesSupportPercentLabel}</span>
                  </div>
                  <div class="counter-item">
                    <span class="counter-item__val" data-counter-target="${ui.guaranteesOneTeamCount ?? 1}">0</span>
                    <span class="counter-item__label">${ui.guaranteesOneTeamLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `
}

function renderHomeReportBlock(content, ui = {}) {
  const reportBlock = content.home.reportBlock ?? {}
  const points = reportBlock.points ?? []

  if (!reportBlock.title) return ''

  return `
    <section class="section home-report-block-wrap" data-reveal>
      <div class="shell">
        <div class="home-report-block">
          <div class="home-report-block__left">
            <h2 class="home-report-block__title">${reportBlock.title}</h2>
            <p class="home-report-block__desc">${reportBlock.lead ?? ''}</p>

            <div class="home-insights-list">
              ${renderCardList(
                points,
                (item, index) => `
                  <div class="home-insight-item">
                    <span class="home-insight-item__num">0${index + 1}</span>
                    <span class="home-insight-item__text">${item}</span>
                  </div>
                `,
              )}
            </div>
          </div>

          <div class="home-report-block__right">
            <div class="home-pdf-card" aria-hidden="true">
              <div class="home-pdf-card__icon">${ui.reportPanelGuide}</div>
              <div class="home-pdf-card__meta">
                <span class="home-pdf-card__prefix">${ui.reportPanelKicker}</span>
                <span class="home-pdf-card__title">${ui.reportPanelReportTitle}</span>
                <span class="home-pdf-card__sub">${ui.reportPanelReportText}</span>
              </div>
            </div>

            <div class="home-report-form">
              <p class="home-report-form__title">${ui.reportPanelTitle}</p>
              <form class="home-report-form__fields" data-form data-form-type="report">
                <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
                <div class="home-report-form__row">
                  <label class="home-report-form__field">
                    <span>${ui.fieldName} *</span>
                    <input type="text" name="name" autocomplete="name" required />
                  </label>
                  <label class="home-report-form__field">
                    <span>${ui.fieldCompany} *</span>
                    <input type="text" name="company" autocomplete="organization" required />
                  </label>
                </div>
                <div class="home-report-form__row">
                  <label class="home-report-form__field">
                    <span>${ui.fieldEmail}</span>
                    <input type="email" name="email" autocomplete="email" />
                  </label>
                  <label class="home-report-form__field">
                    <span>${ui.fieldPhone} *</span>
                    <input type="tel" name="phone" autocomplete="tel" required />
                  </label>
                </div>
                <div class="home-report-form__row">
                  ${renderExtraLeadFields(ui, 'home-report-form__field')}
                </div>
                <button class="home-report-form__submit" type="submit">${reportBlock.cta ?? ui.getReport}</button>
                <p class="form-status" data-form-status role="status" hidden></p>
              </form>
              <p class="home-report-form__note">${ui.reportPanelText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

function getReviewMetricMeta(item, index, ui = {}) {
  const source =
    typeof item === 'string'
      ? { value: ui.reviewFallbackValue, label: item.replace(ui.reviewLabelPrefix, '') }
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
      ? ui.reelPlaceholder
      : item.text
  const meta = typeof item === 'string' ? ui.videoInsightLabel : item.meta
  const duration = typeof item === 'string' ? ui.mediaDefaultDuration : item.duration ?? ui.mediaDefaultDuration
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
          aria-label="${ui.videoPlay}"
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
          ${ui.videoPlay}
        </button>
      </div>
    </article>
  `
}

function buildReviewInitials(name = '') {
  const parts = String(name)
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (!parts.length) return 'VW'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()

  return `${parts[0][0] ?? ''}${parts[1][0] ?? ''}`.toUpperCase()
}

function renderReviewStars() {
  return Array.from({ length: 5 }, () => `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  `).join('')
}

function getStatsStripIcon(icon) {
  if (icon === 'shield') {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    `
  }

  if (icon === 'speed') {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    `
  }

  if (icon === 'support') {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    `
  }

  return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      <path d="M12 12v.01"/>
    </svg>
  `
}

function parseStatsStripMetricValue(rawValue = '') {
  const value = String(rawValue).trim()
  const match = value.match(/^(\d+)\s*(.*)$/)

  if (!match) {
    return { kind: 'text', text: value }
  }

  return {
    kind: 'number',
    number: Number(match[1]),
    unit: match[2]?.trim() ?? '',
  }
}

function renderHomeStatsStrip(metrics, ui = {}) {
  if (!metrics.length) return ''

  return `
    <section class="section home-stats-strip-wrap" data-reveal>
      <div class="shell">
        <div class="home-stats-strip">
          ${renderCardList(metrics, (item, index) => {
            const meta = getReviewMetricMeta(item, index, ui)
            const parsed = parseStatsStripMetricValue(meta.value)
            const valueMarkup =
              parsed.kind === 'number'
                ? `
                  <span class="home-stat-cell__num" data-counter-target="${parsed.number}">0</span>
                  ${parsed.unit ? `<span class="home-stat-cell__unit">${parsed.unit}</span>` : ''}
                `
                : `<span class="home-stat-cell__num home-stat-cell__num--text">${parsed.text}</span>`

            return `
              <article class="home-stat-cell">
                <div class="home-stat-cell__icon" aria-hidden="true">
                  ${getStatsStripIcon(meta.icon)}
                </div>
                <div class="home-stat-cell__body">
                  <div class="home-stat-cell__value">
                    ${valueMarkup}
                  </div>
                  <span class="home-stat-cell__label">${meta.label ?? ''}</span>
                </div>
              </article>
            `
          })}
        </div>
      </div>
    </section>
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
            <a class="button button--ghost" href="#services-form">${ui.servicesHeroGhostCta}</a>
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
              <span class="services-segment-card__label">${item.badge ?? (item.variant === 'candidate' ? ui.servicesSegmentBadgeCandidate : ui.servicesSegmentBadgeBusiness)}</span>
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
              <h2>${ui.servicesPillarsTitle}</h2>
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
          <h2>${ui.servicesOfferTitle}</h2>
        </div>
        <div class="services-offer__layout">
          <div class="services-offer-visual" aria-hidden="true">
            <div class="services-offer-visual__glow"></div>
            <div class="services-offer-visual__chips">
              <span class="services-offer-visual__chip services-offer-visual__chip--top">${ui.servicesOfferVisualPrimary}</span>
              <span class="services-offer-visual__chip services-offer-visual__chip--bottom">${ui.servicesOfferVisualSecondary}</span>
            </div>
            <div class="services-offer-visual__panel">
              <div class="services-offer-visual__panel-head">
                <span class="services-offer-visual__panel-label">${ui.servicesOfferVisualLabel}</span>
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
                <span class="services-beam-core__label">${beam.centerLabel}</span>
              </div>
            </div>
            <div class="services-beam__column services-beam__column--output">
              <div class="services-beam-output" data-beam-output>
                <div class="services-beam-output__circle" data-beam-anchor>
                  ${renderBeamIcon('user')}
                </div>
                <span class="services-beam-output__label">${beam.outputLabel}</span>
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
            <h2>${ui.servicesRouteTitle}</h2>
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
            <h2>${ui.servicesProofTitle}</h2>
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
          <h2>${ui.servicesFitTitle}</h2>
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
  const timelineSteps = ui.casesTimelineSteps

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
                  <span class="case-card__category">${item.category ?? cases.eyebrow ?? ui.caseStudy}</span>
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
        <h2 class="convincing-section__title">${cases.convincingTitle ?? cases.frameworkTitle ?? ''}</h2>
        <div class="animated-list">
          ${renderCardList(
            framework,
            (item, index) => `
              <article class="animated-list__item">
                <div class="animated-list__step">${ui.processStepLabel} ${index + 1}</div>
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
            buttonLabel: ui.sendRequest,
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
                  <p class="bento-card__eyebrow">${industries.eyebrow}</p>
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
              <p class="industries-fit__summary-text">${ui.industriesFitSummary}</p>
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
          note: '',
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
  const reportButton = report.formTitle ?? content.forms.report.title
  const reportPdfTitle = ui.reportPanelReportTitle
  const reportPdfText = ui.reportPanelReportText
  const reportPdfMeta = report.stats?.[1]?.value ? `${ui.reportPanelKicker} - ${report.stats[1].value} ${report.stats[1].label}` : ui.reportPanelKicker
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
        <p class="report-marquee__label">${report.pointsTitle}</p>
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
            <div class="report-form__pdf-icon">${ui.reportPanelGuide}</div>
            <div class="report-form__pdf-meta">
              <span class="report-form__pdf-title">${reportPdfTitle}</span>
              <span class="report-form__pdf-sub">${reportPdfMeta}</span>
            </div>
          </div>
        </div>

        <div class="report-form__card">
          <div class="report-form__card-inner">
            <h3 class="report-form__card-title">${report.formTitle ?? ui.reportPanelTitle}</h3>
            <form class="report-form__fields" data-form data-form-type="report">
              <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
              <label class="report-form__field">
                <span>${ui.fieldName} *</span>
                <input type="text" name="name" autocomplete="name" required />
              </label>
              <label class="report-form__field">
                <span>${ui.fieldCompany} *</span>
                <input type="text" name="company" autocomplete="organization" required />
              </label>
              <label class="report-form__field">
                <span>${ui.fieldEmail}</span>
                <input type="email" name="email" autocomplete="email" />
              </label>
              <label class="report-form__field">
                <span>${ui.fieldPhone} *</span>
                <input type="tel" name="phone" autocomplete="tel" required />
              </label>
              ${renderExtraLeadFields(ui, 'report-form__field')}
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
            <a class="button button--hero-secondary" href="${buildPageUrl(content.locale.code, 'cases')}">${ui.projectsExamples}</a>
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
                <button
                  class="hero-video"
                  type="button"
                  aria-label="${ui.videoPlay}"
                  aria-haspopup="dialog"
                  data-video-trigger
                  ${content.home.hero.video.src ? `data-video-src="${content.home.hero.video.src}"` : ''}
                  ${content.home.hero.video.poster ? `data-video-poster="${content.home.hero.video.poster}"` : ''}
                >
                  <span class="hero-video__media" aria-hidden="true"></span>
                  <span class="hero-video__play" aria-hidden="true"></span>
                  <span class="sr-only">${ui.videoPlay}</span>
                </button>
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
          <div class="comparison-grid-wrap">
            <div class="comparison-grid">
              ${comparisonCards
                ? renderCardList(
                    comparisonCards,
                    (card) => renderComparisonCard(card, content),
                  )
                : content.home.comparison.items.map((item) => `<div class="line-card">${item}</div>`).join('')}
            </div>
            <div class="comparison-savings-badge" aria-hidden="true">
              <span class="comparison-savings-badge__arrow">→</span>
              <strong class="comparison-savings-badge__value">−50%</strong>
              <span class="comparison-savings-badge__label">${content.ui.comparisonSavingsLabel ?? 'savings'}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--muted" data-reveal data-report-prompt-trigger>
        <div class="shell industries-showcase">
          <div class="industries-showcase__head">
            <h2>${ui.industriesSectionTitle}</h2>
            <p class="lead">${ui.industriesLead}</p>
          </div>
          <div class="industries-slider" data-industry-slider>
            <div class="industries-slider__controls">
              <button class="industries-slider__button" type="button" data-industry-slider-prev aria-label="${ui.industrySliderPrev}">←</button>
              <button class="industries-slider__button" type="button" data-industry-slider-next aria-label="${ui.industrySliderNext}">→</button>
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
            <p class="lead">${content.home.calculator?.lead ?? ui.quizSectionLead}</p>
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
                  <p class="lead">${content.home.casesSection.lead ?? ui.casesSectionLead}</p>
                  <div class="button-row cases-section__actions">
                    <a class="button" href="${buildPageUrl(content.locale.code, 'cases')}">${content.home.casesSection.cta ?? ui.projectsExamples}</a>
                  </div>
                </div>
                <div class="cases-slider" data-cases-slider>
                  <div class="cases-slider__controls">
                    <button class="cases-slider__button" type="button" data-cases-slider-prev aria-label="${ui.caseSliderPrev}">←</button>
                    <button class="cases-slider__button" type="button" data-cases-slider-next aria-label="${ui.caseSliderNext}">→</button>
                  </div>
                  <div class="cases-slider__track" data-cases-slider-track>
                    ${renderCardList(
                      caseItems,
                      (item) => `
                        <article class="case-card">
                          <div class="case-card__content">
                            <p class="eyebrow">${ui.caseStudy}</p>
                            <h3>${typeof item === 'string' ? item : item.title}</h3>
                            <p class="case-card__subtitle">${typeof item === 'string' ? ui.caseSubtitlePlaceholder : item.subtitle}</p>
                            <p class="case-card__problem">${typeof item === 'string' ? ui.caseProblemPlaceholder : item.problem}</p>
                            <div class="button-row">
                              <a class="button button--ghost case-card__button" href="${buildPageUrl(content.locale.code, 'cases')}">
                                <span>${ui.caseViewLabel}</span>
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
                            <div class="case-card__media-copy">
                              <strong>${typeof item === 'string' ? item : item.title}</strong>
                              <span>${typeof item === 'string' ? ui.caseSubtitlePlaceholder : item.subtitle}</span>
                            </div>
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
                    <span class="process-flow__rail-title">${typeof step === 'string' ? `${ui.processStepLabel} ${index + 1}` : step.title}</span>
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
                    <h3>${typeof step === 'string' ? `${ui.processStepLabel} ${index + 1}` : step.title}</h3>
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
          ? renderBenefitsSection(content, ui)
          : ''
      }

      ${
        content.home.reportBlock
          ? renderHomeReportBlock(content, ui)
          : ''
      }

      ${
        reviewItems.length
          ? `
            <section class="section reviews-section" data-reveal>
              <div class="shell">
                <h2>${content.home.reviews.title}</h2>
              </div>
              <div class="reviews-marquee">
                <div class="reviews-marquee__track">
                  ${renderCardList(
                    [...reviewItems, ...reviewItems],
                    (item) => `
                      <div class="reviews-marquee__card-wrap">
                        <article class="testimonial-card">
                          <div class="testimonial-card__stars">
                            ${renderReviewStars()}
                          </div>
                          <p class="testimonial-card__text">${item.text}</p>
                          <div class="testimonial-card__footer">
                            <div class="testimonial-card__avatar">${buildReviewInitials(item.name ?? item.title)}</div>
                            <div class="testimonial-card__author-copy">
                              <strong class="testimonial-card__name">${item.name ?? item.title}</strong>
                              <span class="testimonial-card__company">${item.company ?? ''}</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    `,
                  )}
                </div>
              </div>
            </section>
          `
          : ''
      }

      ${
        content.home.videoTestimonials?.items?.length
          ? `
            <section class="section video-testimonials-section" data-reveal>
              <div class="shell">
                <div class="video-testimonials__grid">
                  ${content.home.videoTestimonials.items
                    .map(
                      (item) => `
                    <div class="video-testimonial-card">
                      <div class="video-testimonial-card__video-wrap">
                        <video
                          class="video-testimonial-card__video"
                          src="${item.src}"
                          poster="${item.poster ?? ''}"
                          playsinline
                          preload="metadata"
                        ></video>
                        <button class="video-testimonial-card__play" aria-label="${ui.videoPlay ?? 'Play video'}">
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.92"/>
                            <path d="M19 15.5L35 24L19 32.5V15.5Z" fill="#E07B2A"/>
                          </svg>
                        </button>
                      </div>
                      ${item.name ? `
                        <div class="video-testimonial-card__meta">
                          <strong class="video-testimonial-card__name">${item.name}</strong>
                          ${item.role ? `<span class="video-testimonial-card__role">${item.role}</span>` : ''}
                        </div>
                      ` : ''}
                    </div>
                  `,
                    )
                    .join('')}
                </div>
              </div>
            </section>
          `
          : ''
      }

      ${reviewMetrics.length ? renderHomeStatsStrip(reviewMetrics, ui) : ''}

      <section class="section final-lead-mobile-center" data-reveal>
        <div class="shell split final-lead-section">
          <div class="final-lead-section__copy">
            <h2>${content.forms.lead.title}</h2>
            <p class="lead">${content.home.finalCta.lead}</p>
          </div>
          ${renderReportStyleForm(content, {
            type: 'lead',
            title: content.forms?.lead?.title,
            buttonLabel: ui.sendRequest,
          })}
        </div>
      </section>

      <section class="report-page-section report-faq-section" data-reveal>
        <div class="shell">
          <h2 class="report-section__title">${content.home.faq.title}</h2>
          <div class="report-faq__list">
            ${renderFaq(content.home.faq.items)}
          </div>
        </div>
      </section>

      <section class="section" data-reveal>
        <div class="shell cta-banner">
          <div class="cta-banner__copy">
            <h2>${content.home.finalCta.title}</h2>
            <p>${content.home.finalCta.lead}</p>
          </div>
          <div class="cta-banner__actions">
            <button class="button cta-banner__button cta-banner__button--primary" type="button" data-open-modal="callback">${ui.bookCall}</button>
            <a class="button button--ghost cta-banner__button cta-banner__button--ghost" href="${buildPageUrl(content.locale.code, 'contacts')}">${ui.openContactsPage}</a>
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

  if (pageKey === 'thank-you-report') {
    return renderThankYouReportPage(content)
  }

  if (pageKey === 'contacts') {
    return renderContactsPage(content, ui)
  }

  const contentMap = {
    report: content.report,
    'thank-you-report': content.thankYouReport,
    about: content.about,
    contacts: content.contacts,
    faq: content.faqPage,
    'privacy-policy': content.privacy,
    terms: content.terms,
  }

  const page = contentMap[pageKey] ?? content.about
  const includeForm = !['privacy-policy', 'terms'].includes(pageKey)
  const includeFaq = pageKey === 'faq'
  const legalSections = page.sections ?? []

  if ((pageKey === 'privacy-policy' || pageKey === 'terms') && legalSections.length) {
    return `
      ${renderSimplePage(content, page.title, page.lead, pageKey)}
      ${renderLegalSections(legalSections)}
    `
  }

  return `
    ${renderSimplePage(content, page.title, page.lead, pageKey)}
    <section class="section">
      <div class="shell split">
        <div class="stack">
          <div class="line-card">${ui.genericPageCardOne} <strong>${page.title ?? pageKey}</strong></div>
          <div class="line-card">${ui.genericPageCardTwo}</div>
          <div class="line-card">${ui.genericPageCardThree}</div>
        </div>
        ${
          includeForm
            ? renderReportStyleForm(content, {
                type: pageKey === 'report' ? 'report' : 'contact',
                title: content.forms?.[pageKey === 'report' ? 'report' : 'contact']?.title,
                buttonLabel: ui.sendRequest,
                note: page.lead ?? '',
              })
            : `<div class="card"><p>${ui.legalPlaceholder}</p></div>`
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

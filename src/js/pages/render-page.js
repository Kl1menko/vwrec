import logoSymbol from '../../assets/logo-symbol.svg'
import { buildPageUrl } from '../core/site-config.js'

const INDUSTRY_SLIDE_VISUALS = [
  {
    match: /склади|логістик|warehouse|logistics/i,
    image: '/images/industry-logistics.jpg',
    alt: 'Працівники на складі та в логістиці',
    label: 'Logistics',
  },
  {
    match: /будівницт/i,
    image: '/images/industry-construction.jpg',
    alt: 'Працівники на будівельному об’єкті',
    label: 'Construction',
  },
  {
    match: /готелі|сервіс|hotel|service|hospitality/i,
    image: '/images/industry-hospitality.jpg',
    alt: 'Персонал у сфері готелів та сервісу',
    label: 'Service',
  },
  {
    match: /виробництв|manufacturing|factory/i,
    image: '/images/industry-manufacturing.jpg',
    alt: 'Працівники на виробництві',
    label: 'Manufacturing',
  },
]

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
        <input type="text" name="name" required />
      </label>
      <label class="field">
        <span>${ui.fieldCompany ?? 'Company'} *</span>
        <input type="text" name="company" required />
      </label>
      <label class="field">
        <span>${ui.fieldEmail ?? 'Email'} *</span>
        <input type="email" name="email" required />
      </label>
      <label class="field">
        <span>${ui.fieldPhone ?? 'Phone'}</span>
        <input type="text" name="phone" />
      </label>
      <button class="button" type="submit">${ui.sendRequest ?? 'Send request'}</button>
      <p class="form-status" data-form-status></p>
    </form>
  `
}

function renderReportCaptureForm(content) {
  const ui = content.ui ?? {}

  return `
    <form class="report-capture__form" data-form data-form-type="report">
      <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
      <label class="field">
        <span>${ui.fieldName ?? 'Name'} *</span>
        <input type="text" name="name" required />
      </label>
      <label class="field">
        <span>${ui.fieldCompany ?? 'Company'} *</span>
        <input type="text" name="company" required />
      </label>
      <label class="field">
        <span>${ui.fieldEmail ?? 'Email'} *</span>
        <input type="email" name="email" required />
      </label>
      <label class="field">
        <span>${ui.fieldPhone ?? 'Phone'}</span>
        <input type="text" name="phone" />
      </label>
      <button class="button report-capture__submit" type="submit">${content.home.reportBlock.cta}</button>
      <p class="form-status" data-form-status></p>
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
      (item) => `
        <article class="faq-item" data-accordion-item>
          <button class="faq-item__trigger" type="button" data-accordion-trigger aria-expanded="false">
            <span class="faq-item__question">${item.q}</span>
            <span class="faq-item__icon" aria-hidden="true"></span>
          </button>
          <div class="faq-item__content">
            <p>${item.a}</p>
          </div>
        </article>
      `,
    )
    .join('')
}

function renderComparisonCard(card) {
  const variant = card.variant ?? 'default'
  const isBrand = variant === 'brand'
  const amount = card.amount ? `<div class="comparison-card__price"><strong>${card.amount}</strong>${card.period ? `<span>${card.period}</span>` : ''}</div>` : ''
  const note = card.note ? `<p class="comparison-card__note">${card.note}</p>` : ''
  const cta = isBrand
    ? `<div class="comparison-card__actions"><a class="button" href="#quiz">Прорахувати підбір</a></div>`
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

function getIndustryVisual(item) {
  const title = typeof item === 'string' ? item : item.title

  return (
    INDUSTRY_SLIDE_VISUALS.find((visual) => visual.match.test(title)) ?? {
      image: '/images/industry-logistics.jpg',
      alt: title,
      label: 'Operations',
    }
  )
}

function renderIndustrySlide(item) {
  const title = typeof item === 'string' ? item : item.title
  const text =
    typeof item === 'string'
      ? 'Окремий візуальний кейс для цієї вертикалі можна масштабувати під SEO-сторінки, квіз і персоналізовані CTA.'
      : item.text
  const visual = getIndustryVisual(item)

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

function getGuaranteeCardMeta(item, index) {
  const title = item.title ?? ''

  if (/легаль|legal/i.test(title)) {
    return {
      label: 'Legal shield',
      metric: '100%',
      delta: 'Квоти, дозволи, візи',
      variant: 'compliance',
    }
  }

  if (/заміна|replace/i.test(title)) {
    return {
      label: 'Replacement',
      metric: '0 грн',
      delta: 'Швидка заміна в гарантії',
      variant: 'replacement',
    }
  }

  if (/супровід|support|ключ/i.test(title)) {
    return {
      label: 'Full support',
      metric: 'Під ключ',
      delta: 'Від відбору до зміни',
      variant: 'support',
    }
  }

  return {
    label: `Benefit 0${index + 1}`,
    metric: `${index + 1}00%`,
    delta: 'Перевага VW Recruit',
    variant: 'compliance',
  }
}

function renderGuaranteeVisual(variant) {
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
          <span>Відбір</span>
        </div>
        <div class="guarantee-card__support-path">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="guarantee-card__support-step guarantee-card__support-step--accent">
          <strong>02</strong>
          <span>Приїзд</span>
        </div>
        <div class="guarantee-card__support-note">Старт зміни</div>
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
        <span class="guarantee-card__checklist-item is-done">Квоти</span>
        <span class="guarantee-card__checklist-item is-done">Permit</span>
        <span class="guarantee-card__checklist-item is-done">Visa</span>
      </div>
    </div>
  `
}

function renderGuaranteeCard(item, index) {
  const meta = getGuaranteeCardMeta(item, index)

  return `
    <article class="guarantee-card guarantee-card--${meta.variant}">
      <div class="guarantee-card__head">
        <h3 class="guarantee-card__title">${item.title}</h3>
      </div>
      <div class="guarantee-card__metric">${meta.metric}</div>
      <div class="guarantee-card__delta">${meta.delta}</div>
      <div class="guarantee-card__visual">
        ${renderGuaranteeVisual(meta.variant)}
      </div>
      <div class="guarantee-card__copy">
        <p>${item.text}</p>
      </div>
    </article>
  `
}

function getReviewMetricMeta(item, index) {
  const source = typeof item === 'string' ? { value: '7 РОКІВ', label: item.replace('7 років ', '') } : item
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
                  (card) => renderComparisonCard(card),
                )
              : content.home.comparison.items.map((item) => `<div class="line-card">${item}</div>`).join('')}
          </div>
        </div>
      </section>

      <section class="section section--muted" data-reveal>
        <div class="shell industries-showcase">
          <div class="industries-showcase__head">
            <h2>ДЛЯ ЯКИХ СФЕР ПІДХОДИТЬ ТАКА МОДЕЛЬ НАЙМУ</h2>
            <p class="lead">${ui.industriesLead ?? 'Companies most often use this hiring model for operational roles in manufacturing, warehouses, construction, and service.'}</p>
          </div>
          <div class="industries-slider" data-industry-slider>
            <div class="industries-slider__controls">
              <button class="industries-slider__button" type="button" data-industry-slider-prev aria-label="Попередній слайд">←</button>
              <button class="industries-slider__button" type="button" data-industry-slider-next aria-label="Наступний слайд">→</button>
            </div>
            <div class="industries-slider__track" data-industry-slider-track>
              ${renderCardList(industryItems, (item) => renderIndustrySlide(item))}
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="quiz" data-reveal>
        <div class="shell split split--hero">
          <div>
            <h2>${content.home.calculator?.title ?? content.quiz.title}</h2>
            <p class="lead">${content.home.calculator?.lead ?? 'Step-based mobile-friendly flow with analytics events and a single submission payload.'}</p>
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
                <div class="cases-list">
                  ${renderCardList(
                    caseItems,
                    (item) => `
                      <article class="case-card">
                        <div class="case-card__content">
                          <p class="eyebrow">${ui.caseStudy ?? 'Case study'}</p>
                          <h3>${typeof item === 'string' ? item : item.title}</h3>
                          <p class="case-card__subtitle">${typeof item === 'string' ? 'Короткий опис кейсу' : item.subtitle}</p>
                          <p class="case-card__problem">${typeof item === 'string' ? 'Окремий SEO-friendly URL для кейсу, результатів, термінів і CTA.' : item.problem}</p>
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
                    <span class="process-flow__rail-title">${typeof step === 'string' ? `Крок ${index + 1}` : step.title}</span>
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
                    <h3>${typeof step === 'string' ? `Крок ${index + 1}` : step.title}</h3>
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
                    (item, index) => renderGuaranteeCard(item, index),
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
                    <strong>Отримайте матеріал на email</strong>
                    <p>Залиште контакти, і ми надішлемо корисний матеріал по темі міжнародного найму та оптимізації витрат на персонал.</p>
                  </div>
                  <div class="report-capture__panel-card" aria-hidden="true">
                    <div class="report-capture__panel-card-sheet">
                      <span class="report-capture__panel-card-kicker">VW Recruit / Insight</span>
                      <strong>Ринок праці 2026</strong>
                      <p>Інтеграція міжнародного персоналу для бізнесу з дефіцитом кадрів</p>
                    </div>
                    <div class="report-capture__panel-card-badge">
                      <span>Guide</span>
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
                    <button class="reviews-slider__button" type="button" data-reviews-slider-prev aria-label="Попередній відгук">←</button>
                    <button class="reviews-slider__button" type="button" data-reviews-slider-next aria-label="Наступний відгук">→</button>
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
                      const meta = getReviewMetricMeta(item, index)

                      return `
                        <article class="reviews-fact reviews-fact--${meta.icon}">
                          <div class="reviews-fact__icon" aria-hidden="true">
                            ${renderReviewMetricIcon(meta.icon)}
                          </div>
                          <div class="reviews-fact__copy">
                            <strong>${meta.value ?? '7 РОКІВ'}</strong>
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

  const contentMap = {
    services: content.services,
    industries: content.industries,
    cases: content.cases,
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
        ${includeForm ? renderLeadForm(content, pageKey === 'report' ? 'report' : 'contact') : `<div class="card"><p>${ui.legalPlaceholder ?? 'Legal copy placeholder. Replace with approved content before launch.'}</p></div>`}
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

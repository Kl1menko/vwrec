import logoSymbol from '../../assets/logo-symbol.svg'

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
  return `
    <form class="stack card card--form" data-form data-form-type="${type}">
      <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
      <label class="field">
        <span>Name *</span>
        <input type="text" name="name" required />
      </label>
      <label class="field">
        <span>Company *</span>
        <input type="text" name="company" required />
      </label>
      <label class="field">
        <span>Email *</span>
        <input type="email" name="email" required />
      </label>
      <label class="field">
        <span>Phone</span>
        <input type="text" name="phone" />
      </label>
      <button class="button" type="submit">Send request</button>
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
          <button class="faq-item__trigger" type="button" data-accordion-trigger>
            <span>${item.q}</span>
            <span aria-hidden="true">+</span>
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

export function renderPage(content, pageKey) {
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
            <a class="button button--hero-secondary" href="#cases">Приклади проектів</a>
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
                  <button class="hero-video__play" type="button" aria-label="Play video" data-hero-video-trigger></button>
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
            <p class="lead">Найчастіше підприємства використовують таку модель для операційної роботи на виробництві, складах, будівництві та у сфері сервісу.</p>
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
            <p class="eyebrow">${content.home.calculator?.eyebrow ?? 'Quiz'}</p>
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
                <p class="eyebrow">${content.home.casesSection.eyebrow}</p>
                <h2>${content.home.casesSection.title}</h2>
                <div class="card-grid">
                  ${renderCardList(
                    caseItems,
                    (item) => `
                      <article class="card showcase-card">
                        <p class="eyebrow">Case study</p>
                        <h3>${item}</h3>
                        <p>Окремий SEO-friendly URL для кейсу, результатів, термінів і CTA.</p>
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
        <div class="shell split">
          <div>
            <p class="eyebrow">${content.home.process.eyebrow ?? 'Process'}</p>
            <h2>${content.home.process.title}</h2>
            ${content.home.process.intro ? `<p class="lead">${content.home.process.intro}</p>` : ''}
          </div>
          <div class="stack">
            ${renderCardList(
              content.home.process.steps,
              (step, index) => `
                <article class="process-card">
                  <strong>0${index + 1}</strong>
                  <h3>${typeof step === 'string' ? `Крок ${index + 1}` : step.title}</h3>
                  <p>${typeof step === 'string' ? step : step.text}</p>
                </article>
              `,
            )}
          </div>
        </div>
      </section>

      ${
        guaranteeItems.length
          ? `
            <section class="section" data-reveal>
              <div class="shell">
                <p class="eyebrow">${content.home.guarantees.eyebrow}</p>
                <h2>${content.home.guarantees.title}</h2>
                <div class="card-grid">
                  ${renderCardList(
                    guaranteeItems,
                    (item) => `
                      <article class="card">
                        <h3>${item.title}</h3>
                        <p>${item.text}</p>
                      </article>
                    `,
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
              <div class="shell split">
                <div>
                  <p class="eyebrow">${content.home.reportBlock.eyebrow}</p>
                  <h2>${content.home.reportBlock.title}</h2>
                  <p class="lead">${content.home.reportBlock.lead}</p>
                </div>
                <div class="card">
                  <div class="stack">
                    ${renderCardList(content.home.reportBlock.points, (item) => `<div class="line-card">${item}</div>`)}
                  </div>
                  <div class="button-row">
                    <button class="button" type="button" data-open-modal="report">${content.home.reportBlock.cta}</button>
                  </div>
                </div>
              </div>
            </section>
          `
          : ''
      }

      ${
        reviewItems.length
          ? `
            <section class="section" data-reveal>
              <div class="shell">
                <p class="eyebrow">${content.home.reviews.eyebrow}</p>
                <h2>${content.home.reviews.title}</h2>
                <div class="card-grid">
                  ${renderCardList(
                    reviewItems,
                    (item) => `
                      <article class="card">
                        <h3>${item.title}</h3>
                        <p>${item.text}</p>
                      </article>
                    `,
                  )}
                </div>
                <div class="metric-grid">
                  ${renderCardList(
                    reviewMetrics,
                    (item) => `
                      <article class="metric-card">
                        <strong>7 РОКІВ</strong>
                        <span>${item.replace('7 років ', '')}</span>
                      </article>
                    `,
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
            <section class="section section--muted" data-reveal>
              <div class="shell">
                <p class="eyebrow">${content.home.media.eyebrow}</p>
                <h2>${content.home.media.title}</h2>
                <div class="card-grid">
                  ${renderCardList(
                    reelItems,
                    (item) => `
                      <article class="card showcase-card">
                        <p class="eyebrow">Video</p>
                        <h3>${item}</h3>
                        <p>Місце для reel або відео у popup-modal після підключення джерел.</p>
                      </article>
                    `,
                  )}
                </div>
              </div>
            </section>
          `
          : ''
      }

      <section class="section" data-reveal>
        <div class="shell split">
          <div>
            <p class="eyebrow">Lead capture</p>
            <h2>${content.forms.lead.title}</h2>
            <p class="lead">${content.home.finalCta.lead}</p>
          </div>
          ${renderLeadForm(content)}
        </div>
      </section>

      <section class="section section--muted" data-reveal>
        <div class="shell split">
          <div>
            <p class="eyebrow">FAQ</p>
            <h2>${content.home.faq.title}</h2>
          </div>
          <div class="stack">
            ${renderFaq(content.home.faq.items)}
          </div>
        </div>
      </section>

      <section class="section" data-reveal>
        <div class="shell cta-banner">
          <div>
            <p class="eyebrow">Final CTA</p>
            <h2>${content.home.finalCta.title}</h2>
            <p>${content.home.finalCta.lead}</p>
          </div>
          <div class="button-row">
            <button class="button" type="button" data-open-modal="report">Download report</button>
            <a class="button button--ghost" href="/${document.body.dataset.locale}/contacts/">Open contacts page</a>
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
        ${includeForm ? renderLeadForm(content, pageKey === 'report' ? 'report' : 'contact') : '<div class="card"><p>Legal copy placeholder. Replace with approved content before launch.</p></div>'}
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

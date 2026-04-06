import { renderFooter } from '../js/components/footer.js'
import { renderHeader } from '../js/components/header.js'

function renderModal(content, title, formType, buttonLabel) {
  return `
    <div class="modal" data-modal="${formType}">
      <div class="modal__dialog">
        <button class="modal__close" type="button" data-close-modal aria-label="${content.ui?.modalClose ?? 'Close modal'}">×</button>
        <h3>${title}</h3>
        <form class="stack" data-form data-form-type="${formType}">
          <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
          <label class="field">
            <span>${content.ui?.fieldName ?? 'Name'} *</span>
            <input type="text" name="name" autocomplete="name" required />
          </label>
          <label class="field">
            <span>${content.ui?.fieldCompany ?? 'Company'} *</span>
            <input type="text" name="company" autocomplete="organization" required />
          </label>
          <label class="field">
            <span>${content.ui?.fieldEmail ?? 'Email'} *</span>
            <input type="email" name="email" autocomplete="email" required />
          </label>
          <label class="field">
            <span>${content.ui?.fieldPhone ?? 'Phone'}</span>
            <input type="tel" name="phone" autocomplete="tel" />
          </label>
          <button class="button" type="submit">${buttonLabel}</button>
          <p class="form-status" data-form-status role="status" hidden></p>
        </form>
      </div>
    </div>
  `
}

function renderVideoModal(content) {
  return `
    <div class="modal" data-modal="video">
      <div class="modal__dialog modal__dialog--video">
        <button class="modal__close" type="button" data-close-modal aria-label="${content.ui?.modalClose ?? 'Close modal'}">×</button>
        <h3 data-video-modal-title>Презентація VW Recruit</h3>
        <div class="video-modal__player">
          <video
            class="video-modal__media"
            data-video-modal-media
            controls
            playsinline
            preload="metadata"
          ></video>
        </div>
      </div>
    </div>
  `
}

function renderHeroQuizModal(content) {
  return `
    <div class="modal" data-modal="hero-quiz">
      <div class="modal__dialog modal__dialog--quiz">
        <button class="modal__close" type="button" data-close-modal aria-label="${content.ui?.modalClose ?? 'Close modal'}">×</button>
        <h3>${content.home.calculator?.title ?? content.quiz.title}</h3>
        <p>${content.home.calculator?.lead ?? 'Step-based mobile-friendly flow with analytics events and a single submission payload.'}</p>
        <div data-quiz data-quiz-source="hero_quiz"></div>
      </div>
    </div>
  `
}

function renderReportSuccessModal(content) {
  return `
    <div class="modal" data-modal="report-success">
      <div class="modal__dialog modal__dialog--success">
        <button class="modal__close" type="button" data-close-modal aria-label="${content.ui?.modalClose ?? 'Close modal'}">×</button>
        <div class="success-modal__icon" aria-hidden="true">
          <span></span>
        </div>
        <h3>${content.forms.report.title}</h3>
        <p>${content.forms.report.success}</p>
      </div>
    </div>
  `
}

function renderFormSuccessModal(content) {
  return `
    <div class="modal" data-modal="form-success">
      <div class="modal__dialog modal__dialog--success">
        <button class="modal__close" type="button" data-close-modal aria-label="${content.ui?.modalClose ?? 'Close modal'}">×</button>
        <div class="success-modal__icon" aria-hidden="true">
          <span></span>
        </div>
        <p class="success-modal__headline" data-form-success-message>${content.forms.lead.success}</p>
      </div>
    </div>
  `
}

export function renderLayout({ content, locale, pageKey, mainContent }) {
  return `
    ${renderHeader(content, locale, pageKey)}
    <main id="main-content">
      ${mainContent}
    </main>
    ${renderFooter(content, locale)}
    ${renderModal(content, content.forms.callback.title, 'callback', content.ui?.requestCallback ?? 'Request callback')}
    ${renderModal(content, content.forms.report.title, 'report', content.ui?.getReport ?? 'Get report')}
    ${renderReportSuccessModal(content)}
    ${renderFormSuccessModal(content)}
    ${renderHeroQuizModal(content)}
    ${renderVideoModal(content)}
  `
}

import { renderFooter } from '../js/components/footer.js'
import { renderHeader } from '../js/components/header.js'

function renderExtraLeadFields(ui) {
  return `
    <label class="field">
      <span>${ui.fieldIsBusiness} *</span>
      <select name="isBusiness" required>
        <option value="" disabled selected>${ui.fieldSelectOption}</option>
        <option value="yes">${ui.optionYes}</option>
        <option value="no">${ui.optionNo}</option>
      </select>
    </label>
    <label class="field">
      <span>${ui.fieldTargetCountries} *</span>
      <input type="text" name="targetCountries" autocomplete="off" required />
    </label>
    <label class="field">
      <span>${ui.fieldWorkersCount} *</span>
      <input type="number" name="workersNeeded" min="1" step="1" inputmode="numeric" required />
    </label>
  `
}

function renderModal(content, title, formType, buttonLabel) {
  const ui = content.ui

  return `
    <div class="modal" data-modal="${formType}">
      <div class="modal__dialog">
        <button class="modal__close" type="button" data-close-modal aria-label="${ui.modalClose}">×</button>
        <h3 class="modal__title">${title}</h3>
        <form class="modal__form" data-form data-form-type="${formType}">
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
          <button class="button modal__submit" type="submit">${buttonLabel}</button>
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
        <button class="modal__close" type="button" data-close-modal aria-label="${content.ui.modalClose}">×</button>
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
        <button class="modal__close" type="button" data-close-modal aria-label="${content.ui.modalClose}">×</button>
        <h3>${content.home.calculator?.title ?? content.quiz.title}</h3>
        <p>${content.home.calculator?.lead ?? content.ui.quizSectionLead}</p>
        <div data-quiz data-quiz-source="hero_quiz"></div>
      </div>
    </div>
  `
}

function renderReportSuccessModal(content) {
  return `
    <div class="modal" data-modal="report-success">
      <div class="modal__dialog modal__dialog--success">
        <button class="modal__close" type="button" data-close-modal aria-label="${content.ui.modalClose}">×</button>
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
        <button class="modal__close" type="button" data-close-modal aria-label="${content.ui.modalClose}">×</button>
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
    ${renderModal(content, content.forms.callback.title, 'callback', content.ui.requestCallback)}
    ${renderModal(content, content.forms.report.title, 'report', content.ui.getReport)}
    ${renderReportSuccessModal(content)}
    ${renderFormSuccessModal(content)}
    ${renderHeroQuizModal(content)}
    ${renderVideoModal(content)}
  `
}

import { buildPageUrl } from '../core/site-config.js'

const logoSymbol = '/logo-symbol.svg'

export function renderFooter(content, locale) {
  const siteTitle = content.site.title

  return `
    <footer class="site-footer">
      <div class="shell site-footer__grid">
        <div class="site-footer__brand">
          <div class="site-footer__brand-mark" aria-hidden="true">
            <img src="${logoSymbol}" alt="" loading="lazy" />
            <span>${siteTitle}</span>
          </div>
          <p class="site-footer__text">
            ${content.ui.footerDescription}
          </p>
        </div>
        <div>
          <p class="site-footer__title">${content.ui.footerCorePages}</p>
          <div class="footer-links">
            <a href="${buildPageUrl(locale, 'services')}">${content.navigation.items.find((item) => item.key === 'services')?.label}</a>
            <a href="${buildPageUrl(locale, 'industries')}">${content.navigation.items.find((item) => item.key === 'industries')?.label}</a>
            <a href="${buildPageUrl(locale, 'cases')}">${content.navigation.items.find((item) => item.key === 'cases')?.label}</a>
            <a href="${buildPageUrl(locale, 'report')}">${content.navigation.items.find((item) => item.key === 'report')?.label}</a>
          </div>
        </div>
        <div>
          <p class="site-footer__title">${content.ui.footerLegal}</p>
          <div class="footer-links">
            <a href="${buildPageUrl(locale, 'privacy-policy')}">${content.ui.privacyPolicy}</a>
            <a href="${buildPageUrl(locale, 'terms')}">${content.ui.termsAndConditions}</a>
          </div>
        </div>
      </div>
    </footer>
  `
}

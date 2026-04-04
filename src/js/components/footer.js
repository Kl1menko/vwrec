import { buildPageUrl } from '../core/site-config.js'
import logoSymbol from '../../assets/logo-symbol.svg'

export function renderFooter(content, locale) {
  return `
    <footer class="site-footer">
      <div class="shell site-footer__grid">
        <div class="site-footer__brand">
          <div class="site-footer__brand-mark" aria-hidden="true">
            <img src="${logoSymbol}" alt="" loading="lazy" />
            <span>VW Recruit</span>
          </div>
          <p class="site-footer__text">
            ${content.ui?.footerDescription ?? 'International recruitment partner for businesses that need stable operational teams, transparent processes, and faster hiring launch.'}
          </p>
        </div>
        <div>
          <p class="site-footer__title">${content.ui?.footerCorePages ?? 'Core pages'}</p>
          <div class="footer-links">
            <a href="${buildPageUrl(locale, 'services')}">${content.navigation.items.find((item) => item.key === 'services')?.label ?? 'Services'}</a>
            <a href="${buildPageUrl(locale, 'industries')}">${content.navigation.items.find((item) => item.key === 'industries')?.label ?? 'Industries'}</a>
            <a href="${buildPageUrl(locale, 'cases')}">${content.navigation.items.find((item) => item.key === 'cases')?.label ?? 'Cases'}</a>
            <a href="${buildPageUrl(locale, 'report')}">${content.navigation.items.find((item) => item.key === 'report')?.label ?? 'Report'}</a>
          </div>
        </div>
        <div>
          <p class="site-footer__title">${content.ui?.footerLegal ?? 'Legal'}</p>
          <div class="footer-links">
            <a href="${buildPageUrl(locale, 'privacy-policy')}">${content.ui?.privacyPolicy ?? 'Privacy policy'}</a>
            <a href="${buildPageUrl(locale, 'terms')}">${content.ui?.termsAndConditions ?? 'Terms & conditions'}</a>
          </div>
        </div>
      </div>
    </footer>
  `
}

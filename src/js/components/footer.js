import { buildPageUrl } from '../core/site-config.js'

export function renderFooter(content, locale) {
  return `
    <footer class="site-footer">
      <div class="shell site-footer__grid">
        <div>
          <p class="site-footer__title">VW Recruit</p>
          <p class="site-footer__text">
            ${content.ui?.footerDescription ?? 'Mobile-first starter for multilingual B2B recruitment pages, case studies, lead flows, and SEO expansion.'}
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

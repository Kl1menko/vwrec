import { buildPageUrl } from '../core/site-config.js'

export function renderFooter(locale) {
  return `
    <footer class="site-footer">
      <div class="shell site-footer__grid">
        <div>
          <p class="site-footer__title">VW Recruit</p>
          <p class="site-footer__text">
            Mobile-first starter for multilingual B2B recruitment pages, case studies, lead flows, and SEO expansion.
          </p>
        </div>
        <div>
          <p class="site-footer__title">Core pages</p>
          <div class="footer-links">
            <a href="${buildPageUrl(locale, 'services')}">Services</a>
            <a href="${buildPageUrl(locale, 'industries')}">Industries</a>
            <a href="${buildPageUrl(locale, 'cases')}">Cases</a>
            <a href="${buildPageUrl(locale, 'report')}">Report</a>
          </div>
        </div>
        <div>
          <p class="site-footer__title">Legal</p>
          <div class="footer-links">
            <a href="${buildPageUrl(locale, 'privacy-policy')}">Privacy policy</a>
            <a href="${buildPageUrl(locale, 'terms')}">Terms & conditions</a>
          </div>
        </div>
      </div>
    </footer>
  `
}

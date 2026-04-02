import { buildPageUrl, LOCALE_META } from '../core/site-config.js'
import logoSymbol from '../../assets/logo-symbol.svg'

function renderLanguageOptions(currentLocale, pageKey) {
  return Object.entries(LOCALE_META)
    .map(
      ([locale, meta]) => `
        <a class="language-switcher__option${locale === currentLocale ? ' is-active' : ''}" href="${buildPageUrl(locale, pageKey)}">
          <span class="language-switcher__code">${meta.short}</span>
          <span class="language-switcher__flag" aria-hidden="true"><img src="${meta.flag}" alt="" loading="lazy" /></span>
          <span class="language-switcher__label">${meta.label}</span>
        </a>
      `,
    )
    .join('')
}

export function renderHeader(content, locale, pageKey) {
  const currentLocaleMeta = LOCALE_META[locale] ?? LOCALE_META.en
  const navLinks = content.navigation.items
    .map(
      (item) => `
        <a class="nav-link${item.key === pageKey ? ' is-active' : ''}" href="${buildPageUrl(locale, item.key)}">${item.label}</a>
      `,
    )
    .join('')

  return `
    <header class="site-header">
      <div class="shell site-header__inner">
        <a class="brand-mark" href="${buildPageUrl(locale, 'home')}" aria-label="${content.brand?.homeAriaLabel ?? 'VW Recruit home'}">
          <img class="brand-mark__logo" src="${logoSymbol}" alt="VW Recruit logo" width="82" height="101" />
          <span class="brand-mark__text">
            <strong>VW Recruit</strong>
            <small>${content.brand?.tagline ?? 'International hiring partner'}</small>
          </span>
        </a>

        <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="site-nav" aria-label="${content.ui?.openMenu ?? 'Open menu'}">
          <span class="menu-toggle__lines" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div class="site-header__panel" id="site-nav" data-menu-panel>
          <nav class="site-nav" aria-label="${content.ui?.primaryNav ?? 'Primary'}">
            ${navLinks}
          </nav>

          <div class="site-header__actions">
            <div class="language-switcher" data-language-switcher>
              <button
                class="language-switcher__trigger"
                type="button"
                data-language-trigger
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="language-switcher__flag" aria-hidden="true"><img src="${currentLocaleMeta.flag}" alt="" /></span>
                <span class="language-switcher__value">${currentLocaleMeta.short}</span>
                <span class="language-switcher__caret" aria-hidden="true">▾</span>
              </button>
              <div class="language-switcher__menu" data-language-menu>
                ${renderLanguageOptions(locale, pageKey)}
              </div>
            </div>
            <button class="button button--ghost" type="button" data-open-modal="callback">
              ${content.navigation.secondaryCta}
            </button>
          </div>
        </div>
      </div>
    </header>
  `
}

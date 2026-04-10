import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { LOCALES, PAGE_DEFINITIONS, resolvePageContentKey } from '../src/js/core/site-config.js'
import { CONTENT } from '../src/content/index.js'
import { renderPage } from '../src/js/pages/render-page.js'
import { renderLayout } from '../src/templates/layout.js'

const rootDir = process.cwd()
const DEFAULT_LOCALE = 'uk'
const APP_ENTRY = '/src/main.js'
const SITE_NAME = 'VW Recruit'
const META_GENERATOR = 'VW Recruit Starter'
const SITE_URL = (process.env.SITE_URL ?? 'https://www.vw-recruit.com').replace(/\/$/, '')
const SITE_LOGO_URL = `${SITE_URL}/apple-touch-icon.png`
const OG_IMAGE_PATH = '/og.png'
const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`
const OG_IMAGE_WIDTH = '1200'
const OG_IMAGE_HEIGHT = '630'

function escapeJsonForHtml(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

function escapeHtmlAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function getPageTitle(content, pageKey) {
  const contentKey = resolvePageContentKey(pageKey)
  const page = content[contentKey]
  const pageTitle = pageKey === 'home' ? content.home.meta.title : page?.title ?? 'Page'

  return `${content.site.title ?? SITE_NAME} | ${pageTitle}`
}

function getPageDescription(content, pageKey) {
  const contentKey = resolvePageContentKey(pageKey)
  const page = content[contentKey]

  if (pageKey === 'home') {
    return content.home.meta.description ?? content.site.description ?? ''
  }

  return page?.meta?.description ?? page?.description ?? page?.lead ?? content.site.description ?? ''
}

function getPageRobots(pageKey) {
  if (pageKey === 'thank-you-report') {
    return 'noindex, nofollow'
  }

  return ''
}

function getPageMeta(content, pageKey) {
  return {
    title: getPageTitle(content, pageKey),
    description: getPageDescription(content, pageKey),
    robots: getPageRobots(pageKey),
  }
}

function renderCommonHeadTags() {
  return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="generator" content="${META_GENERATOR}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
  `
}

function renderPageLoaderStyles() {
  return `
    <style>
      html.page-loading {
        background: #fafafa;
      }

      html.page-loading body {
        overflow: hidden;
      }

      #app,
      #portal-root {
        opacity: 1;
        transition: opacity 280ms ease;
      }

      html.page-loading #app,
      html.page-loading #portal-root {
        opacity: 0;
        pointer-events: none;
        user-select: none;
      }

      .page-loader {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: grid;
        place-items: center;
        padding: 24px;
        background: var(--color-bg, #fafafa);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition:
          opacity 240ms ease,
          visibility 240ms ease;
      }

      html.page-loading .page-loader {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }

      .page-loader__logo-wrap {
        display: grid;
        place-items: center;
      }

      .page-loader__logo {
        width: clamp(72px, 9vw, 104px);
        height: auto;
        animation: page-loader-pulse 1.8s ease-in-out infinite;
        transform-origin: center;
        filter: drop-shadow(0 14px 28px rgba(242, 122, 36, 0.16));
      }

      @keyframes page-loader-pulse {
        0%,
        100% {
          transform: scale(0.94);
        }

        50% {
          transform: scale(1.04);
        }
      }
    </style>
  `
}

function renderPageLoaderScript() {
  return `
    <script>
      document.documentElement.classList.add('page-loading');
      window.addEventListener('load', () => {
        document.documentElement.classList.remove('page-loading');
      }, { once: true });
    </script>
  `
}

function buildAbsoluteUrl(pathname) {
  return SITE_URL ? `${SITE_URL}${pathname}` : pathname
}

function buildPageHrefPath(locale, pageKey) {
  const page = PAGE_DEFINITIONS.find((entry) => entry.key === pageKey)
  const pathSuffix = page?.slug ? `/${page.slug}/` : '/'

  return `/${locale}${pathSuffix}`
}

function renderAlternateLanguageLinks(pageKey) {
  const links = LOCALES.map((locale) => {
    const href = buildAbsoluteUrl(buildPageHrefPath(locale, pageKey))
    return `<link rel="alternate" hreflang="${locale}" href="${escapeHtmlAttribute(href)}" />`
  })

  links.push(
    `<link rel="alternate" hreflang="x-default" href="${escapeHtmlAttribute(buildAbsoluteUrl(buildPageHrefPath(DEFAULT_LOCALE, pageKey)))}" />`,
  )

  return links.join('\n    ')
}

function renderCanonicalLink(locale, pageKey) {
  return `<link rel="canonical" href="${escapeHtmlAttribute(buildAbsoluteUrl(buildPageHrefPath(locale, pageKey)))}" />`
}

function buildOrganizationSchema(content) {
  return escapeJsonForHtml({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: content.site.title ?? SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO_URL,
    description: content.site.description ?? '',
  })
}

function buildWebSiteSchema(content, locale) {
  return escapeJsonForHtml({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: content.site.title ?? SITE_NAME,
    url: buildAbsoluteUrl(buildPageHrefPath(locale, 'home')),
    inLanguage: locale,
    description: content.site.description ?? '',
  })
}

function renderPageHead({ title, description, robots, locale, pageKey }) {
  const content = CONTENT[locale] ?? CONTENT.en
  const organizationSchema = buildOrganizationSchema(content)
  const websiteSchema = buildWebSiteSchema(content, locale)
  const pageUrl = buildAbsoluteUrl(buildPageHrefPath(locale, pageKey))

  return `
    ${renderCommonHeadTags()}
    <title>${title}</title>
    <meta name="description" content="${escapeHtmlAttribute(description)}" />
    <meta property="og:site_name" content="${escapeHtmlAttribute(content.site.title ?? SITE_NAME)}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtmlAttribute(title)}" />
    <meta property="og:description" content="${escapeHtmlAttribute(description)}" />
    <meta property="og:url" content="${escapeHtmlAttribute(pageUrl)}" />
    <meta property="og:image" content="${escapeHtmlAttribute(OG_IMAGE_URL)}" />
    <meta property="og:image:width" content="${OG_IMAGE_WIDTH}" />
    <meta property="og:image:height" content="${OG_IMAGE_HEIGHT}" />
    <meta property="og:image:alt" content="${escapeHtmlAttribute(title)}" />
    <meta property="og:locale" content="${escapeHtmlAttribute(locale)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtmlAttribute(title)}" />
    <meta name="twitter:description" content="${escapeHtmlAttribute(description)}" />
    <meta name="twitter:image" content="${escapeHtmlAttribute(OG_IMAGE_URL)}" />
    ${robots ? `<meta name="robots" content="${escapeHtmlAttribute(robots)}" />` : ''}
    ${renderCanonicalLink(locale, pageKey)}
    ${renderAlternateLanguageLinks(pageKey)}
    <script type="application/ld+json">${organizationSchema}</script>
    <script type="application/ld+json">${websiteSchema}</script>
    ${renderPageLoaderStyles()}
    ${renderPageLoaderScript()}
    <script type="module" src="${APP_ENTRY}"></script>
  `
}

function buildFaqSchema(content, pageKey) {
  if (pageKey !== 'faq') {
    return ''
  }

  const faqItems = content.home?.faq?.items ?? []

  if (!faqItems.length) {
    return ''
  }

  return escapeJsonForHtml({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  })
}

function renderHtmlDocument({ lang, head, body, bodyAttributes = '' }) {
  return `<!doctype html>
<html lang="${lang}">
  <head>
    ${head}
  </head>
  <body${bodyAttributes ? ` ${bodyAttributes}` : ''}>
    ${body}
  </body>
</html>
`
}

function buildGeneratedPagePath(locale, pageKey) {
  const page = PAGE_DEFINITIONS.find((entry) => entry.key === pageKey)
  const pathSuffix = page?.slug ? `/${page.slug}/index.html` : '/index.html'

  return resolve(rootDir, `.${`/${locale}${pathSuffix}`}`)
}

function buildPageBodyAttributes(locale, pageKey) {
  return `data-locale="${locale}" data-page="${pageKey}"`
}

function buildEmbeddedPageContent(content) {
  return {
    forms: content.forms,
    quiz: content.quiz,
    ui: content.ui,
  }
}

const createHtml = ({ locale, pageKey }) => {
  const content = CONTENT[locale] ?? CONTENT.en
  const meta = getPageMeta(content, pageKey)
  const faqSchema = buildFaqSchema(content, pageKey)
  const appMarkup = renderLayout({
    content,
    locale,
    pageKey,
    mainContent: renderPage(content, pageKey),
  })
  const pageContent = buildEmbeddedPageContent(content)

  return renderHtmlDocument({
    lang: locale,
    head: renderPageHead({ ...meta, locale, pageKey }),
    bodyAttributes: buildPageBodyAttributes(locale, pageKey),
    body: `
      <a class="skip-link" href="#main-content">Skip to content</a>
      <div class="page-loader" aria-hidden="true">
        <div class="page-loader__logo-wrap">
          <img class="page-loader__logo" src="/logo-symbol-loader.svg" alt="" width="104" height="128" />
        </div>
      </div>
      <div id="app">${appMarkup}</div>
      ${faqSchema ? `<script type="application/ld+json">${faqSchema}</script>` : ''}
      <script id="page-content" type="application/json">${escapeJsonForHtml(pageContent)}</script>
      <div id="portal-root"></div>
    `,
  })
}

function createRedirectHtml() {
  const supportedLocales = JSON.stringify(LOCALES)
  const defaultLocale = JSON.stringify(DEFAULT_LOCALE)

  return renderHtmlDocument({
    lang: 'en',
    head: `
      ${renderCommonHeadTags()}
      <title>${SITE_NAME}</title>
      <noscript><meta http-equiv="refresh" content="0; url=/${DEFAULT_LOCALE}/" /></noscript>
    `,
    body: `
      <style>
        body {
          margin: 0;
          min-height: 100vh;
          display: grid;
          place-items: center;
          background: #fafafa;
          color: #111111;
          font-family: Inter, sans-serif;
        }

        .redirect-loader {
          display: grid;
          justify-items: center;
          gap: 18px;
          padding: 24px;
          text-align: center;
        }

        .redirect-loader__logo {
          width: 60px;
          height: auto;
        }

        .redirect-loader__spinner {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 2px solid rgba(242, 122, 36, 0.18);
          border-top-color: #f27a24;
          animation: redirect-spin 0.8s linear infinite;
        }

        .redirect-loader__text {
          font-size: 0.92rem;
          line-height: 1.5;
          color: #5f5b57;
        }

        .redirect-loader__text a {
          color: #d95d0a;
        }

        @keyframes redirect-spin {
          to {
            transform: rotate(360deg);
          }
        }
      </style>
      <script>
        (function () {
          const supportedLocales = ${supportedLocales}
          const defaultLocale = ${defaultLocale}
          const preferredLocaleKey = 'preferred-locale'
          const aliasMap = {
            ua: 'uk',
            cz: 'cs',
          }

          function normalizeLocale(value) {
            if (!value) return null

            const normalized = String(value).trim().toLowerCase().replace(/_/g, '-')
            if (!normalized) return null

            const [language] = normalized.split('-')
            return aliasMap[language] ?? language
          }

          function resolveLocale() {
            let storedLocale = null

            try {
              storedLocale = normalizeLocale(window.localStorage.getItem(preferredLocaleKey))
            } catch {
              storedLocale = null
            }

            if (storedLocale && supportedLocales.includes(storedLocale)) {
              return storedLocale
            }

            const browserLocales = Array.isArray(window.navigator.languages) && window.navigator.languages.length
              ? window.navigator.languages
              : [window.navigator.language]

            for (const locale of browserLocales) {
              const normalizedLocale = normalizeLocale(locale)
              if (normalizedLocale && supportedLocales.includes(normalizedLocale)) {
                return normalizedLocale
              }
            }

            return defaultLocale
          }

          const targetLocale = resolveLocale()
          const targetPath = '/' + targetLocale + '/'

          window.location.replace(targetPath)
        })()
      </script>
      <div class="redirect-loader" aria-live="polite">
        <img class="redirect-loader__logo" src="/logo-symbol-loader.svg" alt="" width="60" height="74" />
        <div class="redirect-loader__spinner" aria-hidden="true"></div>
        <p class="redirect-loader__text">Selecting your language and redirecting. If nothing happens, open <a href="/${DEFAULT_LOCALE}/">/${DEFAULT_LOCALE}/</a>.</p>
      </div>
    `,
  })
}

const ensureFile = (filePath, content) => {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, content)
}

function isIndexablePage(pageKey) {
  return getPageRobots(pageKey) !== 'noindex, nofollow'
}

function buildSitemapXml() {
  const urls = []

  for (const locale of LOCALES) {
    for (const page of PAGE_DEFINITIONS) {
      if (!isIndexablePage(page.key)) continue

      urls.push(`  <url>\n    <loc>${buildAbsoluteUrl(buildPageHrefPath(locale, page.key))}</loc>\n  </url>`)
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`
}

ensureFile(resolve(rootDir, 'index.html'), createRedirectHtml())
ensureFile(resolve(rootDir, 'public/sitemap.xml'), buildSitemapXml())

for (const locale of LOCALES) {
  for (const page of PAGE_DEFINITIONS) {
    const filePath = buildGeneratedPagePath(locale, page.key)
    ensureFile(
      filePath,
      createHtml({
        locale,
        pageKey: page.key,
      }),
    )
  }
}

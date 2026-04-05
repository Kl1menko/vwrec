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

function getPageMeta(content, pageKey) {
  return {
    title: getPageTitle(content, pageKey),
    description: getPageDescription(content, pageKey),
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

function renderPageHead({ title, description }) {
  return `
    ${renderCommonHeadTags()}
    <title>${title}</title>
    <meta name="description" content="${escapeHtmlAttribute(description)}" />
    ${renderPageLoaderStyles()}
    ${renderPageLoaderScript()}
    <script type="module" src="${APP_ENTRY}"></script>
  `
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
  const appMarkup = renderLayout({
    content,
    locale,
    pageKey,
    mainContent: renderPage(content, pageKey),
  })
  const pageContent = buildEmbeddedPageContent(content)

  return renderHtmlDocument({
    lang: locale,
    head: renderPageHead(meta),
    bodyAttributes: buildPageBodyAttributes(locale, pageKey),
    body: `
      <a class="skip-link" href="#main-content">Skip to content</a>
      <div class="page-loader" aria-hidden="true">
        <div class="page-loader__logo-wrap">
          <img class="page-loader__logo" src="/logo-symbol-loader.svg" alt="" width="104" height="128" />
        </div>
      </div>
      <div id="app">${appMarkup}</div>
      <script id="page-content" type="application/json">${escapeJsonForHtml(pageContent)}</script>
      <div id="portal-root"></div>
    `,
  })
}

function createRedirectHtml() {
  return renderHtmlDocument({
    lang: 'en',
    head: `
      ${renderCommonHeadTags()}
      <meta http-equiv="refresh" content="0; url=/${DEFAULT_LOCALE}/" />
      <title>${SITE_NAME}</title>
    `,
    body: `
      <p>Redirecting to <a href="/${DEFAULT_LOCALE}/">/${DEFAULT_LOCALE}/</a>...</p>
    `,
  })
}

const ensureFile = (filePath, content) => {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, content)
}

ensureFile(resolve(rootDir, 'index.html'), createRedirectHtml())

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

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { LOCALES, PAGE_DEFINITIONS } from '../src/js/core/site-config.js'

const rootDir = process.cwd()

const createHtml = ({ locale, pageKey, title }) => `<!doctype html>
<html lang="${locale}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="generator" content="VW Recruit Starter" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <title>${title}</title>
    <script type="module" src="/src/main.js"></script>
  </head>
  <body data-locale="${locale}" data-page="${pageKey}">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div id="app"></div>
    <div id="portal-root"></div>
  </body>
</html>
`

const ensureFile = (filePath, content) => {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, content)
}

ensureFile(
  resolve(rootDir, 'index.html'),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=/uk/" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <title>VW Recruit</title>
  </head>
  <body>
    <p>Redirecting to <a href="/uk/">/uk/</a>...</p>
  </body>
</html>
`,
)

for (const locale of LOCALES) {
  for (const page of PAGE_DEFINITIONS) {
    const pathSuffix = page.slug ? `/${page.slug}/index.html` : '/index.html'
    const filePath = resolve(rootDir, `.${`/${locale}${pathSuffix}`}`)
    ensureFile(
      filePath,
      createHtml({
        locale,
        pageKey: page.key,
        title: `VW Recruit | ${page.label}`,
      }),
    )
  }
}

import { defineConfig } from 'vite'
import { relative, resolve } from 'node:path'
import { readdirSync, statSync } from 'node:fs'

function collectHtmlEntries(dir, rootDir, entries = {}) {
  const ignore = new Set(['node_modules', 'dist', '.git'])

  for (const name of readdirSync(dir)) {
    if (ignore.has(name)) continue

    const fullPath = resolve(dir, name)
    const stats = statSync(fullPath)

    if (stats.isDirectory()) {
      collectHtmlEntries(fullPath, rootDir, entries)
      continue
    }

    if (name.endsWith('.html')) {
      const key = relative(rootDir, fullPath).replace(/\.html$/, '')
      entries[key] = fullPath
    }
  }

  return entries
}

const rootDir = process.cwd()

export default defineConfig({
  build: {
    rollupOptions: {
      input: collectHtmlEntries(rootDir, rootDir),
    },
  },
})

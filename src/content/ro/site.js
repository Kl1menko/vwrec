import { buildLocalizedContent } from '../build-localized-content.js'
import { ukContent } from '../uk/site.js'

export const roContent = buildLocalizedContent(
  ukContent,
  {
    code: 'ro',
    name: 'Romanian',
    nativeName: 'Română',
    translated: false,
  },
  {},
)

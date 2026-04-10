import { buildLocalizedContent } from '../build-localized-content.js'
import { ukContent } from '../uk/site.js'

export const plContent = buildLocalizedContent(
  ukContent,
  {
    code: 'pl',
    name: 'Polish',
    nativeName: 'Polski',
    translated: false,
  },
  {},
)

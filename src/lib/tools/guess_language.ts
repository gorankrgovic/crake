/**
 * This module can be used to remove non-word characters and non-content words
 * from strings. It is able to detect the natural language on its own.
 */

import * as franc from 'franc'

// currently supported natural languages
export type languageName =
  | 'english'

// just a few language codes of 'franc' mapped to 'nltk-stopwords'-keys for now
const languageNameMapping = {
  eng: 'english'
}

// detect the language of a given string or word array
export default function guessLanguage(text: string): languageName {
  return languageNameMapping[franc(text)] || 'english'
}

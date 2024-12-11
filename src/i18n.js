import { createI18n } from 'vue-i18n'
import de from './locales/de.json'
import en from './locales/en.json'
import sv from './locales/sv.json'

export default createI18n({
  locale: 'de', // Standardsprache
  fallbackLocale: 'en', // Fallback-Sprache
  messages: {
    de,
    en,
    sv
  }
})
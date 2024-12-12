// stores/language.js
import { defineStore } from 'pinia';
import de from '@/locales/de.json';
import en from '@/locales/en.json';
import sv from '@/locales/sv.json';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    locale: localStorage.getItem('locale') || 'de', // Default language: German
    messages: {
      de,
      en,
      sv,
    },
  }),
  getters: {
    currentMessages: (state) => {
      console.log('Current locale:', state.locale);
      return state.messages[state.locale];
    }
  },
  actions: {
    setLocale(newLocale) {
      this.locale = newLocale;
      localStorage.setItem('locale', newLocale); // Speichern im LocalStorage
    },
  },
});

// Export the defineStore function directly

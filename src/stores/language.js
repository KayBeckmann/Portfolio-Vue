// stores/language.js
import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    locale: localStorage.getItem('locale') || 'de', // Standardsprache: Deutsch
  }),
  actions: {
    setLocale(newLocale) {
      console.log('Setting locale to:', newLocale);
      this.locale = newLocale;
      localStorage.setItem('locale', newLocale); // Speichern im LocalStorage
    },
  },
});

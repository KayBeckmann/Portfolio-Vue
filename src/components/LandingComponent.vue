<template>
    <h1>{{ t('landingPage.title') }}</h1>
    <h2>{{ t('landingPage.subtitle') }}</h2> 
</template>

<script setup lang="js">
import { useI18n } from 'vue-i18n';
import { useLanguageStore } from '@/stores/language';
import { computed, watchEffect } from 'vue';

const { t } = useI18n({ useScope: 'global' });
const languageStore = useLanguageStore();
const i18n = useI18n(); // i18n-Instanz verfügbar machen

// Computed Property für die aktuelle Sprache
const locale = computed(() => languageStore.locale);

// Reagiere auf Änderungen der Sprache
watchEffect(() => {
  // Überprüfe, ob i18n.global verfügbar ist
  if (i18n.global) {
    i18n.global.locale.value = locale.value; 
  } else {
    // Handle den Fall, dass i18n.global noch nicht initialisiert ist
    console.warn('i18n.global is not yet available.');
  }
}); 
</script>


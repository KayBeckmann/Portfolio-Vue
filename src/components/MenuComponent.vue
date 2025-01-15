<template>
  <div class="menu">
    <div class="left">
      <a href="#">
        <h1>Ka<span class="coloriezed">y</span></h1>
      </a>
    </div>
    <div class="right">
      <ul>
        <li class="desktop"><a href="#about">{{ currentMessages.menu.about }}</a></li>
        <li class="desktop"><a href="#skill">{{ currentMessages.menu.skills }}</a></li>
        <li class="desktop"><a href="#projekt">{{ currentMessages.menu.projects }}</a></li>
        <li class="desktop"><a href="#kontakt">{{ currentMessages.menu.contact }}</a></li>
        <li>
          <div class="custom-select">
            <div v-for="locale in locales" :key="locale.value" @click="setLocale(locale.value)" class="option">
              <span :class="'fi fi-' + locale.flag"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="js">
import { computed } from 'vue';
import { useLanguageStore } from '@/stores/language';
import 'flag-icons/css/flag-icons.min.css'; // Importiere den CSS-Stil für die Flaggen

const languageStore = useLanguageStore();
const selectedLocale = computed({
  get: () => languageStore.locale,
  set: (value) => languageStore.setLocale(value)
});

function changeLocale() {
  window.location.reload();
}

const { currentMessages } = useLanguageStore();

const locales = [
  { value: 'de', flag: 'de', name: 'Deutsch' },
  { value: 'en', flag: 'gb', name: 'English' },
  { value: 'sv', flag: 'se', name: 'Svenska' }
];

function setLocale(locale) {
  selectedLocale.value = locale;
  changeLocale();
}
</script>

<style lang="css" scoped>
ul {
  list-style: none;
}

li {
  display: inline-block;
  margin-right: var(--margin);
}

.menu {
  position: sticky;
  top: 0;
  height: var(--menu-height);
  width: 100dvw;
  background-color: rgba(20, 29, 47, 0.5);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left {
  margin-left: var(--margin);
}

.right {
  margin-right: var(--margin);
}

.custom-select {
  position: relative;
  display: flex;
}

.option {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
}

.option .fi {
  margin-right: 8px;
}

@media screen and (max-width: 750px) {
  .desktop{
    display: none;
  }
}
</style>

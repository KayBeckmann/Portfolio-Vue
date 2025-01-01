<template>
  <div class="menu">
    <div class="left">
      <a href="#">
        <h1>Ka<span class="coloriezed">y</span></h1>
      </a>
    </div>
    <div class="right">
      <ul>
        <li><a href="about">{{ currentMessages.menu.about }}</a></li>
        <li><a href="skill">{{ currentMessages.menu.skills }}</a></li>
        <li><a href="projekt">{{ currentMessages.menu.projects }}</a></li>
        <li><a href="kontakt">{{ currentMessages.menu.contact }}</a></li>
        <li>
          <select v-model="selectedLocale" @change="changeLocale">
            <option value="de">Deutsch</option>
            <option value="en">English</option>
            <option value="sv">Svenska</option>
          </select>
          <!-- <select v-model="selectedLocale" @change="changeLocale">
            <option value="de"><span class="fi fi-de" aria-hidden="true"></span></option>
            <option value="en"><span class="fi fi-gb" aria-hidden="true"></span></option>
            <option value="sv"><span class="fi fi-se" aria-hidden="true"></span></option>
          </select> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="js">
import { computed } from 'vue';
import { useLanguageStore } from '@/stores/language';
// import 'flag-icons/css/flag-icons.css'; // Importiere den CSS-Stil für die Flaggen

const languageStore = useLanguageStore();
const selectedLocale = computed({
  get: () => languageStore.locale,
  set: (value) => languageStore.setLocale(value)
});

function changeLocale() {
  window.location.reload();
}

const { currentMessages } = useLanguageStore();
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
  max-width: 100dvw;
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

.fi{
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}

@media screen and (max-width: 450px) {
  .right{
    display: none;
  }
}
</style>

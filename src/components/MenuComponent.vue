<template>
    <div class="menu">
        <div class="left">Kay</div>
        <div>
            <ul>
                <li>About Me</li>
                <li>Skills</li>
                <li>Projekte</li>
                <li>Kontakt</li>
                <li>
                  <select v-model="selectedLocale" @change="changeLocale">
                    <option value="de">Deutsch</option>
                    <option value="en">English</option>
                    <option value="sv">Svenska</option>
                    </select>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="js">
import { computed } from 'vue';
import { useLanguageStore } from '@/stores/language';

const languageStore = useLanguageStore();
const selectedLocale = computed({
  get: () => languageStore.locale,
  set: (value) => languageStore.setLocale(value)
});

function changeLocale() {
  window.location.reload();
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

.menu{
  position: sticky;
  top:0;
  height: var(--menu-height);
  max-width: 100dvw;
  background-color: rgba(20,29,47, 0.5);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left{
    margin-left: var(--margin);
}

.right{
    margin-right: var(--margin);
}
</style>
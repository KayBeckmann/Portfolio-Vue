<template>
    <div class="menu">
        <div class="left">Logo</div>
        <div>
            <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
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
import { ref, computed } from 'vue';
import { useLanguageStore } from '@/stores/language';

const languageStore = useLanguageStore();
const selectedLocale = computed({
  get: () => languageStore.locale,
  set: (value) => languageStore.setLocale(value)
});

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
    width: 100dvw;
    height: 75px;
    background-color: var(--primary-color);
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
<template>
  <div class="content"> 
    <h1>{{ currentMessages.landingPage.title }}</h1> 
    <p>{{ currentMessages.landingPage.subtitle }}</p>
  </div>
</template>

<script setup lang="js">
import { useLanguageStore } from '../stores/language';

const { currentMessages } = useLanguageStore(); 
</script>

<style scoped>
.content{
  height: calc(100dvw - var(--menu-height));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
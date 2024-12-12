<template>
  <div> 
    <h1>{{ currentMessages.landingPage.title }}</h1> 
    <p>{{ currentMessages.landingPage.subtitle }}</p>
  </div>
</template>

<script setup lang="js">
import { useLanguageStore } from '../stores/language';

const { currentMessages } = useLanguageStore(); 
</script>


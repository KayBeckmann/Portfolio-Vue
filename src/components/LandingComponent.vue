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

<style lang="css" scoped>
.content {
  height: 100dvh;
  width: 100dvw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(../assets/img/background.webp),
  linear-gradient(to bottom, rgba(0, 190, 232, 0.4), rgba(0, 190, 232, 0.4));
  background-blend-mode: multiply;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

@media screen and (max-width: 750px) {
  .content{
    width: 100dvw;
  }
}
</style>

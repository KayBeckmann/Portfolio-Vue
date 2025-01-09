<template>
  <div class="wrapper">
    <h1>{{ currentMessages.menu.projects }}</h1>
  </div>

  <div class="content">
      <ProjectCardComponent v-for="project in currentMessages.projects" :key="project.title" :project="project"></ProjectCardComponent>
  </div>
</template>

<script setup lang="js">
import { useLanguageStore } from '../stores/language';
import ProjectCardComponent from './ProjectCardComponent.vue';

const { currentMessages } = useLanguageStore(); 
</script>

<style lang="css" scoped>
.content{
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Erzeugt zwei gleichbreite Spalten */
    gap: 20px; /* Fügt einen Abstand von 20px zwischen den Spalten hinzu */
    align-items: center;
    justify-content: center;
    margin-left: 20px;
}
.wrapper{
  padding: var(--margin);
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr; /* Zeigt nur eine Spalte auf kleineren Bildschirmen an */
  }
}
</style>
<template>
    <h1>Projekte</h1>

    <ProjectCardComponent v-for="project in currentMessages.projects" :key="project.title" :project="project"></ProjectCardComponent>
</template>

<script setup lang="js">
import { useLanguageStore } from '../stores/language';
import ProjectCardComponent from './ProjectCardComponent.vue';

let projects = [
    {
        "title":"{{ currentMessages.projects.title }}",
        "description":"Taskmanagement",
        "url":"https://link-zu.projct"
    },
    {
        "title":"KiTa",
        "description":"Homepage Kindergarten",
        "url":"https://link-zu.projct"
    },
]

const { currentMessages } = useLanguageStore(); 
</script>

<style lang="css" scoped>

</style>
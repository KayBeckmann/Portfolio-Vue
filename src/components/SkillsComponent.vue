<template>
    <div class="wrapper">
        <h1>{{ currentMessages.menu.skills }}</h1>
    </div>
    <div class="content">
        <SkillCardComponent v-for="skill in skills" :key="skill.title" :skill="skill"></SkillCardComponent>
    </div>
</template>

<script setup lang="js">
import { useLanguageStore } from '../stores/language';
import SkillCardComponent from './SkillCardComponent.vue'

const { currentMessages } = useLanguageStore(); 
const skills = [
    {
        "title": "HTML",
        "img":"html.png"
    },
    {
        "title": "CSS",
        "img":"css.png"
    },
    {
        "title": "JavaScript",
        "img":"javascript.png"
    },
    {
        "title": "TypeScript",
        "img":"typescript.png"
    },
    {
        "title": "git",
        "img":"git.png"
    },
    {
        "title": "Materialdesign",
        "img":"materialdesign.png"
    },
]
</script>

<style lang="css" scoped>
.wrapper{
  padding: var(--margin);
}
</style>
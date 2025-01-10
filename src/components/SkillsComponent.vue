<template>
    <div class="wrapper">
        <h1>{{ currentMessages.menu.skills }}</h1>
        <p>{{ currentMessages.skill.text }}</p>
    </div>
    <div class="content">
        <SkillCardComponent v-for="skill in skills" :key="skill.title" :skill="skill"></SkillCardComponent>
    </div>
</template>

<script setup lang="js">
import { useLanguageStore } from '../stores/language';
import SkillCardComponent from './SkillCardComponent.vue'

const { currentMessages } = useLanguageStore(); 
//HTML, CSS, JavaScript, TipeScript
//Angular, Firebase, API
//git, Materialdesign
//Srum,
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
        "title": "Angular",
        "img":"angular.png"
    },
    {
        "title": "Firebase",
        "img":"firebase.png"
    },
    {
        "title": "API",
        "img":"api.png"
    },
    {
        "title": "git",
        "img":"git.png"
    },
    {
        "title": "Materialdesign",
        "img":"materialdesign.png"
    },
    {
        "title": "Scrum",
        "img":"scrum.png"
    },
]
</script>

<style lang="css" scoped>
.wrapper{
  padding: var(--margin);
}

.content{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:left;
    gap: 20px;
}
</style>
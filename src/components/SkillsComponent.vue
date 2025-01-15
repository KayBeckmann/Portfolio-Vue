<template>
    <div class="wrapper">
        <div class="content">
            <SkillCardComponent v-for="skill in skills" :key="skill.title" :skill="skill"></SkillCardComponent>
        </div>
        <div class="text">
            <h1>{{ currentMessages.menu.skills }}</h1>
            <p>{{ currentMessages.skill.text }}</p>
        </div>
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
  margin-top: var(--space);
  padding: var(--space);
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  justify-content: center;
  gap: var(--space)
}

.content{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    /* gap: var(--space); */
}

@media screen and (max-width: 750px) {
  .wrapper{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
  }
}
</style>
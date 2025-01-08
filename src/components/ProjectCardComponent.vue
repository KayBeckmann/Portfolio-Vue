<template>
    <h2>{{ props.project.title }}</h2>
    <p>{{ props.project.description }}</p>
    <a :href="props.project.url">{{ props.project.url }}</a>
</template>

<script setup lang="js">
import { useLanguageStore } from '../stores/language';
import { defineProps } from 'vue';

const { currentMessages } = useLanguageStore(); 

const props = defineProps({
       project: {
           type: Object,
           required: true
       }
   });
</script>

<style lang="css" scoped>

</style>
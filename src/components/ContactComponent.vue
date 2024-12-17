<template>
    <h1>{{ currentMessages.contact.title }}</h1>
    <a href="mailto:contact@kay-beckmann.com">{{ currentMessages.contact.mail }}</a>
</template>

<script setup lang="js">
import { useLanguageStore } from '../stores/language';

const { currentMessages } = useLanguageStore(); 
</script>

<style lang="css" scoped>
a{
    text-decoration: none;
    color: var(--text-color);
}
</style>
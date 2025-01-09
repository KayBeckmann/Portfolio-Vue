<template>
    <h1>{{ currentMessages.menu.skills }}</h1>
</template>

<script setup lang="js">
import { useLanguageStore } from '../stores/language';

const { currentMessages } = useLanguageStore(); 
</script>

<style lang="css" scoped></style>
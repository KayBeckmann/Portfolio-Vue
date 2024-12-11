<template>
<MenuComponent></MenuComponent>
<RouterView></RouterView>
<FooterComponent></FooterComponent>
</template>

<script setup>
import { RouterView } from 'vue-router';
import MenuComponent from './components/MenuComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<style scoped>
</style>

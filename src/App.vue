<script setup>
import { RouterView } from 'vue-router';
import MenuComponent from './components/MenuComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
<MenuComponent></MenuComponent>
<RouterView></RouterView>
<FooterComponent></FooterComponent>
</template>

<style scoped>

</style>

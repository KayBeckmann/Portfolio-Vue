<template>
    <div class="content">
        <MenuComponent></MenuComponent>
        <RouterView></RouterView>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import MenuComponent from './components/MenuComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<style scoped>
.content{
    display:flex;
    flex-direction: column;
    width: 97dvw;
}
</style>

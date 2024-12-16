<template>
    <h2>{{ currentMessages.aboutMe.title }}</h2>
<div>
    {{ currentMessages.aboutMe.description }}
</div>
<div>
    <div>
        Bulb
        {{ currentMessages.aboutMe.skill1 }}
    </div>

    <div>
        Piece of puzzle
        {{ currentMessages.aboutMe.skill2 }}
    </div>
</div>
</template>

<script setup lang="js">
import { useLanguageStore } from '../stores/language';

const { currentMessages } = useLanguageStore(); 
</script>
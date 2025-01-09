<template>
  <div class="skill-card">
    <img :src="getImageUrl(skill.img)" :alt="skill.title">
    <p>{{ skill.title }}</p>
  </div>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true
  }
});

// Dynamische Funktion zum Auflösen des Bildpfads
const getImageUrl = (img) => {
  return new URL(`../assets/icons/${img}`, import.meta.url).href;
};
</script>

<style scoped>
.skill-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 15px;
  max-width: 120px;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skill-card:hover {
  border: 5px solid #00f7f7;
  margin: 6px 0;
}
</style>

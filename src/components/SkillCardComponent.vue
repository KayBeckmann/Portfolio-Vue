<template>
  <div class="skill-card">
    <img :src="getImageUrl(skill.img)" :alt="skill.title" class="icon">
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
  padding: 20px;
  margin: 10px 0;
  max-width: 120px;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
}

.skill-card:hover {
  border: 1px solid var(--highlightg-color);
  border-radius: var(--radius);
  margin: 6px 0px;
}

.icon {
  transition: transform 0.3s ease-in-out;
}

.skill-card:hover .icon {
  animation: jump 0.5s ease-in-out;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(5px);
  }
  70% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

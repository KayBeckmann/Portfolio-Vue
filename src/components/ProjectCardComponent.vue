<template>
  <div class="project-card">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <a :href="project.url" target="_blank" rel="noopener noreferrer">Mehr erfahren</a>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.project-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
}

.project-card:hover {
  border: 5px solid #00f7f7;
  padding: 20px;
  margin: 6px 0;
}
</style>

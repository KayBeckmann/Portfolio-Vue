<template>
<div class="content">
  <a href="https://github.com/KayBeckmann?tab=repositories" target="_blank">
    <img src="../assets/icons/github.png" alt="Github" />
  </a>

  <a href="mailto:contact@kay-beckmann.com">
    <img src="../assets/icons/mail.png" alt="Mail" />
  </a>

  <a href="http://www.linkedin.com/in/kay-beckmann-71a602109" target="_blank">
    <img src="../assets/icons/linkedin.png" alt="LinkedIn" />
  </a>
</div>
</template>

<script setup></script>

<style lang="css" scoped>
.content {
  display: flex;
  justify-content: end;
  gap: 20px;
  margin-right: 25px;
}

img:hover {
  scale: 1.4;
}

@media (max-width: 700px) {
  .content {
    margin-right: 0;
  }
}

</style>

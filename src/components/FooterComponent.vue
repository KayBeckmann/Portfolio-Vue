<template>
  <div class="wrapper">
    <div class="left content">
      <h1>Ka<span class="coloriezed">y</span></h1>
      <div class="pointer">Impressum</div>
      <div class="pointer">DSGVO</div>
    </div>
    <div class="middle content text">&copy; Kay Beckmann 2025</div>
    <div class="right">
      <SocialmediaComponent></SocialmediaComponent>
    </div>
  </div>
</template>

<script setup>
import SocialmediaComponent from './SocialmediaComponent.vue';
</script>

<style lang="css" scoped>
.wrapper {
  border-top: 2px solid var(--highlightg-color);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 280px;
  width: 100dvw;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: var(--margin);
}
h1 {
  font-size: clamp(2.4rem, 1.7rem + 3.73vw, 4.5rem);
  margin-bottom: 10px;
}

.middle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  display: flex;
  justify-content: end;
  align-items: center;
  margin:var(--margin)
}

@media (max-width: 700px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
  .left {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    margin: 0;
  }
  img {
    width: 70%;
    height: auto;
  }

  .middle {
    text-align: center;
  }

  .right {
    display: flex;
    justify-content: center;
    margin-right: 0;
  }
}
</style>

<template>
  <div class="wrapper">
    <div class="left">
      <h2>{{ currentMessages.menu.about }}</h2>
      <div>
        {{ currentMessages.aboutMe.description }}
      </div>
      <div>
        <div class="line">
          <img class="zoom" src="../assets/img/bulb.png" />
          {{ currentMessages.aboutMe.skill1 }}
        </div>

        <div class="line">
          <img class="zoom" src="../assets/img/puzzle.png" />
          {{ currentMessages.aboutMe.skill2 }}
        </div>
      </div>
    </div>
    <div class="right">
      <img class="profilimg" src="../assets/img/profil4.png" />
    </div>
  </div>
</template>

<script setup lang="js">
import { useLanguageStore } from '../stores/language';

const { currentMessages } = useLanguageStore();
</script>

<style lang="css" scoped>
.wrapper {
  width: 100dvw;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: var(--margin);
}

.left {
  display: flex;
  flex-direction: column;
  gap: var(--margin);
}

.right{
  display: flex;
  align-items: center;
  justify-content: center;
}

.line {
  display: flex;
  gap: var(--margin);
  margin-bottom: var(--margin);
}

.zoom {
  height: 40px;
  width: auto;
  transition: all 0.2s ease-in-out;
}

.zoom:hover {
  transform: scale(1.5);
}

.profilimg {
  width: 95%;
  background-image: url(../assets/img/shadow_3.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

@media screen and (max-width: 750px) {
  .wrapper{
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>

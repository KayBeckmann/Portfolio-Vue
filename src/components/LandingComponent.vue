<template>
<div class="backgrounds">
  <img class="background left" src="../assets/img/shadow_1.png" alt="" />
  <img class="background right" src="../assets/img/shadow_2.png" alt="" />
</div>
<div class="wrapper-landing">
  <div class="content">
    <!-- <div class="senkrecht"> -->
      <!-- <h1>{{ currentMessages.landingPage.intro }}</h1> -->
    <!-- </div> -->
    <div class="headline">
      <h1>{{ currentMessages.landingPage.title }}</h1>
      <h2>{{ currentMessages.landingPage.subtitle }}</h2>
    </div>
  </div>

  <button
    class="primary">
    Let's talk!
  </button>
</div>
<div class="footer">
  <div class="footer-left">
    <hr />
    <SocialmediaComponent></SocialmediaComponent>
  </div>
  <div class="footer-right pointer">
    Scroll down
    <img class="arrow" src="../assets/icons/arrow.png" alt="->" />
  </div>
</div>

</template>

<script setup lang="js">
import { useLanguageStore } from '../stores/language';
import SocialmediaComponent from './SocialmediaComponent.vue';

const { currentMessages } = useLanguageStore();
</script>

<style lang="scss" scoped>
.backgrounds {
  overflow-x: hidden;
}

.wrapper-landing {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .senkrecht {
    transform: rotate(-90deg);
    font-size: clamp(0.6rem, -0.273rem + 4.36vw, 3rem);
  }
}

.headline {
  h1 {
    font-size: clamp(1rem, -1.545rem + 12.73vw, 8rem);
    margin: 0;
  }
  h2 {
    background: -webkit-linear-gradient(0deg, #1cdae6, #4b47ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: clamp(1rem, -0.091rem + 5.45vw, 4rem);
    margin: 0;
  }
}

.backgrounds {
  overflow: hidden;
}

.background {
  z-index: -4;
  position: absolute;
  height: 90%;
  top: 15%;
}

.left {
  left: -250px;
}

.right {
  right: -400px;
}

.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-left {
  display: flex;

  hr {
    width: 6dvw;
    margin-right: 15px;
  }
}

.footer-right {
  margin-bottom: 70px;
  font-size: 1.2rem;
  transform: rotate(90deg);
  color: white;

  img {
    margin-left: 5px;
    transform: rotate(-90deg);
  }
}

</style>

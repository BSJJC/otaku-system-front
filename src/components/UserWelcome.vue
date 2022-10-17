<template>
  <div class="main-router-view" :class="animates">
    <ConfigCenter></ConfigCenter>
    <h1>welcome welcome</h1>

    <el-button @click="toLogIn"> log in </el-button>

    <BackgroundImg opacity="10"></BackgroundImg>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import BackgroundImg from "./BackgroundImg.vue";
import ConfigCenter from "./ConfigCenter.vue";
import router from "@/router";

const animates = reactive({
  slide: false,
});

const toLogIn = () => {
  animates.slide = true;
  setTimeout(() => {
    router.push("LogIn");
  }, 500);
};
</script>

<style lang="less" scoped>
.slide {
  animation: slide 0.5s ease-in-out forwards;
  height: 100vh;
}

@keyframes slide {
  to {
    transform: translateX(-100%);
  }
}
</style>

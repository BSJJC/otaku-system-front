<template>
  <div class="main-router-view">
    <BackgroundImg opacity="1"></BackgroundImg>
  </div>
</template>

<script setup>
import BackgroundImg from "./BackgroundImg.vue";
import { useStore } from "vuex";
const store = useStore();

console.log(store);
</script>

<style lang="less" scoped></style>

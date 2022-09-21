<template>
  <div class="main-router-view">
    <h1>user main</h1>

    <router-link to="/" @click="store.commit('appModule/mainRouterViewChange')">
      <el-button> back to top </el-button>
    </router-link>

    <BackgroundImg opacity="10"></BackgroundImg>
  </div>
</template>

<script setup>
import BackgroundImg from "./BackgroundImg.vue";
import { useStore } from "vuex";
const store = useStore();

</script>

<style lang="less" scoped></style>

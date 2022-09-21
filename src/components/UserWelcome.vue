<template>
  <div class="main-router-view">
    <h1>welcome welcome</h1>

    <router-link
      to="LogIn"
      @click="store.commit('appModule/mainRouterViewChange')"
    >
      <el-button> log in </el-button>
    </router-link>

    <BackgroundImg opacity="7"></BackgroundImg>
  </div>
</template>

<script setup>
import BackgroundImg from "./BackgroundImg.vue";
import { useStore } from "vuex";
const store = useStore();
</script>

<style lang="less" scoped></style>

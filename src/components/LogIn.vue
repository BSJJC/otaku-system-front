<template>
  <div class="main-router-view">
    <h1>log in page</h1>

    <router-link
      to="/UserMain"
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

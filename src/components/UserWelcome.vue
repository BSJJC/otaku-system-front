<template>
  <ConfigCenter></ConfigCenter>

  <div class="main-router-view">
    <h1>welcome welcome</h1>

    <router-link
      to="LogIn"
      @click="store.commit('appModule/mainRouterViewChange')"
    >
      <el-button> log in </el-button>
    </router-link>

    <BackgroundImg opacity="10"></BackgroundImg>
  </div>
</template>

<script setup>
import BackgroundImg from "./BackgroundImg.vue";
import { useStore } from "vuex";
import ConfigCenter from "./ConfigCenter.vue";
const store = useStore();
</script>

<style lang="less" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

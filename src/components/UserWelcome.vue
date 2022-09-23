<template>
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
const store = useStore();
</script>

<style lang="less" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>

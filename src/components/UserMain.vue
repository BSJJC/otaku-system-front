<template>
  <div class="main-router-view">
    <UserInfo></UserInfo>

    <router-view></router-view>

    <BackgroundImg opacity="1"></BackgroundImg>
  </div>
</template>

<script setup>
import BackgroundImg from "./BackgroundImg.vue";
import { useStore } from "vuex";
import UserInfo from "../views/UserMain/UserInfo.vue";
const store = useStore();

console.log(store);
</script>

<style lang="less" scoped>
.main-router-view {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>

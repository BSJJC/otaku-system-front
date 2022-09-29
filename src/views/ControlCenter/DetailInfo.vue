<template>
  <div :class="store.state.controlCenterModule.controlCenterClasses">
    <el-button @click="back">back</el-button>
  </div>
</template>

<script setup>
import router from "@/router";
import { useStore } from "vuex";

const store = useStore();

const back = () => {
  store.state.controlCenterModule.controlCenterClasses.splice(1, 1);
  store.state.controlCenterModule.controlCenterClasses.push("detail-info-out");
  store.state.appModule.mainRouterViewClasses.push("main-router-view-in");

  setTimeout(() => {
    store.state.appModule.mainRouterViewClasses.splice(1, 2);
    store.state.controlCenterModule.controlCenterClasses.splice(1, 1);

    router.back();
  }, 500);
};
</script>

<style lang="less" scoped>
.detail-info {
  flex-direction: column;
}
</style>

<template>
  <TopBar> </TopBar>

  <router-view class="animate__bounceIn animate__bounceIn"> </router-view>
</template>

<script setup>
import TopBar from "./components/TopBar.vue";
import { useStore } from "vuex";

const store = useStore();
store.commit("test");
</script>

<style lang="less" scoped>
@import url("./styles/base.css");
</style>

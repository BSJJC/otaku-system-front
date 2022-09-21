<template>
  <TopBar> </TopBar>
  <button @click="store.commit('appModule/mainRouterViewChange')">test</button>
  {{ store.state.appModule.mainRouterViewTransformAnimate }}

  <router-view :class="store.state.appModule.mainRouterViewTransformAnimate">
  </router-view>
</template>

<script setup>
import TopBar from "./components/TopBar.vue";
import { getAnimates } from "./hooks/useAnimates.js";

import { useStore } from "vuex";

getAnimates();
const store = useStore();
</script>

<style lang="less" scoped>
@import url("./styles/base.css");
</style>

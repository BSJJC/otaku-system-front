<template>
  <router-view :class="store.state.appModule.mainRouterViewTransformAnimate">
  </router-view>
</template>

<script setup>
import { getAnimates } from "./hooks/useAnimates.js";

import { useStore } from "vuex";

getAnimates();
const store = useStore();
</script>

<style lang="less" scoped>
@import url("./styles/base.css");
</style>

<template>
  <router-view
    :class="store.state.appModule.transiformAnimate"
  >
  </router-view>
</template>

<script setup>
import { getAnimates } from "./hooks/useAnimates.js";

import { useStore } from "vuex";

getAnimates();
const store = useStore();
</script>

<style lang="less">
.animate__animated {
  --animate-duration: 0.5s;
  transition: all ease-in-out;
}

* {
  -webkit-user-drag: none;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0px;
  overflow: hidden;
}

.main-router-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: calc(100vh - 50px);

  & > * {
    z-index: 5;
  }
}
</style>

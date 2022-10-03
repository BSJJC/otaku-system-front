<template>
  <div :class="store.state.appModule.mainRouterViewClasses">
    <transition name="control-center-container">
      <div
        class="control-center"
        v-show="store.state.controlCenterModule.controlCenterShow"
      >
        <InfoOverview></InfoOverview>
        <TeamOverview></TeamOverview>
      </div>
    </transition>

    <router-view
      v-slot="{ Component }"
      v-show="!store.state.controlCenterModule.controlCenterShow"
      class="detail-info"
    >
      <transition name="router-container">
        <component :is="Component" />
      </transition>
    </router-view>

    <BackgroundImg opacity="5"></BackgroundImg>
  </div>
</template>
<script setup>
import BackgroundImg from "./BackgroundImg.vue";
import InfoOverview from "@/views/ControlCenter/InfoOverview.vue";
import TeamOverview from "@/views/ControlCenter/TeamOverview.vue";

import { useStore } from "vuex";
const store = useStore();
</script>

<style lang="less" scoped>
.control-center {
  width: 90vw;
  height: 100vh;
}

.control-center-container-enter-to,
.control-center-container-leave-from {
  transition: all 0.5s ease-in-out;
  transform: scale(1);
  transform-origin: top;
  height: 100vh;
}

.control-center-container-enter-from,
.control-center-container-leave-to {
  transition: all 0.5s ease-in-out;
  transform: scale(0);
  transform-origin: top;
  height: 0px;
}

.router-container-enter-to,
.router-container-leave-from {
  transition: all 0.5s ease-in-out;
  transform: scale(1);
  transform-origin: bottom;
  height: 100vh;
}

.router-container-enter-from,
.router-container-leave-to {
  transition: all 0.5s ease-in-out;
  transform: scale(0);
  transform-origin: bottom;
  height: 0px;
}

.info-overview {
  width: 90vw;
  height: 60vh;
}

.team-overview {
  width: 90vw;
  height: 40vh;
}
</style>

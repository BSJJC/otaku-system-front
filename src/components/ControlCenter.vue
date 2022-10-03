<template>
  <div :class="store.state.appModule.mainRouterViewClasses">
    <el-button @click="store.commit(`controlCenterModule/change`)">
      test
    </el-button>
    <transition name="control-center-container">
      <div
        class="control-center"
        v-show="store.state.controlCenterModule.controlCenterShow"
      >
        <InfoOverview></InfoOverview>
        <TeamOverview></TeamOverview>
      </div>
    </transition>
    <router-view :class="store.state.controlCenterModule.controlCenterClasses">
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
  width: 90%;
  height: 100%;
}

.control-center-container-enter-to,
.control-center-container-leave-from {
  transition: all 0.5s ease-in-out;
  opacity: 1;
}

.control-center-container-enter-from,
.control-center-container-leave-to {
  transition: all 0.5s ease-in-out;
  opacity: 0;
}

.info-overview {
  width: 90vw;
  height: 60vh;
}

.team-overview {
  width: 90vw;
  height: 40vh;
}

.detail-info {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div :class="store.state.appModule.mainRouterViewClasses">
    <transition name="control-center-container">
      <div
        class="control-center"
        v-show="store.state.controlCenterModule.controlCenterShow"
      >
        <el-button @click="store.commit(`controlCenterModule/change`)"
          >button</el-button
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
.main-router-view {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .control-center {
    width: 90%;
    height: 100%;
    background: rgba(255, 0, 0, 0.362);
  }

  .control-center-container-enter-to,
  .control-center-container-leave-from {
    background: lightgreen;
  }

  .control-center-container-enter-from,
  .control-center-container-leave-to {
    background: lightgreen;
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
}
</style>

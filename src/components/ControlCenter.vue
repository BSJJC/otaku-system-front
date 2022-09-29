<template>
  <div :class="store.state.appModule.mainRouterViewClasses">
    <InfoOverview></InfoOverview>
    <TeamOverview></TeamOverview>

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
  transition: all 1s ease-in-out;

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

  .detail-info-in {
    animation: detail-info-in 0.5s ease-in-out forwards;
  }

  @keyframes detail-info-in {
    0% {
      height: 0px;
      width: 0px;
      opacity: 0;
    }

    100% {
      height: 100vh;
      width: 90vw;
      opacity: 1;
    }
  }

  .detail-info-out {
    animation: detail-info-out 0.5s ease-in-out;
  }

  @keyframes detail-info-out {
    0% {
      height: 100vh;
      width: 90vw;
      opacity: 1;
    }

    100% {
      height: 0px;
      width: 0px;
      opacity: 0;
    }
  }

  &.main-router-view-hide {
    .info-overview,
    .team-overview {
      width: 0px;
      height: 0px;
      opacity: 0;
      user-select: none;
      z-index: -10;
      overflow: hidden;
      border-radius: 30px;
      transition: all 0.5s ease-in-out;

      & > * {
        width: 0px;
        height: 0px;
        opacity: 0;
        user-select: none;
        z-index: -10;
        border-radius: 30px;
        transition: al 0.5sl ease-in-out;
      }
    }
  }

  &.main-router-view-in {
    .info-overview {
      width: 90vw;
      height: 60vh;
      opacity: 1;
      user-select: auto;
      z-index: 5;
      overflow: hidden;
      border-radius: 0px;
      transition: all 0.5s ease-in-out;
    }

    .team-overview {
      width: 90vw;
      height: 40vh;
      opacity: 1;
      user-select: auto;
      z-index: 5;
      overflow: hidden;
      border-radius: 0px;
      transition: all 0.5s ease-in-out;
    }
  }
}
</style>

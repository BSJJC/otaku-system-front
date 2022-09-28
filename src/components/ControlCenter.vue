<template>
  <div class="main-router-view">
    <InfoOverview></InfoOverview>
    <TeamOverview></TeamOverview>

    <BackgroundImg opacity="5"></BackgroundImg>
  </div>
</template>
<script setup>
import BackgroundImg from "./BackgroundImg.vue";
import InfoOverview from "@/views/ControlCenter/InfoOverview.vue";
import TeamOverview from "@/views/ControlCenter/TeamOverview.vue";
</script>

<style lang="less" scoped>
.main-router-view {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  transition: all 0.5s ease-in-out;

  .info-overview {
    width: 90vw;
    height: 60vh;
  }

  .team-overview {
    width: 90vw;
    height: 40vh;
  }
}
</style>

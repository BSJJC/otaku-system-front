<template>
  <div class="main-router-view">
    <InfoOverview></InfoOverview>
    <TeamOverview></TeamOverview>

    <router-view></router-view>

    <BackgroundImg opacity="1"></BackgroundImg>
  </div>
</template>
<script setup>
import BackgroundImg from "./BackgroundImg.vue";
import { useStore } from "vuex";
import InfoOverview from "@/views/ControlCenter/InfoOverview.vue";
import TeamOverview from "@/views/ControlCenter/TeamOverview.vue";

const store = useStore();
console.log(store);
</script>

<style lang="less" scoped>
.main-router-view {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>

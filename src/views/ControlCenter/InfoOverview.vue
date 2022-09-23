<template>
  <div class="info-overview">
    <PersonalInfo></PersonalInfo>
    <ScheduleCard></ScheduleCard>
  </div>
</template>

<script setup>
import PersonalInfo from "./PersonalInfo.vue";
import ScheduleCard from "./ScheduleCard.vue";
</script>

<style lang="less" scoped>
.info-overview {
  opacity: 0.5;
  width: 90vw;
  height: 60vh;
  background: lightblue;
}
</style>

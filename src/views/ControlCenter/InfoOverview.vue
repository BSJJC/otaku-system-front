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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

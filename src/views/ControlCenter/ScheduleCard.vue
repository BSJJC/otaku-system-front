<template>
  <div class="schedule-card">
    <TimeLine></TimeLine>
    <CalendarCard></CalendarCard>
  </div>
</template>

<script setup>
import CalendarCard from "./CalendarCard.vue";
import TimeLine from "./TimeLine.vue";
</script>

<style lang="less" scoped>
.schedule-card {
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0px;
  width: 50%;
  height: 80%;
  background: rgba(0, 0, 255, 0.425);
}
</style>

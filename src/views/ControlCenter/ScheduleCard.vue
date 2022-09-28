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

  .time-line {
    width: calc(30% - 20px);
    height: calc(100% - 20px);
  }

  .calendar-card {
    width: 70%;
    height: 100%;
  }
}
</style>

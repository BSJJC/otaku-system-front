<template>
  <div class="team-overview">
    <PositionCard v-for="(i, index) in positions" :key="index">
      <template #positionName>
        <h2>{{ i }}</h2>
      </template>
    </PositionCard>
  </div>
</template>

<script setup>
import PositionCard from "./PositionCard.vue";

let positions = ["UI", "前端", "后端", "移动端", "运维", "QA"];
</script>

<style lang="less" scoped>
.team-overview {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  user-select: none;
}
</style>

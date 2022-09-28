<template>
  <div class="team-overview">
    <PositionCard v-for="(i, index) in 6" :key="index">
      <template #positionCount>
        <h2>position {{ i }}</h2>
      </template>
    </PositionCard>
  </div>
</template>

<script setup>
import PositionCard from "./PositionCard.vue";
</script>

<style lang="less" scoped>
.team-overview {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  background: lightcoral;
  flex-wrap: wrap;
}
</style>

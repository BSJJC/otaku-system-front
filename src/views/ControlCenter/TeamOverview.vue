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
  opacity: 0.5;
  width: 90vw;
  height: 40vh;
  background: lightcoral;
  flex-wrap: wrap;
}
</style>

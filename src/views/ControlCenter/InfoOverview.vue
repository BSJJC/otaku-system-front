<template>
  <div class="info-overview">
    <AvatarInfo>Avatar Info</AvatarInfo>
    <DatePlan></DatePlan>
  </div>
</template>

<script setup>
import AvatarInfo from "./AvatarInfo.vue";
import DatePlan from "./DatePlan.vue";
</script>

<style lang="less" scoped>
.info-overview {
  opacity: 0.5;
  width: 90vw;
  height: 60vh;
  background: lightblue;
}
</style>

<template>
  <div class="user-info-card">
    <div class="top">
      <AvatarInfo></AvatarInfo>
      <TimeLine></TimeLine>
    </div>
    <div class="bottom">
      <PositionCard v-for="(i, index) in 6" :key="index"></PositionCard>
    </div>
  </div>
</template>

<script setup>
import AvatarInfo from "./AvatarInfo.vue";
import TimeLine from "./TimeLine.vue";
import PositionCard from "./PositionCard.vue";
</script>

<style lang="less" scoped>
.user-info-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90vw;
  height: 100vh;
  background: lightcoral;
  opacity: 0.3;
}

.top {
  width: 100%;
  height: 60%;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom {
  width: 100%;
  height: 40%;
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>

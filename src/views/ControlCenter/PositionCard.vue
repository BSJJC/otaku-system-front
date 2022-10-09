<template>
  <div class="position-card" @click="show">
    <slot name="positionName"></slot>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const show = () => {
  store.commit(`controlCenterModule/change`);
};
</script>

<style lang="less" scoped>
.position-card {
  width: calc(100% / 3);
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 3px 3px 3px black;
  cursor: pointer;
}
</style>

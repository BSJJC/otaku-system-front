<template>
  <div :class="store.state.controlCenterModule.controlCenterClasses">
    <el-button @click="store.commit(`controlCenterModule/change`)">
      back
    </el-button>
    <slot name="ppp"></slot>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<style lang="less" scoped>
.detail-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90vw;
  height: 100vh;
  background: rgba(173, 216, 230, 0.579);
}
</style>

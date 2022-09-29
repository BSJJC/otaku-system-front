<template>
  <div class="message-card">
    <el-badge :value="12" class="item">
      <el-button @click="test">comments</el-button>
    </el-badge>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const test = () => {
  store.commit("controlCenterModule/change");
};
</script>

<style lang="less" scoped>
:deep(.el-badge) {
  margin: 20px;
}
</style>

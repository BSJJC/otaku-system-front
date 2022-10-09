<template>
  <div v-for="(i, index) in props.data" :key="index">
    <el-checkbox
      :checked="i.finished"
      size="large"
      disabled
      :style="{ transform: `translateX(${i.level * 100}px)` }"
    >
      {{ i.title }}
    </el-checkbox>
    <div v-if="i.chidren">
      <TodoRecursion :data="i.chidren"> </TodoRecursion>
    </div>
  </div>
</template>

<script setup>
import TodoRecursion from "./TodoRecursion.vue";

import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="less" scoped>
:deep(.el-checkbox__label) {
  color: rgb(49, 49, 49) !important;
  font-size: 20px !important;
}

:deep(.el-checkbox__inner) {
  background: white !important;
}
</style>

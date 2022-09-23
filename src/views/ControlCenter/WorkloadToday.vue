<template>
  <div class="workload-today">
    <el-scrollbar class="bar">
      <p v-for="(i, index) in 20" :key="index">{{ i }}</p>
    </el-scrollbar>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.workload-today {
  width: 60%;
  height: 100%;
  background-color: rgb(35, 171, 255);
  flex-direction: column;
}
</style>

<template>
  <div class="workload-today">
    <el-scrollbar height="400px">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </el-scrollbar>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.workload-today {
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  width: 60%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(35, 171, 255);

  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
  }
}
</style>

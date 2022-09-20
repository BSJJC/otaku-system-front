<template>
  <div class="main-router-view">
    <h1>user main</h1>

    <router-link to="/">
      <el-button> back to top </el-button>
    </router-link>

    <BackgroundImg opacity="7"></BackgroundImg>
  </div>
</template>

<script setup>
import BackgroundImg from "./BackgroundImg.vue";
</script>

<style lang="less" scoped></style>

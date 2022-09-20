<template>
  <div class="main-router-view">
    <h1>log in page</h1>
    <router-link to="/UserMain">
      <el-button> log in </el-button>
    </router-link>

    <BackgroundImg input-length="10"></BackgroundImg>
  </div>
</template>

<script setup>
import BackgroundImg from "./BackgroundImg.vue";
</script>

<style lang="less" scoped></style>

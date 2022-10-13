<template>
  <div class="main-router-view">
    <ConfigCenter></ConfigCenter>
    <h1>welcome welcome</h1>

    <router-link to="LogIn">
      <el-button> log in </el-button>
    </router-link>

    <BackgroundImg opacity="10"></BackgroundImg>
  </div>
</template>

<script setup>
import BackgroundImg from "./BackgroundImg.vue";
import ConfigCenter from "./ConfigCenter.vue";
</script>

<style lang="less" scoped></style>

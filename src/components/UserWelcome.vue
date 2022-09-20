<template>
  <div class="main-router-view">
    <h1>welcome welcome</h1>

    <router-link to="LogIn">
      <el-button> log in </el-button>
    </router-link>

    <BackgroundImg></BackgroundImg>
  </div>
</template>

<script setup>
import BackgroundImg from "./BackgroundImg.vue";
</script>

<style lang="less" scoped></style>

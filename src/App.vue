<template>
  <TopBar> </TopBar>

  <router-view> </router-view>
</template>

<script setup>
import TopBar from "./components/TopBar.vue";
</script>

<style lang="less" scoped>
@import url("./styles/base.css");
</style>

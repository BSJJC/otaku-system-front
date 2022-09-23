<template>
  <div @click="test">postion card</div>
</template>

<script setup>
const { default: router } = require("@/router");

const test = () => {
  router.push("test");
};
</script>

<style lang="less" scoped>
div {
  width: calc(100% / 3);
  height: 50%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

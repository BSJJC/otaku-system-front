<template>
  <div :style="{ 'background-image': randomImg, opacity: verOpacity }"></div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps(["inputLength"]);

const randomImg = computed(() => {
  /**
   * do something
   */
  return `url(${require("../assets/img/1.png")})`;
});

const verOpacity = computed(() => {
  console.log(props.inputLength);
  return 0.5;
});
</script>

<style lang="less" scoped>
div {
  position: absolute;
  width: 100vw;
  height: calc(100vh - 50px);
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  z-index: 1;
}
</style>

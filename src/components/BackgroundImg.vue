<template>
  <div :style="{ 'background-image': randomImg, opacity: verOpacity }"></div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps(["opacity"]);

const randomImg = computed(() => {
  /**
   * do something
   */
  return `url(${require("../assets/img/3.png")})`;
});

const verOpacity = computed(() => {
  return parseInt(props.opacity) / 10;
});
</script>

<style lang="less" scoped>
div {
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100vh;
  border-radius: 10%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  z-index: 1;
}
</style>

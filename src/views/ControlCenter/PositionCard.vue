<template>
  <div class="position-card">
    <slot name="positionCount"></slot>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.position-card {
  width: calc(100% / 3);
  height: 50%;
  background: rgba(255, 0, 0, 0.416);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

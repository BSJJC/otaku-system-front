<template>
  <div class="top-bar-container">top bar</div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style lang="less" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-bar-container {
  width: 100vw;
  min-height: 50px;
  background: lightcoral;
}
</style>

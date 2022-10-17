<template>
  <router-view class="main-router-view"> </router-view>
</template>

<script setup></script>

<style lang="less">
* {
  -webkit-user-drag: none;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0px;
  overflow: hidden;
}

.main-router-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: calc(100vh - 50px);

  & > * {
    z-index: 5;
  }
}
</style>

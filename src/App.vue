<template>
  <!-- <TestPage></TestPage> -->
  <TopBar></TopBar>
</template>

<script>
import TopBar from "./components/TopBar.vue";
// import TestPage from "./components/TestPage.vue";

export default {
  name: "App",
  components: {
    // TestPage,
    TopBar,
  },
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
}
</style>

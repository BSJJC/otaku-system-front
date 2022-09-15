<template>
  <!-- <TestPage></TestPage> -->
  <InformationCard></InformationCard>
</template>

<script>
// import TestPage from "./components/TestPage.vue";
import InformationCard from "./components/InformationCard.vue";

export default {
  name: "App",
  components: {
    // TestPage,
    InformationCard,
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

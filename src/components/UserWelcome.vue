<template>
  <div class="main-router-view">
    <h1>welcome welcome</h1>

    <router-link to="LogIn">
      <el-button> log in </el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
};
</script>

<style lang="less" scoped>
.main-router-view {
  background-color: lightblue;
}
</style>

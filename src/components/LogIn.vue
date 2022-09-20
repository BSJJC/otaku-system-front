<template>
  <div class="main-touer-view">
    <p>log in page</p>

    <router-link to="/UserMain">
      <el-button> log in </el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "LogIn",
};
</script>

<style lang="less" scoped>
  .mian-router-view{
    background-color: red;
  }
</style>

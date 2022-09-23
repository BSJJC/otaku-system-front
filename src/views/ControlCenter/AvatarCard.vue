<template>
  <div class="avatar-card">
    <div class="avatar-img">
      <el-image :src="avatarUrl">
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image>
    </div>
    <div class="configs">configs</div>
  </div>
</template>

<script setup>
const avatarUrl = "https://api.yimian.xyz/img?type=head";
</script>

<style lang="less" scoped>
* {
  transition: all 0.3s ease-in-out;
}

.avatar-card {
  width: 50%;
  height: 100%;
  flex-direction: column;
  background-color: lightpink;

  .avatar-img {
    width: 200px;
    height: 200px;

    > * {
      width: 100%;
      height: 100%;
      border-radius: 10%;
    }
  }

  .configs {
    width: 100%;
    height: 0px;
    background: lightslategrey;
  }

  &:hover {
    .avatar-img {
      width: 150px;
      height: 150px;

      > * {
        border-radius: 50%;
      }
    }
  }
}
</style>

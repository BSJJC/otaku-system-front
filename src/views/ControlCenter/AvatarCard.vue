<template>
  <div class="avatar-card">
    <div class="avatar-img">
      <el-image :src="avatarUrl">
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image>
    </div>
    <div class="configs">
      <el-button>个人中心</el-button>
      <el-button>编辑资料</el-button>
      <el-button>退出登录</el-button>
    </div>
  </div>
</template>

<script setup>
const avatarUrl = "https://api.yimian.xyz/img?type=head";
</script>

<style lang="less" scoped>
* {
  transition: all 0.2s ease-in-out;
}

.avatar-card {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30%;
  height: 100%;
  flex-direction: column;

  .avatar-img {
    width: 150px;
    height: 150px;
    z-index: 10;

    > * {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .configs {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 3em;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    flex-direction: column;

    button {
      width: calc(100% / 3);
      opacity: 0;
    }
  }

  &:hover {
    .avatar-img {
      width: 120px;
      height: 120px;
      transform: translateY(-55px);

      > * {
        border-radius: 50%;
      }
    }

    .configs {
      bottom: 3.5em;
      height: 10px;
      width: 100%;
      border-radius: 0px;

      button {
        opacity: 1;
        width: 80%;
        height: 25px;
        margin: 0px;
        margin-bottom: 2px;
      }
    }
  }
}
</style>

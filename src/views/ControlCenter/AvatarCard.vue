<template>
  <div class="avatar-card">
    <div class="avatar-img">
      <el-image :src="avatarUrl">
        <template #placeholder>
          <div class="image-slot">
            {{ $t("message.loading") }}<span class="dot">...</span>
          </div>
        </template>
      </el-image>
    </div>
    <div class="configs">
      <el-button>退出登录</el-button>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

console.log(t);
const avatarUrl = "https://api.yimian.xyz/img?type=head&a:Math.random()";
</script>

<style lang="less" scoped>
* {
  transition: all 0.2s ease-in-out;
}

.avatar-card {
  display: flex;
  justify-content: flex-start;
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
    width: 0%;
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

      > * {
        border-radius: 50%;
      }
    }

    .configs {
      bottom: 5em;
      height: 10px;
      width: 100%;
      border-radius: 0px;

      button {
        opacity: 1;
        width: 80%;
        height: 25px;
        margin: 0px;
      }
    }
  }
}
</style>

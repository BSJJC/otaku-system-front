<template>
  <div>
    <el-container>
      <el-header class="header">
        <div
          class="backBtn"
          @click="store.commit(`controlCenterModule/change`)"
        >
          <el-icon class="arrow">
            <ArrowDownBold />
          </el-icon>
        </div>
      </el-header>
      <el-main class="main">
        <div class="staffInfo">
          <el-avatar
            :size="150"
            src="https://api.yimian.xyz/img?type=head&b:Math.random()"
            style="margin-top: 40px"
          >
            <img
              src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
            />
          </el-avatar>

          <el-form label-width="40px" style="margin-top: 20px">
            <el-form-item label="name">{{ info.name }}</el-form-item>
            <el-form-item label="position">{{ info.position }}</el-form-item>
          </el-form>

          <div class="contactWay">
            <a
              :href="i.hyperlink"
              target="blank"
              v-for="(i, index) in info.contactInfo"
              :key="index"
            >
              <el-image
                :src="i.logoLink"
                fit="contain"
                style="width: 30px; height: 30px; margin-left: 20px"
              />
            </a>
          </div>
        </div>

        <div class="staffProgress">
          <TodoRecursion :data="info.workProgress"> </TodoRecursion>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import TodoRecursion from "./TodoRecursion.vue";

const store = useStore();

const info = store.state.positionDetailModule.info;

// :style="{ transform: `translateX(${i.level * 100}px)` }"
</script>

<style lang="less" scoped>
.detail-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90vw;
  height: 100vh;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 30px;

    .backBtn {
      padding: 5px 10px 0px;
      overflow: hidden;

      &:hover {
        cursor: pointer;
      }

      .arrow {
        color: black;
        animation: arrowRoll 0.8s linear infinite;
      }

      @keyframes arrowRoll {
        from {
          transform: translateY(-2em);
        }
        to {
          transform: translateY(40px);
        }
      }
    }
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: calc(100vh - 20px);
    padding: 0px;
    user-select: none;

    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
    }

    .staffInfo {
      width: 20%;
      height: 100%;
      flex-direction: column;
      justify-content: start;

      :deep(.el-form-item__label),
      :deep(.el-form-item__content) {
        font-size: 20px;
      }

      .contactWay {
        & > * {
          opacity: 0.5;
          transition: all 0.3s ease-in-out;

          &:hover {
            opacity: 1;
          }
        }
      }
    }

    .staffProgress {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 20px;
      width: calc(80% - 40px);
      height: calc(100% - 40px);
      overflow-x: hidden;
    }
  }
}
</style>

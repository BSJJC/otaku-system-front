<template>
  <div :class="store.state.controlCenterModule.controlCenterClasses">
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
            :size="100"
            src="https://api.yimian.xyz/img?type=head"
            @error="errorHandler"
          >
            <img
              src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
            />
          </el-avatar>
        </div>
        <div class="staffProgress">114514</div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const info = store.state.positionDetail.info;
console.log(info);
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
    background: rgba(240, 128, 128, 0.091);

    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .staffInfo {
      width: 20%;
      height: 100%;
      background: rgba(173, 216, 230, 0.174);
    }

    .staffProgress {
      width: 80%;
      height: 100%;
      background: rgba(211, 211, 211, 0.13);
    }
  }
}
</style>

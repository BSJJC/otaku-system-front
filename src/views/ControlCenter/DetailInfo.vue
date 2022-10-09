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
      <el-main class="main">Main</el-main>
    </el-container>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
console.log(store.state.positionDetail.info);
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
    height: auto;

    .backBtn {
      padding: 5px 10px 0px;
      overflow: hidden;

      &:hover {
        cursor: pointer;
      }

      .arrow {
        color: black;
        animation: arrowRoll 0.8s ease-in-out infinite;
      }

      @keyframes arrowRoll {
        from {
          transform: translateY(-2em);
        }
        to {
          transform: translateY(4em);
        }
      }
    }
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

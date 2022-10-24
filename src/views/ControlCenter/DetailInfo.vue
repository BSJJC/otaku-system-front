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

          <el-form label-width="100px" style="margin-top: 20px">
            <el-form-item :label="$t('message.memberInfo.name')">
              <!-- {{ store.state.detailInfoModule.info.name }} -->
              {{ data.name }}
            </el-form-item>
            <el-form-item :label="$t('message.memberInfo.position')">
              <!-- {{ store.state.detailInfoModule.info.position }} -->
              {{ data.position }}
            </el-form-item>
          </el-form>

          <div class="contactWay">
            <a
              :href="i.hyperlink"
              target="blank"
              v-for="(i, index) in data.contactInfo"
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

        <div class="staff-progress">
          <el-scrollbar height="100%">
            <TodoRecursion :data="data.workProgress"> </TodoRecursion>
          </el-scrollbar>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import TodoRecursion from "./TodoRecursion.vue";

const { t } = useI18n();
console.log(t);

const store = useStore();

store.commit("detailInfoModule/fetchInfo");

const data = reactive(store.state.detailInfoModule.info);

watch(
  () => store.state.detailInfoModule.info.workProgress,
  (newValue) => {
    console.log(data);
    console.log(newValue);
    // data.workProgress = newValue;
  },
  {
    deep: true,
  }
);
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

    & ~ div {
      position: absolute;
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

    .staff-progress {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: calc(100% - 40px);
      height: calc(100% - 40px);

      background: lightpink;
    }
  }
}

:deep(.is-horizontal) {
  display: none;
}
</style>

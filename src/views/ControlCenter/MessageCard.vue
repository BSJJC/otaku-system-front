<template>
  <div class="message-card">
    <el-badge
      v-for="(i, index) in msgs"
      :key="index"
      :type="index"
      :value="i.length"
      @click="shwoMsg(index)"
    >
      <el-button :type="index">
        {{ index }}
      </el-button>
    </el-badge>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const msgs = JSON.parse(sessionStorage.getItem("managerInfo")).msgs;

const shwoMsg = (index) => {
  store.commit(`controlCenterModule/change`, index);
};
</script>

<style lang="less" scoped>
:deep(.el-badge) {
  margin: 15px;
}
</style>

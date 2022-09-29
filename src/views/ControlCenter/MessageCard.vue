<template>
  <!-- <div class="message-card">
    <el-badge :value="msgs['primary'].length" type="primary">
      <el-button @click="test">primary</el-button>
    </el-badge>

    <el-badge :value="msgs['success'].length" type="success">
      <el-button>success</el-button>
    </el-badge>

    <el-badge :value="msgs['warning'].length" type="warning">
      <el-button>warning</el-button>
    </el-badge>

    <el-badge :value="msgs['danger'].length" type="danger">
      <el-button>danger</el-button>
    </el-badge>

    <el-badge :value="msgs['info'].length" type="info">
      <el-button>info</el-button>
    </el-badge>
  </div> -->
  <div class="message-card">
    <!-- <el-badge :value="msgs['primary'].length" type="primary">
      <el-button @click="test">primary</el-button>
    </el-badge> -->
    <el-badge
      v-for="(i, index) in msgs"
      :key="index"
      :type="index"
      :value="i.length"
      @click="test"
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

const test = () => {
  store.commit("controlCenterModule/change");
};
</script>

<style lang="less" scoped>
:deep(.el-badge) {
  margin: 15px;
}
</style>

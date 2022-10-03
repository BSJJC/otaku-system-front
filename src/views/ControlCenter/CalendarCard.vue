<template>
  <div class="calendar-card">
    <div class="calendar-configs">
      <el-button>本周</el-button>
      <el-button>周</el-button>
      <el-button>月</el-button>
      <el-button>年</el-button>
    </div>
    <div class="calendar-table">
      <transition-group name="nums">
        <div class="date-card" v-for="(i, index) in nums" :key="index">
          {{ i }}
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let nums = ref(7);
</script>

<style lang="less" scoped>
.calendar-card {
  background: lightblue;

  .calendar-configs {
    display: flex;
    justify-content: right;
    align-items: center;
    width: calc(100% - 20px);
    height: calc(20% - 20px);
    padding: 10px;
  }

  .calendar-table {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: calc(100% - 20px);
    height: calc(80% - 20px);
    padding: 10px;
    background: lightgreen;

    .date-card {
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(100% / 4);
      height: calc(100% / 3);
      background: lightcoral;
    }
  }
}
</style>

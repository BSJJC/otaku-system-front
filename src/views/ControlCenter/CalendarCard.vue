<template>
  <div class="calendar-card">
    <div class="calendar-configs">
      <el-button>本周</el-button>
      <el-button>周</el-button>
      <el-button>月</el-button>
      <el-button>年</el-button>
    </div>
    <div class="calendarTable"></div>
  </div>
</template>

<script setup></script>

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

  .calendarTable {
    width: calc(100% - 20px);
    height: calc(80% - 20px);
    padding: 10px;
    background: lightgreen;

    table {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

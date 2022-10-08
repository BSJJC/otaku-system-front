<template>
  <div class="time-line">
    <el-scrollbar>
      <el-timeline>
        <el-timeline-item
          center
          v-for="(i, index) in store.state.calendarModule.selectedDayArrange"
          :key="index"
          :timestamp="i.arrange.timestamp"
          :placement="i.arrange.placement"
        >
          <el-card>
            <h4>{{ i.arrange.info }}</h4>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<style lang="less" scoped>
.time-line {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  .el-timeline {
    padding: 0px;

    :deep(.el-card) {
      border-radius: 30px;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>

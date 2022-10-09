<template>
  <div class="time-line">
    <el-scrollbar>
      <el-timeline>
        <el-timeline-item
          center
          v-show="data.arrange"
          v-for="(i, index) in data.arrange"
          :key="index"
          :placement="i.placement"
        >
          <el-card>
            {{ i.info }}
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { watch } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();

let schedule, path;
let data = reactive({
  arrange: [],
});

watch(store.state.calendarModule, () => {
  path = store.state.calendarModule.weekOfSelectedDay;

  schedule = JSON.parse(sessionStorage.getItem("managerInfo")).schedule;

  data.arrange =
    schedule[`year_${path[0]}`].months[path[1]].weeks[path[2]][path[3]].arrange;
});
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

<template>
  <div class="time-line">
    <el-scrollbar>
      <el-timeline>
        <el-timeline-item
          center
          v-for="(i, index) in data"
          :key="index"
          :timestamp="i.timestamp"
          :placement="i.placement"
        >
          <el-card>
            <h4>{{ i.card.uploadDetail }}</h4>
            <p>{{ i.card.uploader }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-scrollbar>
  </div>
</template>

<script setup>
const data = [
  {
    timestamp: "20180403",
    placement: "top",
    card: {
      uploadDetail: "upload detail",
      uploader: "Tom",
    },
  },
  {
    timestamp: "20220929",
    placement: "top",
    card: {
      uploadDetail: "upload detail 2",
      uploader: "Jean",
    },
  },
  {
    timestamp: "20220929",
    placement: "top",
    card: {
      uploadDetail: "upload detail 2",
      uploader: "Jean",
    },
  },
];
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
    }
  }
}
</style>

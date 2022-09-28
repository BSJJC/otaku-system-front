<template>
  <div class="message-card">
    <el-badge :value="12" class="item">
      <el-button>comments</el-button>
    </el-badge>
    <el-badge :value="12" class="item">
      <el-button>comments</el-button>
    </el-badge>
    <el-badge :value="12" class="item">
      <el-button>comments</el-button>
    </el-badge>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
:deep(.el-badge) {
  margin: 20px;
}
</style>

<template>
  <div
    class="todo"
    v-for="(i, index) in data"
    :key="index"
    :style="{ transform: `translateX(${50}px)` }"
    style="width: 100%"
  >
    <div class="father-todo" @click="data[index].fold = !data[index].fold">
      <el-icon size="large"><ArrowDownBold /></el-icon>

      <div class="icon">
        <template v-if="i.finished">
          <el-icon color="#90ee90" :size="30"><Check /></el-icon>
        </template>
        <template v-else-if="!i.finished">
          <el-icon color="#f08080" :size="30"><More /></el-icon>
        </template>
      </div>
      {{ i.title }}
    </div>

    <transition name="son-todo">
      <div v-show="i.chidren.length != 0 && !i.fold" class="son-todo">
        <TodoRecursion :data="i.chidren"> </TodoRecursion>
      </div>
    </transition>
  </div>
</template>

<script setup>
import TodoRecursion from "./TodoRecursion.vue";

import { defineProps, reactive, toRaw } from "vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

let temp = toRaw(props);
const data = reactive(temp.data);
</script>

<style lang="less" scoped>
.todo {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  .father-todo {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    transform: translateX(-50px);
    width: 100%;
    flex-direction: row;

    .icon {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      margin-left: 10px;
    }
  }

  .son-todo {
    width: 100%;
  }
}

.arrow-right {
  transform: rotate(-90deg);
  transition: all 0.3s ease-in-out;
}

.arrow-down {
  transform: rotate(0deg);
  transition: all 0.3s ease-in-out;
}
</style>

<template>
  <div
    class="todo"
    v-for="(i, index) in data"
    :key="index"
    :style="{
      transform: `translateX(${50}px)`,
    }"
  >
    <div class="father-todo" @click="data[index].fold = !data[index].fold">
      <div class="icon">
        <el-icon
          v-if="i.chidren.length !== 0"
          size="large"
          :class="i.fold ? 'arrow-down' : 'arrow-right'"
          :color="i.finished ? '#409EFF' : '#F56C6C'"
        >
          <ArrowRightBold />
        </el-icon>
        <el-icon
          v-else
          size="large"
          :class="i.fold ? 'arrow-down' : 'arrow-right'"
          color="transparent"
        >
          <ArrowDownBold />
        </el-icon>

        <template v-if="i.finished">
          <el-icon color="#409EFF" :size="30"><Check /></el-icon>
        </template>
        <template v-else-if="!i.finished">
          <el-icon color="#F56C6C" :size="30"><More /></el-icon>
        </template>
      </div>
      <div
        :style="{
          color: i.finished ? '#409EFF' : '#F56C6C',
          maxWidth: `70%`,
        }"
      >
        {{ i.title }}
      </div>
    </div>

    <transition
      name="son-todo"
      @enter="sonTodoEnter"
      @after-enter="sonTodoAfterEnter"
      @leave="sonTodoLeave"
      @after-leave="sonTodoAfterLeave"
    >
      <div v-show="i.chidren.length != 0 && !i.fold" class="son-todo">
        <TodoRecursion :data="i.chidren"> </TodoRecursion>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps, reactive, toRaw } from "vue";
import TodoRecursion from "./TodoRecursion.vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const temp = toRaw(props);
const data = reactive(temp.data);

const sonTodoEnter = (el) => {
  el.style.height = "auto";
  let endHeight = getComputedStyle(el).height;
  el.style.height = "0px";
  el.offsetHeight;
  el.style.height = endHeight;
};

const sonTodoAfterEnter = (el) => {
  el.style.height = null;
};

const sonTodoLeave = (el) => {
  el.style.height = getComputedStyle(el).height;
  el.offsetHeight;
  el.style.height = "0px";
};

const sonTodoAfterLeave = (el) => {
  el.style.height = null;
};
</script>

<style lang="less" scoped>
.todo {
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }

  .father-todo {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;
    transform: translateX(-50px);

    .icon {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      & > * {
        margin: 0px 5px 0px 5px;
      }
    }
  }

  .son-todo {
    overflow: hidden;
  }
}

.arrow-right {
  transition: all 0.2s ease-in-out;
  transform: rotate(90deg);
}
.arrow-down {
  transition: all 0.2s ease-in-out;
  transform: rotate(0deg);
}

.son-todo-enter-active,
.son-todo-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>

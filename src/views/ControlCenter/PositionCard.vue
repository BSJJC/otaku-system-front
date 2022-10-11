<template>
  <div class="position-card" @click="show">
    <slot name="positionName"></slot>

    <div class="progress">{{}}</div>
  </div>
</template>

<script setup>
import { defineProps, reactive, toRaw } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  position: {
    type: String,
  },
});

const show = () => {
  store.commit(`controlCenterModule/change`);
  sessionStorage.setItem("selectedPosition", JSON.stringify(data.position));
};

const temp = toRaw(props);
const data = reactive(temp);

const infos = JSON.parse(sessionStorage.getItem("teammemberInfo"));

const positionInfo = infos[data.position.trim()];

const getProgress = (finished, all, obj) => {
  let finishedTodos = finished ? finished : 0;
  let allTodos = all ? all : 0;

  if (obj.finished) {
    finishedTodos++;
    allTodos++;
  }

  obj.forEach((todo) => {
    console.log(todo);
  });

  return finishedTodos / allTodos;
};

getProgress(positionInfo.workProgress);
</script>

<style lang="less" scoped>
.position-card {
  width: calc(100% / 3);
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 3px 3px 3px black;
  cursor: pointer;
}
</style>

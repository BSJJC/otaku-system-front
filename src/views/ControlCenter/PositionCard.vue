<template>
  <div class="position-card" @click="show">
    <slot name="positionName"></slot>

    <div class="progress">
      <h3>{{ progress }}%</h3>
      <div class="wave wave1" :style="{ height: `${progress}%` }"></div>
      <div class="wave wave2" :style="{ height: `${progress}%` }"></div>
      <div class="wave wave3" :style="{ height: `${progress}%` }"></div>
      <div class="wave wave4" :style="{ height: `${progress}%` }"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, reactive, toRaw } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  position: {
    type: String,
  },
  teammembers: {
    type: Object,
  },
});

const show = () => {
  store.commit(`controlCenterModule/change`);
  sessionStorage.setItem(
    "selectedPosition",
    JSON.stringify(data[props.position].position)
  );
};

const temp = toRaw(props.teammembers);
const data = reactive(temp);

let finishedTodos = 0;
let allTodos = 0;
const getProgress = async (arr) => {
  await arr.forEach((e) => {
    if (e.finished) finishedTodos++;
    allTodos++;

    if (e.chidren) {
      getProgress(e.chidren);
    }
  });

  return [finishedTodos, allTodos];
};

let progress = ref(0);
getProgress(data[props.position].workProgress).then((d) => {
  progress.value = Math.round((d[0] / d[1]) * 100);
});
</script>

<style lang="less" scoped>
.position-card {
  position: relative;
  width: calc(100% / 3);
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 3px 3px 3px black;
  cursor: pointer;
  overflow: hidden;

  .progress {
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .wave {
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 100%;
      background-image: url(../../assets/wave.png);
      background-size: 1000px 100%;
      z-index: -1;
    }

    .wave1 {
      animation: wave-to-right 10s ease-in-out infinite;
      opacity: 0.4;
    }

    .wave2 {
      animation: wave-to-right 6s ease-in-out infinite;
      opacity: 0.3;
      transition-delay: 0.5s;
    }

    .wave3 {
      animation: wave-to-left 7s ease-in-out infinite;
      opacity: 0.3;
      transition-delay: 0.2s;
    }

    .wave4 {
      animation: wave-to-left 9s ease-in-out infinite;
      opacity: 0.2;
      transition-delay: 0.8s;
    }

    @keyframes wave-to-right {
      0% {
        background-position-x: 0;
      }
      100% {
        background-position-x: 1000px;
      }
    }

    @keyframes wave-to-left {
      0% {
        background-position-x: 0;
      }
      100% {
        background-position-x: -1000px;
      }
    }
  }
}
</style>

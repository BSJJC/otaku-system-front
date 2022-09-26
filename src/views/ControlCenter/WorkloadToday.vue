<template>
  <div class="workload-today">
    <div class="todos-input" ref="todosInoutBtn">
      <div class="btn" @click="inputActive">
        <div class="line line-one"></div>
        <div class="line line-two"></div>
      </div>
      <input type="text" ref="todosInput" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const todosInoutBtn = ref(null);
const todosInput = ref(null);

const inputActive = () => {
  console.log(todosInoutBtn.value.classList);
  todosInoutBtn.value.classList.toggle("active");
};
</script>

<style lang="less" scoped>
.workload-today {
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  width: calc(60% - 40px);
  height: calc(100% - 40px);
  padding: 20px;
  background-color: rgb(35, 171, 255);
  overflow: hidden;

  .todos-input {
    position: relative;
    width: 30px;
    height: 30px;
    transition: all 1s ease-in-out;

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0px;
      z-index: 10;
      width: 30px;
      height: 30px;
      border-radius: 45px;
      background: rgb(108, 104, 104);

      &:hover {
        cursor: pointer;
      }

      .line {
        width: 20px;
        height: 2px;
        border-radius: 45px;
        background: lightcoral;
        position: absolute;
        transition: all 1s ease-in-out;
      }

      .line-one {
        transform: rotateZ(0deg) translateY(-3px);
      }

      .line-two {
        transform: rotateZ(0deg) translateY(3px);
      }
    }

    input {
      position: absolute;
      right: 0px;
      height: 100%;
      width: 100%;
      padding: 0px;
      border-radius: 45px;
      border: none;
      outline: none;
    }

    &.active {
      width: 80%;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0px;
        z-index: 10;
        width: 30px;
        height: 30px;
        border-radius: 45px;
        background: rgb(108, 104, 104);

        &:hover {
          cursor: pointer;
        }

        .line {
          width: 20px;
          height: 2px;
          border-radius: 45px;
          background: lightcoral;
          position: absolute;
        }

        .line-one {
          transform: rotateZ(810deg);
        }

        .line-two {
          transform: rotateZ(720deg);
        }
      }

      input {
        text-indent: 10px;
        font-size: 20px;
      }
    }
  }
}
</style>

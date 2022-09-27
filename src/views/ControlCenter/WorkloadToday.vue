<template>
  <div class="workload-today">
    <div class="todos-input" ref="todosInoutBtn">
      <div class="btn" @click="inputActive">
        <div class="line line-one"></div>
        <div class="line line-two"></div>
      </div>
      <input type="text" ref="todosInput" />
    </div>

    <div class="todos">
      <div class="todo-list unfinished-todos" ref="unfinishedTodoList">
        <el-scrollbar>
          <p
            v-for="(i, index) in todos.unfinishedTodos"
            :key="index"
            @click="toFinished(index)"
          >
            {{ i }}
          </p>
        </el-scrollbar>
      </div>
      <div class="todo-list finished-todos" ref="finishedTodoList">
        <el-scrollbar>
          <p v-for="(i, index) in todos.finishedTodos" :key="index">{{ i }}</p>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import getItems from "../../api/getItem";

const todosInoutBtn = ref(null);
const todosInput = ref(null);
const unfinishedTodoList = ref(null);
const finishedTodoList = ref(null);

let todos = reactive({ unfinishedTodos: [], finishedTodos: [] });

getItems("http://localhost:3000/api/rest/ManagerInfos/getManagerInfo").then(
  (r) => {
    todos.unfinishedTodos = r.data[0].todos.unfinishedTodos;
    todos.finishedTodos = r.data[0].todos.finishedTodos;
  }
);

const inputActive = () => {
  todosInoutBtn.value.classList.toggle("active");
};

const toFinished = (index) => {
  const _this =
    unfinishedTodoList.value.children[0].children[0].children[0].children[
      index
    ];
  const innerHTML = _this.innerHTML;

  _this.classList = "animate__animated animate__fadeOutRight";
  setTimeout(() => {
    todos.unfinishedTodos.splice(index, 1);
    todos.finishedTodos.unshift(innerHTML);
    _this.classList = "";
  }, 300);
};
</script>

<style lang="less" scoped>
.workload-today {
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  width: calc(70% - 40px);
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

  .todos {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    background: rgba(255, 0, 0, 0.445);

    .todo-list {
      width: calc(49% - 10px);
      height: calc(100% - 10px);
      background: lightblue;
      padding: 5px;
    }

    .unfinished-todos {
      margin-right: 2%;
    }

    p {
      transition: all 0.5s ease-in-out;

      &:hover {
        cursor: pointer;
      }
    }

    .todo-leave {
    }
  }
}
</style>

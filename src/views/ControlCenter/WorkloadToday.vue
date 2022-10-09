<template>
  <div class="workload-today">
    <div class="todos-input" ref="todosInoutBtn">
      <div class="btn" @click="inputActive">
        <div class="line line-one"></div>
        <div class="line line-two"></div>
      </div>
      <input
        type="text"
        ref="todosInput"
        maxlength="10"
        @keypress.enter="addUnfinished(todosInput)"
        @blur="inputBlur"
      />
    </div>

    <div :class="todosClasses">
      <div class="todo-list unfinished-todos" ref="unfinishedTodoList">
        <el-scrollbar>
          <div
            class="item"
            v-for="(i, index) in todos.unfinishedTodos"
            :key="index"
            @click="toFinished(index)"
          >
            {{ i }}
          </div>
        </el-scrollbar>
      </div>
      <div class="todo-list finished-todos" ref="finishedTodoList">
        <el-scrollbar>
          <div
            class="item"
            v-for="(i, index) in todos.finishedTodos"
            :key="index"
            @click="toUnfinished(index)"
          >
            {{ i }}
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

const todosInoutBtn = ref(null);
const todosInput = ref(null);

const unfinishedTodoList = ref(null);
const finishedTodoList = ref(null);

let todos = reactive({
  unfinishedTodos: JSON.parse(sessionStorage.getItem("managerInfo")).todos
    .unfinishedTodos,
  finishedTodos: JSON.parse(sessionStorage.getItem("managerInfo")).todos
    .finishedTodos,
});
const todosClasses = reactive({
  todos: true,
  "all-unfinished": false,
  "all-finished": false,
});

// 切换未完成 / 完成列表 css
watch(todos, (newValue) => {
  if (
    // 未完成列表和完成列表都有
    newValue.unfinishedTodos.length !== 0 &&
    newValue.finishedTodos.length !== 0
  ) {
    todosClasses["all-finished"] = false;
    todosClasses["all-unfinished"] = false;
  } else if (
    // 仅完成列表有
    newValue.unfinishedTodos.length === 0 &&
    newValue.finishedTodos.length !== 0
  ) {
    todosClasses["all-finished"] = true;
    todosClasses["all-unfinished"] = false;
  } else if (
    // 仅未完成列表有
    newValue.unfinishedTodos.length !== 0 &&
    newValue.finishedTodos.length === 0
  ) {
    todosClasses["all-finished"] = false;
    todosClasses["all-unfinished"] = true;
  }
});

// 切换按钮 css
const inputActive = () => {
  todosInoutBtn.value.classList.toggle("active");
  todosInoutBtn.value.classList.contains("active")
    ? todosInput.value.focus()
    : todosInput.value.blur();
};

const inputBlur = () => {
  todosInoutBtn.value.classList.remove("active");
  todosInput.value.value = "";
};

//  添加未完成
const addUnfinished = async (_this) => {
  if (!_this.value.trim()) {
    _this.value = "";
    return;
  }

  const innerHTML = _this.value.trim();
  _this.value = "";

  await todos.unfinishedTodos.unshift("");

  const newItem =
    unfinishedTodoList.value.children[0].children[0].children[0].children[0];
  newItem.classList = "init todo-enter";
  setTimeout(() => {
    newItem.classList = "item";
    todos.unfinishedTodos[0] = innerHTML;
  }, 300);
};

// 将未完成项目标为完成
const toFinished = async (index) => {
  const _this =
    unfinishedTodoList.value.children[0].children[0].children[0].children[
      index
    ];
  const innerHTML = _this.innerHTML;

  _this.innerHTML = "";
  _this.classList.add("todo-leave");

  await todos.finishedTodos.unshift("");

  const newFinishedItem =
    finishedTodoList.value.children[0].children[0].children[0].children[0];
  newFinishedItem.classList = "init todo-enter";

  setTimeout(() => {
    todos.unfinishedTodos.splice(index, 1);

    _this.classList = "item";

    newFinishedItem.classList = "item";
    todos.finishedTodos[0] = innerHTML;
  }, 300);
};

// 将完成项目标为未完成
const toUnfinished = async (index) => {
  const _this =
    finishedTodoList.value.children[0].children[0].children[0].children[index];
  const innerHTML = _this.innerHTML;

  _this.innerHTML = "";
  _this.classList.add("todo-leave");

  await todos.unfinishedTodos.unshift("");

  const newFinishedItem =
    unfinishedTodoList.value.children[0].children[0].children[0].children[0];
  newFinishedItem.classList = "init todo-enter";

  setTimeout(() => {
    todos.finishedTodos.splice(index, 1);

    _this.classList = "item";

    newFinishedItem.classList = "item";
    todos.unfinishedTodos[0] = innerHTML;
  }, 300);
};
</script>

<style lang="less" scoped>
* {
  user-select: none;
}

.workload-today {
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  width: calc(70% - 40px);
  height: calc(100% - 40px);
  padding: 20px;
  overflow: hidden;

  .todos-input {
    position: relative;
    left: 15px;
    top: -10px;
    width: 25px;
    height: 25px;
    transition: all 0.5s ease-in-out;

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0px;
      z-index: 10;
      width: 25px;
      height: 25px;
      border-radius: 45px;

      &:hover {
        cursor: pointer;
      }

      .line {
        width: 20px;
        height: 2px;
        border-radius: 45px;
        background: black;
        position: absolute;
        transition: all 0.5s ease-in-out;
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
      width: 50%;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0px;
        z-index: 10;
        width: 25px;
        height: 25px;
        border-radius: 45px;

        &:hover {
          cursor: pointer;
        }

        .line {
          width: 20px;
          height: 2px;
          border-radius: 45px;
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
        transition: all 0.3s ease-in-out;
        text-indent: 10px;
        font-size: 20px;
        box-shadow: 3px 3px 3px black;
      }
    }
  }

  .todos {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;

    .todo-list {
      height: calc(100% - 10px);
      padding: 5px;
    }

    .unfinished-todos {
      transition: all 0.3s ease-in-out;
      color: black;
      width: calc(49% - 10px);
      margin-right: 2%;
    }

    .finished-todos {
      text-decoration: line-through;
      color: rgba(0, 0, 0, 0.368);
      transition: all 0.3s ease-in-out;
      width: calc(49% - 10px);
    }

    .item {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      height: 27px;
      font-size: 20px;
      text-indent: 10px;
      margin-bottom: 10px;
      border-radius: 5px;

      &:hover {
        cursor: pointer;

        &.item {
          transition: all 0.3s ease-in-out;
          background: rgb(208, 208, 208);
        }
      }
    }

    .todo-leave {
      animation: todo-leave 0.3s ease-in-out forwards;
    }

    @keyframes todo-leave {
      to {
        height: 0px;
        font-size: 0px;
        margin: 0px;
      }
    }

    .init {
      width: 100%;
      height: 0px;
      font-size: 0px;
      margin-bottom: 0px;
      border-radius: 5px;
      text-indent: 10px;
    }

    .todo-enter {
      animation: todo-enter 0.3s ease-in-out forwards;
    }

    @keyframes todo-enter {
      to {
        height: 25px;
        font-size: 20px;
        margin-bottom: 10px;
        border-radius: 5px;
        text-indent: 10px;
      }
    }

    &.all-finished {
      .unfinished-todos {
        width: 0%;
        padding: 0px;
        margin: 0px;
      }
      .finished-todos {
        width: 100%;
      }
    }

    &.all-unfinished {
      .unfinished-todos {
        width: 100%;
        margin: 0px;
      }
      .finished-todos {
        width: 0%;
        padding: 0px;
      }
    }
  }
}
</style>

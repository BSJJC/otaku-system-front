<template>
  <div class="calendar-card">
    <div class="calendar-configs">
      <el-button>本周</el-button>
      <el-button>周</el-button>
      <el-button>月</el-button>
      <el-button>年</el-button>
    </div>
    <div class="calendar-table">
      <transition-group name="num">
        <div class="week" v-if="judge == 'week'">
          <div
            class="date-card"
            v-for="(i, index) in year_2022.Jan.weeks[0]"
            :key="index"
          >
            {{ i.title }}
          </div>
        </div>
        <div class="month" v-else-if="judge == 'month'">
          <div class="date-card" v-for="(i, index) in year_2022" :key="index">
            {{ index }}
          </div>
        </div>
        <div class="year" v-else-if="judge == 'year'">
          <div class="date-card">
            {{ year_2022.year }}
          </div>
        </div>
      </transition-group>
    </div>

    <el-button @click="change">change</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";

let judge = ref("week");

let index = 1;
const change = () => {
  let arr = ["week", "month", "year"];
  judge.value = arr[index++];
  if (index === arr.length) index = 0;
};

let year_2022 = {
  year: 2022,
  [Symbol("arrangements")]: true,

  Jan: {
    [Symbol("arrangements")]: true,

    weeks: [
      [
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
      ],
      [
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
        {
          [Symbol("arrangements")]: true,
          title: "there are something you gonna do",
        },
      ],
      [],
      [],
      [],
    ],
  },

  Feb: {
    arrangements: false,
  },
};

// console.log(year_2022[Object.getOwnPropertySymbols(year_2022)[0]]);
</script>

<style lang="less" scoped>
.num-enter-active {
  transition: all 0.3s ease-out;
}

.num-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.num-enter-from,
.num-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.calendar-card {
  background: lightblue;

  .calendar-configs {
    display: flex;
    justify-content: right;
    align-items: center;
    width: calc(100% - 20px);
    height: calc(20% - 20px);
    padding: 10px;
  }

  .calendar-table {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: calc(100% - 20px);
    height: calc(80% - 20px);
    padding: 10px;
    background: lightgreen;
    overflow: hidden;

    .week,
    .month,
    .year {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
    }

    .date-card {
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(100% / 4);
      height: calc(100% / 3);
      background: lightcoral;
    }
  }
}
</style>

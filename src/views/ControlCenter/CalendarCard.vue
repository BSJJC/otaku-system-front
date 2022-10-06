<template>
  <div class="calendar-card">
    <div class="calendar-configs">
      <el-button @click="judge = 'day'">日</el-button>
      <el-button @click="judge = 'week'">周</el-button>
      <el-button @click="judge = 'month'">月</el-button>
      <el-button @click="judge = 'year'">年</el-button>
    </div>
    <div class="calendar-table">
      <transition-group name="calendar">
        <!-- 以天为单位显示 -->
        <div class="date-container" v-if="judge == 'day'">
          <div
            class="date-card day-size"
            v-for="(day, index) in schedule[year].months[month].weeks[week]"
            :key="index"
            :class="day.arrangements ? 'has-arrangements' : 'no-arrangements'"
            @click="timelineChange(day, index)"
          >
            <span>{{ day.date ? day.date : "20010803" }}</span>
            <span>{{ day.title ? day.title : "title holder" }}</span>
          </div>
        </div>
        <!-- 以周为单位显示 -->
        <div class="date-container" v-else-if="judge == 'week'">
          <div
            class="date-card week-size"
            v-for="(day, index) in schedule[year].months[month].weeks"
            :key="index"
            :class="day.arrangements ? 'has-arrangements' : 'no-arrangements'"
            @click="changeWeek(index)"
          >
            <span>{{ day.date ? day.date : "20010803" }}</span>
            <span>{{ day.title ? day.title : "title holder" }}</span>
          </div>
        </div>
        <!-- 以月为单位显示 -->
        <div class="date-container" v-else-if="judge == 'month'">
          <div
            class="date-card month-size"
            v-for="(month, index) in schedule[year].months"
            :key="index"
            :class="month.arrangements ? 'has-arrangements' : 'no-arrangements'"
            @click="changeMonth(index)"
          >
            {{ index }}
          </div>
        </div>
        <!-- 以年为单位显示 -->
        <div class="date-container" v-else-if="judge == 'year'">
          <div
            class="date-card year-size"
            v-for="(year, index) in schedule"
            :key="index"
            :class="month.arrangements ? 'has-arrangements' : 'no-arrangements'"
            @click="yearChange(index)"
          >
            {{ index }}
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

let judge = ref("day");
let year = ref("year_2022");
let month = ref("Jan");
let week = ref(0);

const info = JSON.parse(sessionStorage.getItem("managerInfo"));
const schedule = info.schedule;
let monthAbbs = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const timelineChange = (targetDate, index) => {
  const [y, m, d] = targetDate.date.split("/");

  const date =
    schedule[`year_${y}`].months[monthAbbs[m - 1]].weeks[Math.ceil(d / 7) - 1][
      index
    ];

  store.commit(`calendarModule/setSelectedDayArrange`, date?.arrange);
};

const yearChange = (newYearNum) => {
  year = newYearNum;
  judge.value = "month";
};

const changeMonth = (newMonthNum) => {
  month.value = newMonthNum;
  judge.value = "week";
};

const changeWeek = (newWeekNum) => {
  week.value = newWeekNum;
  judge.value = "day";
};
</script>

<style lang="less" scoped>
.calendar-enter-active {
  transition: all 0.3s ease-out;
}

.calendar-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.calendar-enter-from,
.calendar-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.calendar-card {
  .calendar-configs {
    display: flex;
    justify-content: right;
    align-items: center;
    width: calc(100% - 20px);
    height: calc(15% - 20px);
    padding: 10px;
  }

  .calendar-table {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: calc(100% - 20px);
    height: calc(85% - 20px);
    margin: 10px;
    overflow: hidden;

    .date-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .date-card {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 10px;
      margin: 1%;
      opacity: 0.8;
      transition: all 0.3s ease-in-out;
      user-select: none;

      &:hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(1.05);
      }
    }

    .year-size {
      width: 100%;
      height: 100%;
      margin: 0%;
    }

    .month-size {
      width: 23%;
      height: 30%;
    }

    .week-size {
      width: calc(100% / 4);
      height: 40%;
    }

    .day-size {
      width: calc(100% / 4);
      height: 30%;
    }

    .has-arrangements {
      background: lightyellow;
    }

    .no-arrangements {
      background: lightblue;
    }
  }
}
</style>

<template>
  <div class="calendar-card">
    <div class="calendar-configs">
      <div class="date-now">
        <div v-if="$t('message.lang') === 'zh'">
          {{ year.split("_")[1] }}年 {{ monthAbbs.indexOf(month) + 1 }}月 第{{
            week + 1
          }}周
        </div>
        <div v-else-if="$t('message.lang') === 'en'">
          {{ month }}
          {{ week }}{{ week === 1 ? "st" : "" }}{{ week === 2 ? "nd" : ""
          }}{{ week === 3 ? "rd" : "" }} week year{{ year.split("_")[1] }}
        </div>
      </div>
      <div class="date-range-switch">
        <el-button @click="judge = 'day'">{{
          $t("message.date.day")
        }}</el-button>
        <el-button @click="judge = 'week'">{{
          $t("message.date.week")
        }}</el-button>
        <el-button @click="judge = 'month'">{{
          $t("message.date.year")
        }}</el-button>
        <el-button @click="drawer = true">{{
          $t("message.date.addEvent")
        }}</el-button>
      </div>

      <el-drawer
        v-model="drawer"
        title="添加行程"
        :with-header="true"
        size="50%"
      >
        <el-scrollbar height="100%">
          <one-day-trip></one-day-trip>
        </el-scrollbar>
      </el-drawer>
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
            @click="timelineChange(day.date)"
          >
            <span v-if="$t('message.lang') === 'zh'">
              {{ day.date.split("/")[2] + " 号" }}
            </span>
            <span v-else-if="$t('message.lang') === 'en'">
              {{ day.date.split("/")[2] }}
              {{ day.date.split("/")[2] == 1 ? "st" : "" }}
              {{ day.date.split("/")[2] == 2 ? "nd" : "" }}
              {{ day.date.split("/")[2] == 3 ? "rd" : "" }}
              {{ day.date.split("/")[2] !== 1 || 2 || 3 ? "th" : "" }}
            </span>
          </div>
        </div>
        <!-- 以周为单位显示 -->
        <div class="date-container" v-else-if="judge == 'week'">
          <div
            class="date-card week-size"
            v-for="(day, index) in schedule[year].months[month].weeks"
            :key="index"
            :class="day.arrangements ? 'has-arrangements' : 'no-arrangements'"
            v-show="day.length != 0"
            @click="changeWeek(index)"
          >
            <span>{{ month }} 第 {{ index + 1 }} 周</span>
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
import { useI18n } from "vue-i18n";
import OneDayTrip from "./OneDayTrip.vue";

const { t } = useI18n();
const store = useStore();

console.log(t);

let judge = ref("day");
let year = ref("year_2022");
let month = ref("Jan");
let week = ref(0);

const drawer = ref(false);

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

const timelineChange = (targetDate) => {
  const [y, m, d] = targetDate.split("/");

  const path = [
    y,
    monthAbbs[m - 1],
    Math.ceil(d / 7) - 1,
    Math.ceil(d % 7) - 1 == -1 ? 6 : Math.ceil(d % 7) - 1,
  ];
  store.commit(`calendarModule/setWeekOfSelectedDay`, path);
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

const init = () => {
  const date = new Date();

  const dateNowPath = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;

  timelineChange(dateNowPath);

  year.value = `year_${date.getFullYear()}`;
  month.value = monthAbbs[date.getMonth()];
  week.value = Math.floor(date.getDate() / 7);
};

init();
</script>

<style lang="less" scoped>
:deep(.is-horizontal) {
  display: none;
}

:deep(.el-button) {
  padding: 5px;
  margin: 5px;
}

:deep(.el-drawer) {
  background-color: #ffffff50;
}
rgba(255, 255, 255, 0.295).calendar-enter-active {
  transition: all 0.3s ease-out;
  transition-delay: 0.3s;
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
  position: relative;
  .calendar-configs {
    .date-now {
      position: absolute;
      left: 0%;
    }

    .date-now-enter-active {
      transition: all 0.3s ease-out;
    }

    .date-now-leave-active {
      transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .date-now-enter-from,
    .date-now-leave-to {
      transform: translateX(20px);
      opacity: 0;
    }

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
      background: rgba(202, 232, 255, 0.539);
      opacity: 0.8;
    }

    .no-arrangements {
      background: white;
      opacity: 0.3;
    }
  }
}
</style>

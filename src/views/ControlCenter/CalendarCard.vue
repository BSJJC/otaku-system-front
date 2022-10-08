<template>
  <div class="calendar-card">
    <div class="calendar-configs">
      <div class="date-now">
        {{ year.split("_")[1] }}年 {{ month }}月 第{{ week + 1 }}周
      </div>
      <el-button @click="judge = 'day'">日</el-button>
      <el-button @click="judge = 'week'">周</el-button>
      <el-button @click="judge = 'month'">月</el-button>
      <el-button @click="drawer = true">添加事件</el-button>

      <el-drawer
        v-model="drawer"
        title="添加行程"
        :with-header="true"
        size="50%"
      >
        <el-form
          ref="oneDayTripRuleRef"
          :model="oneDayTrip"
          :rules="oneDayTripRules"
          label-width="120px"
        >
          <el-form-item label="单日行程名称" prop="tripName">
            <el-input
              v-model="oneDayTrip.tripName"
              clearable
              style="width: 40%"
            />
          </el-form-item>
          <el-form-item label="行程日期" prop="tripDate">
            <el-date-picker
              v-model="oneDayTrip.tripDate"
              placeholder="行程日期"
              style="width: 40%"
              value-format="YYYY年MM月DD日"
            />
          </el-form-item>
          <div style="display: flex; flex-direction: row">
            <el-form-item prop="startTime" label="行程开始时间">
              <el-time-select
                v-model="oneDayTrip.startTime"
                :max-time="oneDayTrip.endTime"
                placeholder="开始时间"
                start="08:00"
                step="00:15"
                end="18:00"
              />
            </el-form-item>
            <el-form-item prop="endTime" label="行程结束时间">
              <el-time-select
                v-model="oneDayTrip.endTime"
                :min-time="oneDayTrip.endTime"
                placeholder="结束时间"
                start="08:00"
                step="00:15"
                end="18:00"
              />
            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary" @click="submit(oneDayTripRuleRef)"
              >Create</el-button
            >
            <el-button @click="reset(oneDayTripRuleRef)">Cancel</el-button>
          </el-form-item>
        </el-form>

        <!-- 单日行程添加确认显示 -->
        <el-form label-width="120px">
          <transition name="trip-info">
            <el-form-item v-show="oneDayTrip.tripName" label="行程名">
              <h3 style="margin: 0px">{{ oneDayTrip.tripName }}</h3>
            </el-form-item>
          </transition>
          <transition name="trip-info">
            <el-form-item v-show="oneDayTrip.tripDate" label="行程日期">
              <h3 style="margin: 0px">{{ oneDayTrip.tripDate }}</h3>
            </el-form-item>
          </transition>
          <transition name="trip-info">
            <el-form-item v-show="oneDayTrip.startTime" label="行程开始时间">
              <h3 style="margin: 0px">{{ oneDayTrip.startTime }}</h3>
            </el-form-item>
          </transition>
          <transition name="trip-info">
            <el-form-item v-show="oneDayTrip.endTime" label="行程结束时间">
              <h3 style="margin: 0px">{{ oneDayTrip.endTime }}</h3>
            </el-form-item>
          </transition>
        </el-form>

        <el-divider />

        <div class="range">
          <h3>添加多日行程</h3>
        </div>
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
            @click="timelineChange(day.date, index)"
          >
            <span>{{ day.date ? day.date : "20010803" }}</span>
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
import { ref, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

let judge = ref("day");
let year = ref("year_2022");
let month = ref("Jan");
let week = ref(0);

const drawer = ref(true);

const oneDayTrip = reactive({
  tripName: "das",
  tripDate: "",
  startTime: "",
  endTime: "",
});

const oneDayTripRules = reactive({
  tripName: [{ required: true, message: "请输入日程名称", trigger: "blur" }],
  tripDate: [{ required: true, message: "请输入日程日期", trigger: "blur" }],
  startTime: [
    { required: true, message: "请输入日程开始时间", trigger: "blur" },
  ],
  endTime: [{ required: true, message: "请输入日程结束时间", trigger: "blur" }],
});

const oneDayTripRuleRef = ref();

const submit = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      const time = oneDayTrip.startTime.split(":").toString().replace(",", "");
      const timestamp = new Date().getFullYear().toString() + time;
      console.log(timestamp);

      const arrArr = [
        {
          timestamp,
          placement: "top",
          info: oneDayTrip.tripName,
        },
      ];

      

      console.log(arrArr);
    } else {
      console.log("error submit!", fields);
    }
  });
};

const reset = async (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};

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
  const [y, m, d] = targetDate.split("/");

  const date =
    schedule[`year_${y}`].months[monthAbbs[m - 1]].weeks[Math.ceil(d / 7) - 1][
      index
    ];

  date.timestamp = `${y} ${m} ${d}`;
  date.placement = "top";
  store.commit(`calendarModule/setSelectedDayArrange`, [date]);
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

  const dateNow = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;

  timelineChange(dateNow, date.getDay());

  year.value = `year_${date.getFullYear()}`;
  month.value = monthAbbs[date.getMonth()];
  week.value = Math.floor(date.getDate() / 7 - 1);
};

init();
</script>

<style lang="less" scoped>
.calendar-enter-active {
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

.trip-info-enter-active {
  transition: all 0.3s ease-out;
}

.trip-info-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.trip-info-enter-from,
.trip-info-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.calendar-card {
  position: relative;
  .calendar-configs {
    .date-now {
      position: absolute;
      left: 13%;
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
      background: rgba(240, 128, 128, 0.539);
      opacity: 0.8;
    }

    .no-arrangements {
      background: white;
      opacity: 0.3;
    }
  }
}
</style>

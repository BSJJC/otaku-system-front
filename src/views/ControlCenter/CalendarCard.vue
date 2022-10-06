<template>
  <div class="calendar-card">
    <div class="calendar-configs">
      <el-button>周</el-button>
      <el-button>月</el-button>
      <el-button>年</el-button>
    </div>
    <div class="calendar-table">
      <transition-group name="num">
        <!-- 以周为单位显示 -->
        <div class="week" v-if="judge == 'week'">
          <div
            class="date-card"
            v-for="(day, index) in schedule[year].months[month].weeks[0]"
            :key="index"
            :class="day.arrangements ? 'has-arrangements' : 'no-arrangements'"
          >
            <span>{{ day.date ? day.date : "20010803" }}</span>
            <span>{{ day.title ? day.title : "title holder" }}</span>
          </div>
        </div>
        <!-- 以月为单位显示 -->
        <div class="week" v-else-if="judge == 'month'">
          <div
            class="date-card"
            v-for="(month, index) in schedule[year].months"
            :key="index"
            :class="month.arrangements ? 'has-arrangements' : 'no-arrangements'"
          >
            {{ index }}
          </div>
        </div>
        <!-- 以年为单位显示 -->
        <div class="week" v-else-if="judge == 'year'">
          <div
            class="date-card"
            v-for="(year, index) in schedule"
            :key="index"
            :class="month.arrangements ? 'has-arrangements' : 'no-arrangements'"
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

let judge = ref("week");
let year = ref("year_2022");
let month = ref("Jan");

const info = JSON.parse(sessionStorage.getItem("managerInfo"));
const schedule = info.schedule;

store.commit(`calendarModule/setSelectedDayArrange`);
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
      flex-direction: column;
      width: calc(100% / 4);
      height: calc(100% / 3);
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

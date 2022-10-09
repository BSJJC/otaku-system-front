<template>
  <el-form
    ref="oneDayTripRuleRef"
    :model="oneDayTrip"
    :rules="oneDayTripRules"
    label-width="120px"
  >
    <el-form-item label="单日行程名称" prop="tripName">
      <el-input
        v-model="oneDayTrip.tripName"
        placeholder="单日行程名称"
        clearable
        style="width: 40%"
      />
    </el-form-item>
    <el-form-item label="单日行程日期" prop="tripDate">
      <el-date-picker
        v-model="oneDayTrip.tripDate"
        placeholder="单日行程日期"
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
          :min-time="oneDayTrip.startTime"
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
</template>

<script setup>
import { ref, reactive } from "vue";
import getItem from "../../api/getItem";
import postItem from "../../api/postItem";
import { ElMessageBox } from "element-plus";

const oneDayTrip = reactive({
  tripName: "",
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

const submit = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      const time = oneDayTrip.startTime.split(":").toString().replace(",", "");
      const timestamp = new Date().getFullYear().toString() + time;

      const arrArr = {
        timestamp,
        placement: "top",
        info: oneDayTrip.tripName,
      };

      const prop = {
        year: oneDayTrip.tripDate.split("年")[0],
        month:
          monthAbbs[
            parseInt(oneDayTrip.tripDate.split("年")[1].split("月")[0]) - 1
          ],
        week:
          Math.ceil(
            parseInt(oneDayTrip.tripDate.split("月")[1].split("日")[0]) / 7
          ) - 1,
        day:
          Math.floor(
            parseInt(oneDayTrip.tripDate.split("月")[1].split("日")[0]) % 7
          ) -
            1 ==
          -1
            ? 6
            : Math.floor(
                parseInt(oneDayTrip.tripDate.split("月")[1].split("日")[0]) % 7
              ) - 1,
      };

      postItem("http://localhost:3000/api/rest/ManagerInfos/editManagerInfo", {
        schedule: schedule,
        arrArr: arrArr,
        prop: prop,
      })
        .then(() => {
          getItem(
            "http://localhost:3000/api/rest/ManagerInfos/getManagerInfo"
          ).then((d) => {
            sessionStorage.setItem("managerInfo", JSON.stringify(d.data[0]));

            ElMessageBox.alert("行程添加成功", "成功", {
              confirmButtonText: "OK",
              callback: () => {
                location.reload();
              },
            });
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.log("error submit!", fields);
    }
  });
};

const reset = async (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
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
</style>

<template>
  <el-form
    ref="RangeDayTripRuleRef"
    :model="RangeDayTrip"
    :rules="RangeDayTripRules"
    label-width="120px"
  >
    <el-form-item label="多日行程名称" prop="tripName">
      <el-input
        v-model="RangeDayTrip.tripName"
        placeholder="多日行程名称"
        clearable
        style="width: 40%"
      />
    </el-form-item>
    <el-form-item label="行程日期" prop="tripDate" style="width: 50%">
      <el-date-picker
        v-model="RangeDayTrip.tripDate"
        type="daterange"
        style="width: 40%"
        value-format="YYYY年MM月DD日"
        start-placeholder="行程开始时间"
        end-placeholder="行程结束时间"
      />
    </el-form-item>
    <div style="display: flex; flex-direction: row">
      <el-form-item prop="startTime" label="行程开始时间">
        <el-time-select
          v-model="RangeDayTrip.startTime"
          :max-time="RangeDayTrip.endTime"
          placeholder="开始时间"
          start="08:00"
          step="00:15"
          end="18:00"
        />
      </el-form-item>
      <el-form-item prop="endTime" label="行程结束时间">
        <el-time-select
          v-model="RangeDayTrip.endTime"
          :min-time="RangeDayTrip.startTime"
          placeholder="结束时间"
          start="08:00"
          step="00:15"
          end="18:00"
        />
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="primary" @click="submit(RangeDayTripRuleRef)"
        >Create</el-button
      >
      <el-button @click="reset(RangeDayTripRuleRef)">Cancel</el-button>
    </el-form-item>
  </el-form>

  <!-- 单日行程添加确认显示 -->
  <el-form label-width="120px">
    <transition name="trip-info">
      <el-form-item v-show="RangeDayTrip.tripName" label="行程名">
        <h3 style="margin: 0px">{{ RangeDayTrip.tripName }}</h3>
      </el-form-item>
    </transition>
    <transition name="trip-info">
      <el-form-item v-show="RangeDayTrip.tripDate" label="行程开始日期">
        <h3 style="margin: 0px">{{ RangeDayTrip.tripDate[0] }}</h3>
      </el-form-item>
    </transition>
    <transition name="trip-info">
      <el-form-item v-show="RangeDayTrip.tripDate" label="行程结束日期">
        <h3 style="margin: 0px">{{ RangeDayTrip.tripDate[1] }}</h3>
      </el-form-item>
    </transition>
    <transition name="trip-info">
      <el-form-item v-show="RangeDayTrip.startTime" label="行程开始时间">
        <h3 style="margin: 0px">{{ RangeDayTrip.startTime }}</h3>
      </el-form-item>
    </transition>
    <transition name="trip-info">
      <el-form-item v-show="RangeDayTrip.endTime" label="行程结束时间">
        <h3 style="margin: 0px">{{ RangeDayTrip.endTime }}</h3>
      </el-form-item>
    </transition>
  </el-form>
</template>

<script setup>
import { ref, reactive } from "vue";
import getItem from "../../api/getItem";
import postItem from "../../api/postItem";
import { ElMessageBox } from "element-plus";

const RangeDayTrip = reactive({
  tripName: "",
  tripDate: "",
  startTime: "",
  endTime: "",
});

const RangeDayTripRules = reactive({
  tripName: [{ required: true, message: "请输入日程名称", trigger: "blur" }],
  tripDate: [{ required: true, message: "请输入日程日期", trigger: "blur" }],
  startTime: [
    { required: true, message: "请输入日程开始时间", trigger: "blur" },
  ],
  endTime: [{ required: true, message: "请输入日程结束时间", trigger: "blur" }],
});

const RangeDayTripRuleRef = ref();

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
      const arrArr = {
        placement: "top",
        info: RangeDayTrip.tripName,
      };

      const prop = {
        year: RangeDayTrip.tripDate.split("年")[0],
        month:
          monthAbbs[
            parseInt(RangeDayTrip.tripDate.split("年")[1].split("月")[0]) - 1
          ],
        week:
          Math.ceil(
            parseInt(RangeDayTrip.tripDate.split("月")[1].split("日")[0]) / 7
          ) - 1,
        day:
          Math.floor(
            parseInt(RangeDayTrip.tripDate.split("月")[1].split("日")[0]) % 7
          ) -
            1 ==
          -1
            ? 6
            : Math.floor(
                parseInt(RangeDayTrip.tripDate.split("月")[1].split("日")[0]) % 7
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
</style>

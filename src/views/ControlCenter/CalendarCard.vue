<template>
  <div class="calendar-card">
    <div class="calendar-configs">
      <el-button>本周</el-button>
      <el-button>周</el-button>
      <el-button>月</el-button>
      <el-button>年</el-button>
    </div>
    <div class="calendar-table">
      <transition-group name="nums"> 

      </transition-group>
    </div>
  </div>
</template>

<script setup>



let year_2022 = {
  arrangements: true,

  Jan: {
    arrangements: true,

    weeks: [
      [
        {
          arrangements: true,
          title: "there are something you gonna do",
        },
        {
          arrangements: true,
          title: "there are something you gonna do",
        },
        {
          arrangements: true,
          title: "there are something you gonna do",
        },
        {
          arrangements: true,
          title: "there are something you gonna do",
        },
        {
          arrangements: true,
          title: "there are something you gonna do",
        },
        {
          arrangements: true,
          title: "there are something you gonna do",
        },
        {
          // 本周第一天
          arrangements: true,
          title: "there are something you gonna do",
        },
      ],
      [
        {
          arrangements: true,
          title: "there are something you gonna do",
        },
        {
          arrangements: true,
          title: "there are something you gonna do",
        },
        {
          arrangements: true,
          title: "there are something you gonna do",
        },
        {
          arrangements: true,
          title: "there are something you gonna do",
        },
        {
          arrangements: true,
          title: "there are something you gonna do",
        },
        {
          arrangements: true,
          title: "there are something you gonna do",
        },
        {
          // 本周第一天
          arrangements: true,
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

console.log(year_2022);
</script>

<style lang="less" scoped>
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

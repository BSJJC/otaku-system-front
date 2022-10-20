<template>
  <div class="team-overview">
    <PositionCard
      v-for="(i, index) in teammembers"
      :key="index"
      :position="index"
      :teammembers="teammembers"
    >
      <template #positionName>
        {{ index }}
      </template>
    </PositionCard>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import postItem from "../../api/postItem";
import PositionCard from "./PositionCard.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
let teammembers = reactive({});
console.log(t);

// const teammembersZH = {
//   UI: "用户界面",
//   Frontend: "前端",
//   Backend: "后端",
//   Mobile: "手机端",
//   QA: "质量保证",
//   OM: "运行维护",
// };

const managerProjects = JSON.parse(sessionStorage.getItem("managerInfo"));
postItem(
  "http://localhost:3000/api/rest/Teammember/getProjects",
  managerProjects.projectsManaged
).then((v) => {
  sessionStorage.setItem("managerProjects", JSON.stringify(v));
  sessionStorage.setItem("selectedManagerProjectIndex", 0);

  let target = {};
  for (const key in v[0]) {
    if (Object.hasOwnProperty.call(v[0], key)) {
      if (key !== "_id" && key !== "projectName") {
        target = v[0][key];
        sessionStorage.setItem(
          "selectedManagerProject",
          JSON.stringify(target)
        );
      }
    }
  }

  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
      const prop = target[key];
      teammembers[key] = prop;
    }
  }
});
</script>

<style lang="less" scoped>
.team-overview {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  user-select: none;
}
</style>

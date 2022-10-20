<template>
  <div class="team-overview">
    <PositionCard v-for="(i, index) in positions" :key="index" :position="i">
      <template #positionName>
        <h2 v-if="$t('message.lang') == 'en'">{{ i }}</h2>
        <h2 v-else-if="$t('message.lang') == 'zh'">
          {{ positionsZH[i.trim()] }}
        </h2>
      </template>
    </PositionCard>
  </div>
</template>

<script setup>
import postItem from "../../api/postItem";
import PositionCard from "./PositionCard.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
console.log(t);

const positionsZH = {
  UI: "用户界面",
  Frontend: "前端",
  Backend: "后端",
  Mobile: "手机端",
  QA: "质量保证",
  OM: "运行维护",
};

const managerProjects = JSON.parse(sessionStorage.getItem("managerInfo"));
postItem(
  "http://localhost:3000/api/rest/Teammember/getProjects",
  managerProjects.projectsManaged
).then((v) => {
  sessionStorage.setItem("managerProjects", JSON.stringify(v));
  sessionStorage.setItem("selectedManagerProjectIndex", 0);
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

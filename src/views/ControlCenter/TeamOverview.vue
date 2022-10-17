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
import { reactive } from "vue";
import getItem from "../../api/getItem";
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

let positions = reactive([]);

getItem("http://localhost:3000/api/rest/Teammember/getTeammemberInfo").then(
  (d) => {
    const data = d.data[0];
    sessionStorage.setItem("teammemberInfo", JSON.stringify(data));

    console.log(data);
    console.log("@@@@@@@@@@");

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const teammember = data[key];
        if (teammember.position) {
          positions.push(teammember.position);
        }
      }
    }
  }
);
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

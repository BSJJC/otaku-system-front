<template>
  <div class="team-overview">
    <PositionCard v-for="(i, index) in positions" :key="index" :position="i">
      <template #positionName>
        <h2>{{ i }}</h2>
      </template>
    </PositionCard>
  </div>
</template>

<script setup>
import { reactive } from "vue";

import getItem from "../../api/getItem";

import PositionCard from "./PositionCard.vue";

let positions = reactive([]);

getItem("http://localhost:3000/api/rest/Teammember/getTeammemberInfo").then(
  (d) => {
    const data = d.data[0];
    sessionStorage.setItem("teammemberInfo", JSON.stringify(data));

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

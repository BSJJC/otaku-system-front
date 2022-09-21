<template>
  <div class="top-bar-container">
    top bar
    <el-button @click="change('zh')">change</el-button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const change = (lang) => {
  if (lang == "zh" && localStorage.getItem("lang") === "zh") {
    lang = "en";
  }
  if (lang === "en" && localStorage.getItem("lang") === "en") {
    lang = "zh";
  }
  locale.value = lang;
  localStorage.setItem("lang", lang);
};
</script>

<style lang="less" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.top-bar-container {
  width: 100vw;
  min-height: 50px;
  background: lightcoral;
}
</style>

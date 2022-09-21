<template>
  <div>{{ $t("message.hello") }}</div>
  <button @click="change('zh')">change</button>
  <button @click="change('en')">change</button>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { locale } = useI18n();
console.log(t);

const change = (lang) => {
  locale.value = lang;
  localStorage.setItem("lang", lang);
};
</script>

<style></style>

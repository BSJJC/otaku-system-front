<template>
  <div>{{ $t("message.hello") }}</div>
  <button @click="change('zn')">change</button>
  <button @click="change('en')">change</button>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "LoadingPage",
  setup() {
    const { t } = useI18n();
    const { locale } = useI18n();

    const change = (lang) => {
      locale.value = lang;
      localStorage.setItem("lang", lang);
    };

    return {
      t,
      change,
    };
  },
};
</script>

<style></style>

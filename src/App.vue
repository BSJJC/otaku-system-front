<template>
  <TopBar></TopBar>

  <router-view id="test"></router-view>
</template>

<script>
import TopBar from "./components/TopBar.vue";

import { useI18n } from "vue-i18n";

export default {
  name: "App",
  components: {
    TopBar,
  },
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

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
}
</style>

<template>
  <TopBar> </TopBar>

  <router-view class="main-router-view"> </router-view>
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

<style lang="less" scoped>
@import url("./styles/base.css");

.main-router-view {
  background-color: rgb(154, 154, 154);
}
</style>

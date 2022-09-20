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

<style lang="less">
body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 100vh;
  overflow: hidden;
  margin: 0px;
}

.main-router-view {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 50px);
  background: lightblue;
}
</style>

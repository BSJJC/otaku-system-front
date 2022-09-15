<template>
  <button id="changeZN" @click="change('zh')">zn</button>
  <button id="changeEN" @click="change('en')">en</button>
  <!-- <TestPage></TestPage> -->
  <InformationCard></InformationCard>
</template>

<script>
// import TestPage from "./components/TestPage.vue";
import InformationCard from "./components/InformationCard.vue";

import { useI18n } from "vue-i18n";

export default {
  name: "App",
  components: {
    // TestPage,
    InformationCard,
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

#changeZN,
#changeEN {
  position: fixed;
  top: 0px;
}

#changeZN {
  left: 300px;
}
#changeEN {
  left: 350px;
}
</style>

<template>
  <el-input
    class="inputs"
    v-model="account"
    :placeholder="$t('message.account')"
    onkeyup="value=value.replace(/[^\x00-\xff]/g, '')"
    clearable
  />
  <br />
  <el-input
    class="inputs"
    v-model="password"
    :placeholder="$t('message.password')"
    type="password"
    clearable
  />
</template>

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

export default {
  name: "InformationCard",
  setup() {
    const { t } = useI18n();

    const store = useStore();

    let account = ref(store.state.administrator_info.account);
    let password = ref(store.state.administrator_info.password);

    return {
      t,
      account,
      password,
    };
  },
};
</script>

<style lang="less" scoped>
.el-input,
input {
  overflow: hidden;
  width: 0px;
  height: 0px;
  border: none;
  animation: input-in 1s forwards;
}

@keyframes input-in {
  50% {
    height: 50px;
    width: 2px;
  }
  100% {
    height: 50px;
    width: 300px;
  }
}
</style>

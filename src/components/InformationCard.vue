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

  <br />
  <button @click="login">log in</button>
</template>

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import axios from "axios";

export default {
  name: "InformationCard",
  setup() {
    const { t } = useI18n();

    let account = ref("");
    let password = ref("");
    const login = () => {
      axios
        .post("http://localhost:3000/api/rest/logInCheck/tryLogIn", {
          account: account,
          password: password,
        })
        .then((res) => {
          console.log(res.data);

          // const data = res.data;
          // data.forEach((info) => {
          //   console.log(info.account);
          //   console.log(info.password);
          //   console.log("@@@@@@@@@@@@@@@@@@@@@@@");
          // });
        })
        .catch((err) => {
          console.error(err);
        });
    };

    return {
      t,
      account,
      password,
      login,
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

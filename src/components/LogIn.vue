<template>
  <div class="main-router-view">
    <el-form :model="form" :rules="rules" label-width="120px" size="large">
      <!-- 账号 -->
      <el-form-item
        :label="$t('message.aboutLogIn.account')"
        prop="account"
        id="account"
      >
        <el-input
          ref="accountInput"
          v-model="form.account"
          clearable
          :placeholder="t('message.aboutLogIn.accountError')"
        />
      </el-form-item>
      <!-- 密码 -->
      <el-form-item
        :label="$t('message.aboutLogIn.password')"
        prop="password"
        id="password"
      >
        <el-input
          ref="passwordInput"
          v-model="form.password"
          type="password"
          clearable
          show-password
          :placeholder="t('message.aboutLogIn.passwordError')"
        />
      </el-form-item>
      <el-form-item id="btns">
        <!-- 登录按钮 -->
        <router-link :to="`${routerLinkedTo}`">
          <el-button
            type="primary"
            id="submit"
            @click="verInfo(form.account, form.password)"
          >
            {{ $t("message.aboutLogIn.logIn") }}
          </el-button>
        </router-link>
        <!-- 重置 -->
        <el-button id="reset">{{ $t("message.aboutLogIn.reset") }}</el-button>
      </el-form-item>
    </el-form>

    <BackgroundImg opacity="10"></BackgroundImg>
  </div>
</template>

<script setup>
import BackgroundImg from "./BackgroundImg.vue";
import { useStore } from "vuex";
import { reactive } from "vue";
import axios from "axios";
import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";
const { locale } = useI18n();
const { t } = useI18n();
const store = useStore();

let routerLinkedTo = "/logIn";

const form = reactive({
  account: "",
  password: "",
});

const rules = reactive({
  account: [
    {
      required: true,
      message: t("message.aboutLogIn.accountError"),
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: t("message.aboutLogIn.passwordError"),
      trigger: "blur",
    },
  ],
});

const verInfo = (account, password) => {
  axios
    .post("http://localhost:3000/api/rest/logInCheck/logIn", {
      account: account,
      password: password,
    })
    .then((res) => {
      if (!res.data) {
        /**
         * 请求发送成功，但没这号人
         */
        console.log("请求发送成功，但查无此人");

        ElMessage({
          type: "error",
          showClose: true,
          center: true,
          message: "登录失败，查无此人",
        });

        form.account = "";
        form.password = "";
      } else {
        /**
         * 成功登录
         * 拿到token
         */
        const token = JSON.stringify(res.data.token);
        localStorage.setItem("TOKEN", token);

        ElMessage({
          type: "success",
          showClose: true,
          center: true,
          message: "登陆成功",
        });

        routerLinkedTo = "/userMain";
        store.commit("appModule/mainRouterViewChange");
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

console.log(locale, store);
</script>

<style lang="less" scoped>
#btns {
  :deep(.el-form-item__content) {
    justify-content: space-evenly;

    button:hover {
      scale: 1.05;
    }
  }
}

#account,
#password {
  :deep(label) {
    font-size: 20px;
    color: rgb(255, 255, 255);
    text-shadow: 0 0 10px rgb(252, 106, 106), 0 0 20px rgb(252, 106, 106),
      0 0 30px rgb(252, 106, 106), 0 0 40px rgb(252, 106, 106);
  }
}
</style>

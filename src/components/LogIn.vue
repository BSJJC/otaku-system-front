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
          v-model="form.password"
          type="password"
          clearable
          show-password
          :placeholder="t('message.aboutLogIn.passwordError')"
        />
      </el-form-item>
      <el-form-item id="btns">
        <!-- 登录按钮 -->
        <router-link to="/UserMain">
          <el-button
            type="primary"
            id="submit"
            @click="store.commit('appModule/mainRouterViewChange')"
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
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const { t } = useI18n();
const store = useStore();

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

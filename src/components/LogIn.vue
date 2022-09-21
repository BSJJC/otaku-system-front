<template>
  <div class="main-router-view">
    <el-form :model="form" :rules="rules" label-width="120px" size="large">
      <!-- 账号 -->
      <el-form-item :label="$t('message.aboutLogIn.account')" prop="account">
        <el-input v-model="form.account" clearable />
      </el-form-item>
      <!-- 密码 -->
      <el-form-item :label="$t('message.aboutLogIn.password')" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          clearable
          show-password
        />
      </el-form-item>
      <el-form-item id="btns">
        <!-- 登录按钮 -->
        <!-- <router-link to="/UserMain"> -->
        <el-button type="primary">
          {{ $t("message.aboutLogIn.logIn") }}
        </el-button>
        <!-- </router-link> -->
        <!-- 重置 -->
        <el-button>{{ $t("message.aboutLogIn.reset") }}</el-button>
      </el-form-item>
    </el-form>

    <BackgroundImg opacity="1"></BackgroundImg>
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
  }
}
</style>

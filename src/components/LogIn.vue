<template>
  <div class="main-router-view">
    <el-form :model="form" label-width="120px">
      <!-- 账号 -->
      <el-form-item :label="$t('message.account')" required>
        <el-input v-model="form.account" clearable />
      </el-form-item>
      <!-- 密码 -->
      <el-form-item :label="$t('message.password')" required>
        <el-input
          v-model="form.password"
          type="password"
          clearable
          show-password
        />
      </el-form-item>
      <el-form-item>
        <!-- 登录按钮 -->
        <!-- <router-link to="/UserMain"> -->
        <el-button
          type="primary"
          @click="store.commit('appModule/mainRouterViewChange')"
        >
          {{ $t("message.logIn") }}
        </el-button>
        <!-- </router-link> -->
        <!-- 重置 -->
        <el-button>{{ $t("message.cancel") }}</el-button>
      </el-form-item>
    </el-form>

    <BackgroundImg opacity="1"></BackgroundImg>
  </div>
</template>

<script setup>
//

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

console.log(t, locale, store);
</script>

<style lang="less" scoped>
el-form {
  background-color: red;
}
</style>

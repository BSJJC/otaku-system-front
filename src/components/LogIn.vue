<template>
  <div class="main-router-view">
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="120px"
      size="large"
    >
      <!-- 账号 -->
      <el-form-item
        :label="$t('message.aboutLogIn.account')"
        prop="account"
        id="account"
      >
        <el-input
          ref="accountInput"
          v-model="form.account"
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
          show-password
          :placeholder="t('message.aboutLogIn.passwordError')"
        />
      </el-form-item>
      <el-form-item id="btns">
        <!-- 登录 -->
        <el-button id="submit" @click="verInfo(form.account, form.password)">
          {{ $t("message.aboutLogIn.logIn") }}
        </el-button>
        <!-- 重置 -->
        <el-button id="reset" @click="resetForm">
          {{ $t("message.aboutLogIn.reset") }}
        </el-button>
      </el-form-item>
    </el-form>

    <BackgroundImg opacity="10"></BackgroundImg>
  </div>
</template>

<script setup>
import BackgroundImg from "./BackgroundImg.vue";
import { useStore } from "vuex";
import { ref, reactive } from "vue";
import router from "@/router";
import axios from "axios";
import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";

const { locale } = useI18n();
const { t } = useI18n();
const store = useStore();

const formRef = ref(null);
const accountInput = ref(null);
const passwordInput = ref(null);

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

/**
 * 登录验证
 */
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
          duration: 500,
          message: "登录失败，查无此人",
        });

        form.account = "";
        form.password = "";
      } else {
        /**
         * 成功登录
         * 拿到token
         */
        console.log("登陆成功");
        form.account = "";
        form.password = "";

        const token = JSON.stringify(res.data.token);
        localStorage.setItem("TOKEN", token);

        ElMessage({
          type: "success",
          showClose: true,
          center: true,
          duration: 500,
          message: "登陆成功",
        });

        store.commit("appModule/mainRouterViewChange");

        setTimeout(() => {
          router.push("/userMain");
        }, 500);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
/**
 * 重置表单
 */
const resetForm = () => {
  formRef.value.resetFields();
};

console.log(locale);
</script>

<style lang="less" scoped>
#account,
#password {
  :deep(label) {
    font-size: 20px;
    color: rgb(255, 255, 255);
    text-shadow: 0 0 10px rgb(252, 106, 106), 0 0 10px rgb(252, 106, 106),
      0 0 10px rgb(252, 106, 106), 0 0 10px rgb(252, 106, 106);
  }

  :deep(.el-input__wrapper) {
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.502);
    box-shadow: none;
  }

  :deep(.el-input) {
    --el-input-placeholder-color: rgba(255, 50, 50, 0.381);
    --el-input-text-color: rgb(130, 130, 130);
    font-size: 18px;
  }
}

#btns {
  :deep(.el-form-item__content) {
    justify-content: space-evenly;

    button {
      padding: 0.6em 2em;
      border-radius: 10px;
      font-size: 15px;
      color: white;
      background: transparent;
      border: none;
      text-shadow: 0 0 10px rgb(252, 106, 106), 0 0 10px rgb(252, 106, 106),
        0 0 10px rgb(252, 106, 106), 0 0 10px rgb(252, 106, 106);

      &:hover {
        padding: 0.6em 2em;
        border: none;
        outline: none;
        color: white;
        background: rgba(255, 255, 255, 0.317);
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 10px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        text-shadow: none;
        box-shadow: 0 0 5px 1px #fff;

        &::before {
          content: "";
          background: linear-gradient(
            45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00c8,
            #ff0000
          );
          position: absolute;
          top: -2px;
          left: -2px;
          background-size: 400%;
          z-index: -1;
          filter: blur(5px);
          -webkit-filter: blur(5px);
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          animation: glowing-button 20s linear infinite;
          border-radius: 10px;
          opacity: 0.7;
        }

        &::after {
          z-index: -1;
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.317);
          left: 0;
          top: 0;
          border-radius: 10px;
          opacity: 0.7;
        }
      }
    }
  }
}

@keyframes glowing-button {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>

<template>
  <div class="main-router-view">
    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
    <h1>welcome welcome</h1>

    <router-link
      to="LogIn"
      @click="store.commit('appModule/mainRouterViewChange')"
    >
      <el-button> log in </el-button>
    </router-link>

    <BackgroundImg opacity="10"></BackgroundImg>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BackgroundImg from "./BackgroundImg.vue";
import { useStore } from "vuex";
const store = useStore();

let show = ref(true);
</script>

<style lang="less" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

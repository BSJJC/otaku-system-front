<template>
  <div class="personal-info">
    <div class="base-info">
      <AvatarCard></AvatarCard>
    </div>
    <div class="messages">
      <MessageCard></MessageCard>
    </div>
  </div>
</template>

<script setup>
import AvatarCard from "./AvatarCard.vue";
import MessageCard from "./MessageCard.vue";
</script>

<style lang="less" scoped>
.personal-info {
  margin-right: 10%;
  left: 0px;
  width: 40%;
  height: 80%;
  background: red;
  flex-direction: column;

  .base-info {
    width: 100%;
    height: 70%;
    background-color: lightseagreen;
  }

  .messages {
    width: 100%;
    height: 30%;
    background-color: lightyellow;
  }
}
</style>

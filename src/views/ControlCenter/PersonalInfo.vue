<template>
  <div class="personal-info">
    <div class="self-info">
      <AvatarCard></AvatarCard>
      <WordloadToday></WordloadToday>
    </div>
    <div class="messages">
      <MessageCard></MessageCard>
    </div>
  </div>
</template>

<script setup>
import AvatarCard from "./AvatarCard.vue";
import MessageCard from "./MessageCard.vue";
import WordloadToday from "./WorkloadToday.vue";
</script>

<style lang="less" scoped>
.personal-info {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10%;
  left: 0px;
  width: 40%;
  height: 80%;
  flex-direction: column;

  .self-info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
  }

  .messages {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30%;
    background-color: lightyellow;
  }
}
</style>

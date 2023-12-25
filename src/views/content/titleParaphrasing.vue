<template>
  <p class="title">Title Paraphrasing</p>

  <div class="main-box">
    <div class="title-box">
      <img src="@/assets/line.png" alt="" />
      <span>输入你想仿写的爆款标题(必填)</span>
    </div>
    <nut-textarea v-model="value" :rows="3" autosize placeholder="复制粘贴您参考的爆款笔记标题，为您一键仿写" />
    <div class="title-box magin">
      <img src="@/assets/line.png" alt="" />
      <span>输入你的笔记的内容主题</span>
    </div>
    <nut-textarea v-model="value2" :rows="3" autosize placeholder="复制粘贴您参考的爆款笔记标题，为您一键仿写" />
    <nut-button :loading="isLoading" :class="[!isDefault ? 'send' : 'could-send', isLoading ? 'could-send' : '']" @click="handleSend"
      >{{ isLoading ? 'Thinking...' : 'Send' }}
      <template #icon>
        <img v-if="!isDefault" class="send-icon" src="@/assets/white-arrow.png" alt="" />
        <img v-else class="send-icon" src="@/assets/light-white-arrow.png" alt=""
      /></template>
    </nut-button>
  </div>
</template>

<script lang="ts" setup>
  const value = ref('');
  const value2 = ref('');
  const isLoading = ref(false);
  const isDefault = computed(() => value.value || value2.value);
  const handleSend = () => {
    value.value = '';
    value2.value = '';
    isLoading.value = true;
  };
</script>

<style lang="scss" scoped>
  .magin {
    margin-top: 30px;
  }
  .title {
    font-family: system-ui;
    font-size: 48px;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 0em;
    margin-left: 30px;
    text-align: left;
    height: 48px;
  }
  .main-box {
    padding: 32px 32px;
    margin: 40px auto;
    width: 640px;
    min-height: 624px;
    border-radius: 32px;
    background-color: #fff;
    overflow: hidden;
    .title-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      span {
        line-height: 48px;
        font-family: system-ui;
        font-size: 32px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
      }
      img {
        width: 24px;
        height: 48px;
        border-radius: 4px;
        margin-right: 12px;
      }
    }
    .could-send,
    .send {
      width: 314px;
      height: 96px;
      border-radius: 32px;
      background-color: #e0e2da;
      border: none;
      float: right;
      margin-top: 20px;
      font-family: system-ui;
      font-size: 36px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0em;
      text-align: left;
    }
    .send-icon {
      width: 36px;
      height: 36px;
      margin-left: 12px;
    }
    .could-send {
      background-color: #1e232d;
      color: #ffffff;
    }
  }
</style>
<style lang="scss">
  .nut-textarea {
    padding: 0 !important;
  }
  .nut-button__wrap {
    flex-direction: row-reverse;
  }
  .nut-textarea__textarea {
    background-color: #f6f7f5;
    width: 622px;
    height: 128px;
    border-radius: 16px;
    padding: 24px 24px;
  }
</style>

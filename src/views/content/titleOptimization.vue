<template>
  <p class="title">{{ $t('homepage.lemonaidea_title_improve') }}</p>

  <div class="main-box">
    <div class="title-box">
      <img src="@/assets/line.png" alt="" />
      <span>{{ $t('fun_title_opt.lemonaidea_title_improve_edit_tips_a') }}</span>
    </div>
    <nut-textarea v-model="title" :rows="3" autosize :placeholder="$t('fun_title_opt.lemonaidea_title_improve_edit_tips_b')" />
    <!-- <div class="title-box magin">
      <img src="@/assets/line.png" alt="" />
      <span>{{ $t('fun_opt_title.lemonaidea_title_imitation_edit_tips_c') }}</span>
    </div>
    <nut-textarea v-model="subject" :rows="3" autosize :placeholder="$t('fun_opt_title.lemonaidea_title_imitation_edit_tips_b')" /> -->
    <nut-button
      :loading="isLoading"
      :disabled="!isDefault"
      :class="[!isDefault ? 'send' : 'could-send', isLoading ? 'could-send' : '']"
      @click="handleSend"
      >{{ isLoading ? 'Thinking...' : $t('fun_opt_title.lemonaidea_btn_send') }}
      <template #icon>
        <img v-if="!isDefault" class="send-icon" src="@/assets/white-arrow.png" alt="" />
        <img v-else class="send-icon" src="@/assets/light-white-arrow.png" alt=""
      /></template>
    </nut-button>
  </div>
  <Promote v-if="resObj.length" :source="resObj" @change="handleReSend" />
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import { generate } from '@/api/index';
  import { FunctionType } from '@/utils/enum';
  import { showToast } from 'vant';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  const title = ref('');
  const subject = ref('');
  const isLoading = ref(false);
  const resObj = ref([] as any);
  const isDefault = computed(() => title.value);
  const lang = computed(() => {
    return localStorage.getItem('lang');
  });
  const handleReSend = () => {
    let objEle = {
      gen_type: FunctionType.BODY_PARA,
      title: localStorage.getItem('title'),
      subject: localStorage.getItem('subject'),
      text: '',
    };

    generate(objEle, lang.value)
      .then((res) => {
        if (res.errCode === 0) {
          resObj.value = res.payload.titles;
        } else {
          showToast(t('all.lemonaidea_toast_fail'));
        }
      })
      .finally(() => {})
      .catch((err) => showToast(t('all.lemonaidea_toast_fail')));
    title.value = '';
    subject.value = '';
  };
  const handleSend = () => {
    let objEle = {
      gen_type: FunctionType.BODY_PARA,
      title: title.value,
      subject: subject.value,
      text: '',
    };
    localStorage.setItem('title', title.value);
    localStorage.setItem('subject', subject.value);
    isLoading.value = true;

    generate(objEle, lang.value)
      .then((res) => {
        if (res.errCode === 0) {
          resObj.value = res.payload.titles;
        } else {
          showToast(t('all.lemonaidea_toast_fail'));
        }
      })
      .finally(() => {
        isLoading.value = false;
      })
      .catch((err) => showToast(t('all.lemonaidea_toast_fail')));
    title.value = '';
    subject.value = '';
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
    min-height: 358px;
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
        line-height: 32px;
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

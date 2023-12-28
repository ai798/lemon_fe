<template>
  <div class="main-box-promote">
    <div class="title-box">
      <img src="@/assets/line.png" alt="" />
      <span>{{ $t('fun_opt_title.lemonaidea_title_imitation_result') }}</span>
    </div>
    <div class="content-box" v-for="(item, index) in props.source" :key="index"
      ><span>{{ item }}</span> <img @click="copyElement(item)" src="@/assets/copy.png" alt=""
    /></div>
    <nut-button
      :loading="isLoading"
      :disabled="!isDefault"
      :class="[!isDefault ? 'send' : 'could-send', isLoading ? 'could-send' : '']"
      @click="handleSend"
      >{{ isLoading ? 'Thinking...' : $t('fun_opt_title.lemonaidea_change') }}
      <template #icon>
        <img v-if="!isDefault" class="send-icon" src="@/assets/white-arrow.png" alt="" />
        <img v-else class="send-icon" src="@/assets/light-white-arrow.png" alt=""
      /></template>
    </nut-button>
  </div>
</template>

<script lang="ts" setup>
  import { useClipboard } from '@vueuse/core';
  // import { showToast, Toast } from '@nutui/nutui';
  import { useI18n } from 'vue-i18n';
  import { showToast } from 'vant';

  const props = withDefaults(
    defineProps<{
      source: Array<any>;
    }>(),
    {
      source: [] as any,
    },
  );
  const emits = defineEmits(['change']);
  const { text, copy, copied, isSupported } = useClipboard({});
  const { t } = useI18n();

  watch(
    () => props.source,
    (val) => {
      if (val.length) {
        isLoading.value = false;
      }
    },
  );
  const isLoading = ref(false);
  const isDefault = computed(() => props.source.length);
  const copyElement = (item: any) => {
    showToast(t('fun_opt_title.lemonaidea_toast_copy_success'));
    copy(item);
  };
  const handleSend = () => {
    emits('change');
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
  .main-box-promote {
    padding: 32px 32px;
    margin: 40px auto;
    width: 640px;
    min-height: 364px;
    border: 1px solid #7730d0;
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
    .content-box {
      width: 622px;
      height: 84px;
      border-radius: 16px;
      margin: 12px 0;
      background: #7730d01a;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: inline-block;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 622px;
        white-space: nowrap;
        line-height: 84px;
        margin-left: 16px;
      }
      img {
        width: 32px;
        height: 32px;
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
    justify-content: center;
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

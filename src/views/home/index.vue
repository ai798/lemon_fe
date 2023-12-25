<template>
  <header class="header">
    <span>Become Lemon8 Pro Now</span>
    <!-- <img src="https://cdn.jsdelivr.net/gh/fonghehe/picture/vue-h5-template/logo.png" /><span> {{ $t('title') }}</span> -->
  </header>
  <div class="intro-header">
    <span>#1 Pick For Lemon8 Creator</span>
    <!-- <div>{{ $t('introduction') }}</div>
    <a href="https://github.com/sunniejs/vue-h5-template.git">
      <Github />
    </a> -->
  </div>
  <div class="grid_box">
    <div class="grid yellow">
      <div class="grid_title">
        <p>Title</p>
        <span>Paraphrasing</span>
      </div>
      <div class="grid_button" @click="handleGoto(0)">
        <span>Start Creating</span>
        <img src="@/assets/arrow-right.png" alt="" />
      </div>
    </div>
    <div class="grid light_yellow">
      <div class="grid_title">
        <p>Body Text</p>
        <span>Paraphrasing</span>
      </div>
      <div class="grid_button" @click="handleGoto(1)">
        <span>Start Creating</span>
        <img src="@/assets/arrow-right.png" alt="" />
      </div>
    </div>
    <div class="grid purple">
      <div class="grid_title">
        <p>Title</p>
        <span>Optimization</span>
      </div>
      <div class="grid_button lighting" @click="handleGoto(2)">
        <span>Start Creating</span>
        <img src="@/assets/arrow-right-light.png" alt="" />
      </div>
    </div>
    <div class="grid green">
      <div class="grid_title">
        <p>Body Text</p>
        <span>Optimization</span>
      </div>
      <div class="grid_button lighting" @click="handleGoto(3)">
        <span>Start Creating</span>
        <img src="@/assets/arrow-right-light.png" alt="" />
      </div>
    </div>
  </div>

  <!-- <div class="btn-wrap">
    <nut-button shape="square" size="small" type="default" @click="changeLang('zh-cn')">
      {{ $t('language.zh') }}
    </nut-button>
    <nut-button shape="square" size="small" type="default" @click="changeLang('en-us')">
      {{ $t('language.en') }}
    </nut-button>
  </div> -->
  {{ getUserInfo }}
</template>

<script lang="ts" setup name="HomePage">
  import { computed } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { setLang } from '@/i18n';
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import { Github, Check } from '@nutui/icons-vue';

  const { locale } = useI18n();
  const router = useRouter();

  let cellList = ['vue3', 'vite', 'vue-router', 'axios', 'Pinia', 'vue-i18n', 'postcss-px-to-viewport', 'varlet / vant / nutUI', 'eruda'];
  const userStore = useUserStore();
  const getUserInfo = computed(() => {
    const { name = '' } = userStore.getUserInfo || {};
    return name;
  });

  const handleGoto = (index) => {
    switch (index) {
      case 0:
        router.push('/titleParaphrasing');
        break;
      case 1:
        router.push('/bodyTextParaphrasing');
        break;
      case 2:
        router.push('/titleOptimization');
        break;
      case 3:
        router.push('/bodyTextOptimization');
        break;
    }
  };
  const changeLang = (type) => {
    setLang(type);
  };
</script>

<style lang="scss">
  .header {
    display: flex;
    font-size: 40px;
    width: 654px;
    height: 48px;
    margin-top: 64px;
    color: #1d2331;
    font-family: system-ui;
    font-size: 48px;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;

    span {
    }
    img {
      width: 90px;
      height: 90px;
    }
  }

  .intro-header {
    opacity: 0.6;
    display: flex;
    margin-top: 20px;
    font-size: 16px;
    font-family: system-ui;
    font-size: 40px;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: 0em;
    color: #1d2331;
  }

  .supportList {
    margin: 0 16px;

    .nut-cell-group__title {
      margin-top: 30px;
    }
  }

  .btn-wrap {
    margin: 20px;
  }

  .btn-confirm {
    @include main-lang-bg(302px, 82px, '/@/assets/button', 'confirm.png');
  }
  .grid_box {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 10px;
    margin-top: 20px;
    .grid {
      width: 336px;
      height: 398px;
      // top: 266px;
      // left: 16px;
      border-radius: 48px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
    }
    .grid_title {
      font-family: system-ui;
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: left;
    }
    .grid_button {
      border: 1px solid #2d2620;
      width: 272px;
      height: 96px;
      line-height: 96px;
      border-radius: 32px;
      font-size: 28px;
      font-family: system-ui;
      font-weight: 500;
      letter-spacing: 0em;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
        margin-left: 20px;
      }
    }
    .yellow {
      background-color: #cea64d;
      color: #2d2620;
    }
    .light_yellow {
      color: #2d2620;
      background-color: #d6e852;
    }
    .purple {
      background-color: #4b2572;
      color: #e2c3e7;
    }
    .green {
      background-color: #304e20;
      color: #d8e55b;
    }
    .lighting {
      border: 1px solid #e2c3e7;
    }
  }
</style>

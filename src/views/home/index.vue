<template>
  <header class="header">
    <span>{{ $t('login.lemonaidea_slogan') }}</span>
    <!-- <img src="https://cdn.jsdelivr.net/gh/fonghehe/picture/vue-h5-template/logo.png" /><span> {{ $t('title') }}</span> -->
  </header>
  <div class="intro-header">
    <span>{{ $t('login.lemonaidea_subtitle') }}</span>
    <!-- <div>{{ $t('introduction') }}</div>
    <a href="https://github.com/sunniejs/vue-h5-template.git">
      <Github />
    </a> -->
  </div>
  <div class="grid_box">
    <div class="grid yellow">
      <div class="grid_inner">
        <div class="grid_title">
          <p>{{ $t('homepage.lemonaidea_title_imitation') }}</p>
        </div>
        <div class="img_box"><img src="@/assets/arrow_right.png" alt="" /></div>
        <div class="grid_button" @click="handleGoto(0)">
          <span>{{ $t('homepage.lemonaidea_btn_get_started') }}</span>
          <img src="@/assets/arrow-right.png" alt="" />
        </div>
      </div>
    </div>
    <div class="grid light_yellow">
      <div class="grid_inner">
        <div class="grid_title">
          <p>{{ $t('homepage.lemonaidea_text_imitation') }}</p>
        </div>
        <div class="img_box"><img src="@/assets/arrow_right.png" alt="" /></div>
        <div class="grid_button" @click="handleGoto(1)">
          <span>{{ $t('homepage.lemonaidea_btn_get_started') }}</span>
          <img src="@/assets/arrow-right.png" alt="" />
        </div>
      </div>
    </div>
    <div class="grid purple">
      <div class="grid_inner">
        <div class="grid_title">
          <p>{{ $t('homepage.lemonaidea_title_improve') }}</p>
        </div>
        <div class="img_box"><img src="@/assets/arrow_right_purple.png" alt="" /></div>
        <div class="grid_button lighting_purple" @click="handleGoto(2)">
          <span>{{ $t('homepage.lemonaidea_btn_get_started') }}</span>
          <img src="@/assets/arrow-right-light.png" alt="" />
        </div>
      </div>
    </div>
    <div class="grid green">
      <div class="grid_inner">
        <div class="grid_title">
          <p>{{ $t('homepage.lemonaidea_text_improve') }}</p>
        </div>
        <div class="img_box"><img src="@/assets/arrow_right_light.png" alt="" /></div>
        <div class="grid_button lighting" @click="handleGoto(3)">
          <span>{{ $t('homepage.lemonaidea_btn_get_started') }}</span>
          <img src="@/assets/arrow_light_down.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="btn-wrap">
    <nut-button shape="square" size="small" type="default" @click="changeLang('zh-hk')">
      {{ $t('language.zh') }}
    </nut-button>
    <nut-button shape="square" size="small" type="default" @click="changeLang('en')">
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

  const computedLang = computed(() => localStorage.getItem('lang'));
  const handleGoto = (index) => {
    switch (index) {
      case 0:
        router.push(`/${locale.value}/title_paraphrasing`);
        break;
      case 1:
        router.push(`/${locale.value}/bodyText_paraphrasing`);
        break;
      case 2:
        router.push(`/${locale.value}/title_optimization`);
        break;
      case 3:
        router.push(`/${locale.value}/bodyText_optimization`);
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
    margin-top: 48px;
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
    margin-top: 8px;
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
    // @include main-lang-bg(302px, 82px, '/@/assets/button', 'confirm.png');
  }
  .grid_box {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 10px;
    margin-top: 48px;
    justify-items: center;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    .grid {
      // padding: 48px 32px;
      // padding: 48px 32px;
      width: 336px;
      height: 398px;
      // top: 266px;
      // left: 16px;
      border-radius: 48px;
      display: inline-flex;
      // justify-content: space-around;
      flex-direction: column;
      align-items: center;
      .grid_inner {
        width: 270px;
        height: 398px;
        padding: 48px 32px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .grid_title {
      font-family: system-ui;
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 24px;
      width: 100%;
    }
    .img_box {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      // margin-left: 32px;
      img {
        width: 48px;
        height: 48px;
        margin-bottom: 70px;
      }
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
      position: absolute;
      bottom: 32px;
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
      border: 1px solid #d8e55b;
    }
    .lighting_purple {
      border: 1px solid #e2c3e7;
    }
  }
</style>

<template>
  <nut-navbar :left-arrow="!tabbarVisible" @click-left="goBack" title-icon>
    <template #title-icon>
      <img class="title_icon" src="@/assets/lemon.png" />
      <img class="title_icon_beta" src="@/assets/beta.png" />
    </template>
    <template #right>
      <img src="@/assets/flash.png" @click="showTips = !showTips" />
    </template>
    <template #left>
      <img v-if="!showLeft && !isShowBack" src="@/assets/icon_back.png" @click="showLeft = true" />
      <img v-if="isShowBack" src="@/assets/back.png" @click="router.back()" />
      <img v-else-if="showLeft && !isShowBack" src="@/assets/close_icon.png" @click="showLeft = false" />
    </template>
  </nut-navbar>

  <!-- <van-nav-bar :title="$t($route.meta.title as string)" :left-arrow="!tabbarVisible" @click-left="goBack" /> -->
  <nut-popup position="left" pop-class="pop_style" :style="{ width: '20%', height: '100%' }" v-model:visible="showLeft" :overlay="false">
    <template #default>
      <div class="option_panel">
        <img class="small_icon" src="@/assets/instagram.png" alt="" />
        <span>Instagram</span>
      </div>
      <div class="option_panel">
        <img class="small_icon" src="@/assets/mail.png" alt="" />
        <span>Feedback</span>
      </div>
      <div class="option_panel" @click="is_select = !is_select">
        <img class="small_icon" src="@/assets/earth.png" alt="" />
        <span>{{ language }}</span>
        <img v-if="!is_select" class="small_icon_arrow" src="@/assets/chevron-down.png" alt="" />
        <img v-else class="small_icon_arrow" src="@/assets/chevron-up.png" alt="" />
      </div>
      <div class="option_panel" v-show="is_select" v-for="item in languages" :key="item.type">
        <span @click="changeLang(item.type)">{{ item.name }}</span>
      </div>
    </template>
  </nut-popup>
  <nut-popup pop-class="tips" :style="{ padding: '30px 50px' }" v-model:visible="showTips" closeable close-icon-position="top-right">
    <p class="tips-title">💡 TIPS</p>
    <p class="tips-span">Function temporarily open for free, with 10 daily chances to experience.</p>
    <nut-button class="confirm" type="default" @click="showTips = !showTips">Confirm</nut-button>
  </nut-popup>

  <div class="main-page" :class="{ tabbar: tabbarVisible, border: showBorder }">
    <RouterView v-slot="{ Component }" v-if="$route.meta.keepAlive">
      <keep-alive>
        <component :is="Component" :key="$route.path" />
      </keep-alive>
    </RouterView>
    <RouterView v-if="!$route.meta.keepAlive" :key="$route.path" />
  </div>
  <!-- <nut-tabbar unactive-color="#364636" active-color="#1989fa" bottom v-model="activeTab" v-show="tabbarVisible" @tab-switch="tabSwitch">
    <nut-tabbar-item v-for="item in tabItem" :key="item.key" :tab-title="$t(`tabbar.${item.key}`)" :icon="item.icon" />
  </nut-tabbar> -->
</template>

<script lang="ts" setup name="BasicLayoutPage">
  import { useRouter } from 'vue-router';
  import { Home, Horizontal, My, Location } from '@nutui/icons-vue';
  import { setLang } from '@/i18n';

  const languages = ref([
    { type: 'jp', name: '日本語' },
    { type: 'en-us', name: 'English' },
    { type: 'th', name: 'ภาษาไทย' },
    { type: 'zh-cn', name: '繁体中文' },
  ]);
  const tabItem = [
    { key: 'home', icon: Home },
    { key: 'list', icon: Horizontal },
    { key: 'member', icon: My },
    { key: 'demo', icon: Location },
  ];

  const routerItem = ['/titleParaphrasing', '/bodyTextParaphrasing', '/titleOptimization', '/bodyTextOptimization'];

  const language = ref(languages.value.find((item) => item.type === localStorage.getItem('lang') ?? 'English')?.name);

  const router = useRouter();

  const showLeft = ref(false);

  const is_select = ref(false);

  const showTips = ref(false);

  const isShowBack = ref(false);

  const activeTab = ref(0);

  const tabbarVisible = ref(true);

  const showBorder = ref(true);

  const changeLang = (type) => {
    setLang(type);
    language.value = languages.value.find((item) => item.type === localStorage.getItem('lang') ?? 'English')?.name;
    showLeft.value = false;
    is_select.value = false;
  };

  watch(
    () => router,
    () => {
      const judgeRoute = tabItem.some((item) => item.key === router.currentRoute.value.path.replace('/', ''));
      const showBack = routerItem.includes(router.currentRoute.value.path);
      activeTab.value = tabItem.findIndex((item) => item.key === router.currentRoute.value.path.replace('/', ''));
      tabbarVisible.value = judgeRoute;
      showBorder.value = judgeRoute;
      isShowBack.value = showBack;
    },
    { deep: true, immediate: true },
  );

  const handleShowOption = () => {
    showLeft.value = true;
  };
  const tabSwitch = (_item, index) => {
    switch (index) {
      case 0:
        router.push('/home');
        break;
      case 1:
        router.push('/list');
        break;
      case 2:
        router.push('/member');
        break;
      case 3:
        router.push('/demo');
        break;
    }
    activeTab.value = index;
  };

  const goBack = () => {
    router.go(-1);
  };
</script>

<style scoped lang="scss">
  /* rootValue: 37.5 */
  .nut-navbar--placeholder {
    height: 112px;
    margin-bottom: 40px;
  }
  .icon {
    position: relative;
  }
  .title_icon {
    width: 284px;
    height: 48px;
    top: 240px;
    left: 232px;
  }
  .title_icon_beta {
    position: absolute;
    width: 40px;
    height: 20px;
    padding: 1px, 3.5px, 1px, 3.5px;
    border-radius: 2px;
    gap: 5px;
  }

  img {
    width: 64px;
    height: 64px;
  }
  .main-page {
    box-sizing: border-box;
    min-height: calc(100vh - 92px);
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .tabbar {
    height: calc(100vh - 92px);
    padding-bottom: 100px;
  }

  .border {
    padding-left: 30px;
    padding-right: 30px;
  }
  .option_panel {
    display: flex;
    align-items: center;
    height: 100px;
    top: 320px;
    padding: 8px 32px;
  }
  .small_icon_arrow {
    width: 32px;
    height: 32px;
  }
  .tips-title {
    color: #656565;
    text-align: center;
    margin-top: 40px;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
    font-weight: 700;
  }
  .tips-span {
    font-family: system-ui;
    font-size: 32px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    padding: 0 32px;
  }
  .confirm {
    width: 622px;
    left: 32px;
    padding: 10px 26px 10px 26px;
    border-radius: 16px;
    gap: 10px;
    height: 96px;
    background-color: #1e232d;
    font-family: system-ui;
    font-size: 32px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
</style>
<style>
  .pop_style {
    width: 622px !important;
    height: calc(100vh - 112px) !important;
    top: 112px !important;
  }
  /* .nut-overlay {
      background: none;
    } */
  .tips {
    display: flex;
    flex-direction: column;
    width: 686px;
    height: 416px;
    border-radius: 24px;
    padding: 0 !important;
    justify-content: space-around;
  }
</style>

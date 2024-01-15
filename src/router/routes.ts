import { i18n } from '@/i18n/index';

export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/basic/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'lemonaidea',
          keepAlive: true,
        },
      },
      {
        path: 'list',
        component: () => import('@/views/list/index.vue'),
        meta: {
          title: 'tabbar.list',
          keepAlive: true,
        },
      },
      {
        path: 'member',
        component: () => import('@/views/member/index.vue'),
        meta: {
          title: 'tabbar.member',
          keepAlive: true,
        },
      },
      {
        path: 'demo',
        component: () => import('@/views/demo/index.vue'),
        meta: {
          title: 'tabbar.demo',
          keepAlive: true,
        },
      },
      {
        name: 'listDetails',
        path: '/details',
        component: () => import('@/views/list/details/index.vue'),
        meta: {
          title: 'list.details',
          border: false,
        },
      },
      //内容页
      {
        name: 'title_paraphrasing',
        path: `/:lang/title_paraphrasing`,
        component: () => import('@/views/content/titleParaphrasing.vue'),
        children: [
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'en',
            component: import('@/views/content/titleParaphrasing.vue'),
          },
          {
            // 当 /user/:id/posts 匹配成功
            // UserPosts 将被渲染到 User 的 <router-view> 内部
            path: 'ja',
            component: import('@/views/content/titleParaphrasing.vue'),
          },
          {
            // 当 /user/:id/posts 匹配成功
            // UserPosts 将被渲染到 User 的 <router-view> 内部
            path: 'th',
            component: import('@/views/content/titleParaphrasing.vue'),
          },
          {
            // 当 /user/:id/posts 匹配成功
            // UserPosts 将被渲染到 User 的 <router-view> 内部
            path: 'zh-hk',
            component: import('@/views/content/titleParaphrasing.vue'),
          },
        ],
        meta: {
          title: 'TitleParaphrasing',
          border: false,
        },
      },
      {
        name: 'bodyText_paraphrasing',
        path: '/:lang/bodyText_paraphrasing',
        component: () => import('@/views/content/bodyTextParaphrasing.vue'),
        children: [
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'en',
            component: import('@/views/content/bodyTextParaphrasing.vue'),
          },
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'ja',
            component: import('@/views/content/bodyTextParaphrasing.vue'),
          },
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'th',
            component: import('@/views/content/bodyTextParaphrasing.vue'),
          },
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'zh-hk',
            component: import('@/views/content/bodyTextParaphrasing.vue'),
          },
        ],
        meta: {
          title: 'BodyTextParaphrasing',
          border: false,
        },
      },
      {
        name: 'title_optimization',
        path: '/:lang/title_optimization',
        children: [
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'en',
            component: import('@/views/content/titleOptimization.vue'),
          },
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'th',
            component: import('@/views/content/titleOptimization.vue'),
          },
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'ja',
            component: import('@/views/content/titleOptimization.vue'),
          },
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'zh-hk',
            component: import('@/views/content/titleOptimization.vue'),
          },
        ],
        component: () => import('@/views/content/titleOptimization.vue'),
        meta: {
          title: 'TitleOptimization',
          border: false,
        },
      },
      {
        name: 'bodyText_optimization',
        path: '/:lang/bodyText_optimization',
        children: [
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'en',
            component: import('@/views/content/bodyTextOptimization.vue'),
          },
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'th',
            component: import('@/views/content/bodyTextOptimization.vue'),
          },
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'ja',
            component: import('@/views/content/bodyTextOptimization.vue'),
          },
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: 'zh-hk',
            component: import('@/views/content/bodyTextOptimization.vue'),
          },
        ],
        component: () => import('@/views/content/bodyTextOptimization.vue'),
        meta: {
          title: 'BodyTextOptimization',
          border: false,
        },
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  // 匹配不到重定向会主页
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: '/home',
  },
];

export default routes;

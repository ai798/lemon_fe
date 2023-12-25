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
          title: 'tabbar.home',
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
        name: 'titleParaphrasing',
        path: '/titleParaphrasing',
        component: () => import('@/views/content/titleParaphrasing.vue'),
        meta: {
          title: 'TitleParaphrasing',
          border: false,
        },
      },
      {
        name: 'bodyTextParaphrasing',
        path: '/bodyTextParaphrasing',
        component: () => import('@/views/content/bodyTextParaphrasing.vue'),
        meta: {
          title: 'BodyTextParaphrasing',
          border: false,
        },
      },
      {
        name: 'titleOptimization',
        path: '/titleOptimization',
        component: () => import('@/views/content/titleOptimization.vue'),
        meta: {
          title: 'TitleOptimization',
          border: false,
        },
      },
      {
        name: 'bodyTextOptimization',
        path: '/bodyTextOptimization',
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
    redirect: '/Home',
  },
];

export default routes;

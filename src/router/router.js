import Main from '@/views/layout/Home.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: () => import('@/views/login.vue')
};
export const homeRouter = {
  path: '/home',
  name: 'home',
  component: Main,
  children:[
    {
      //home 界面 路由的 默认 显示界面
      path: '/',
      name: 'welcome',
      component: resolve => require(['@/views/testviews/test1.vue'], resolve)
    },
  ]
};
// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/1',
    icon: 'lock-combination',
    title: 'test1界面1',
    name: '1',
    component: Main,
    children: [
      { path: 'test1.vue', title: 'test1界面2', name: 'test1', component: () => import('@/views/testviews/test1.vue') }
    ]
  },
  {
    path: '/2',
    icon: 'lock-combination',
    title: 'test2界面1',
    name: '2',
    component: Main,
    children: [
      { path: 'test2.vue', title: 'test2界面2', name: 'test2', component: () => import('@/views/testviews/test2.vue') }
    ]
  },
  {
    path: '/3',
    icon: 'lock-combination',
    title: 'test3界面1',
    name: '3',
    component: Main,
    children: [
      { path: 'test3-1.vue', title: 'test3-1界面2', name: 'test3-1', component: () => import('@/views/testviews/test3-1.vue') },
      { path: 'test3-2.vue', title: 'test3-2界面2', name: 'test3-2', component: () => import('@/views/testviews/test3-2.vue') }
    ]
  },
];
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  redirect: '/home',
  component: Main,
  children: []
};
export const nullRouter = {
  path: '*',
  redirect: '/login'
};


// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  ...appRouter,
  homeRouter,
  otherRouter,
  nullRouter
];

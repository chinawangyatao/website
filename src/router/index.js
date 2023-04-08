import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/index.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/cases",
    name: "cases",
    component: () => import("@/views/cases/index.vue"),
    meta: {
      title: "案例",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact/index.vue"),
    meta: {
      title: "联系我们",
    },
  },
  {
    path: "/miniProgram",
    name: "miniProgram",
    component: () => import("../views/miniProgram/index.vue"),
    meta: {
      title: "小程序",
    },
  },
  {
    path: "/website",
    name: "website",
    component: () => import("../views/website/index.vue"),
    meta: {
      title: "官网",
    },
  },
  {
    path: "/promotion",
    name: "promotion",
    component: () => import("../views/promotion/index.vue"),
    meta: {
      title: "竞价推广服务",
    },
  },
  {
    path: "/informationFlow",
    name: "informationFlow",
    component: () => import("../views/informationFlow/index.vue"),
    meta: {
      title: "信息流推广",
    },
  },
  {
    path: "/advertisingDesign",
    name: "advertisingDesign",
    component: () => import("../views/advertisingDesign/index.vue"),
    meta: {
      title: "广告设计",
    },
  },
  {
    path: "/printing",
    name: "printing",
    component: () => import("../views/printing/index.vue"),
    meta: {
      title: "印刷服务",
    },
  },
  {
    path: "/agentOperation",
    name: "agentOperation",
    component: () => import("../views/agentOperation/index.vue"),
    meta: {
      title: "代运营",
    },
  },
  {
    path: "/omnichannelHosting",
    name: "omnichannelHosting",
    component: () => import("../views/omnichannelHosting/index.vue"),
    meta: {
      title: "全渠道",
    },
  },
  {
    path: "/solution",
    name: "solution",
    component: () => import("@/views/solution/index.vue"),
    meta: {
      title: "解决方案",
    },
    children: [],
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    component: () => import("@/views/aboutUs/index.vue"),
    meta: {
      title: "关于我们",
    },
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/news/index.vue"),
    meta: {
      title: "新闻",
    },
  },
];

//router实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  next();
});

// 全局解析守卫
router.beforeResolve(async (to) => {});

// 全局后置钩子
router.afterEach((to, from, failure) => {
  window.scrollTo(0, 0);
  // if (!failure) sendToAnalytics(to.fullPath)
});
export default router;

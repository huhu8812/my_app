import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Main from "../views/main.vue";
import Mall from "../views/Mall.vue";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";
Vue.use(VueRouter);

// 1. 定义 (路由) 组件
// 2. 定义路由
const routes = [
  {
    // 主路由
    path: "/",
    component: Main,
    redirect: '/home',
    // 子路由
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "user",
        component: User,
      },
      {
        path: "mall",
        component: Mall,
      },
      {
        path: "page1",
        component: PageOne
      },
      {
        path: "page2",
        component: PageTwo
      }
    ],
  },
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default router;

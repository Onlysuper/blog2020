import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "../views/Layout.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/articlelist",
    children: [
      {
        path: "/write",
        name: "write",
        component: () =>
          import(/* webpackChunkName: "signin" */ "../views/Write/article.vue")
      },
      {
        path: "/articlelist",
        name: "Articlelist",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Article/list.vue")
      },
      {
        path: "/articledetail",
        name: "Articledetail",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Article/detail.vue")
      },
      {
        path: "/comments",
        name: "Comments",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Comments/list.vue")
      }
    ]
  },

  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/Sign/signin.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/Sign/signup.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

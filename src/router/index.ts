import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "../views/Layout.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "/articlelist",
    children: [
      {
        path: "/comments",
        name: "comments",
        component: () =>
          import(
            /* webpackChunkName: "comments" */ "../views/Comments/list.vue"
          ),
      },
      {
        path: "/notes",
        name: "notes",
        component: () =>
          import(/* webpackChunkName: "notes" */ "../views/Notes/notes.vue"),
      },
      {
        path: "/english",
        name: "english",
        component: () =>
          import(
            /* webpackChunkName: "english" */ "../views/English/english.vue"
          ),
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/write",
        name: "write",
        component: () =>
          import(/* webpackChunkName: "signin" */ "../views/Write/article.vue"),
      },
      {
        path: "/articlelist",
        name: "Articlelist",
        component: () =>
          import(
            /* webpackChunkName: "articlelist" */ "../views/Article/list.vue"
          ),
      },
      {
        path: "/articledetail",
        name: "Articledetail",
        component: () =>
          import(
            /* webpackChunkName: "articledetail" */ "../views/Article/detail.vue"
          ),
      },
      {
        path: "/comments",
        name: "Comments",
        component: () =>
          import(
            /* webpackChunkName: "comments" */ "../views/Comments/list.vue"
          ),
      },
      {
        path: "/life",
        name: "Life",
        component: () =>
          import(/* webpackChunkName: "life" */ "../views/Life/list.vue"),
      },
    ],
  },

  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/Sign/signin.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/Sign/signup.vue"),
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

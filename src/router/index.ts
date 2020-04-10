import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '../views/Layout.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect:'/articlelist',
    children:[
      {
        path: '/articlelist',
        name: 'Articlelist',
        component: () => import(/* webpackChunkName: "about" */ '../views/Article/list.vue'),
      },
      {
        path: '/articledetail',
        name: 'Articledetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/Article/detail.vue'),
      },
      {
        path: '/comments',
        name: 'Comments',
        component: () => import(/* webpackChunkName: "about" */ '../views/Comments/list.vue'),
      }
    ]
  },
  {
    path: '/article',
    name: 'Article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Article/detail.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

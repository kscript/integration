import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
const Base = () => import(/* webpackChunkName: "base" */ '@/views/Base/index.vue');
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/base',
    children: [
      {
        path: '/base',
        name: 'base',
        props: true,
        component: Base
      },
      {
        path: '/base/:type',
        name: 'baseType',
        props: true,
        component: Base
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

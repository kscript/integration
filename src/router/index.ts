import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
const Base = () => import(/* webpackChunkName: "base" */ '@/views/Base/index.vue');
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/base',
        name: 'base',
        redirect: '/base/snippet',
        component: Base
      },
      {
        path: '/base/:type',
        name: 'baseType',
        props: true,
        component: Base
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

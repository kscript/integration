import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
const Content = () => import(/* webpackChunkName: "content" */ '@/views/Content/index.vue');
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/content',
        name: 'content',
        redirect: '/content/snippet',
        component: Content
      },
      {
        path: '/content/:type',
        name: 'contentType',
        props: true,
        component: Content
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components';
// import 'moment/locale/zh-cn'
import {Tabs, Menu, Layout} from 'ant-design-vue';
import 'github-markdown-css';

createApp(App)
.use(router)
.use(Tabs)
.use(Menu)
.use(Layout)
.use(components)
.mount('#app')

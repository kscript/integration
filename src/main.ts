import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import components from '@/components';
import 'ant-design-vue/dist/antd.css';
import 'github-markdown-css';

createApp(App)
.use(router)
.use(Antd)
.use(components)
.mount('#app')

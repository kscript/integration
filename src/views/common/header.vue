<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane :key="menu.id" :tab="menu.label" v-for="menu in menus"></a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Router from '@/router';

export default defineComponent({
  name: 'Header',
  setup() {
    const menus = ref([
      {label: '工具', id: 'tool'},
      {label: '脚本', id: 'scripts'},
      {label: '插件', id: 'plugin'},
      {label: '代码片段', id: 'snippet'}
    ]);
    const activeKey = ref('snippet');
    watch(() => activeKey.value, (type) => {
      Router.push({
        path: `/content/${type}`
      })
    }, {
      immediate: true
    })
    return {
      activeKey,
      menus
    };
  },
});
</script>


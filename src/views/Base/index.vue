<template inherit-attrs="true">
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane v-for="menu in menus" :key="menu.id" :tab="menu.label"></a-tab-pane>
  </a-tabs>
  <v-main v-if="type && menuMap[type]" class="page-main" :type="type" :item="menuMap[type]"></v-main>
  <div v-else></div>
</template>

<script>
import { ref, computed, watch, defineComponent, defineProps } from 'vue';
import Router from '@/router';
import vMain from './main.vue';
import {getMenus} from '@/api'
export default defineComponent({
  props: {
    type: {
      type: String
    },
  },
  components: {
    vMain
  },
  setup(props) {
    const activeKey = ref(props.type);
    const menus = ref([]);
    const menuMap = ref({});
    watch(() => activeKey.value, (type) => {
      Router.push({
        path: `/base/${type}`
      })
    });
    const initData = async () => {
      const data = await getMenus();
      const maps = {};
      data.map(item => {
        maps[item.id] = item;
      });
      menus.value = data;
      menuMap.value = maps;
    }
    initData();
    return {
      activeKey,
      menus,
      menuMap
    }
  }
});
</script>
<style lang="scss" scoped>
.ant-tabs {
  :deep .ant-tabs-bar {
    margin: 0;
  }
  :deep .ant-tabs-tab {
    height: 60px;
    padding: 20px 16px;
  }
}
.page-main {
  height: calc(100vh - 60px);
}
</style>
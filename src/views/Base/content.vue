<template>
  <a-layout class="ant-layout ant-layout-has-sider" theme="light">
    <a-layout-sider theme="light" width="320">
      <a-menu
        mode="inline"
        class="text-left"
        v-model:selectedKeys="active"
      >
        <template v-for="(vo, i1) in list">
          <a-sub-menu v-if="vo.menu" :key="i1">
            <template #title>
              {{vo.title}}
            </template>
            <a-menu-item v-for="(v2, i2) in vo.menu" :key="i2" @click="handlerClick(v2, i1, i2)">{{v2.title}}</a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else :key="'e' + i1" @click="handlerClick(vo, i1)">{{vo.title}}</a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout class="ant-layout" v-if="current">
      <a-layout-content class="ant-layout-content text-left">
        <md-viewer :md="current"></md-viewer>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, nextTick, ref, defineProps, PropType, computed } from 'vue';
import { getMarkdownContext } from '@/api';
import { toHtml } from '@/utils/markdown';
export default defineComponent({
  name: 'Content',
  props: {
    menu: {
      type: Object as PropType<MenuData>,
      default: () => ({} as Menu)
    }
  },
  setup(props) {
    const active = ref([]);
    const current = ref(null as Menu | null);
    const toggle = ref(false);
    const list = computed(() => {
      return props.menu.list || [];
    })
    const getContent = ({path, title}: Menu) => {
      return getMarkdownContext({
        type: 'text'
      }, {
        type: props.menu.type,
        path: path || `${title}.md`
      });
    }
    const handlerClick = async (item: Object, index: number, childIndex?: Number) => {
      if (props.menu.list) {
        const list = props.menu.list as MenuList;
        const data = (childIndex === void 0 ? list[index] : list[index].menu[childIndex]) as Menu;
        const md = await getContent(data);
        current.value = toHtml(md);
      }
    }
    return {
      list,
      active,
      current,
      toggle,
      handlerClick
    }
  }
})
</script>
<style lang="scss" scoped>
.ant-layout-header {
  background: none;
}
.ant-layout-content {
  padding: 15px 20px;
}
</style>
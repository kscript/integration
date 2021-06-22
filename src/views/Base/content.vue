<template>
  <a-layout class="ant-layout ant-layout-has-sider" theme="light">
    <a-layout-sider theme="light" width="320">
      <a-menu
        mode="inline"
        class="text-left"
        v-model:selectedKeys="active"
      >
        <template v-for="(vo, i1) in list">
          <a-sub-menu v-if="vo.list" :key="i1">
            <template #title>
              {{vo.title}}
            </template>
            <a-menu-item v-for="(v2, i2) in vo.list" :key="i2" @click="handlerClick(v2, i1, i2)">{{v2.title}}</a-menu-item>
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
import { defineComponent, nextTick, ref, defineProps, PropType, computed, onUnmounted } from 'vue';
import { getMarkdownContext } from '@/api';
import { toHtml } from '@/utils/markdown';
import {message} from 'ant-design-vue';
import copy from 'copy-text-to-clipboard';
const copyText = (ev: Event) => {
  const target = (ev.target || ev.srcElement) as HTMLElement;
  if (/^code$/i.test(target.tagName)) {
    copy(target.innerText.replace(/\n$/, ''));
    message.success({
      duration: 1,
      content: '复制成功!'
    })
  }
}

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
        type: props.menu.type,
        path: path || `${title}.md`
      });
    }
    const handlerClick = async (item: Object, index: number, childIndex?: Number) => {
      if (props.menu.list) {
        const list = props.menu.list as MenuList;
        const data = (childIndex === void 0 ? list[index] : list[index].list[childIndex]) as Menu;
        const md = await getContent(data);
        current.value = toHtml(md);
      }
    }
    window.addEventListener('click', copyText);
    onUnmounted(() => {
      window.removeEventListener('click', copyText);
    });
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
:deep .markdown-body{
  code {
    pointer-events: none;
    position: relative;
    display: block;
    &:after {
      position: absolute;
      top: 0px;
      right: 0px;
      font-size: 12px;
      padding: 0px 3px;
      line-height: 18px;
      height: 18px;
      border: 1px solid #1890ff;
      border-radius: 2px;
      content: "复制";
      cursor: pointer;
      color: #1890ff;
      pointer-events: auto;
      opacity: 0;
      transition: opacity .5s;
    }
  }
  pre {
    &:hover {
      code:after {
        opacity: 1;
      }
    }
  }
}
</style>
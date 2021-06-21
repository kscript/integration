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
    <a-layout class="ant-layout" v-if="current.content">
      <a-layout-content class="ant-layout-content text-left">
        <md-viewer :md="current.content"></md-viewer>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { defineComponent, nextTick, ref } from 'vue';
import list from '@/docs/snippet';
const active = ref([]);
const current = ref({});
const toggle = ref(false);
const handlerClick = (item: Object, index: number, childIndex?: Number) => {
  current.value = childIndex === void 0 ? list[index] : list[index].menu[childIndex];
}
</script>
<style lang="scss" scoped>
.ant-layout-header {
  background: none;
}
.ant-layout-content {
  padding: 15px 20px;
}
</style>
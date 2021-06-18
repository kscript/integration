<template>
  <a-layout class="ant-layout ant-layout-has-sider" theme="light">
    <a-layout-sider theme="light" width="320">
      <a-menu
        mode="inline"
        class="text-left"
        v-model:selectedKeys="active"
      >
        <a-menu-item v-for="(vo, index) in list" :key="index" @click="handlerClick(vo, index)">{{vo.title}}</a-menu-item>
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
const active = ref([0]);
const current = ref(list[0] || {});
const toggle = ref(false);
const handlerClick = (item: Object, index: number) => {
  current.value = list[index];
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
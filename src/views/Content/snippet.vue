<template>
  <a-layout theme="light">
    <a-layout-sider theme="light" width="320">
      <a-menu
        mode="inline"
        class="text-left"
        v-model:selectedKeys="active"
      >
        <a-menu-item v-for="(vo, index) in data" :key="index">{{vo.title}}</a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout v-if="current.content">
      <a-layout-content>
        <md-viewer v-if="current.content" :md="current.content"></md-viewer>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
type Menu = {
  title: String;
  content: Object
}
const data:Menu[] = [];
const active = ref([0]);
const current = ref(data[0] || {});
const handlerClick = (item: Object, index: number) => {
  current.value = data[index];
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
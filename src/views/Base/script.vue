<template>
  <v-content :menu="menu"></v-content>
</template>
<script>
import { defineComponent, ref } from 'vue';
import {scriptList} from '@/api';
import vContent from './content.vue';
export default defineComponent({
  components: {
    vContent
  },
  setup() {
    const menu = ref({});
    const getList = async () => {
      const {data} = await scriptList();
      menu.value = data;
    }
    getList();
    return {
      menu
    }
  }
})
</script>
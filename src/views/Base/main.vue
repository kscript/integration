<template>
  <v-content :menu="menu"></v-content>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import {getList} from '@/api';
import vContent from './content.vue';
export default defineComponent({
  props: {
    type: {
      type: String,
      default: ''
    },
    item: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    vContent
  },
  setup(props) {
    const menu = ref({});
    const initData = async () => {
      const {listUrl, id} = props.item;
      const {data} = await getList({listUrl, id});
      menu.value = data;
    }
    watch(() => props.type, () => {
      initData();
    })
    initData();
    return {
      menu
    }
  }
})
</script>
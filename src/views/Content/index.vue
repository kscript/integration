<template inherit-attrs="true">
  <component :is="type" class="page-main"></component>
</template>

<script>
import { computed, defineComponent, defineProps } from 'vue';
import tool from '@/views/Content/tool.vue';
import plugin from '@/views/Content/plugin.vue';
import scripts from '@/views/Content/script.vue';
import snippet from '@/views/Content/snippet.vue';
export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'snippet'
    }
  },
  components: {
    tool,
    plugin,
    scripts,
    snippet
  }
});
</script>
<style lang="scss" scoped>
.page-main {
  height: calc(100vh - 60px);
}
</style>
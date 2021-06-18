<template>
  <component :is="type"></component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import tool from '@/views/Content/tool.vue';
import plugin from '@/views/Content/plugin.vue';
import scripts from '@/views/Content/script.vue';
import snippet from '@/views/Content/snippet.vue';
export default defineComponent({
  components: {
    tool,
    plugin,
    scripts,
    snippet,
  },
  props: {
    type: {
      type: String,
      default: 'snippet'
    }
  },
  setup() {
  }
})
</script>

<style>

</style>
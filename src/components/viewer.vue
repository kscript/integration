<script lang="ts">
import {defineComponent, h, nextTick, ref, Ref, PropType, watch} from 'vue';
export default defineComponent({
  name: 'mdViewer',
  props: {
    md: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const markdown = ref(null) as Ref<null | any>;
    watch(() => props.md, (value) => {
      markdown.value = null;
      nextTick(() => {
        markdown.value = props.md;
      })
    }, {
      immediate: true
    })
    return () =>
      h(
        'div',
        {
          className: 'markdown-body',
          innerHTML: markdown.value
        }
      )
  }
})
</script>

<style>

</style>
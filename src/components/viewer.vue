<script lang="ts">
import {defineComponent, h} from 'vue';
export default defineComponent({
  name: 'mdViewer',
  props: {
    md: {
      type: Object,
      default: (() => {})
    }
  },
  setup(props) {
    return () =>
      h(
        'div',
        {},
        props.md.render?.() || []
      )
  }
})
</script>

<style>

</style>
<template>
  <div class="home">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import vHeader from '@/components/header.vue';

export default defineComponent({
  name: 'Home',
  components: {
    vHeader
  }
});
</script>

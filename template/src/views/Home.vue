<template>
  <div class="wrapper">
    {{name}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      name: 'home',
    }
  },
})
</script>

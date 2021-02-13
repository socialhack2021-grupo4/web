<template>
  <NavBar />
  <FilterBar />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NavBar from '../components/NavBar.vue';
import FilterBar from '../components/FilterBar.vue';

export default defineComponent({
  components: {
    NavBar,
    FilterBar,
  },
});
</script>

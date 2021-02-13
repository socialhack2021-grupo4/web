<template>
  <div class="bg-white">SUCCESS!</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

import { key } from '../store';

export default defineComponent({
  setup() {
    const store = useStore(key);
    const route = useRoute();

    return {
      experience: computed(() => store.getters.experiencesById[route.params.id as string]),
    };
  },
});
</script>

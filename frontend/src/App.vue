<template>
  <div class="bg-white">
    <NavBar />
  </div>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NavBar from './components/NavBar.vue';

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>

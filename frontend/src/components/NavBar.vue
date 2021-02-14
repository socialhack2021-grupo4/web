<template>
  <nav class="flex flex-row justify-between items-center max-w-7xl mx-auto px-4 py-6">
    <div class="flex justify-start">
      <router-link class="flex flex-row items-center" :to="{ name: 'home' }">
        <div class="w-6 h-6 mr-2 mb-1">
          <img src="/logo.png" :alt="t('logoAlt')" />
        </div>

        <span class="font-semibold text-xl">#Reto +1</span>
      </router-link>
    </div>

    <div class="flex justify-start">
      <div class="relative text-gray-600 focus-within:text-gray-400">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
            <FontAwesomeIcon :icon="faSearch" />
          </button>
        </span>

        <input
          :placeholder="t('search.placeholder')"
          type="search"
          class="transition ring ring-gray-50 focus:ring-pink-100 py-2 text-sm text-white bg-gray-50 rounded-md pl-10 w-96 focus:outline-none focus:bg-white focus:text-gray-900"
          autocomplete="off"
        />
      </div>
    </div>

    <div class="flex justify-end">
      <div v-if="user">
        <div class="w-9 h-9">
          <img class="rounded-full" src="/avatar.jpg" />
        </div>
      </div>
      <router-link v-else to="/">{{ t('login.cta') }}</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { key } from '../store';

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const { t } = useI18n();
    const store = useStore(key);

    const user = computed(() => store.state.user);

    return {
      t,
      faSearch,
      user,
    };
  },
});
</script>

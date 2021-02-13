<template>
  <div class="bg-white">
    <nav class="flex flex-row justify-between items-center max-w-7xl mx-auto px-4 py-6">
      <div class="flex justify-start">
        <router-link to="/">PROJECT_NAME</router-link>
      </div>

      <div class="flex justify-start">
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
              <FontAwesomeIcon :icon="faSearch" />
            </button>
          </span>

          <input
            :placeholder="$t('search.placeholder')"
            type="search"
            class="transition ring ring-gray-50 focus:ring-pink-100 py-2 text-sm text-white bg-gray-50 rounded-md pl-10 w-96 focus:outline-none focus:bg-white focus:text-gray-900"
            autocomplete="off"
          />
        </div>
      </div>

      <div class="flex justify-end">
        <router-link to="/">{{ $t('login.cta') }}</router-link>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  setup() {
    return {
      faSearch,
    };
  },
});
</script>

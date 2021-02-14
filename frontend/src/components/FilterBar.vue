<template>
  <nav
    class="flex flex-row justify-start items-center max-w-7xl mx-auto px-4 pt-6 overflow-x-auto no-scrollbar scroll-snap-x"
  >
    <FilterItem
      v-if="isSomeFilterActive"
      :label="t('filter.actions.removeAllFilters')"
      :prefixIcon="faChevronLeft"
      @click="removeAllFilters()"
    />
    <FilterItem
      v-else
      class="text-pink-400 bg-pink-100"
      :label="$t('filter.noActiveFilters')"
      :prefixIcon="faHome"
    />

    <div v-if="ngos.length" class="w-px h-6 ml-4 mb-6 bg-gray-200 flex-shrink-0 flex-grow-0" />

    <FilterItem
      v-for="ngo of ngos"
      class="ml-4"
      :key="ngo.id"
      :label="ngo.name"
      :count="ngo.experiencesCount"
      :isActive="ngo.isFilterActive"
      :isSuffixIconDisplayed="true"
      @click="toggleNgoFilter(ngo)"
    />

    <div v-if="hosts.length" class="w-px h-6 ml-4 mb-6 bg-gray-200 flex-shrink-0 flex-grow-0" />

    <FilterItem
      v-for="host of hosts"
      class="ml-4"
      :key="host.id"
      :label="host.name"
      :count="host.experiencesCount"
      :isActive="host.isFilterActive"
      :isSuffixIconDisplayed="true"
      @click="toggleHostFilter(host)"
    />
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faHome } from '@fortawesome/free-solid-svg-icons';

import { Host, Ngo } from '../models';
import { key, Mutation } from '../store';
import FilterItem from './FilterItem.vue';

export default defineComponent({
  components: {
    FontAwesomeIcon,
    FilterItem,
  },
  setup() {
    const { t } = useI18n();
    const store = useStore(key);

    const toggleHostFilter = (host: Host) => {
      const mutationName = host.isFilterActive
        ? Mutation.disableHostFilter
        : Mutation.enableHostFilter;
      store.commit(mutationName, host.id);
    };

    const toggleNgoFilter = (ngo: Ngo) => {
      const mutationName = ngo.isFilterActive
        ? Mutation.disableNgoFilter
        : Mutation.enableNgoFilter;
      store.commit(mutationName, ngo.id);
    };

    const removeAllFilters = () => {
      store.commit(Mutation.removeAllFilters);
    };

    return {
      t,
      faChevronLeft,
      faHome,
      hosts: computed(() => store.getters.hosts),
      ngos: computed(() => store.getters.ngos),
      isSomeFilterActive: computed(() => store.getters.isSomeFilterActive),
      toggleHostFilter,
      toggleNgoFilter,
      removeAllFilters,
    };
  },
});
</script>

<template>
  <div class="bg-white">
    <div class="flex flex-row flex-wrap justify-start items-center max-w-7xl mx-auto px-4 py-6">
      <FilterItem
        v-if="isSomeFilterActive"
        :label="$t('filter.actions.removeAllFilters')"
        :prefixIcon="faChevronLeft"
        @click="removeAllFilters()"
      />
      <FilterItem
        v-else
        class="text-pink-400 bg-pink-100"
        :label="$t('filter.noActiveFilters')"
        :prefixIcon="faHome"
      />

      <div v-if="ngos.length" class="w-px h-6 ml-4 bg-gray-200" />

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

      <div v-if="hosts.length" class="w-px h-6 ml-4 bg-gray-200" />

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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from 'vue';
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
    const store = useStore(key);

    const { hosts, ngos } = toRefs(
      store.getters as {
        hosts: Array<Host>;
        ngos: Array<Ngo>;
      },
    );

    const isSomeFilterActive = computed(
      () =>
        hosts.value.some(({ isFilterActive }) => isFilterActive) ||
        ngos.value.some(({ isFilterActive }) => isFilterActive),
    );

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
      faChevronLeft,
      faHome,
      hosts,
      ngos,
      isSomeFilterActive,
      toggleHostFilter,
      toggleNgoFilter,
      removeAllFilters,
    };
  },
});
</script>

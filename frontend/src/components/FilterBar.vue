<template>
  <div class="bg-white">
    <div class="flex flex-row flex-wrap justify-start items-center max-w-7xl mx-auto px-4 py-6">
      <FilterItem :label="$t('filter.actions.removeAllFilters')" :prefixIcon="faChevronLeft" />

      <div v-if="ngos.length" class="w-px h-6 ml-4 bg-gray-200" />

      <FilterItem
        v-for="ngo of ngos"
        :key="ngo.id"
        :label="ngo.name"
        :count="ngo.count"
        :hoverIcon="faFilter"
        class="ml-4"
      />

      <div v-if="hosts.length" class="w-px h-6 ml-4 bg-gray-200" />

      <FilterItem
        v-for="host of hosts"
        :key="host.id"
        :label="host.name"
        :count="host.count"
        :hoverIcon="faFilter"
        class="ml-4"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faFilter } from '@fortawesome/free-solid-svg-icons';

import FilterItem from './FilterItem.vue';

export default defineComponent({
  components: {
    FontAwesomeIcon,
    FilterItem,
  },
  setup() {
    return {
      faChevronLeft,
      faFilter,
      ngos: [
        {
          id: 1,
          name: 'Asociación Xaruma',
          count: 34,
        },
        {
          id: 2,
          name: 'Fundación Menela',
          count: 10,
        },
        {
          id: 3,
          name: 'Fundación Aldaba',
          count: 56,
        },
        {
          id: 4,
          name: 'Asociación Stop',
          count: 13,
        },
      ],
      hosts: [
        {
          id: 1,
          name: 'Fernando Alonso',
          count: 4,
        },
        {
          id: 2,
          name: 'Rafa Nadal',
          count: 7,
        },
      ],
    };
  },
  computed: {
    isSomeFilterActive() {},
  },
});
</script>

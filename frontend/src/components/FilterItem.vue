<template>
  <div
    class="group relative transition rounded-full bg-gray-50 hover:bg-pink-100 px-3 py-2 cursor-pointer hover:text-pink-400 mb-6 flex-shrink-0 flex-grow-0 scroll-snap-align-start"
    :class="{
      'text-pink-400': isActive,
      'bg-pink-100': isActive,
      'hover:bg-pink-200': isActive,
    }"
    @click="$emit('click', $event)"
  >
    <FontAwesomeIcon v-if="prefixIcon" fixed-width :icon="prefixIcon" />

    {{ label }}

    <span
      v-if="hasCountSpan"
      class="transition-opacity text-gray-400 group-hover:text-gray-500 ml-1 min-w-4 inline-flex justify-end"
      :class="{
        'group-hover:opacity-0': !isActive,
        'opacity-0': isActive,
        'opacity-100': !isActive,
      }"
    >
      {{ count }}
    </span>

    <template v-if="isSuffixIconDisplayed">
      <FontAwesomeIcon
        class="absolute transition-opacity top-1/2 -mt-2 right-3"
        fixed-width
        :icon="faFilter"
        :class="{
          'opacity-0': !isActive,
          'opacity-100': isActive,
          'group-hover:opacity-0': isActive,
          'group-hover:opacity-100': !isActive,
        }"
      />
      <FontAwesomeIcon
        class="absolute transition-opacity top-1/2 -mt-2 right-3 opacity-0"
        fixed-width
        :icon="faTimesCircle"
        :class="{
          'group-hover:opacity-100': isActive,
        }"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faFilter, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
  components: { FontAwesomeIcon },
  emits: {
    click: (payload: MouseEvent) => true,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    count: Number,
    isActive: Boolean,
    prefixIcon: Object as PropType<IconDefinition>,
    isSuffixIconDisplayed: Boolean,
  },
  computed: {
    hasCountSpan(): boolean {
      return !!(this.isActive || this.count !== undefined);
    },
  },
  setup() {
    return {
      faFilter,
      faTimesCircle,
    };
  },
});
</script>

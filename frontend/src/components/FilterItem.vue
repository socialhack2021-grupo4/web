<template>
  <div
    class="group relative transition rounded-full bg-gray-50 hover:bg-pink-100 px-3 py-2 cursor-pointer hover:text-pink-400"
    :class="isActive ? 'text-pink-400 bg-pink-100' : null"
  >
    <FontAwesomeIcon v-if="prefixIcon" class="" :icon="prefixIcon" />

    {{ label }}

    <span
      v-if="isCountSpanDisplayed"
      class="transition-opacity text-gray-400 group-hover:text-gray-500 ml-1 opacity-100 min-w-4 inline-flex justify-end"
      :class="[hoverIcon ? 'group-hover:opacity-0' : null, isActive ? 'opacity-0' : null]"
    >
      {{ count }}
    </span>
    <FontAwesomeIcon
      v-if="hoverIcon"
      class="absolute transition-opacity top-1/2 -mt-2 right-3 opacity-0 group-hover:opacity-100"
      :icon="hoverIcon"
      :class="[isActive ? 'opacity-100' : null]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export default defineComponent({
  components: { FontAwesomeIcon },
  props: {
    label: {
      type: String,
      required: true,
    },
    count: Number,
    isActive: Boolean,
    prefixIcon: Object as PropType<IconDefinition>,
    hoverIcon: Object as PropType<IconDefinition>,
  },
  computed: {
    isCountSpanDisplayed(): boolean {
      return !!(this.hoverIcon || this.count !== undefined);
    },
  },
});
</script>

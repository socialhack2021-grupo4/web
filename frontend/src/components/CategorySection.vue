<template>
  <section class="">
    <h2 class="max-w-7xl mx-auto px-4 text-2xl font-semibold">{{ name }}</h2>

    <div
      class="max-w-7xl mx-auto transform box-border flex flex-row justify-start items-stretch pr-8 -translate-x-8 overflow-x-auto no-scrollbar scroll-snap-x"
    >
      <ExperienceListItem
        v-for="singleExperience of experiences"
        :key="singleExperience.id"
        :experience="singleExperience"
        :isFeaturedHighlightEnabled="highlightFeaturedExperiences"
        :isEndingSoonHighlightEnabled="highlightEndingSoonExperiences"
      />

      <div class="flex-shrink-0 w-8" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Experience } from '../models';
import ExperienceListItem from './ExperienceListItem.vue';

export default defineComponent({
  components: {
    ExperienceListItem,
  },
  props: {
    name: String,
    highlightFeaturedExperiences: Boolean,
    highlightEndingSoonExperiences: Boolean,
    experiences: Object as PropType<Array<Experience>>,
  },
});
</script>

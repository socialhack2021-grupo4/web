<template>
  <div class="bg-white">
    <FilterBar />
    <template v-for="singleCategory of categories" :key="singleCategory.id">
      <CategorySection
        v-if="singleCategory.experiences.length"
        :name="singleCategory.name"
        :experiences="singleCategory.experiences"
        :highlightFeaturedExperiences="singleCategory.highlightFeaturedExperiences"
        :highlightEndingSoonExperiences="singleCategory.highlightEndingSoonExperiences"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

import FilterBar from '../components/FilterBar.vue';
import CategorySection from '../components/CategorySection.vue';
import { key } from '../store';

export default defineComponent({
  components: {
    FilterBar,
    CategorySection,
  },
  setup() {
    const store = useStore(key);
    const { t } = useI18n();

    return {
      categories: computed(() => [
        {
          id: 'popular',
          name: t('categories.popular.name'),
          experiences: store.getters.popularExperiences,
          highlightFeaturedExperiences: true,
          highlightEndingSoonExperiences: true,
        },
        {
          id: 'forYou',
          name: t('categories.forYou.name'),
          experiences: store.getters.experiencesForYou,
          highlightFeaturedExperiences: false,
          highlightEndingSoonExperiences: true,
        },
        {
          id: 'endingSoon',
          name: t('categories.endingSoon.name'),
          experiences: store.getters.experiencesEndingSoon,
          highlightFeaturedExperiences: true,
          highlightEndingSoonExperiences: false,
        },
      ]),
    };
  },
});
</script>

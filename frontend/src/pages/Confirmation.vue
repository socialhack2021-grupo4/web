<template>
  <div class="bg-white">
    <article class="max-w-3xl mx-auto p-6 flex flex-col justify-items-center items-center">
      <div class="w-64 h-64">
        <img src="/tada.gif" />
      </div>
      <h1 class="mt-12 text-5xl font-semibold">{{ t('confirmationPage.title') }}</h1>
      <p class="mt-10">{{ t('confirmationPage.subtitle', { ngoName: experience.ngo.name }) }}</p>
      <router-link
        class="group mt-6 transition rounded-full bg-gray-100 hover:bg-pink-100 px-3 py-2 cursor-pointer hover:text-pink-400"
        :to="experiencePage"
      >
        <FontAwesomeIcon fixed-width :icon="faChevronLeft" />

        {{
          t('confirmationPage.backToExperience', {
            experienceName: experience.title,
            hostName: experience.host.name,
          })
        }}
      </router-link>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { key } from '../store';

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const store = useStore(key);
    const route = useRoute();
    const { t } = useI18n();

    const experience = computed(() => store.getters.experiencesById[route.params.id as string]);
    const experiencePage = computed(() => ({
      name: 'experience',
      params: { id: experience.value.id },
    }));

    return {
      t,
      faChevronLeft,
      experiencePage,
      experience,
    };
  },
});
</script>

<template>
  <router-link
    class="block box-border w-1/4 pt-6 px-8 pb-16 flex-shrink-0 scroll-snap-align-start"
    :to="experiencePage"
  >
    <article
      class="relative transition transform shadow box-border w-full h-full rounded-lg cursor-pointer hover:shadow-2xl hover:-translate-y-2 ring-pink-200"
      :class="{
        ring: experience.isBought,
      }"
    >
      <div class="relative aspect-w-16 aspect-h-9">
        <picture>
          <source :srcset="experience.thumbnailUrl" />
          <img
            class="absolute h-full w-full object-cover rounded-t-lg"
            :src="experience.thumbnailUrl"
            :alt="experience.title"
          />
        </picture>

        <p
          class="absolute inset-0 w-full h-full flex flex-column justify-end items-end shadow bg-gradient-to-t from-black text-white py-2 px-4"
        >
          <template v-if="experience.isBought">
            {{ t('experience.alreadyBought') }}
          </template>
          <template v-else>
            {{
              t('experience.price.startingFrom', {
                formattedPrice: n(experience.priceInCents / 100, 'currency'),
              })
            }}
          </template>
        </p>
      </div>

      <p
        v-if="isEndingSoon"
        class="absolute top-2 -right-4 shadow rounded-lg bg-pink-400 text-white px-4 py-2"
      >
        {{
          t('experience.endingSoon.label', {
            formattedPrice: n(experience.priceInCents / 100, 'currency'),
          })
        }}
      </p>

      <div class="py-2 px-4">
        <h3 class="text-lg font-semibold">{{ experience.host.name }}</h3>
        <p>{{ experience.title }}</p>
        <p
          class="pt-4"
          :class="{
            'text-gray-400': !isEndingSoon,
            'font-semibold': isEndingSoon,
          }"
        >
          {{ t('experience.dateEnd', { formattedDate: d(experience.dateEnd, 'short') }) }}
        </p>
      </div>
    </article>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { Experience, isSoon } from '../models';

export default defineComponent({
  props: {
    isFeaturedHighlightEnabled: Boolean,
    isEndingSoonHighlightEnabled: Boolean,
    experience: {
      type: Object as PropType<Experience>,
      required: true,
    },
  },
  setup(props) {
    const { t, n, d } = useI18n();

    const experiencePage = computed(() => ({
      name: 'experience',
      params: { id: props.experience.id },
    }));
    const isEndingSoon = computed(
      () => props.isEndingSoonHighlightEnabled && isSoon(props.experience.dateEnd),
    );
    const isFeatured = computed(
      () => props.isFeaturedHighlightEnabled && props.experience.isStarred,
    );

    return {
      t,
      n,
      d,
      experiencePage,
      isEndingSoon,
      isFeatured,
    };
  },
});
</script>

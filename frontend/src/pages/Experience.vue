<template>
  <div class="bg-white">
    <article class="max-w-5xl mx-auto shadow-sm">
      <div class="flex flex-row justify-items-stretch items-stretch bg-gray-50">
        <div class="relative flex-grow flex-shrink">
          <picture>
            <source :srcset="experience.thumbnailUrl" />
            <img
              class="absolute h-full w-full object-cover"
              :src="experience.thumbnailUrl"
              :alt="experience.title"
            />
          </picture>
        </div>

        <div class="flex flex-col w-96 flex-grow-0 flex-shrink-0 py-4 px-6">
          <div class="flex flex-row items-center">
            <picture>
              <source :srcset="experience.host.profilePicUrl" />
              <img
                class="h-12 w-12 object-cover rounded-full flex-shrink-0 flex-grow-0"
                :src="experience.host.profilePicUrl"
                :alt="experience.host.name"
              />
            </picture>

            <h2 class="text-4xl font-semibold ml-4 flex-grow flex-shrink">
              {{ experience.host.name }}
            </h2>
          </div>

          <p class="mt-8 text-2xl">{{ experience.title }}</p>
          <p class="mt-8 mb-2">
            {{ t('experience.dateEnd', { formattedDate: d(experience.dateEnd, 'short') }) }}
          </p>
        </div>
      </div>

      <nav class="flex flex-row justify-items-stretch items-stretch border-t border-b">
        <div class="flex flex-row flex-grow flex-shrink justify-end items-center">
          <p class="pr-4">
            {{ t('experience.participantsCount', { count: experience.participantsCount }) }}
          </p>
        </div>
        <div class="flex flex-col w-96 flex-grow-0 flex-shrink-0 py-4 px-6">
          <button
            class="relative transition-colors ring ring-1 rounded py-2 focus:outline-none"
            :class="{
              'ring-pink-200': !isLoading,
              'hover:bg-pink-50': !isLoading,
              'ring-gray-200': isLoading,
              'bg-gray-200': isLoading,
              'text-gray-600': isLoading,
              'cursor-wait ': isLoading,
              'focus:outline-none': isLoading,
            }"
            @click="purchase()"
          >
            <div
              class="transition-opacity absolute inset-0 flex justify-center items-center"
              :class="{
                'opacity-0': !isLoading,
                'opacity-100': isLoading,
              }"
            >
              <FontAwesomeIcon :icon="faCircleNotch" fixedwidth spin />
            </div>
            <span
              class="transition-opacity"
              :class="{
                'opacity-0': isLoading,
                'opacity-100': !isLoading,
              }"
            >
              {{ t('experience.buy.cta') }}
            </span>
          </button>
        </div>
      </nav>

      <section class="flex flex-row justify-items-stretch items-stretch">
        <div class="flex-row flex-grow flex-shrink px-6 py-4" v-html="experience.fullDescription" />
        <aside class="w-96 flex-grow-0 flex-shrink-0 py-4 px-6">
          <p>
            {{
              t('experience.buyToHelp', {
                formattedPrice: n(experience.priceInCents / 100, 'currency'),
              })
            }}
          </p>

          <div class="flex flex-row items-center mt-4">
            <picture>
              <source :srcset="experience.ngo.logoUrl" />
              <img
                class="h-8 w-8 object-cover rounded-full flex-shrink-0 flex-grow-0"
                :src="experience.ngo.logoUrl"
                :alt="experience.ngo.name"
              />
            </picture>

            <h2 class="text-2xl font-semibold ml-4 flex-grow flex-shrink">
              {{ experience.ngo.name }}
            </h2>
          </div>
        </aside>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { key, Action } from '../store';

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const store = useStore(key);
    const route = useRoute();
    const { t, d, n } = useI18n();

    const purchase = () => {
      store.dispatch(Action.createOrder, store.getters.experiencesById[route.params.id as string]);
    };

    return {
      t,
      d,
      n,
      faCircleNotch,
      purchase,
      experience: computed(() => store.getters.experiencesById[route.params.id as string]),
      isLoading: computed(() => store.state.order.isLoading),
    };
  },
});
</script>

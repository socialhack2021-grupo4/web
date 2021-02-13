import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';

import { messages, numberFormats, datetimeFormats } from './i18n';
import store, { key } from './store';

import App from './App.vue';
import Home from './pages/Home.vue';

import './index.css';

const routes = [{ path: '/', component: Home }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages,
  numberFormats,
  datetimeFormats,
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(store, key);
app.mount('#app');

store.commit('upsertExperiences', [
  {
    id: 1,
    ngo: {
      id: 1,
      name: 'Asociación Xaruma',
    },
    host: {
      id: 1,
      name: 'Fernando Alonso',
    },
    title: 'Cena en mi casa',
    dateEnd: new Date(Date.now() + 2 * 86400000),
    thumbnailUrl: 'https://placeimg.com/600/900/any',
    priceInCents: 800,
  },
  {
    id: 2,
    ngo: {
      id: 2,
      name: 'Fundación Menela',
    },
    host: {
      id: 2,
      name: 'Rafa Nadal',
    },
    title: 'Partido de tenis conmigo!',
    dateEnd: new Date(Date.now() + 0.5 * 86400000),
    thumbnailUrl: 'https://placeimg.com/900/600/any',
    priceInCents: 750,
  },
  {
    id: 3,
    ngo: {
      id: 1,
      name: 'Asociación Xaruma',
    },
    host: {
      id: 2,
      name: 'Rafa Nadal',
    },
    title: 'Clase de tenis',
    isStarred: true,
    dateEnd: new Date(Date.now() + 3 * 86400000),
    thumbnailUrl: 'https://placeimg.com/800/800/any',
    priceInCents: 1000,
    isBought: true,
  },
  {
    id: 4,
    ngo: {
      id: 1,
      name: 'Asociación Xaruma',
    },
    host: {
      id: 2,
      name: 'Rafa Nadal',
    },
    title: 'Dedicatoria',
    isStarred: true,
    dateEnd: new Date(Date.now() + 3 * 86400000),
    thumbnailUrl: 'https://placeimg.com/400/400/any',
    priceInCents: 500,
  },
  {
    id: 5,
    ngo: {
      id: 2,
      name: 'Fundación Menela',
    },
    host: {
      id: 2,
      name: 'Rafa Nadal',
    },
    title: 'Tour por mi casa',
    isStarred: true,
    dateEnd: new Date(Date.now() + 3 * 86400000),
    thumbnailUrl: 'https://placeimg.com/1200/1200/any',
    priceInCents: 350,
  },
]);

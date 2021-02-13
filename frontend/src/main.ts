import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';

import messages from './i18n';
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
  },
]);

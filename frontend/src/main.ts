import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';

import { messages, numberFormats, datetimeFormats } from './i18n';
import store, { key, Action } from './store';

import App from './App.vue';
import Home from './pages/Home.vue';
import Experience from './pages/Experience.vue';
import Confirmation from './pages/Confirmation.vue';

import './index.css';

const routes = [
  { path: '/', component: Home, name: 'home' },
  {
    path: '/experience/:id',
    component: Experience,
    name: 'experience',
  },
  {
    path: '/experience/:id/success',
    component: Confirmation,
    name: 'confirmation',
  },
];

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

store.dispatch(Action.fetchAllExperiences);

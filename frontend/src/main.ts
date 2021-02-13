import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';
import messages from './i18n';

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
app.config.devtools = true;
app.use(router);
app.use(i18n);
app.mount('#app');


import { createRouter, createWebHistory } from 'vue-router';
import CardContainer from './components/CardContainer.vue';
import CardDetails from './components/CardDetails.vue';

const routes = [
  { path: '/', redirect: '/cards' },
  { path: '/cards', component: CardContainer, name: 'card-list' },
  { path: '/cards/:id', component: CardDetails, name: 'card-details' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

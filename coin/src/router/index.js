import { createRouter, createWebHistory } from 'vue-router';
import Intro from '../views/Intro.vue';
import Search from '../views/search.vue';
import Add from '../views/add.vue';
import Star from '../views/star.vue';
const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro,
  }, 
  {
    path: '/search',
    name: 'Search',
    component: Search,
  }, 
  {
    path: '/add',
    name: 'Add',
    component: Add,
  }, 
  {
    path: '/star',
    name: 'Star',
    component: Star,
  }, 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
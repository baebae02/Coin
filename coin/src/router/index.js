import { createRouter, createWebHistory } from 'vue-router';
import Intro from '../views/Intro.vue';
import Search from '../views/Search.vue';
import Add from '../views/Add.vue';
import Star from '../views/Star.vue';
import Login from '../components/Login.vue';
import OAuth from '../views/OAuth.vue'

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
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/oauth',
    name: 'OAuth',
    component: OAuth,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

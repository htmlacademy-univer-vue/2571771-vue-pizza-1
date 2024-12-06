import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";  // Importing HomeView
import BasketView from '@/views/BasketView.vue';  // Example for other views
import RestaurantsView from '@/views/RestaurantsView.vue'; // Example for other views
import AboutView from "@/views/AboutView.vue"; // Importing AboutView
import AppHeader from "@/layouts/AppHeader.vue";  // Importing HomeView


const routes = [
  {
    path: '/',
    name: 'AppHeader',
    component: AppHeader
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/basket',
    name: 'Basket',
    component: BasketView
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: RestaurantsView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
});

export default router;
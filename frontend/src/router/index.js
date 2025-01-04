<<<<<<< HEAD
// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import HomeView from "@/views/HomeView.vue";  // Importing HomeView
import AboutView from "@/views/AboutView.vue"; // Importing AboutView

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,  // Mapping path '/' to HomeView
  },
  {
    path: "/",
    component: App,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,  // Mapping path '/about' to AboutView
  },
=======
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";  // Importing HomeView
import BasketView from '@/views/BasketView.vue';  // Example for other views
import RestaurantsView from '@/views/RestaurantsView.vue'; // Example for other views
import AboutView from "@/views/AboutView.vue"; // Importing AboutView
import AppHeader from "@/layouts/AppHeader.vue";  // Importing HomeView
import PizzaConstructorView from "@/modules/constructor/PizzaConstructorView.vue";


const routes = [
  {
    path: "/constructor",
    name: "PizzaConstructor",
    component: PizzaConstructorView,
  },
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
>>>>>>> 928f0bb (initial commit)
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
<<<<<<< HEAD
  routes,  // Using the routes array
});

export default router;
=======
  routes: [],
});

export default router;
>>>>>>> 928f0bb (initial commit)

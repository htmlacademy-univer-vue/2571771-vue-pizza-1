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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,  // Using the routes array
});

export default router;

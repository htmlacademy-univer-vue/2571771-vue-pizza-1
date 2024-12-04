import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";  // Importing HomeView
import AboutView from "@/views/AboutView.vue"; // Importing AboutView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
});

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,  // Mapping path '/' to HomeView
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,  // Mapping path '/about' to AboutView
  },
];

export default router;
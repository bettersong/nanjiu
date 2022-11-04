import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/MeteorShower",
      name: "MeteorShower",
      component: () => import("../views/MeteorShower.vue"),
    },
    {
      path: "/chipBanner",
      name: "ChipBanner",
      component: () => import("../views/ChipBanner.vue"),
    },
  ],
});

export default router;

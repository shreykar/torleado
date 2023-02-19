import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import Login from "../components/Login.vue";
import store from "../store";
import authChecker from "./router_helper";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "auth",
    component: AuthView,
    children: [
      {
        path: "/login",
        name: "login",
        component: Login,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});
router.beforeEach((to, from, next) => {
  authChecker(to, from, next, store.state.isAuthenticated);
});
export default router;

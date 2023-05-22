import {
  createRouter,
  createWebHistory
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import EditProfile from "@/components/EditProfile.vue";
import AuthView from "../views/AuthView.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import store from '../store/index.js'
import authChecker from "./router_helper";

const routes = [{
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
    children: [{
      path: "/edit-profile",
      name: "edit-profile",
      component: EditProfile,
    }]
  },
  {
    path: "/login",
    name: "auth",
    component: AuthView,
    children: [{
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/signup",
        name: "signup",
        component: Signup,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});
router.beforeEach((to, from, next) => {

  authChecker(to, from, next, store.state.user.isLoggedIn);
  // authChecker(to, from, next, true);
});
export default router;
import {
  mount
} from "@vue/test-utils";
import {
  createRouter,
  createWebHistory
} from "vue-router";
import AuthView from "../../src/views/AuthView";
import HomeView from "../../src/views/HomeView";
import authChecker from "../../src/router/router_helper";
import App from "../../src/App.vue";

const routes = [{
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: AuthView,
  },
];

function runRouterTest(viewString, view, isStr, isAuthenticated) {
  describe("App", () => {
    it(viewString + " rendered when user " + isStr + " logged in", async () => {
      const router = createRouter({
        history: createWebHistory(),
        routes: routes,
      });
      router.beforeEach((to, from, next) => {
        authChecker(to, from, next, isAuthenticated);
      });
      router.push("/");
      await router.isReady();
      const wrapper = mount(App, {
        global: {
          plugins: [router],
        },
      });
      expect(wrapper.findComponent(view).exists()).toBe(true);
    });
  });
}

// Not logged in, render Auth View
runRouterTest("AuthView", AuthView, "is Not", false);

// Logged in, render Home View
runRouterTest("HomeView", HomeView, "is", true);
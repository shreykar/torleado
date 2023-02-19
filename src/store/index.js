import { createStore } from "vuex";

export default createStore({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
  },
  getters: {},
  actions: {},
  modules: {},
});

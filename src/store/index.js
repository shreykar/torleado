import { createStore } from 'vuex'
import user from './modules/user'

const store = createStore({
  modules: {
    user
  }
})

export default store

// import { createStore } from "vuex";
// export default createStore({
//   state: {
//     isAuthenticated: false,
//   },
//   mutations: {
//     setIsAuthenticated(state, payload) {
//       state.isAuthenticated = payload;
//     },
//   },
//   getters: {},
//   actions: {},
//   modules: {},
// });
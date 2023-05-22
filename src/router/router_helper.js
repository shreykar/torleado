import {
  get
} from "../services/user";

export default function (to, from, next, isAuthenticated) {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      get().then((result) => {
        if (result.data.user && result.data.user.id) {
          // this.login(result.data.user)
          next()
        } else {
          next({
            name: "login",
            path: "/login",
          });
        }
      }).catch((err) => {
        next({
          name: "login",
          path: "/login",
        });
      });

      // next({
      //   name: "login",
      //   path: "/login",
      // });


    } else {
      next();
    }
  } else {
    next();
  }
}

export default function (to, from, next, isAuthenticated) {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isAuthenticated === false) {
      next({
        name: "login",
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
}

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/home",
  },
  // home cart list(分类) my
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/List"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart"),
  },
  {
    path: "/my",
    name: "My",
    component: () => import("../views/My"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

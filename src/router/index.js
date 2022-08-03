import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
// 修改 原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err=>err)
}


const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/search",
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
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search"),
    children: [
      {
        path: "/",
        name: "seachhistoy",
        component: () => import("../views/Search/SearchHistory.vue"),
      },
      {
        path: "/searchlist",
        name: "SearchList",
        props($route) {
          return {
            searchWord: $route.query.searchWord,
          };
        },
        component: () => import("../views/Search/SearchList.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
<<<<<<< HEAD
// import UserCompo from "../components/UserCompo.vue";

// const User = {
//   template: "<div>UserPage</div>",
// };
=======
import DemoView from "../views/DemoView.vue";
import PropRouteView from "../views/PropRouteView.vue";
>>>>>>> f959e090849d2addfec35312ef66ec5c6305bc15

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/prop/:id",
    name: "prop",
    component: PropRouteView,
    props: true,
  },
  {
    path: "/demo/:id",
    name: "demo",
    component: DemoView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/user1",
    // name: "user",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/User1View.vue"),
  },
  {
    path: "/user2",
    // name: "user",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/User2View.vue"),
  },
  {
    path: "/user/:id",
    // name: "user",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UserView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

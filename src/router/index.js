import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogDetailView from "../views/BlogDetailView.vue";
import NotFound from "../views/NotFound.vue";
import LoginpageView from "../views/Auth/LoginpageView.vue";
import RegisterpageView from "../views/Auth/RegisterpageView.vue";
import ProfilepageView from "../views/Auth/ProfilepageView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginpageView,
    meta: {
      noAuthReq: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterpageView,
    meta: {
      noAuthReq: true,
    },
  },
  {
    path: "/blog/:id(\\d+)",
    name: "blogdetail",
    component: BlogDetailView,
    props: true,
  },
  {
    path: "/profile/:name",
    name: "profile",
    component: ProfilepageView,
    props: true,
  },
  // 404
  {
    path: "/:catchAll(.*)",
    name: "Notfound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.noAuthReq)) {
    let user =
      localStorage.getItem("authToken") === "" ||
      localStorage.getItem("authToken") === null;

    if (!user) {
      next("/");
    }
  } else {
    next();
  }
});

export default router;

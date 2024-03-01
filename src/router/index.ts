import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AboutPage from "../components/AboutPage.vue";
import RepoPage from "../components/RepoPage.vue";
import PageNotFound from "../components/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home?",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
      children: [
        { path: "/about", component: AboutPage },
        { path: "/home", component: RepoPage },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/:pathMatch(.*)",
      name: "error",
      component: PageNotFound,
    },
  ],
});

// tried to authenticate user and contorl access to different endpoints
// website about authentication and authorization implementation with Vue.js
// https://medium.com/@tahnyybelguith/authentication-and-authorization-implementation-with-vue-js-6afcbb821c85
/*
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('Token');

    if (token) {
      console.log("You have a token");
      next();
    } else {
      console.log("No token, back to login");
      next("/login");
    }
  }
});
*/

export default router;

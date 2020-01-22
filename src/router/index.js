import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import About from "../views/About.vue";
import Message from "../views/Message.vue";
import FilterMessage from "../views/FilterMessage.vue";
import Resources from "../views/Resources.vue";
import Music from "../views/Music.vue";
// import AuthSuccess from "../views/AuthSuccess.vue";

import auth from "../fb";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/message",
    name: "message",
    component: Message
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources
  },
  {
    path: "/music",
    name: "music",
    component: Music
  },
  {
    path: "/filter-message",
    name: "filter",
    component: FilterMessage
  },
  {
    path: "/check",
    name: "check",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Check.vue")
  }
  // {
  //   path: "/auth-rization",
  //   name: "auth",
  //   component: AuthSuccess
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next("/check");
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

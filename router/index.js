import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Home from "@/components/pages/Home";
import Contact from "@/components/pages/Contact";
import About from "@/components/pages/About";

import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      icon: "home",
      name: "Home",
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/contact",
      icon: "email",
      name: "Contact",
      component: Contact,
      meta: { requiresAuth: true }
    },
    {
      path: "/about",
      icon: "info",
      name: "About",
      component: About,
      meta: { requiresAuth: true }
    },
    {
      path: "/register",
      icon: "create",
      name: "SignUp",
      component: Register,
      meta: { requiresAuth: false }
    },
    {
      path: "/login",
      icon: "supervisor_account",
      name: "SignIn",
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: "*",
      name: "default",
      redirect: "/login",
      meta: { requiresAuth: false }
    }
  ]
});

// http://router.vuejs.org/en/advanced/meta.html
router.beforeEach((to, from, next) => {
  //console.log( 'beforeEach()' )

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next("login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

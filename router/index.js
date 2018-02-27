import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Home from "@/components/pages/Home";
import Main from "@/components/pages/Main";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";

import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
let errorPage = { template: `<div class="title">Page not found.</div>` };
Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/hello",
      icon: "create",
      component: Main,
      meta: { requiresAuth: true, name: "Hello" },
      children: [
        {
          path: "/home",
          icon: "home",
          component: Home,
          meta: { requiresAuth: true, name: "Home" }
        },
        {
          path: "/contact",
          icon: "email",
          component: Contact,
          meta: { requiresAuth: true, name: "Contact" }
        },
        {
          path: "/about",
          icon: "info",
          component: About,
          meta: { requiresAuth: true, name: "About" }
        }
      ]
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
      name: "errorPage",
      //redirect: "/login",
      component: errorPage,
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

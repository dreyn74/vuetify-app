import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import firebase from "firebase";
import Element from "element-ui";

import App from "./App";
import router from "./router";
import store from "./store";
import config from "./config";

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(Element);

Vue.config.productionTip = false;

/* eslint-disable no-new */
//const unsubscribe = firebase.initializeApp(config.firebaseConfig).auth().onAuthStateChanged(() => {
/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  template: "<App/>",
  components: { App },
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.state.user = firebase.auth().currentUser;
        this.$router.push("/home");
      } else {
        this.$store.state.user = null;
        if (this.$route.path !== "/login") {
          this.$router.push("/login");
        }
      }
    });
  }
});

// remove this listener so that we aren't trying to make new vue objects
// every time the auth state changes.
//unsubscribe();
//});

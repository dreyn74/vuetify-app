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
new Vue({
  el: "#app",
  store,
  router,
  template: "<App/>",
  components: { App },
  created() {
    firebase.initializeApp(config.firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.state.user = firebase.auth().currentUser;
        this.$router.push("/hello");
      } else {
        this.$store.state.user = null;
        if (this.$router.path !== "/login") {
          this.$router.push("/login");
        }
      }
    });
  }
});

<template>

  <v-app id="inspire" fluid fill-height>

    <nav-bar />
      
    <router-view />

    <app-fab />

    <app-footer />
    
  </v-app>

</template>

<script>
import store from "@/store";
import AppFooter from "@/components/layout/NavFooter";
import NavBar from "@/components/layout/NavBar";
import AppFab from "@/components/layout/AppFab";
export default {
  name: "app",
  components: {
    "nav-bar": NavBar,
    "app-fab": AppFab,
    "app-footer": AppFooter
  },
  data() {
    return {
      // drawer: false
    };
  },
  computed: {
    title() {
      return store.getters.getTitle;
    }
  }
};
</script>

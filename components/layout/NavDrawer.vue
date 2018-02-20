<template>
  <v-navigation-drawer 
    app      
    fixed
    floating
    hide-overlay 
    disable-route-watcher
    width="200"
    mobile-break-point="10240" 
    v-model="$store.state.drawer"
    :close-on-click="true"
    @click.stop="onToggle">

    <v-list dense>

      <v-list-tile
        v-for="route in this.$router.options.routes"                  
        :key="route.name" 
        :to="route.path"
        v-if="route.name !== 'default' && route.meta.requiresAuth == auth">

        <v-list-tile-action>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title @click="onToggle">{{ route.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="auth" @click="onLogout" class="logout">
        <v-list-tile-action>
          <v-icon>arrow_back</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile-content>

      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
import router from "@/router";
import store from "@/store";

export default {
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    onLogout: function() {
      //this.$store.dispatch("signOut/FIREBASE_SIGN_OUT").then(() => {
      this.$store.dispatch("SIGN_OUT_USER");
      router.replace("/login");
      //});
    },
    onToggle: function() {
      console.log("onToggle");
      this.$store.dispatch("TOGGLE_DRAWER");
    }
  }
};
</script>

<style>

</style>

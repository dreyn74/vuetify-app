<template>
  <!--v-navigation-drawer 
    app      
    fixed
    dark
    floating
    hide-overlay     
    width="200"
    mobile-break-point="600" 
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
  </v-navigation-drawer-->
  <v-container fluid grid-list-md>           
    <v-layout row>  

      <v-toolbar color="cyan" fixed clipped-left dark>            
        <v-toolbar-title>Menu title</v-toolbar-title>                               
      </v-toolbar>

      <v-layout column justify-start align-center> 
        <v-flex d-flex v-for="n in 25" :key="n">
          <v-list dense>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>dashboard</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>item: {{n}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>

      <v-layout column justify-start align-start> 
        <v-flex d-flex v-for="n in 12" :key="n">
          <v-list dense>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>book</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>thing: {{n}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>               
    </v-layout>
  </v-container>
</template>

<script>
import router from "@/router";
import store from "@/store";

export default {
  computed: {
    auth() {
      return store.getters.isAuthenticated;
    }
  },
  methods: {
    onLogout: function() {
      //store.dispatch("signOut/FIREBASE_SIGN_OUT").then(() => {
      store.dispatch("SIGN_OUT_USER");
      router.replace("/login");
      //});
    },
    onToggle: function() {
      console.log("onToggle");
      store.dispatch("TOGGLE_DRAWER");
    }
  }
};
</script>

<style>

</style>

<template>
  <div>
    <v-navigation-drawer app floating dark fixed v-model="drawer" mobile-break-point="960">
      <nav-drawer />
    </v-navigation-drawer>  

    <v-toolbar app fixed color="blue-grey">

      <!--v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" style="color: white" /-->
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" style="color: white" />

      <v-toolbar-title style="color:white">{{ routerTitle }}</v-toolbar-title>    
    
      <v-spacer />

      <v-btn icon>
        <v-icon style="color: white">search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon style="color: white">more_vert</v-icon>
      </v-btn>
      
      <v-tabs centered color="cyan" slot="extension" v-model="tab" grow>

        <v-tabs-slider color="yellow" />   

        <v-tab id="tab-1" :to="{path:'/home'}" class="active">
          <v-icon>home</v-icon>
            Home
        </v-tab>  

        <v-tab id="tab-2" :to="{path:'/about'}">        
          <v-icon>info</v-icon>
            About
          </v-tab>

        <v-tab id="tab-3" :to="{path:'/contact'}">       
          <v-icon>account_box</v-icon>
            Contact
        </v-tab>

      </v-tabs>
    
    </v-toolbar>

  </div>

</template>

<script>
import NavDrawer from "@/components/layout/NavDrawer";
import store from "@/store";
export default {
  components: {
    "nav-drawer": NavDrawer
  },
  data() {
    return {
      drawer: null,
      tab: "tab-1",
      text: ""
    };
  },
  props: ["tabName"],
  computed: {
    title() {
      return store.getters.getTitle;
    },
    routerTitle() {
      return this.$route.meta.name;
    },
    auth() {
      console.log(store.getters.isAuthenticated);
      return store.getters.isAuthenticated;
    }
  },
  methods: {
    onLogout: function() {
      store
        .dispatch("authModule/FIREBASE_SIGN_OUT")
        .then(() => {
          store.dispatch("SIGN_OUT_USER");
        })
        .then(() => {
          this.$router.replace("/login");
        });
    },
    toggleDrawer: function() {
      console.log("NavBar -> toggleDrawer() ", store.getters.getDrawer);
      store.dispatch("TOGGLE_DRAWER");
    }
  }
};
</script>

<style>
[v-cloak] > * {
  display: none;
}
[v-cloak]::before {
  content: "loading …";
}

html {
  overflow-y: auto;
}
.toolbar .title {
  color: white;
}

.toolbaritems {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
}

.toolbaritems li {
  margin: 0 16px;
}

.toolbaritems li a {
  text-decoration: none;
  color: white;
}

.toolbaritems li a:hover,
.toolbaritems li a:active,
.toolbaritems li a.router-link-active {
  color: #fa923f;
}

.logout {
  background-color: transparent;
  border: none;
  font: inherit;
  color: white;
  cursor: pointer;
}
</style>

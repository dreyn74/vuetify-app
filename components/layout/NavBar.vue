<template>
  <v-toolbar app fixed clipped-left color="blue-grey">
      <v-toolbar-side-icon class="hidden-sm-and-up" 
        @click="toggleDrawer" style="color: white">
      </v-toolbar-side-icon>

      <v-toolbar-title style="color:white">{{ title }}</v-toolbar-title>
    
      <v-spacer></v-spacer>
      
      <!--v-toolbar-items class="hidden-xs-only">
        <ul class="toolbaritems">
          <li v-if="!auth">
            <router-link to="/login">Sign In</router-link>
          </li>

          <li v-if="!auth">
            <router-link to="/register">Sign Up</router-link>
          </li>

          <li v-if="auth">
            <router-link to="/home">Home</router-link>
          </li>

          <li v-if="auth">
            <router-link to="/contact">Contact</router-link>
          </li>

          <li v-if="auth">
            <router-link to="/about">About</router-link>
          </li>

          <li v-if="auth">
            <button @click="onLogout" class="logout">Logout</button>
          </li>
        </ul>            
      </v-toolbar-items-->
      <v-tabs color="cyan" slot="extension" v-model="tab" grow>
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
  </v-toolbar>
</template>

<script>
import { store } from "@/store";

export default {
  data() {
    return {
      drawer: null,
      tab: null,
      items: ["tab1", "tab2", "tab3"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sapien nisi, quis porta lacus ultricies ut. Integer justo arcu, auctor et porta quis, luctus in lorem. Sed accumsan ex vitae viverra vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin lectus dolor, dignissim eu nulla nec, imperdiet varius urna. Donec ac mollis turpis. Donec malesuada ac enim id tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus ut leo in blandit. Duis eget rutrum erat, eu feugiat quam. Donec a lorem et eros varius vulputate sit amet ac risus. Nullam vulputate luctus massa eu condimentum. Curabitur eget tellus non neque imperdiet imperdiet sodales ac ipsum. In velit magna, euismod eu sodales et, lacinia ac mi. Mauris lectus sapien, eleifend id turpis nec, laoreet suscipit dui."
    };
  },
  computed: {
    title() {
      return this.$store.getters.getTitle;
    },

    auth() {
      console.log(this.$store.getters.isAuthenticated);

      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    onLogout: function() {
      this.$store
        .dispatch("authModule/FIREBASE_SIGN_OUT")
        .then(() => {
          this.$store.dispatch("SIGN_OUT_USER");
        })
        .then(() => {
          this.$router.replace("/login");
        });
    },
    toggleDrawer: function() {
      console.log("NavBar -> toggleDrawer() ", this.$store.getters.getDrawer);
      this.$store.dispatch("TOGGLE_DRAWER");
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

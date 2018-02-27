<template>
  <v-speed-dial absolute top right direction="top">
    <v-btn slot="activator" fab color="yellow darken-3">
      <v-icon>apps</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
        
    <v-dialog width="400px" persistent>
      <v-btn fab slot="activator" color="yellow darken-2" ><v-icon>delete</v-icon></v-btn>
      <v-btn fab slot="activator"><v-icon>add</v-icon></v-btn>
      <v-btn fab slot="activator" @click="toggleDrawer"><v-icon>star</v-icon></v-btn>   
    </v-dialog>

  </v-speed-dial>
</template>

<script>
import store from "@/store";
export default {
  methods: {
    toggleDrawer: function() {
      console.log("fab -> toggleDrawer() ", store.getters.getDrawer);
      store.dispatch("TOGGLE_DRAWER");
    }
  }
};
</script>

<style scoped>
.speed-dial {
  top: 85vh !important;
}
</style>

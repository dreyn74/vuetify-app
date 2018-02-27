<template>

  <v-content fluid fill-height>
    
    <v-container fluid fill-height>
    
      <v-layout justify-center align-center>
    
        <router-view />

      </v-layout>

    </v-container>

  </v-content>

</template>

<script>
import store from "@/store";

export default {
  name: "app",
  components: {},
  data() {
    return {
      //drawer: null
    };
  },
  computed: {
    routerTitle() {
      return this.$route.meta.name;
    }
  }
};
</script>

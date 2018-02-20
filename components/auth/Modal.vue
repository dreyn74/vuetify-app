<template>
    <v-modal v-model="modal" :show="show" @close="close">
      <v-btn slot="activator" primary dark>Modal</v-btn>
     
      <v-card>
        <v-card-text>
          <h2 class="title">Use Google's location service?</h2>
        </v-card-text>

        <v-card-text class="subheading grey--text">
          Let google help apps determine location. This means sending 
          anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-row actions>
          <v-spacer></v-spacer>
          <v-btn flat v-on:click.native="modal = false" class="primary--text">Cancel</v-btn>
          <v-btn flat v-on:click.native="modal = false" class="primary--text">Submit</v-btn>
        </v-card-row>
      </v-card>
    </v-modal>
</template>

<script>
  export default {
    methods: {
      close: function () {
        this.$emit('close');
      }
    }
  }
</script>

<style></style>
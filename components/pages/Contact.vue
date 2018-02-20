<template>
 <main>
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-card height="300px">
          <v-container fill-height>
            <v-layout align-center justify-center>
              <v-card-text>
                <div style="min-width:300px;text-align:center">
                  ... Contact ...
                </div>                  
              </v-card-text>
            </v-layout>
          </v-container>
        </v-card>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
  export default {
    mounted() 
    {
      this.title()
    }

    , methods: 
    {
      title() 
      {
        this.$store.dispatch( 'CHANGE_APPLICATION_TITLE', "Contact" )
      }
    }
  }
</script>

<style></style>
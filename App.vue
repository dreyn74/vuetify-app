<template>
    <v-app id="app" fluid fill-height>

      <app-header></app-header>

      <v-content fluid fill-height>
        
        <v-container fluid fill-height>
        
          <v-layout justify-center align-center>
            <router-view></router-view>
          </v-layout>

        </v-container>

      </v-content>
      
      <app-fab></app-fab>

      <app-footer></app-footer>
    </v-app>
</template>

<script>
  import NavBar from "@/components/layout/NavBar"
  import NavDrawer from "@/components/layout/NavDrawer"  
  import NavFooter from "@/components/layout/NavFooter"  
  import SpeedDial from "@/components/layout/SpeedDial"
  import NavHeader from "@/components/layout/NavHeader"

  export default 
  {
    name: "app"
    , components: 
    {
      appToolbar: NavBar,
      appDrawer: NavDrawer,
      appFooter: NavFooter,      
      appFab: SpeedDial,
      appHeader: NavHeader
    }
  }
</script>
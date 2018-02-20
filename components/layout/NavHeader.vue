<template>
  <div>
    <app-drawer></app-drawer>
    <app-toolbar></app-toolbar>
  </div>
</template>

<script>
  import NavDrawer from '@/components/layout/NavDrawer'
  import NavBar from '@/components/layout/NavBar'
  
  export default 
  {
    components: 
    {
      appDrawer: NavDrawer
      , appToolbar: NavBar      
    }
  }
</script>

<style></style>
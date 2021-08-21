<template>
  
  <v-app>
    <app-bar />

    <app-drawer />

    <app-view />
  </v-app>
</template>

<script>
export default {

    name: 'Base',
    components: {
      AppBar: () => import('../components/base/AppBar'),
      AppDrawer: () => import('../components/base/Drawer'),
      AppView: () => import('../components/base/View'),
    },

    mounted(){
      this.$store.dispatch("GET_USER");
      this.$store.dispatch("connect_to_websocket")
    },

}
</script>

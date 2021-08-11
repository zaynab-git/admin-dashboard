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

    created(){
      this.$store.dispatch("GET_USER");
    }
}
</script>

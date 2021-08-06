<template>
  <v-app>
    <app-bar />

    <drawer />

    <!-- <dashboard-core-view /> -->
  </v-app>
</template>

<script>
export default {

    name: 'Base',
    components: {
      AppBar: () => import('../components/base/AppBar'),
      Drawer: () => import('../components/base/Drawer'),
    //   DashboardCoreView: () => import('../components/base/View'),
    },

}
</script>

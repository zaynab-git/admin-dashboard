<template>
  <v-app>
    <dashboard-core-app-bar />

    <!-- <dashboard-core-drawer /> -->

    <!-- <dashboard-core-view /> -->
  </v-app>
</template>

<script>
export default {

    name: 'Base',
    components: {
      DashboardCoreAppBar: () => import('../components/base/AppBar'),
    //   DashboardCoreDrawer: () => import('../components/base/Drawer'),
    //   DashboardCoreView: () => import('../components/base/View'),
    },

}
</script>

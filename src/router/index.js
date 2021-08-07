import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/Base'),
      children: [
        {
          name: 'Table',
          path: '',
          component: () => import('@/views/Table'),
        },
        {
          name: 'Setting',
          path: 'setting',
          component: () => import('@/views/Setting'),
        },
      //   {
      //     name: 'Notifications',
      //     path: 'components/notifications',
      //     component: () => import('@/views/dashboard/component/Notifications'),
      //   },
      //   {
      //     name: 'Icons',
      //     path: 'components/icons',
      //     component: () => import('@/views/dashboard/component/Icons'),
      //   },
      //   {
      //     name: 'Typography',
      //     path: 'components/typography',
      //     component: () => import('@/views/dashboard/component/Typography'),
      //   },
      //   // Tables
      //   {
      //     name: 'Regular Tables',
      //     path: 'tables/regular-tables',
      //     component: () => import('@/views/dashboard/tables/RegularTables'),
      //   },
      //   // Maps
      //   {
      //     name: 'Google Maps',
      //     path: 'maps/google-maps',
      //     component: () => import('@/views/dashboard/maps/GoogleMaps'),
      //   },
      //   // Upgrade
      //   {
      //     name: 'Upgrade',
      //     path: 'upgrade',
      //     component: () => import('@/views/dashboard/Upgrade'),
      //   },
      ],
    },
  ],
})
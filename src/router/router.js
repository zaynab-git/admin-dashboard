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
      meta: {
        requiresAuth: true
      },
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
        {
          name: 'Profile',
          path: 'profile',
          component: () => import('@/views/Profile'),
        },
      ],
    },
    {
      path: '/login',
      name: 'LogIn',
      component: () => import('@/views/LogIn'),
    }
  ],
})
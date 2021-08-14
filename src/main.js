import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import vuetify from "./plugins/vuetify";
import i18n from './i18n'

Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {

  if (store.getters.isLoggedIn) {
    if (to.path == '/login') {
      next('/')
    }
    next()
  }
  else {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      next('login')
    }
    next()
  }
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

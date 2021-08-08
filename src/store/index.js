import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: null,

    currentLanguage: {
      name: "English",
      value: "en",
      rtl: false
    },

    languages:
    [
      {
        name: "English",
        value: "en",
        rtl: false
      },
      {
        name: "فارسی",
        value: "fa",
        rtl: true
      }
    ]
  },

  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_LANGUAGE (state, payload) {
      state.currentLanguage = payload.language
      payload.i18n.locale = payload.language.value
      payload.vuetify.rtl = payload.language.rtl
      payload.vuetify.lang.current = payload.language.value
    },
  },
  actions: {

  },
});

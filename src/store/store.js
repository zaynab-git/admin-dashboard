import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    user: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
    },

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
    SET_USER (state, payload) {
      state.user.firstName = payload.first_name;
      state.user.lastName = payload.last_name;
      state.user.email = payload.email;
      state.user.phoneNumber = payload.phone_number;
      state.user.userName = payload.user_name;
    },
  },

  actions: {
    GET_USER () {
      axios.get('http://127.0.0.1:4010/users/zeynab')
        .then(response => {
          this.commit('SET_USER', response.data)
        })
    }
  }
});

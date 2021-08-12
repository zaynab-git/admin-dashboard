import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',

    vuetify: '',
    i18n: '',


    user: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      userName: "",
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

  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },

  mutations: {

    set_vuetifyandi18n (state, payload) {
        state.vuetify = payload.vuetify
        state.i18n = payload.i18n
    },

    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_LANGUAGE (state, payload) {
      if (payload != ''){
        state.currentLanguage = payload
        state.i18n.locale = payload.value
        state.vuetify.rtl = payload.rtl
        state.vuetify.lang.current = payload.value
        localStorage.setItem('language', JSON.stringify(payload))
      }
  
    },
    SET_USER (state, payload) {
      state.user.firstName = payload.first_name;
      state.user.lastName = payload.last_name;
      state.user.email = payload.email;
      state.user.phoneNumber = payload.phone_number;
      state.user.userName = payload.username;
    },
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token){
      state.status = 'success'
      state.token = token
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },

  actions: {
    GET_USER () {
      axios.get('http://127.0.0.1:4010/users/zeynab',
      {
        headers: {
          'Authorization': this.state.token
        }
      })
        .then(response => {
          this.commit('SET_USER', response.data)
        })
    },

    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://127.0.0.1:4010/users', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          localStorage.setItem('token', token)
          commit('auth_success', token)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },

    logout({commit}){
      return new Promise((resolve) => {
        commit('logout')
        commit('SET_LANGUAGE',this.state.languages[0])
        localStorage.removeItem('token')
        localStorage.removeItem('language')
        resolve()
      })
    }

  }
});

<template>
  <router-view />
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),

  mounted() {
    var language = JSON.parse(localStorage.getItem('language')) || '' ;
    console.log(language)
    this.$store.commit('set_vuetifyandi18n',{i18n: this.$i18n, vuetify: this.$vuetify})
    this.$store.commit('SET_LANGUAGE',language)
  }

};
</script>

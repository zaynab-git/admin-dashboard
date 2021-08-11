<template>
        <v-col class="ma-5">
            <v-row>
                <v-card>
                    <v-card-title>{{ $t("setting.language") }}</v-card-title>
                    <v-select
                    v-model="language"
                    :items="this.$store.state.languages"
                    item-text="name"
                    return-object
                    class="mx-3"
                    ></v-select>            
                </v-card>
            </v-row>
        </v-col>
</template>

<script>

export default {
    name: "Setting",
    data: () => ({
        //
    }),
    

    computed: {
      language: {
          get() {
              return this.$store.state.currentLanguage
          },
          set(value) {
            this.$store.commit('SET_LANGUAGE',{language: value, i18n: this.$i18n, vuetify: this.$vuetify})
          }
      }
    },
}
</script>

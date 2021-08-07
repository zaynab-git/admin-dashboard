<template>
        <v-col class="ma-5">
            <v-row>
                <v-card>
                    <v-card-title>{{ $t("language") }}</v-card-title>
                    <v-autocomplete
                    auto-select-first
                    outlined
                    dense
                    v-model="value"
                    :items="items"
                    class="mx-3"
                    @change="changeLanguage(value)"
                    ></v-autocomplete>            
                </v-card>
            </v-row>
        </v-col>
</template>

<script>
export default {
    name: "Setting",
    data: () => ({
        items: ['English', 'Persian'],
        value: 'English',
        lang: {
            "English": 'en',
            "Persian": 'fa'
      }
    }),
    methods: {
        changeLanguage: function(name) {
            this.$i18n.locale = this.lang[name]
            this.$vuetify.rtl = true
        }
    }
}
</script>

<style>

</style>
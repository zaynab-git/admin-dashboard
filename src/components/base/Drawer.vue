<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    mobile-breakpoint="960"
    :right="this.$store.state.currentLanguage.rtl"
  >

    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ $t("name") }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $t("welcome") }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :to="item.to"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

  </v-navigation-drawer>
</template>

<script>

  export default {
    name: 'Drawer',

    data: () => ({
      items: [
          { title: "dashboard", icon: 'mdi-view-dashboard', to: '/' },
          { title: "setting", icon: 'mdi-cog', to: '/setting' },
        //   { title: "about", icon: 'mdi-help-box', to: '/about' },
        ],
    }),

    computed: {
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
    },


  }
</script>

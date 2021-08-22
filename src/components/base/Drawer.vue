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
            {{ this.$store.state.user.userName }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $t("drawer.subtitle") }}
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

      <template v-slot:append>
      <v-list-item
      link
      @click="logOut"
      >
        <v-list-item-icon >
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="caption">{{ $t('drawer.log-out') }}</v-list-item-title>
          </v-list-item-content>
      </v-list-item>
    </template>

  </v-navigation-drawer>
</template>

<script>

  export default {
    name: 'Drawer',

    data: () => ({
      items: [
          { title: "drawer.dashboard", icon: 'mdi-view-dashboard', to: '/' },
          { title: "drawer.setting", icon: 'mdi-cog', to: '/setting' },
          { title: "drawer.profile", icon: 'mdi-account', to: '/profile' },
          { title: "drawer.chat", icon: 'mdi-chat-question', to: '/chat' },

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

    methods: {
      logOut: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    }


  }
</script>

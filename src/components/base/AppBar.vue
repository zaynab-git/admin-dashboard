<template>
  <v-app-bar
    app
    absolute
    clipped-left
    dense
    fixed
    color="transparent"
    height="75"
  >
    <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)"></v-app-bar-nav-icon>

    <v-toolbar-title class="hidden-sm">
      {{ $t("bar.dashboard") }}
    </v-toolbar-title>

    <v-spacer />

    <v-text-field
      :label="$t('bar.search')"
      color="secondary"
      hide-details
      style="max-width: 165px"
    >
      <template v-slot:append-outer>
        <v-btn class="mt-n2" elevation="1" fab small>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-text-field>

    <v-btn class="ml-2 mb-1" text color="transparent" to="/">
      <v-img
        class="rounded-circle"
        min-width="45"
        max-height="45"
        max-width="45"
        src="@/assets/zeynab.jpg"
      ></v-img>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "AppBar",

  data: () => ({
    //
  }),

  computed: {
    ...mapState(["drawer"]),
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>

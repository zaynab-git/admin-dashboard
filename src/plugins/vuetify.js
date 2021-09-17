import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

import fa from "vuetify/lib/locale/fa";
import en from "vuetify/lib/locale/en";

export default new Vuetify({
  lang: {
    locales: { fa, en },
    current: "en",
  },
});

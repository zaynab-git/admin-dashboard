import Vue from "vue";
import vuetify from "vuetify";
import VueI18n from "vue-i18n";
import { config } from '@vue/test-utils'

Vue.use(vuetify)
Vue.use(VueI18n);

Vue.config.productionTip = false;
config.mocks["$t"] = (msg) => msg


module.exports = {
    i18n: new VueI18n({
        locale: "en",
        fallbackLocale: "en",
        messages: 
        {
            en: JSON.parse(JSON.stringify(require('@/locales/en.json'))),
            fa: JSON.parse(JSON.stringify(require('@/locales/fa.json'))),
        }
      })
  }
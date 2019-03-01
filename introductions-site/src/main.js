import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VFadeTransition
} from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";
import "vuetify/src/stylus/app.styl";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VFadeTransition
  },
  directives: {
    Ripple
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");

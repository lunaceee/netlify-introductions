import Vue from "vue";
import Vuetify, { VLayout } from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "mdi", // 'md' || 'mdi' || 'fa' || 'fa4'
  theme: {
    primary: "#ee44aa",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  },
  iconfont: "md",
  components: { VLayout }
});

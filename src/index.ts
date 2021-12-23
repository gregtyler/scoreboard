import Vue from "vue/dist/vue.runtime.common.dev.js";
import App from "./components/App.vue";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: function (h) {
    return h("App");
  },
  components: { App },
});

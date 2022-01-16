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

/** Service worker **/
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then((reg) => {
    reg.addEventListener("updatefound", function () {
      console.log(
        "A new version of this application is availalllble. Refresh to update."
      );
    });
  });
}

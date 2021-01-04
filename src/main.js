import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Environments, HandCashConnect } from "@handcash/handcash-connect";

Vue.config.productionTip = false;

const hcAppId = ""; //Insert HandCash's app ID here

Vue.prototype.hcConnect = new HandCashConnect(hcAppId, Environments.beta);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

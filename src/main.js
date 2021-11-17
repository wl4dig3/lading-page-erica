import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import icons from "./fontawesome";

library.add({ ...icons });

// Vue.config.productionTip = false

createApp(App)
  .component("font-awesome", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");

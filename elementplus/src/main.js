import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//element-plus 환경 세팅
import "element-plus/dist/index.css";
import Elementplus from "element-plus";
//bootstrap 환경 세팅
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(Elementplus).use(store).use(router).mount("#app");

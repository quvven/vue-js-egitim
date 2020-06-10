import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes";
import axios from 'axios'

axios.defaults.baseURL = "https://vue-axios-7e4a5.firebaseio.com";
axios.defaults.headers.common["Authorization"] = "Token xxxxxxxxxxxxxxx";
axios.defaults.headers.get["Accepts"] = "application/json";


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

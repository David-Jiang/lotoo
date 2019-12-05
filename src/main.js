import Vue from "vue"
import axios from "axios"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "iview"
import "iview/dist/styles/iview.css"

import App from "./App"

const axiosInstance = axios.create({
  baseURL: "https://lottoexample.azurewebsites.net/api",
})
Vue.prototype.$IVIEW = { transfer: "" }
Vue.prototype.$http = axiosInstance
Vue.config.productionTip = false

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
})

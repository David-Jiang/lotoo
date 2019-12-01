import Vue from "vue"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"

import App from "./App"

Vue.config.productionTip = false

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
})

import Vue from "vue"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "iview"
import "iview/dist/styles/iview.css"

import App from "./App"

Vue.config.productionTip = false
Vue.prototype.$IVIEW = { transfer: "" }

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
})

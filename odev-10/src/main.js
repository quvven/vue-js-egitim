import Vue from 'vue'
import App from './App.vue'

Vue.directive("text-change", {
  bind(e,b,v) {
    if(typeof b.value === "function") {
      e.onkeyup = function () {
        b.value(e);
      }
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'

const eventHub = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})

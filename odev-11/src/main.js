import Vue from 'vue'
import App from './App.vue'


Vue.filter("withLength", (val) =>{
  return val!==undefined ? val + " (" + val.length + ")": "";
});

new Vue({
  el: '#app',
  render: h => h(App)
})

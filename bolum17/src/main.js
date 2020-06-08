import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history', /// hash: /#/ - history: /
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return {
        selector: to.hash // url hash position....
      }   
    }
    // return {
    //   // x: 0, y: 800
    // }
  }
});

router.beforeEach((to, from, next)=>{
  console.log("Global Control.....");
  

  next(); // <--- required or next({path:'/user'}); or next("/user"); possible...
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

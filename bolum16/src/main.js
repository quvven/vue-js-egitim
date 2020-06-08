import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = "https://vue-resource-5458c.firebaseio.com/";

Vue.http.interceptors.push((req, next)=>{
  console.log(req.method);
  // if(req.method === "POST") {
  //   req.method = "PUT";
  // }
  // next();
});

Vue.http.interceptors.push((req, next)=>{
  console.log(req.method);

  next((res)=>{
    // console.log(res);
    res.json = () => {
      return {
        userlist: res.body
      }
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})

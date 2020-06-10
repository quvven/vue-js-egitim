<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>

    <div v-for="post in postlist" :key="post.id" class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div class="card m-1">
        <img class="card-img-top" :src="post.thumbnail" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{post.title}}</h5>
          <p class="card-text">{{post.previewText}}</p>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
  // import axios from 'axios';
  import customAxios from '../custom_axios'
  export default {
    data() {
      return {
        postlist: []
      }
    },
    created() {
      // axios.get("https://vue-axios-7e4a5.firebaseio.com/posts.json")
      // axios.get("/posts.json")
      customAxios.get("/posts.json")
      .then(res=>{
        console.log(res);
        let data = res.data;
        for(let key in data) {
          this.postlist.push({
            ...data[key], id: key
          })
        }
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
</script>
<style>
  .card {
    width: 300px;
  }
</style>

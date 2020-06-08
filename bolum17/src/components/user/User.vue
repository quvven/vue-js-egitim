<template>
  <div class="container">
    <router-view></router-view>
    <hr>
    <hr>
    <button class="btn btn-warning" @click="navigateToHome">Go Home</button>
    <button class="btn btn-warning" @click="navigateToId">Go ID 10</button>
    <a class="btn btn-success" href="/user/10">Go ID 10</a>
    <p>
      User ID: {{ userid }}
    </p>
    <p>
      User ID: {{ id }}
    </p>
    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        userid: this.$route.params.id,
        id: this.$route.params.id,
      }
    },
    methods: {
      navigateToHome() {
        // this.$router.push("/");
        // this.$router.push({path: "/"});
        this.$router.push({name: "home"});
      },
      navigateToId() {
        this.$router.push("/user/10");
      }
    },
    watch: {
      "$route"(to, from) {
        this.id = to.params.id;
      }
    },
    beforeRouteEnter: (to, from, next)=> {
        console.log("Component Level Control......");
        // this.variable_of_data << not working....
        next(); // <--- required or next({path:'/user'}); or next("/user"); possible...
        // next(false); // <-- disable route...
    },
    beforeRouteLeave: (to, from, next)=> {
        console.log("Component Level Leave Control......");
        // this.variable_of_data << is working....
        if(confirm("Emin Misiniz?")) {
          next();
        } else {
          next(false);
        }
        

    }
  }
</script>

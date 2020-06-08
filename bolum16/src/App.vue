<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="username">
        </div>
        <button class="btn btn-primary" @click="save">Kaydet</button>
        <button class="btn btn-success" @click="get">Oku</button>
        <hr>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in userlist" :key="user.key">
            {{user.data.userName}}
            <button class="btn btn-sm btn-warning" @click="del(user.key)" :key="user.key">Sil</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      userlist: []
    }
  },
  methods: {
    save() {
      this.$http.post("users.json", {
        userName: this.username
      }).then((res) => {
        console.log(res);
      });

      // this.$resource("users.json").save({/* options */}, {
      //   userName: this.username
      // })
    },
    get() {
      this.userlist = [];
      this.$http.get("users.json")
      .then((res)=> {
        // let data = res.data;
        // for(let key in data) {
        //   console.log(data[key])
        //   this.userlist.push(data[key]);
        // }
        return res.json();
      }).then((data) => {
        for(let key in data.userlist) {
          this.userlist.push({
            key: key,
            data: data.userlist[key]
          })
        }
      })
    },
    del(userKey) {
      this.$http.delete( "users/" + userKey +".json").then((res) => {
        console.log(res);
      });
    }
  }
}
</script>

<style>
</style>

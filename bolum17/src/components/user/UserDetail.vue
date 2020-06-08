<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>
      User ID: {{ $route.params.id }}
    </p>
      <br>
      <router-link
        tag="button"
        class="btn btn-primary"
        :to="'/users/' + $route.params.id + '/edit'"
      >Edit</router-link>
      <br>
      <router-link
        tag="button"
        class="btn btn-success"
        :to="{name: 'usersEdit', params: { id: $route.params.id }}"
      >Edit</router-link>
      <br>
      <router-link
        tag="button"
        class="btn btn-success"
        :to="{name: 'usersEdit', params: { id: $route.params.id }, query: {name: 'deneme', surname: 'test'}}"
      >Edit</router-link>
      <br>
      <router-link
        tag="button"
        class="btn btn-success"
        :to="{ name: 'usersDetail', params: {id: $route.params.id }, query: {}, hash: '#data' }"
      >Move</router-link>
      <br>
      
    <div id="data" style="height:800px;">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Magni ab impedit quae placeat a. Adipisci quidem similique mollitia,
      ipsum voluptatem incidunt nihil voluptate nulla maiores facere porro vero fugit qui!
    </div>
    
    <div id="data2" style="height:800px;">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Magni ab impedit quae placeat a. Adipisci quidem similique mollitia,
      ipsum voluptatem incidunt nihil voluptate nulla maiores facere porro vero fugit qui!
    </div>
    
    <div id="data3" style="height:800px;">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Magni ab impedit quae placeat a. Adipisci quidem similique mollitia,
      ipsum voluptatem incidunt nihil voluptate nulla maiores facere porro vero fugit qui!
    </div>
  </div>
</template>
<script>
  export default {}
</script>

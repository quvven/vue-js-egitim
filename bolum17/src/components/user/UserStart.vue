<template>
  <div class="container">
    <h3>User Start Component</h3>
    <hr>
    <ul class="list-group-item">
      <router-link tag="li" class="list-group-item" to="/users/1">
        <a>User 1</a>
      </router-link>
      <router-link tag="li" class="list-group-item" to="/users/2">
        <a>User 2</a>
      </router-link>
      <router-link tag="li" class="list-group-item" to="/users/3">
        <a>User 3</a>
      </router-link>
      <router-link tag="li" class="list-group-item" to="/users/4">
        <a>User 4</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {}
</script>

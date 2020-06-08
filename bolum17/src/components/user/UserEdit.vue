<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>
      Name: {{ $route.query.name }}
    </p>
    <p>
      Surname: {{ $route.query.surname }}
    </p>
  </div>
</template>
<script>
  export default {}
</script>

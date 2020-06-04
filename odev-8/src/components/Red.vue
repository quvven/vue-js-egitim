<template>
  <div>
    <p>
      <slot name="title">Değer gelmedi...</slot>
    </p>
    <hr>
    <p>
      <slot name="content"></slot>
    </p>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>

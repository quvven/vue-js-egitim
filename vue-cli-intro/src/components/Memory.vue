<template>
  <div>
    <p>{{content}}</p>
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
export default {
  props: ["content"],
  destroyed() {
    console.log("destroyed...")
  },
  activated() {
    console.log("activated...")
  },
  deactivated() {
    console.log("deactivated...")
  },
}
</script>

<style scoped>
  div {
    border: 1px solid black;
    box-shadow: 1px 1px 1px gray;
    padding: 20px;
    margin: 10px 0 0 0;
  }
</style>

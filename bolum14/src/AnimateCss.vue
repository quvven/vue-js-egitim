
<template>
<div class="container">
    <div class="row">
        <button class="btn btn-primary" @click="show = !show">Göster</button>
        <hr>
        <transition
            enter-class=""
            enter-active-class="animated bounce"
            leave-class=""
            leave-active-class="animated pulse"
            appear>
            <div class="alert alert-danger" v-if="show"> deneme </div>
        </transition>
    </div>
</div>
</template>

<script>
export default {
  data() { return {
    show: true
  }}
}
</script>

<style>

</style>
<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3>Directive Sınavı</h3>
      <!-- Soru -->
      <!-- Event'leri dinleyecek v-on gibi çalışan bir Directive geliştiriniz. -->
      <input type="text" v-text-change="handleChange" />
      <p>
        {{text}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      text: ''
    }
  },
  methods: {
    handleChange : function (e) {
      this.text = e.value;
    }
  }
}
</script>

<style>
</style>

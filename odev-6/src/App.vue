<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <page-header></page-header>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <sunucular></sunucular>
      </div>
      <div class="col-xs-12 col-sm-6">
        <sunucu-bilgisi></sunucu-bilgisi>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12">
        <page-footer></page-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';
import Sunucular from './Sunucular';
import SunucuBilgisi from './SunucuBilgisi'

export default {
  components: {
    "page-header": Header,
    "page-footer": Footer,
    "sunucular": Sunucular,
    "sunucu-bilgisi": SunucuBilgisi
  }
}
</script>

<style>

</style>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <!-- Soru 1 -->
        <!-- Girmiş olduğunuz yazıyı tersten yazacak bir Filter tanımı yapınız ve bunu <p> içerisinde uygulayınız -->
          <input type="text" class="form-control" @keyup="handleReverseText">
        <p>{{ reversed | toReversed }}</p>
        <hr>
        <!-- Soru 2 -->
        <!-- Global bir Filter tanımlayarak size kelime sayısını ve kelimeyi veren bir Filter tanımı yapınız -->
        <!-- Örneğin : "videosinif.com" => videosinif.com (14) Şeklinde çıktı vermelidir -->
        <p>{{ strlength | withLength}}</p>
        <hr>
        <!-- Soru 3 -->
        <!-- Soru 1 ve 2 deki uygulamaların aynısını Computed Property kullanarak yapınız -->
        <p>{{ getReversed }}</p>
        <p>{{ getLength }}</p>

        <!-- Soru 4 -->
        <!-- 3.Uygulamadaki Computed Property'leri bir Mixin aracılığı ile tanımlayarak tekrardan kodlarınızı düzenleyiniz-->
        

      </div>
    </div>
  </div>
</template>
<script>
  import {reversedMixin} from './reversedMixin'
  export default {
    mixins: [reversedMixin],
    data() {
      return {
        // reversed : '',
        strlength: 'bu bir denemedir...'
      }
    },
    methods: {
      handleReverseText: function (e) {
        this.reversed = e.target.value
      }
    },
    filters: {
      toReversed(value) {
        return value.split("").reverse().join("")
      }
    },
    computed: {
      getReversed() {
        return this.reversed.split("").reverse().join("");
      },
      getLength() {
        return this.reversed + " (" + this.reversed.length + ")";
      }
    }

  }
</script>
<style>

</style>

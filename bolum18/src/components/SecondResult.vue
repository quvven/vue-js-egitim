<template>
  <div>
    <!-- <p class="counter-container"> Sayaç : {{ counter }}</p>
    <p class="counter-container"> Tıklama Sayaç : {{ stringCounter }}</p> -->

    <!-- <p class="counter-container"> Sayaç : {{ getDoubleCounter }}</p>
    <p class="counter-container"> Tıklama Sayaç : {{ getStringCounter }}</p> -->
    
    <p class="counter-container"> Sayaç : {{ getDouble }}</p>
    <p class="counter-container"> Tıklama Sayaç : {{ getString }}</p>

    <hr>
    <!-- <input type="text" class="form-control" :value="value" @input="setValue">
    <p>{{ value }}</p>
     -->
    <input type="text" class="form-control" v-model="valuemod">
    <p>{{ valuemod }}</p>

  </div>
</template>
<script>
  import {mapGetters} from 'vuex';

  export default {
    // props : ["counter"],
    computed : {
      ...mapGetters({
        getDouble: 'getDoubleCounter',
        getString: 'getStringCounter'
      }),
      value() {
          return this.$store.getters.getValue;
      },
      valuemod: {
        get() {
          return this.$store.getters.getValue;
        },
        set(val) {
          this.$store.dispatch("setValueAsync", val)
        }
      }
    },
    methods: {
      setValue(e) {
        this.$store.dispatch("setValueAsync", e.target.value)
      }
    }
    
    // computed : mapGetters({
    //     getDouble: 'getDoubleCounter',
    //     getString: 'getStringCounter'
    // })
    // computed : mapGetters([
    //     'getDoubleCounter',
    //     'getStringCounter'
    //   ])
    // {
    //   counter() {
    //     // return this.$store.state.counter;
        
    //     return this.$store.getters.getDoubleCounter;
    //   },
    //   stringCounter() {
    //     return this.$store.getters.getStringCounter;
    //   },

    // }
  }

</script>
<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>

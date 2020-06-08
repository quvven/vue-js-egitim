<template>
  <div>
    <!-- <button class="btn btn-success" @click="incrementCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decrementCounter">- Azalt</button> -->
    
    <button class="btn btn-success" @click="increaseCounter()">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter()">- Azalt</button>
    <hr>

    <!-- <p>ASync</p>
    <button class="btn btn-success" @click="increase">+ Arttır</button>
    <button class="btn btn-danger" @click="decrease">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increaseAsync">+ Async Arttır</button>
    <button class="btn btn-danger" @click="decreaseAsync">- Async Azalt</button> -->

    <p>ASync</p>
    <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="incrementAsync">+ Async Arttır</button>
    <button class="btn btn-danger" @click="decrementAsync">- Async Azalt</button>

    <button class="btn btn-danger" @click="decrementAsyncTime({time:2000})">- Time:2000 Async Azalt</button>

  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
  methods : {
    ...mapMutations([
      "increaseCounter", "decreaseCounter"
    ]),
    // incrementCounter(){
    //   // this.$emit("counterEvent", 1);
    //   // this.$store.state.counter++;
    //   // this.$store.commit("updateCounter", 1);
    //   this.$store.commit("increaseCounter");
    // },
    // decrementCounter(){
    //   // this.$emit("counterEvent", -1);
    //   // this.$store.state.counter--;
    //   // this.$store.commit("updateCounter", -1);
    //   this.$store.commit("decreaseCounter");
    // }
    
    ...mapActions([
      "increment", "decrement",
      "incrementAsync", "decrementAsync", "decrementAsyncTime"
    ])

    // increase() {
    //   this.$store.dispatch("increment")
    // },
    // decrease() {
    //   this.$store.dispatch("decrement")
    // },
    // increaseAsync() {
    //   this.$store.dispatch("incrementAsync")
    // },
    // decreaseAsync() {
    //   this.$store.dispatch("decrementAsync")
    // }
  }
}
</script>

<style>
</style>

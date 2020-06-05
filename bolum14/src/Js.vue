<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition Js</h3>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Göster - Gizle</button>
        <hr>
        <transition
            :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @after-enter-cancelled="afterEnterCancelled"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @after-leave-cancelled="afterLeaveCancelled"
        >
          <div class="js-anim" v-if="show">%</div>
        </transition>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { return {
    show: true,
    elementWidth: 100
  }},
  methods: {
      beforeEnter(el) {
          console.log("beforeEnter");
          this.elementWidth = 100;
          el.style.width = this.elementWidth + "px";
      },
      enter(el, done) {
          console.log("enter");
          let round = 1;
          const timer = setInterval(() => {
              el.style.width = (this.elementWidth + round * 10) + "px";
              round++;
              if (round > 20) { clearInterval(timer); done() }
          }, 50);
      },
      afterEnter(el) {
          console.log("afterEnter");
      },
      afterEnterCancelled(el) {
          console.log("afterEnterCancelled");
      },
      beforeLeave(el) {
          console.log("beforeLeave");
          this.elementWidth = 300;
          el.style.width = this.elementWidth + "px";
      },
      leave(el, done) {
          console.log("leave");
          let round = 1;
          const timer = setInterval(() => {
              el.style.width = (this.elementWidth - round * 10) + "px";
              round++;
              if (round > 20) { clearInterval(timer); done() }
          }, 50);
      },
      afterLeave(el) {
          console.log("afterLeave");
      },
      afterLeaveCancelled(el) {
          console.log("afterLeaveCancelled");
      },
  }
}
</script>

<style>
 .js-anim {
     width:300px;
     height:30px;
     background: blue;
     padding: 5px;
 }
  
</style>

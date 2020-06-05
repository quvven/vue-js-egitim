<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition Css</h3>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Göster - Gizle</button>
        <!-- <hr>
        <transition name="fade">
          <div class="alert alert-danger" v-if="show"> deneme </div>
        </transition>
        <hr>
        <transition name="slide" type="animation">
          <div class="alert alert-warning" v-if="show"> deneme </div>
        </transition>
        <hr>
        <transition name="slide" type="transition">
          <div class="alert alert-success" v-if="show"> deneme </div>
        </transition>
        <hr>
        <transition name="slide">
          <div class="alert alert-danger" v-show="show"> deneme </div>
        </transition>
        <hr>
        <transition name="slide" appear>
          <div class="alert alert-success" v-if="show"> deneme </div>
        </transition> -->
        <!-- <hr>
        <transition name="fade" mode="out-in">
          <div class="alert alert-warning" v-if="show" key="warning"> deneme </div>
          <div class="alert alert-success" v-if="!show" key="success"> deneme 2 </div>
        </transition> -->
        <!-- <hr>
        <transition name="slide">
          <div class="alert alert-warning" v-if="show"> deneme </div>
        </transition>
         -->

        <hr>
        <ul class="list-group">
          <transition-group name="slide">
            <li class="list-group-item" 
              v-for="item in liste" :key="item" @click="removeItem(item)">Number {{item}}</li>
          </transition-group>
        </ul>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { return {
    show: true,
    liste : [1,2,3,4,5]
  }},
  methods: {
    removeItem(item) {
      this.liste = this.liste.filter(i=>i!==item);
    }
  }
}
</script>

<style>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {
    /* opacity: 1; */
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
  
  .slide-enter {
      opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in .5s ease-out forwards;
    transition: opacity 1s;
  }
  .slide-leave {}
  .slide-leave-active {
    animation: slide-out .5s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }

  /* listeden eleman eklerken veya silerken */
  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);
    }
  }
  
</style>

<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <br>
            <app-header></app-header>
            <hr>
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
            
            <hr>
            <router-view name="header-top"></router-view>
        </div>
    </div>
</div>
</template>

<script>
import Header from './components/Header'
export default {
    components: {
        appHeader: Header 
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

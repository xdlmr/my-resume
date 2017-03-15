<template>
  <div class="mycontainer">
        <div class="router-content">
            <transition name="slide-fade">
               <router-view></router-view>
            </transition>
        </div>
        <v-header></v-header>
  </div>
  
</template>

<script type="text/ecmaecript-6">
 import header from './components/header/header.vue';
 export default {
   components: {
     'v-header': header
   }
 };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/index.styl'
  .slide-fade-enter-active 
    transition: all .8s ease;

  .slide-fade-leave-active 
    transition: all .8s ease;

  .slide-fade-enter, .slide-fade-leave-active
    transform: translateX(10px);
    opacity: 0;
  .router-content
    min-height:98vh
</style>

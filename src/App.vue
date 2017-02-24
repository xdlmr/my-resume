<template>
  <div class="container">
        <div class="router-content">
            <router-view></router-view>
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
</style>

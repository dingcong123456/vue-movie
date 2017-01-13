<template>
  <div id="app">

      <transition name="fade" mode="out-in">
       <router-view class="view"></router-view>
     </transition>



      <tab-bar></tab-bar>
  </div>
</template>

<script>
    import tabBar from 'components/tabBar';
  export default {
    data() {

    },

      components:{
          tabBar
      },
      methods: {


    }
  }


</script>

<style>
#app{
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  position: relative;
}



</style>

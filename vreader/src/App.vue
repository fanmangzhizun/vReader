<template>
  <div id="app">
    <router-view></router-view>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import './css/public.css'
  import  vfooter from  './components/footer.vue'
export default {
  name: 'app',
  components:{
      vfooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  width: 100%;
  height: 100%;
}
</style>

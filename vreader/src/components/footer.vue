<template>
  <div id="footer">
    <router-link :to="{name:'bookshelf'}"> <Icon type="bookmark"></Icon><span>我的书籍</span></router-link>
    <router-link :to="{name:'bookshop'}"><Icon type="ios-book"></Icon><span>书城</span></router-link>
    <router-link :to="{name:'ranking'}"><Icon type="android-list"></Icon><span>排行榜</span></router-link>
  </div>
</template>


<style scoped="">
  #footer{
    position: fixed;
    bottom: 0;
    background-color: #000000;
    width: 100%;
    height: 10%;
  }
  #footer a{
    color: #ffffff;
    display: inline-block;
    width: 33%;
    height: inherit;
    font-size: 26px;
    text-align: center;
  }

   .router-link-active{
    color: yellow !important;
  }
  #footer span{
     display: block;
     height: inherit;
    font-size: 0.6rem;
  }

</style>

<script>

</script>

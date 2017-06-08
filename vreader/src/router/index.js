import Vue from 'vue'
import Router from 'vue-router'
import  bookshelf from  '../components/bookshelf/bookshelf.vue'
import  bookshop from  '../components/bookshop/bookshop.vue'
import  ranking from  '../components/ranking/ranking.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/bookshelf',
      name:'bookshelf',
      component:bookshelf
    },
    {
      path:'/bookshop',
      name:'bookshop',
      component:bookshop
    },
    {
      path:'/ranking',
      name:'ranking',
      component:ranking
    }
  ]
})

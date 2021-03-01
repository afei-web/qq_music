import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../components/recommend/recommend.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path:"/recommend",
      component:Recommend
    }
  ]
})

export default router

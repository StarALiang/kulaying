import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import product from './views/product_list'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:index},
    {path:'/index',component:index},
    {path:'/product/:city',component:product,props:true}
  ]
})

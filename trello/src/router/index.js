import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/view/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

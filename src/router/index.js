import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: layout
    }
  ]
})

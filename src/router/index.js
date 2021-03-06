import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '../components/home'
import spxq from '../components/shangpinxiangqingye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/spxq',
      name: 'spxq',
      component: spxq
    }
  ]
})

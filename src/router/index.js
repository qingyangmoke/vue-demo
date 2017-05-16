import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello/index'
import world from '@/views/world/index'
import login from '@/views/login/index'
import vuex from '@/views/vuex/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  // base: '/demo1/dist/',
  routes: [
    {
      path: '/',
      name: 'default',
      component: Hello
    }, {
      path: '/world/:id?',
      name: 'world',
      component: world,
      alias: '/w/:id?'
    }, {
      path: '/login/:id?',
      name: 'login',
      component: login
    }, {
      path: '/vuex/:id?',
      name: 'vuex',
      component: vuex
    }
  ]
})

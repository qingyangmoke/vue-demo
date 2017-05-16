// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './stores'

Vue.config.productionTip = false

var VueResource = require('vue-resource')

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  template: '<App/>',
  components: {App},
  router,
  store
}).$mount('#app')
/**
 * Created by song on 2017/4/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import cart from './modules/cart'
import module2 from './modules/module2'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    module2
  },
  strict: debug
})

/**
 * Created by song on 2017/4/6.
 */
// import shop from '../../api/shop.js'
import * as types from '../mutation-types'

const state = {
  count: 0
}

const getters = {
  getCount: state => {
    console.log('cart getCount', types.INCREMENT)
    return state.count
  }
}

const actions = {
  checkout ({commit, state}, products) {
  }
}

// mutations负责修改state
const mutations = {
  // mutation: 添加到购物车
  [types.INCREMENT] (state, {step}) {
    state.count += step
    console.log(types.INCREMENT)
  },
  [types.DECREMENT] (state, {step}) {
    state.count -= step
    console.log(types.DECREMENT)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

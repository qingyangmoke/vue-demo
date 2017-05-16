/**
 * Created by song on 2017/4/6.
 */
import * as types from './mutation-types'

export const increment = ({commit}, step) => {
  commit(types.INCREMENT, {
    step: step
  })
}

export const decrement = ({commit}, step) => {
  commit(types.DECREMENT, {
    step: step
  })
}

import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev, // 只能在mutation里面修改数据
    state: defaultState,
    mutations,
    actions,
    getters,
    modules: {
      a: {
        namespaced: true, // 命名空间，互不干扰，用的时候加 a/
        state: {
          text: 1
        },
        mutations: {
          updateText (state, text) {
            console.log('a.state', state)
            state.text = text
          }
        },
        getters: {
          textPlus (state, getters, rootState) {
            return state.text + rootState.count
          }
        },
        actions: {
          // ctx是这个模块的东西{}
          add ({ state, commit, rootState }) {
            commit('upsdateText', rootState.count)
          }
        }
      },
      b: {
        state: {
          text: 2
        }
      }
    }
  })
}

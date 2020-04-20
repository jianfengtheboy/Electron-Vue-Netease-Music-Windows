/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 22:12:49
 * @Description: 搜索
 */
const SAVE_MAX_LENGTH = 10

let search = {
  namespaced: true,
  state: {
    searchHistory: JSON.parse(localStorage.getItem('__searchHistory__')) || []
  },
  getters: {
    searchHistory: state => state.searchHistory
  },
  mutations: {
    update: (state, val) => {
      state.searchHistory = val
    }
  },
  actions: {
    saveKeyword ({ commit, state }, keyword) {
      let words = state.searchHistory
      words.unshift(keyword)
      words = [...new Set(words)].slice(0, SAVE_MAX_LENGTH)
      commit('update', words)
      localStorage.setItem('__searchHistory__', JSON.stringify(words))
    },
    deleteKeyword ({ commit, state }, index) {
      let words = state.searchHistory
      words.splice(index, 1)
      commit('update', words)
      localStorage.setItem('__searchHistory__', JSON.stringify(words))
    },
    clearKeyword ({ commit }) {
      commit('update', [])
      localStorage.removeItem('__searchHistory__')
    }
  }
}

export default search

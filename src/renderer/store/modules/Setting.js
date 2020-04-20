/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 22:14:31
 * @Description: 设置
 */
import { remote } from 'electron'

let state = {
  downloadSongsFolders: [
    `${remote.app.getPath('music')}`
  ]
}
let getters = {
  downloadSongsFolders: state => state.downloadSongsFolders
}

let mutations = {
  add (state, folders) {
    state.downloadSongsFolders = state.downloadSongsFolders.concat(folders)
  },
  SET_FOLDERS (state, folders) {
    state.downloadSongsFolders = state.downloadSongsFolders.concat(folders)
  },
  mutateState (state, payload) {
    for (let k in payload) {
      state[k] = payload[k]
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}

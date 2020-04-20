/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 22:14:40
 * @Description: 上传
 */
const state = {
  remoteVersion: 2,
  updateContent: ''
}

const mutations = {
  SET_REMOTE_VERSION (state, version) {
    state.remoteVersion = version
  },
  SET_UPDATE_CONTENT (state, content) {
    state.updateContent = content
  }
}

export default {
  namespaced: true,
  state,
  mutations
}

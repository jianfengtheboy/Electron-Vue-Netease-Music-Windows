/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-14 18:38:49
 * @Description: vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'
import persistStatePlugin from './plugins/keep-state'
import modules from './modules'

Vue.use(Vuex)
const myPlugin = persistStatePlugin(['User', 'play', 'Localsong', 'Setting', 'Update', 'Video'])

let store = new Vuex.Store({
  modules,
  plugins: [myPlugin]
})

export default store

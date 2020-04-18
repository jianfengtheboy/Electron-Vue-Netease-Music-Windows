/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-09 22:59:00
 * @Description: vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'
import persistStatePlugin from './plugins/keep-state'
import modules from './modules'

Vue.use(Vuex)

const myPlugin = persistStatePlugin(['User', 'play', 'Localsong', 'Setting', 'Update'])

let store = new Vuex.Store({
  modules,
  plugins: [myPlugin]
})

export default store

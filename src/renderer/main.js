/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-07 13:25:41
 * @Description: main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './styles/index.less'

if ( !process.env.IS_WEB ) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

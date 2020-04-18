/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-09 13:14:16
 * @Description: main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import db from './datastore'
import './plugins/ant-design-vue'
import './plugins/vue-lazyload'
import './plugins/infinite-loading'
import './filters'
import './directives'
import createdInit from './core/createdInit'
import './styles/index.less'
import { errorCaptured } from './utils/assist'

Vue.prototype.$db = db
Vue.prototype.$errorCaptured = errorCaptured
if ( !process.env.IS_WEB ) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  created () {
    createdInit()
  },
  template: '<App/>'
}).$mount('#app')

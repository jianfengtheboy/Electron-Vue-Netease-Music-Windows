/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-09 13:05:25
 * @LastEditTime: 2020-04-09 13:06:14
 * @Description: 自定义指令
 */
import Vue from 'vue'

// 点击元素之外隐藏该元素
Vue.directive('clickOutside', {
  bind (el, binding) {
    el.__vueClickOutside__ = function documentHandle (e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    document.addEventListener('click', el.__vueClickOutside__, true)
  },
  unbind (el) {
    document.removeEventListener('click', el.__vueClickOutside__, true)
    delete el.__vueClickOutside__
  }
})

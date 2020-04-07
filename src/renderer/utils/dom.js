/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-07 13:14:02
 * @LastEditTime: 2020-04-07 13:14:13
 * @Description: dom
 */
export function debounce (func, wait) {
  let timer = null
  return function () {
    let args = arguments
    let context = this
    timer && clearTimeout(timer)
    timer = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}

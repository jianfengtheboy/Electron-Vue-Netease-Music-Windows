/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-07 13:06:47
 * @LastEditTime: 2020-04-07 13:08:20
 * @Description: banner接口
 */
import request from '@/utils/request.js'

export function getBanner () {
  return request.get('/banner')
}

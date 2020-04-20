/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 21:53:32
 * @Description: privatecontent
 */
import request from '@/utils/request.js'

export function getPrivateContent () {
  return request.get('/personalized/privatecontent')
}

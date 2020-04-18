/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-09 22:56:37
 * @Description:
 */
import request from '@/utils/request.js'

export function getPrivateContent () {
  return request.get('/personalized/privatecontent')
}

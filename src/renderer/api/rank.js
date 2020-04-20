/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 21:53:09
 * @Description: rank
 */
import request from '@/utils/request.js'

// 全球榜
export function getToplist () {
  return request.get('/toplist')
}

export function getTopDetail (idx) {
  return request.get('/top/list', {
    params: {
      idx
    }
  })
}

export function getToplistDetail () {
  return request.get('/toplist/detail')
}

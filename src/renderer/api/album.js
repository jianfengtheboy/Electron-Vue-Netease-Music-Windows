/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-09 22:54:23
 * @Description:
 */
import request from '@/utils/request.js'

export function getTopAlbum ({ limit, offset }) {
  return request.get('/top/album', {
    params: {
      limit, offset
    }
  })
}

export function getNewestAlbum ({ limit, offset }) {
  return request.get('/album/newest', {
    params: {
      limit, offset
    }
  })
}

export function getAlbum (id) {
  return request.get('/album', {
    params: {
      id
    }
  })
}

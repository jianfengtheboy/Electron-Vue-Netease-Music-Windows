/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 21:52:26
 * @Description: sublit
 */
import request from '@/utils/request.js'

export function getArtist ({ limit = 20, offset = 0 }) {
  return request.get('/artist/sublist', {
    params: {
      limit,
      offset,
      _: new Date().getTime()
    }
  })
}

export function getMv ({ limit = 50, offset = 0 }) {
  return request.get('/mv/sublist', {
    params: {
      limit,
      offset,
      _: new Date().getTime()
    }
  })
}

export function getSubAlbum ({ limit = 20, offset = 0 }) {
  return request.get('/album/sublist', {
    params: {
      limit,
      offset,
      _: new Date().getTime()
    }
  })
}

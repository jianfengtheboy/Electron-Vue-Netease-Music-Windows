/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-07 08:58:25
 * @LastEditTime: 2020-04-07 09:10:14
 * @Description: track-table.js
 */
self.onmessage = function (event) {
  const data = event.data
  let { songs, id } = data
  let index = songs.findIndex(song => song.id == id)
  self.postMessage({ index, id })
}

/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-07 13:13:29
 * @LastEditTime: 2020-04-07 13:13:37
 * @Description: card
 */
export function normalPlaylistCard (playlist) {
  return {
    id: playlist.id,
    name: playlist.name,
    description: playlist.description,
    creator: playlist.creator,
    playCount: playlist.playCount,
    picUrl: playlist.coverImgUrl || playlist.picUrl
  }
}

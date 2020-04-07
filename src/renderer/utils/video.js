/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-07 13:19:02
 * @LastEditTime: 2020-04-07 13:19:15
 * @Description: video
 */
export function normalVideo (video) {
  return {
    id: video.vid,
    videoGroup: video.videoGroup || '',
    name: video.title || video.name,
    description: video.description || '',
    duration: video.durationms / 1000,
    creator: video.creator,
    avatar: video.coverUrl,
    url: (video.urlInfo && video.urlInfo.url) || '',
    playTime: video.playTime,
    width: video.width || '',
    height: video.height || '',
    type: video.type == 0 ? 'mv' : 'video'
  }
}

export function normalMV (video, param = '300y168') {
  let cover = video.cover || video.picUrl || video.imgurl
  return {
    id: video.id,
    name: video.title || video.name,
    briefDesc: video.desc || '',
    duration: video.duration / 1000,
    artists: video.artists || [],
    artistName: video.artistName,
    cover: `${cover}?param=${param}`,
    avatar: `${cover}?param=${param}`,
    playCount: video.playCount
  }
}

/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 21:59:25
 * @Description: 专辑💽
 */
let albumRoutes = [
  {
    path: '/newSong',
    component: () => import(/* webpackChunkName: "album" */ '@/views/Album/index.vue'),
    name: 'album',
    meta: {
      title: '专辑'
    }
  },
  {
    path: '/album/:id',
    component: () => import(/* webpackChunkName: "album-id" */ '@/views/Album/_id.vue'),
    name: 'album-id',
    redirect: '/album/:id/songs',
    children: [
      {
        path: '/album/:id/songs',
        component: () => import(/* webpackChunkName: "album-id-songs" */ '@/views/Album/_id/songs.vue'),
        name: 'album-id-songs'
      },
      {
        path: '/album/:id/comment',
        component: () => import(/* webpackChunkName: "album-id-comment" */ '@/views/Album/_id/comment.vue'),
        name: 'album-id-comment'
      }
    ]
  }
]

export {
  albumRoutes
}

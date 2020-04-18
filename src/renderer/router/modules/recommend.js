/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-09 23:12:15
 * @Description:
 */
let recommendRoutes = [
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home/index.vue'),
    name: 'home',
    meta: {
      title: '发现音乐', icon: 'music'
    }
  },
  {
    path: '/private_fm',
    component: () => import(/* webpackChunkName: "private_fm" */ '@/views/Fm/index.vue'),
    name: 'private_fm',
    meta: {
      title: '私人FM', icon: 'fm', auth: true
    }
  },
  {
    path: '/mv',
    component: () => import(/* webpackChunkName: "mv" */ '@/views/Video/mv.vue'),
    name: 'mv',
    meta: {
      title: '视频', icon: 'shipin'
    }
  },
  {
    path: '/events',
    component: () => import(/* webpackChunkName: "events" */ '@/views/User/Events/index.vue'),
    name: 'events',
    meta: {
      title: '动态', icon: 'friend', auth: true
    }
  }
]

let recommendMap = []
recommendRoutes.concat().forEach(route => {
  let map = {
    path: route.path,
    name: route.name,
    meta: route.meta
  }
  recommendMap.push(map)
})

export {
  recommendRoutes,
  recommendMap
}

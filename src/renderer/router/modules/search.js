/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-09 23:12:24
 * @Description:
 */
let searchRoutes = [
  {
    path: '/search',
    component: () => import(/* webpackChunkName: "search" */ '@/views/Search/index.vue'),
    name: 'search'
  }
]

export {
  searchRoutes
}

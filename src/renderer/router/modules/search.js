/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 22:01:34
 * @Description: 搜索
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

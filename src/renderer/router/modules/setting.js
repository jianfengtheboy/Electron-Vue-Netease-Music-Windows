/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-09 23:12:34
 * @Description:
 */
let settingRoutes = [
  {
    path: '/setting',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/Setting/index.vue'),
    name: 'setting'
  }
]

export {
  settingRoutes
}

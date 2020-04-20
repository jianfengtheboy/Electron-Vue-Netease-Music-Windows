/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 21:54:45
 * @Description: app
 */
import axios from 'axios'

export function checkUpdate () {
  return axios.get('https://api.github.com/repos/xiaozhu188/electron-vue-cloud-music/releases/latest')
}

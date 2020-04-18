/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-09 22:54:32
 * @Description:
 */
import axios from 'axios'

export function checkUpdate () {
  return axios.get('https://api.github.com/repos/xiaozhu188/electron-vue-cloud-music/releases/latest')
}

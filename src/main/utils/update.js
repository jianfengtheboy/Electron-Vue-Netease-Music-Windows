/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-07 12:17:25
 * @LastEditTime: 2020-04-07 12:19:31
 * @Description: update.js
 */
import { dialog, shell, app } from 'electron'
import semver from 'semver'
import axios from 'axios'
import pkg from '../../../package.json'
const version = pkg.version
const localVersion = app.getVersion()
const release = ''

let shouldUpdate = false
let forceUpdate = false

export function checkUpdate () {
  return new Promise((resolve, reject) => {
    axios.get(release).then(res => {
      const remoteVersion = res.data.name
      shouldUpdate = semver.gt(remoteVersion, localVersion)
      forceUpdate = semver.diff(remoteVersion, localVersion) === 'major'
      global.remoteVersion = remoteVersion
      global.shouldUpdate = shouldUpdate
      resolve({ shouldUpdate, forceUpdate })
    }).catch(err => {
      console.log('获取版本信息失败:', err)
      reject(err)
    })
  })
}

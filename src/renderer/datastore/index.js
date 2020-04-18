/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-09 13:04:15
 * @LastEditTime: 2020-04-09 13:04:46
 * @Description: datastore
 */
import Datastore from 'nedb'
import path from 'path'
import { remote } from 'electron'

let db = {}
let config = {
  autoload: true,
  timestampData: true
}
let userDataPath = remote.app.getPath('userData')

db.download = new Datastore({
  ...config,
  filename: path.join(userDataPath, '/download.db')
})

db.test = new Datastore({
  ...config,
  filename: path.join(userDataPath, '/test.db')
})

db.lyric = new Datastore({
  ...config,
  filename: path.join(userDataPath, '/lyric.db')
})

export default db

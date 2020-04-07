/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-07 09:43:59
 * @LastEditTime: 2020-04-07 09:46:44
 * @Description: miniWindow
 */
import { LOAD_URL } from './../config'
const miniWinURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080/#mini` : `${LOAD_URL}#mini`

const createMiniWindow = function (BrowserWindow) {
  let obj = {
    height: 48,
    width: 320,
    minWidth: 320,
    show: false,
    frame: false,
    fullscreenable: false,
    skipTaskbar: true,
    resizable: process.env.NODE_ENV === 'development',
    transparent: process.platform !== 'linux',
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      backgroundThrottling: false,
      webSecurity: false
    }
  }

  let miniWindow = new BrowserWindow(obj)

  miniWindow.loadURL(miniWinURL)

  miniWindow.on('closed', () => {
    miniWindow = null
  })

  return miniWindow
}

export default createMiniWindow

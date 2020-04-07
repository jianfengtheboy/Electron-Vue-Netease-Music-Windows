/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-07 09:37:18
 * @LastEditTime: 2020-04-07 09:52:18
 * @Description: desktopLyricWindow
 */
import { LOAD_URL } from './../config'
const electron = require('electron')
const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080/#desktop-lyric` : `${LOAD_URL}#desktop-lyric`

const createLyricWindow = function (BrowserWindow) {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  const obj = {
    minWidth: 650,
    width,
    height: 60,
    show: false,
    frame: false,
    x: 0,
    y: height - 150,
    fullscreenable: false,
    minimizable: false,
    maximizable: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    closable: false,
    // parent: global.mainWindow,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      backgroundThrottling: false,
      devTools: false
    }
  }

  let lyricWindow = new BrowserWindow(obj)

  lyricWindow.loadURL(winURL)
  // lyricWindow.setIgnoreMouseEvents(true)

  return lyricWindow
}

export default createLyricWindow

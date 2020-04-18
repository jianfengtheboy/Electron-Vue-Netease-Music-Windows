/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-09 12:47:24
 * @LastEditTime: 2020-04-09 12:48:36
 * @Description: 下载设置
 */
const { remote } = require('electron')

export const defaultDownloadFolder = 'C:\\CloudMusicDownload'
// `${remote.app.getPath('music')}\\CloudMusicDownload`

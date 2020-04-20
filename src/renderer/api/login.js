/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-09 22:55:47
 * @Description: login
 */
import request from '../utils/request.js'

export function login_cellphone (params) {
  return request.get('/login/cellphone', {
    params
  })
}

export function login_email (params) {
  return request.get('/login/cellphone', {
    params
  })
}

export function login_refresh () {
  return request.get('/login/refresh')
}

export function login_status () {
  return request.get('/login/status')
}

export function logout () {
  return request.get('/logout')
}

/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-09 13:13:14
 * @LastEditTime: 2020-04-09 13:15:22
 * @Description: infinite-loading
 */
import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading'
import Loading from '@/components/Common/playing'
import InfiniteNoResults from '@/components/Common/infiniteNoResults'
import InfiniteNoMore from '@/components/Common/infiniteNoMore'
import InfiniteError from '@/components/Common/infiniteError'

Vue.use(InfiniteLoading, {
  slots: {
    spinner: Loading,
    noResults: InfiniteNoResults,
    noMore: InfiniteNoMore,
    error: InfiniteError
  }
})

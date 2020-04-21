<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-21 12:53:40
 * @Description: 发现音乐
 -->
<template>
  <home-layout>
    <div class="floors" v-if="isRenderFinish">
      <banner :banners="banners" />

    </div>
    <div class="loading-wrapper-center" v-else>
      <loading text="正在为您生成个性化设置..." />
    </div>
    <footer slot="footer" class="wy-footer">

    </footer>
  </home-layout>
</template>

<script>
import { mapGetters } from 'vuex'

import { getBanner } from '@/api/banner'
import { getPrivateContent } from '@/api/privatecontent'
import { getNewSong } from '@/api/song'
import { getRecommendPlaylist } from '@/api/playlist'
import { getPersonalizedMV } from '@/api/mv'
import { getDjHot } from '@/api/dj'

import HomeLayout from '@/layouts/HomeLayout'
import banner from './components/Banner'
import privateContent from './components/privateContent'
import newSong from './components/newSong'
import playlist from './components/playlist'
import mv from './components/mv'
import dj from './components/dj'
import Loading from '@/components/Common/loading.vue'
import DrapModal from '@/components/DrapModal/index.vue'
import ZIcon from '@/components/ZIcon/index.vue'
import { normalMV } from '@/utils/video'

const NAVS = [
  {
    name: '独家放送',
    key: 'privateContent',
    hideMore: true
  },
  {
    name: '最新音乐',
    key: 'newSong'
  },
  {
    name: '推荐歌单',
    key: 'playlist'
  },
  {
    name: '推荐MV',
    key: 'mv'
  },
  {
    name: '主播电台',
    key: 'dj'
  }
]

export default {
  name: 'home',
  data () {
    return {
      data: {
        privateContent: [],
        newSong: [],
        playlist: [],
        mv: [],
        dj: []
      },
      navs: JSON.parse(JSON.stringify(NAVS)),
      oldNav: 0,
      newNav: 0,
      banners: [],
      isRenderFinish: false,
      visible: false
    }
  },
  components: {
    HomeLayout,
    banner,
    privateContent,
    newSong,
    playlist,
    mv,
    dj,
    Loading,
    DrapModal,
    ZIcon
  },
  computed: {
    ...mapGetters('User', [ 'userId' ])
  },
  created () {
    this._getData()
  },
  mounted () {
    let navCache = localStorage.getItem('nav')
    if ( navCache ) {
      this.navs = JSON.parse(navCache)
    }
  },
  watch: {
    userId (newId) {
      if ( !newId ) {
        this._getData()
      }
    }
  },
  methods: {
    async _getData () {
      this.isRenderFinish = false
      Promise.all([
        getBanner()
      ]).then(
        ([
          { banners }
        ]) => {
          banners.forEach(banner => {
            banner.src = banner.imageUrl
          })
          this.banners = banners

          this.isRenderFinish = true
        }
      )
    }
  }
}
</script>

<style>
.flip-list-move {
  transition: transform 0.3s;
}
</style>
<style lang="less" scoped>
.floors {
  padding-top: 10px;
}
</style>

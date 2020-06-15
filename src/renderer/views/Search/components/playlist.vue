<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-15 23:32:07
 * @Description: 搜索--歌单
 -->
<template>
  <div class="search-playlist">
    <a-spin :spinning="spinning">
      <a-row
        type="flex"
        justify="space-around"
        align="middle"
        v-for="playlist in playlists"
        :key="playlist.id"
      >
        <a-col :span="12">
          <router-link :to="`/playlist/${playlist.id}`" class="playlist">
            <img v-lazy="`${playlist.coverImgUrl}?param=200y200`" alt="">
            <span>{{playlist.name}}</span>
          </router-link>
        </a-col>
        <a-col :span="4">{{playlist.trackCount}}首</a-col>
        <a-col :span="8">by {{playlist.creator.nickname}}</a-col>
      </a-row>
    </a-spin>
    <slot :total="result.playlistCount"></slot>
  </div>
</template>

<script>
import searchMixin from '@/mixins/Search'
import Artists from '@/components/Common/artists'

export default {
  mixins: [
    searchMixin
  ],
  data () {
    return {
      playlists: []
    }
  },
  components: {
    Artists
  },
  methods: {
    normalData () {
      this.playlists = this.result.playlists
      this.spinning = false
    }
  }
}
</script>

<style lang="less" scoped>
.search-playlist .ant-row-flex {
  font-size: 13px;
  &:nth-child(even) {
    background: #eee;
  }
  &:hover {
    background: #ddd;
  }
}
.playlist {
  display: flex;
  align-items: center;
  padding: 10px 40px;
  color: #333;
  img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 6px;
    margin-right: 10px;
  }
}
</style>

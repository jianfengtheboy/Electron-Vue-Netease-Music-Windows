<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-15 23:06:44
 * @Description: 搜索--单曲
 -->
<template>
  <div>
    <a-spin :spinning="spinning">
      <track-list :tracks="songs" @dblclick="play" @download="download"/>
    </a-spin>
    <slot :total="result.songCount"></slot>
  </div>
</template>

<script>
import searchMixin from '@/mixins/Search'
import { normalSong } from '@/utils/song'
import TrackList from '@/components/Common/track-list/index.js'

export default {
  mixins: [
    searchMixin
  ],
  data () {
    return {
      songs: []
    }
  },
  methods: {
    normalData () {
      if (this.result.songs && this.result.songs.length) {
        this.songs = this.result.songs.map(song => {
          return normalSong(song)
        })
      }
      this.spinning = false
    },
    play (tracks, index) {
      this.$store.dispatch('play/selectPlay', { tracks, index })
    },
    download (song) {
      this.$store.dispatch('Download/download', song)
    }
  },
  components: {
    TrackList
  }
}
</script>

<style scoped></style>

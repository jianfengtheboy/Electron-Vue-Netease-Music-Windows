<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-21 14:05:56
 * @Description: 最新音乐
 -->
<template>
  <div class="newSong">
    <song-item :bordered="true" :tracks="tracks" @onclick="play" />
  </div>
</template>

<script>
import SongItem from '@/components/Common/song-item'
import { normalSong } from '@/utils/song'

export default {
  data () {
    return {
      tracks: []
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    SongItem
  },
  mounted () {
    this.list.forEach(item => {
      this.tracks.push(normalSong(item.song, '44y44'))
    })
  },
  methods: {
    play (tracks, index) {
      this.$store.dispatch('play/appendPlay', tracks[index])
    }
  }
}
</script>

<style lang="less" scoped>
.newSong {
  height: 290px;
}
</style>

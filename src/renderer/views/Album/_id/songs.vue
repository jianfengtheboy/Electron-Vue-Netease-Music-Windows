<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-15 22:01:15
 * @Description: 歌曲列表
 -->
<template>
  <div class="tracks">
    <track-list :tracks="tracks" @dblclick="play" @download="download" />
  </div>
</template>

<script>
import TrackList from '@/components/Common/track-list/index.js'
export default {
  name: 'album_id_songs',
  data () {
    return {
      songUrl: '',
      currentTime: 0,
      buffered: 0
    }
  },
  components: {
    TrackList
  },
  props: {
    tracks: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    play (tracks, index) {
      this.$store.dispatch('play/selectPlay', { tracks, index })
    },
    download (song) {
      this.$store.dispatch('Download/download', song)
    }
  }
}
</script>

<style scoped>
.tracks {
  margin-top: -1px;
}
</style>

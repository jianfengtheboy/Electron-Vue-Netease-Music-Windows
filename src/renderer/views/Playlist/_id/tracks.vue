<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-22 09:36:44
 * @Description: 歌曲列表
 -->
<template>
  <div class="tracks">
    <track-list :tracks="tracks" @dblclick="play" @download="download" />
  </div>
</template>

<script>
import TrackList from '@/components/Common/track-list/index.js'
import playMixin from '@/mixins/Play'

export default {
  name: 'playlist-id-tracks',
  mixins: [playMixin],
  props: {
    tracks: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    TrackList
  }
}
</script>

<style scoped>
.virtual-list-item__cell {
  line-height: 32px;
}
.tracks {
  margin-top: -1px;
}
</style>

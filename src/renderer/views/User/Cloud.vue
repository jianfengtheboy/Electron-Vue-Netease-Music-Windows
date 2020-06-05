<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-06 00:33:02
 * @Description: 我的音乐云盘
 -->
<template>
  <track-list :tracks="tracks" @dblclick="play" @download="download" />
</template>

<script>
import TrackList from '@/components/Common/track-list'
import DebounceBtn from '@/components/Common/debounce-btn'
import { getUserCloud } from '@/api/user'
import { normalSong } from '@/utils/song'
import { mapGetters } from 'vuex'
import playMixin from '@/mixins/Play'

export default {
  name: 'cloud',
  mixins: [
    playMixin
  ],
  data () {
    return {
      tracks: []
    }
  },
  components: {
    TrackList,
    DebounceBtn
  },
  computed: {
    ...mapGetters('User', ['userId'])
  },
  activated () {
    this._getUserCloud()
  },
  methods: {
    _getUserCloud () {
      getUserCloud(this.userId).then(res => {
        this.tracks = res.data.map(song => {
          return normalSong(song.simpleSong)
        })
      })
    }
  }
}
</script>

<style scoped></style>

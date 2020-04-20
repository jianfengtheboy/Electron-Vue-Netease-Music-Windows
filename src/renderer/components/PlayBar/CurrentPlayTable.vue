<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 23:05:44
 * @Description: currentPlayTable组件
 -->
<template>
  <div class="play-table">
    <track-list :isShowHead="false" :isShowActions="false" :tracks="current_play_list" @dblclick="play" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TrackList from '@/components/Common/track-list/index.js'

export default {
  components: {
    TrackList
  },
  computed: {
    ...mapGetters('play', [
      'current_play_list'
    ])
  },
  methods: {
    play (tracks, index) {
      this.$store.dispatch('play/selectPlay', { tracks, index })
    }
  }
}
</script>

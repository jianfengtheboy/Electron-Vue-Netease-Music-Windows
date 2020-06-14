<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-14 21:08:51
 * @Description: 歌曲
 -->
<template>
  <div class="audio" @click="play">
    <playing :playing="playing" v-if="current_song.id === event.song.id && source" />
    <div class="avatar">
      <img v-lazy="`${event.song.album.picUrl}?param=160y160`" class="album-pic" alt="" />
      <a-icon type="play-circle" class="icon" />
    </div>
    <div class="songname">{{ event.song.name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Playing from '@/components/Common/playing'
import { normalSong } from '@/utils/song'

export default {
  props: {
    event: {
      type: Object
    }
  },
  computed: {
    ...mapGetters('play', [
      'current_song',
      'playing',
      'source'
    ])
  },
  components: {
    Playing
  },
  methods: {
    play () {
      this.$emit('click')
      let song = normalSong(this.event.song)
      this.$store.dispatch('play/appendPlay', song)
    }
  }
}
</script>

<style lang="less" scoped>
.audio {
  display: flex;
  align-items: center;
  padding: 10px;
  height: 100%;
  background: #eee;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
    background: #ddd;
  }
  .avatar {
    position: relative;
    .album-pic {
      width: 40px;
      height: 40px;
      border-radius: 6px;
    }
    .icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 18px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .songname {
    margin-left: 10px;
  }
}
</style>

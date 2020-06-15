<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-15 23:33:32
 * @Description: 🔍搜索--歌词
 -->
<template>
  <a-spin :spinning="spinning">
    <track-list :tracks="songs" @dblclick="play" @download="download">
      <div slot="lyric" slot-scope="{ row }" class="lyrics-wrapper">
        <div class="lyrics">
          <div v-for="(text, index) in row.lyrics.showAll ? row.lyrics.lines : row.lyrics.lines.slice(0, 4)" :key="index" class="line">{{ text }}</div>
        </div>
        <div class="actions">
          <a-button size="small" @click.stop="toggleSpread(row.lyrics)" @dblclick.stop style="margin-right: 3px">{{ row.lyrics.showAll ? '收起歌词' : '展开歌词' }}</a-button>
          <a-button size="small" @click="copyLyric(row.lyrics.lines.join(','))">复制歌词</a-button>
        </div>
      </div>
    </track-list>
    <slot :total="result.songCount"></slot>
  </a-spin>
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
      if (this.result && this.result.songs) {
        let songs = this.result.songs.map(song => {
          return {
            ...normalSong(song),
            lyrics: {
              lines: (song.lyrics && song.lyrics.txt.split('\n')) || [],
              showAll: false
            }
          }
        })
        this.songs = Object.freeze(songs)
      }
      this.spinning = false
    },
    async play (tracks, index) {
      this.$store.dispatch('play/selectPlay', { tracks, index })
    },
    download (song) {
      this.$store.dispatch('Download/download', song)
    },
    toggleSpread (lyrics) {
      this.$set(lyrics, 'showAll', !lyrics.showAll)
    },
    copyLyric (lyric) {
      this.$electron.clipboard.writeText(lyric)
      this.$toast({
        icon: 'check',
        content: '复制成功'
      })
    }
  },
  components: { TrackList }
}
</script>

<style lang="less" scoped>
.lyrics-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 100px 0 100px;
  background: #fff;
  &:hover {
    background: #eee;
  }
  .line {
    font-size: 13px;
    line-height: 22px;
  }
  .actions {
    margin-top: 20px;
  }
  .lyrics {
    padding: 6px;
  }
}
</style>

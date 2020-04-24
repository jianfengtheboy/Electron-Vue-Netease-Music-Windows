<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-24 22:53:05
 * @Description: 相似歌手
 -->
<template>
  <ul class="simi">
    <artist-item
      class="artist-item"
      v-for="artist in artists"
      :artist="artist"
      :key="artist.id"
    />
  </ul>
</template>

<script>
import artistItem from '@/components/Common/artist-item'
import { getArtistSimi } from '@/api/artist'

export default {
  name: 'artist-id-simi',
  data () {
    return {
      artists: []
    }
  },
  components: {
    artistItem
  },
  activated () {
    this._getArtistSimi()
  },
  methods: {
    async _getArtistSimi () {
      let { id } = this.$route.params
      let { artists } = await getArtistSimi({ id })
      this.artists = artists
    }
  }
}
</script>

<style lang="less" scoped>
@import "./../../../styles/mixins";

.simi {
  .grid-layout(20px, 160px);
  padding: 15px;
}
</style>

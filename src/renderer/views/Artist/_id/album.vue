<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-15 22:02:51
 * @Description: 💽专辑💽
 -->
<template>
  <div class="artist-album">
    <ul class="albums">
      <album-item v-for="album in albums" :album="album" :key="album.id" />
    </ul>
    <infinite-loading
      forceUseInfiniteWrapper=".ant-layout-content"
      :identifier="infiniteId"
      @infinite="loadmore"
    />
  </div>
</template>

<script>
import albumItem from '@/components/Common/album-item'
import { getArtistAlbum } from '@/api/artist'

export default {
  name: 'artist-id-album',
  data () {
    return {
      albums: [],
      limit: 50,
      offset: 0,
      infiniteId: +new Date()
    }
  },
  components: {
    albumItem
  },
  activated () {
    this.offset = 0
    this.albums = []
    this.infiniteId++
  },
  methods: {
    async loadmore ($state) {
      let params = {
        id: this.$route.params.id,
        limit: this.limit,
        offset: this.offset
      }
      try {
        let { hotAlbums, more } = await getArtistAlbum(params)
        this.albums = this.albums.concat(hotAlbums)
        $state.loaded()
        if ( more ) {
          this.offset += this.limit
        } else {
          $state.complete()
        }
      } catch ( error ) {
        $state.error()
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "./../../../styles/mixins";

.albums {
  .grid-layout(15px, 141px);
  padding: 15px;
}
</style>

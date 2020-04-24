<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-24 22:08:05
 * @Description: mv
 -->
<template>
  <div>
    <ul class="mvs">
      <mv-item
        class="mv-item"
        v-for="mv in mvs"
        :mv="mv"
        :key="mv.id"
      />
    </ul>
    <infinite-loading
      forceUseInfiniteWrapper=".ant-layout-content"
      :identifier="infiniteId"
      @infinite="loadmore"
    />
  </div>
</template>

<script>
import mvItem from '@/components/Common/mv-item'
import { getArtistMV } from '@/api/artist'
import { normalMV } from '@/utils/video'

export default {
  name: 'artist_id_mv',
  data () {
    return {
      mvs: [],
      limit: 20,
      offset: 0,
      infiniteId: +new Date()
    }
  },
  components: {
    mvItem
  },
  activated () {
    let { id } = this.$route.params
    this.offset = 0
    this.mvs = []
    this.infiniteId = id
  },
  methods: {
    async loadmore ($state) {
      let { id } = this.$route.params
      let params = {
        id,
        limit: this.limit,
        offset: this.offset
      }
      try {
        let { mvs, hasMore } = await getArtistMV(params)
        let arr = mvs.map(mv => {
          return normalMV(mv, '1600y896')
        })
        this.mvs = this.mvs.concat(arr)
        $state.loaded()
        if ( hasMore ) {
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

.mvs {
  .grid-layout(15px);
  padding: 15px;
}
</style>

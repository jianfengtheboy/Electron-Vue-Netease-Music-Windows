<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-15 23:16:21
 * @Description: 搜索--歌手
 -->
<template>
  <div class="search-artist">
    <a-spin :spinning="spinning">
      <a-row
        type="flex"
        justify="space-around"
        align="middle"
        v-for="artist in artists"
        :key="artist.id"
      >
        <a-col :span="24">
          <router-link :to="`/artist/${artist.id}`" class="artist">
            <img v-lazy="`${artist.img1v1Url}?param=200y200`" alt="">
            <span>{{artist.name}}</span>
          </router-link>
        </a-col>
      </a-row>
    </a-spin>
    <slot :total="result.artistCount"></slot>
  </div>
</template>

<script>
import searchMixin from '@/mixins/Search'
import Artists from '@/components/Common/artists'

export default {
  mixins: [
    searchMixin
  ],
  data () {
    return {
      artists: []
    }
  },
  components: {
    Artists
  },
  methods: {
    normalData () {
      this.artists = this.result.artists
      this.spinning = false
    }
  }
}
</script>

<style lang="less" scoped>
.search-artist .ant-row-flex {
  &:nth-child(even) {
    background: #eee;
  }
  &:hover {
    background: #ddd;
  }
}
.artist {
  display: flex;
  align-items: center;
  padding: 10px 40px;
  font-size: 13px;
  color: #333;
  img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 6px;
    margin-right: 10px;
  }
}
</style>

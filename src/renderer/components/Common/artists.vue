<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 22:36:05
 * @Description: 👨‍🎨艺术家
 -->
<template>
  <span :title="`艺术家:${artistTitle}`" v-if="artists && artists.length">
    <span v-for="(artist, index) in artists" :key="index" class="artists">
      <span v-if="index != 0">/</span>
      <router-link :to="`/artist/${artist.id}`" v-if="artist.id">{{artist.name}}</router-link>
      <span v-else>{{artist.name}}</span>
    </span>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'artists',
  props: {
    artists: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    ...mapGetters('play', ['current_song']),
    artistTitle () {
      return this.artists.map(item => item.name).join('/')
    }
  }
}
</script>

<style lang="less" scoped>
.artists {
  display: inline;
  a {
    color: #333;
    &:hover {
      color: @primary-color;
    }
  }
  i {
    margin: 0 2px;
  }
}
</style>

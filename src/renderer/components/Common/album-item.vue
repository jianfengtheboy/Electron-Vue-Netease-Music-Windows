<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-21 21:58:24
 * @Description: 专辑项组件
 -->
<template>
  <router-link tag="li" :to="'/album/'+album.id" class="item">
    <img v-lazy="`${album.picUrl}?param=600y600`" class="avatar">
    <div class="name">
      {{album.name}}
    </div>
    <div class="publish-time" v-if="desc=='time'">{{ album.publishTime | toDate }}</div>
    <div class="artist" v-else>
      <artists :artists="album.artists" />
    </div>
  </router-link>
</template>

<script>
import Artists from '@/components/Common/artists'

export default {
  name: 'album-item',
  data () {
    return {}
  },
  props: {
    album: {
      type: Object
    },
    desc: {
      type: String,
      default: 'time'
    }
  },
  components: {
    Artists
  }
}
</script>

<style lang="less" scoped>
.item {
  position: relative;
  width: 141px;
  margin: 0 10px 0;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 141px;
    height: 125px;
    background: url("./../../assets/images/album_cover.png") no-repeat center;
    background-size: cover;
  }
  .avatar {
    width: 125px;
    height: 125px;
  }
  .name {
    width: 125px;
    line-height: 20px;
    font-weight: 600;
    color: #000;
  }
  .publish-time,.artist {
    line-height: 20px;
    font-size: 12px;
    color: #999;
  }
}
</style>

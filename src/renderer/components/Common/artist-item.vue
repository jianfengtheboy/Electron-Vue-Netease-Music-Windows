<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-14 21:42:07
 * @Description: 歌手列表组件
 -->
<template>
  <router-link tag="li" :to="`/artist/${artist.id}`">
    <figure class="figure">
      <div class="img-box">
        <img v-lazy="`${artist.img1v1Url}?param=540y540`" alt="" />
      </div>
      <figcaption class="figcaption">{{artist.name}}</figcaption>
    </figure>
  </router-link>
</template>

<script>
export default {
  name: 'artist-item',
  props: {
    artist: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.figure {
  overflow: hidden;
  cursor: pointer;
  .img-box {
    border-radius: 6px;
    overflow: hidden;
  }
  &:hover {
    img {
      transform: scale3d(1.23,1.23,1.23);
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    transition: all .23s;
    transform-origin: center bottom;
  }
  .figcaption {
    line-height: 25px;
    font-size: 13px;
    color: #333;
    text-align: center;
  }
}
</style>

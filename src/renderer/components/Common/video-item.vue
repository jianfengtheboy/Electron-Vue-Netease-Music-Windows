<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-18 23:10:08
 * @Description:
 -->
<template>
  <div class="item">
    <router-link :to="`/${this.video.type}/${this.video.id}`" class="info">
      <img class="avatar" v-lazy="video.avatar">
      <div class="top">
        <a-icon type="video-camera" />
        {{video.playTime | toWan}}
      </div>
      <div class="bottom">
        <span>{{video.duration | duration}}</span>
      </div>
      <a-icon type="play-circle" class="play-icon"/>
    </router-link>
    <router-link :to="`/${this.video.type}/${this.video.id}`" class="name">{{video.name}}</router-link>
    <router-link to="/" v-if="video.creator.nickname" class="creator">
      by {{<template>
  <div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

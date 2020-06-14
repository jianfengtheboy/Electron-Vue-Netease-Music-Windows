<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-14 21:08:44
 * @Description: 播放列表
 -->
<template>
  <router-link :to="`/playlist/${event.playlist.id}`" class="playlist">
    <div class="avatar">
      <img v-lazy="`${event.playlist.coverImgUrl}?param=160y160`" class="album-pic" alt="" />
    </div>
    <div class="name">{{ event.playlist.name }}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.playlist {
  display: flex;
  align-items: center;
  padding: 10px;
  height: 100%;
  background: #eee;
  color: rgba(0,0,0,.65);
  border-radius: 6px;
  &:hover {
    cursor: pointer;
    background: #ddd;
  }
  .avatar {
    position: relative;
    width: 40px;
    height: 40px;
    .album-pic {
      width: 100%;
      height: 100%;
      border-radius: 6px;
    }
  }
  .name {
    margin-left: 10px;
  }
}
</style>

<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-14 21:08:37
 * @Description: 专辑
 -->
<template>
  <div class="album" @click="onClick">
    <div class="avatar">
      <img v-lazy="`${event.album.picUrl}?param=160y160`" class="album-pic" alt="" />
      <a-icon type="play-circle" class="icon" />
    </div>
    <div class="songname">专辑: {{ event.album.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object
    }
  },
  methods: {
    onClick () {
      this.$router.push(`/album/${this.event.album.id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.album {
  display: flex;
  align-items: center;
  padding: 10px;
  height: 100%;
  background: #eee;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
    background: #ddd;
  }
  .avatar {
    position: relative;
    .album-pic {
      width: 40px;
      height: 40px;
      border-radius: 6px;
    }
    .icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 18px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .songname {
    margin-left: 10px;
  }
}
</style>

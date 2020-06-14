<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-14 17:24:28
 * @Description: 收藏者
 -->
<template>
  <div class="subscriber">
    <div class="items" v-if="subscribers.length">
      <router-link
        :to="`/user?id=${subscriber.userId}`"
        v-for="subscriber in subscribers"
        :key="subscriber.userId"
      >
        <img v-lazy="`${subscriber.avatarUrl}?param=220y220`" class="avatar" alt="">
        <div class="nickname">{{ subscriber.nickname }}</div>
      </router-link>
    </div>
    <div v-else>暂无收藏者</div>
  </div>
</template>

<script>
import { getPlaylistSubscribers } from '@/api/playlist'

export default {
  name: 'playlist-id-subscriber',
  data () {
    return {
      subscribers: [],
      options: {
        limit: 30,
        offset: 0
      }
    }
  },
  activated () {
    this.getPlaylistSubscribers()
  },
  methods: {
    getPlaylistSubscribers () {
      let id = this.$route.params.id
      let options = { ...this.options, id }
      getPlaylistSubscribers(options).then(res => {
        this.subscribers = res.subscribers
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "./../../../styles/mixins";

.subscriber {
  page-break-after: 20px;
  .items {
    .grid-layout(35px, 55px);
    padding: 30px;
    a {
      color: #333;
    }
    .avatar {
      width: 55px;
      height: 55px;
      border-radius: 50%;
    }
    .nickname {
      font-size: 12px;
      margin-top: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>

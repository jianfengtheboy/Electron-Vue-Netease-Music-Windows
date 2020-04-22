<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-22 22:41:55
 * @Description:
 -->
<template>
  <div class="subscriber">
    <a-row type="flex" justify="start" v-if="subscribers.length">
      <a-col
        v-for="subscriber in subscribers"
        :key="subscriber.userId"
        class="items"
        :lg="3"
        :xl="2"
      >
        <img v-lazy="`${subscriber.avatarUrl}?param=220y220`" class="avatar">
        <div>{{ subscriber.nickname }}</div>
      </a-col>
    </a-row>
    <div v-else>暂无收藏者</div>
  </div>
</template>

<script>
import { getPlaylistSubscribers } from '@/api/playlist'

export default {
  name: 'playlist-id-related',
  data () {
    return {
      subscribers: [],
      options: {
        limit: 30,
        offset: 0
      }
    }
  },
  created () {
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
.subscriber {
  page-break-after: 20px;
  .items {
    padding: 1% 1%;
    text-align: center;
    font-size: 12px;
    word-break: break-word;
    .avatar {
      width: 100%;
      border-radius: 50%;
    }
  }
}
</style>

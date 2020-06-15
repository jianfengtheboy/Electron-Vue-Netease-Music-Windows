<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-15 23:43:56
 * @Description: 搜索--综合
 -->
<template>
  <div class="search-user">
    <a-row
      type="flex"
      justify="space-around"
      align="middle"
      v-for="user in users"
      :key="user.userId"
    >
      <a-col :span="24">
        <router-link :to="`/user?id=${user.userId}`" class="user">
          <img v-lazy="`${user.avatarUrl}?param=200y200`" alt="">
          <span>{{user.nickname}}</span>
        </router-link>
      </a-col>
    </a-row>
    <slot :total="result.userprofileCount"></slot>
  </div>
</template>

<script>
import Artists from '@/components/Common/artists'

export default {
  data () {
    return {
      users: []
    }
  },
  components: {
    Artists
  },
  methods: {
    normalData () {
      this.users = this.result.userprofiles
    }
  }
}
</script>

<style lang="less" scoped>
.search-user .ant-row-flex {
  font-size: 13px;
  &:nth-child(even) {
    background: #eee;
  }
  &:hover {
    background: #ddd;
  }
}
.user {
  display: flex;
  align-items: center;
  padding: 10px 40px;
  color: #333;
  img {
    display: block;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
  }
}
</style>

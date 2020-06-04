<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-05 00:07:45
 * @Description: 我的关注
 -->
<template>
  <div class="follow">
    <header class="follow-header">
      <span>{{ nickname ? nickname : '用户' }}的关注</span>
    </header>
    <main class="follow-main">
      <a-row type="flex" :gutter="16">
        <a-col :xl="8" :md="12" v-for="(follower, index) in followers" :key="index">
          <router-link class="follower-item" :to="`/user?id=${follower.userId}&nickname=${follower.nickname}`">
            <div class="avatar">
              <img v-lazy="`${follower.avatarUrl}?param=240y240`" />
            </div>

            <div class="info">
              <router-link
                :to="`/user?id=${follower.userId}`"
                class="nickname"
              >{{ follower.nickname }}</router-link>
              <div class="extra">
                <span>动态<i>{{ follower.eventCount | toWan }}</i></span>
                <span>关注<i>{{ follower.follows | toWan }}</i></span>
                <span>粉丝<i>{{ follower.followeds | toWan }}</i></span>
              </div>
              <div class="signature">{{ follower.signature }}</div>
            </div>
          </router-link>
        </a-col>
      </a-row>
      <infinite-loading
        :identifier="infiniteId"
        forceUseInfiniteWrapper=".ant-layout-content"
        @infinite="getData"
      />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { user_follower } from '@/api/user'

export default {
  data () {
    return {
      followers: [],
      limit: 30,
      offset: 0,
      lasttime: -1,
      nickname: '',
      infiniteId: +new Date()
    }
  },
  computed: {
    ...mapGetters('User', ['userId'])
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.followers = []
      vm.infiniteId += 1
      vm.offset = 0
      vm.nickname = to.query.nickname
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.followers = []
    this.infiniteId += 1
    this.lasttime = -1
    this.offset = 0
    next()
  },
  created () {
    this.nickname = this.$route.query.nickname
  },
  methods: {
    async getData ($state) {
      let uid = this.$route.query.uid || this.userId
      let options = {
        limit: this.limit,
        offset: this.offset,
        uid: uid
      }
      let res = await user_follower(options)
      if ( res.follow.length ) {
        this.followers.push(...res.follow)
      }
      $state.loaded()
      if ( res.more ) {
        this.lasttime = res.lasttime
        this.offset += this.limit
      } else {
        $state.complete()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.follow {
  .follow-header {
    position: sticky;
    top: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    font-size: 17px;
    color: #555;
    padding: 0 20px;
    background-color: #f5f5f7;
    border-bottom: 1px solid #eae9e9;
  }
  .follow-main {
    padding: 15px;
    .follower-item {
      display: flex;
      padding: 15px;
      border-bottom: 1px solid #eee;
      color: #333;
      font-size: 13px;
      &:hover {
        background: #eee;
      }
      .avatar {
        position: relative;
        width: 60px;
        height: 60px;
        flex: 0 0 60px;
        img {
          display: block;
          width: 100%;
          border-radius: 50%;
        }
      }
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        overflow: hidden;
        padding-left: 15px;
        .nickname,.signature {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .extra {
          span {
            margin-right: 8px;
            font-size: 12px;
            i {
              margin-left: 3px;
              color: #0c73c2;
              font-style: normal;
            }
          }
        }
      }
    }
  }
}
</style>
